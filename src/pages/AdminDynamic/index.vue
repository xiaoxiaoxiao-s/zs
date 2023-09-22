<script setup>
import { useRouter } from 'vue-router';
import { onMounted, reactive, toRefs } from 'vue'
import axios from 'axios'
import { message } from 'ant-design-vue';

const router = useRouter()

const state = reactive({
    dataSource: [],
    columns: [{
        title: '动态标题',
        dataIndex: 'title',
        key: 'title',
        width: 200
    },{
        title: '动态封面',
        dataIndex: 'image',
        key: 'image',
        width: 120
    },{
        title: '动态内容',
        dataIndex: 'html',
        key: 'html',
    },{
        title: '最近一次修改时间',
        dataIndex: 'dateStr',
        key: 'dateStr',
        width: 200
    }, {
        title: '操作',
        key: 'action',
        width: 150
    }]
})

const { dataSource, columns } = toRefs(state)

const goDetail = (id) => { 
    router.push(`/admin/dynamic/detail${ id ? '?id='+id  : '' }` )
}

const getList = async () => {
        try {
        const { data: res } = await  axios({
            method: 'get',
            url: '/api/dynamic/list',
        })
        state.dataSource = res.data
    } catch (err) {
        message.error('新增失败:'+ err);
    }
}

const handleDelete = async (id) => {
    try {
        const { data: res } = await  axios({
            method: 'post',
            url: '/api/dynamic/delete',
            data: { id }
        })

        if (res.code === 0) { 
            state.dataSource = res.data
            message.success('删除成功')
            getList();
        }
    } catch (err) {
        message.error('删除失败:'+ err);
    }
}

onMounted(() => { 
    if (window.localStorage.getItem('ZSKG_TOKEN') !== 'LOGIN') {
        router.replace('/admin/login')
    } else { 
        getList()
    }
})

</script>

<template>
    <div class="view">
        <a-button class="new" @click="goDetail()">新增动态</a-button>
        <a-table class="tabel" :dataSource="dataSource" :columns="columns" :pagination="{ position: 'bottomRight' }">
            <template #bodyCell="{ column, record }">
                 <template v-if="column.key === 'image'">
                    <a-image height="40" width="40" :src="record.image"/>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span class="edit" @click="goDetail(record._id)">编辑</span>
                    <a-popconfirm
                        title="是否确认要删除"
                        ok-text="确定"
                        cancel-text="取消"
                        @confirm="handleDelete(record._id)"
                    >
                        <span class="del">删除</span>
                    </a-popconfirm>
                </template>
            </template>
        </a-table>
    </div>
</template>

<style scoped>
.view {
    padding: 100px 30px 30px;
    width: 100vw;
}
.new {
    margin-bottom: 15px;
    background-color: #f08a00;
    border-color: #f08a00;
    color: #fff;
}
.edit {
    color: #f08a00;
    margin-right: 30px;
    cursor: pointer;
}
.del {
    color: red;
    cursor: pointer;
}

</style>