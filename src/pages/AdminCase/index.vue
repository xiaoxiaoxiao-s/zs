<script setup>
import { useRouter } from 'vue-router';
import { onMounted, reactive, toRefs } from 'vue'
import axios from 'axios'
import { message } from 'ant-design-vue';

const router = useRouter()

const state = reactive({
    dataSource: [],
    columns: [{
        title: '案例标题',
        dataIndex: 'title',
        key: 'title',
        width: 200,
    },{
        title: '案例类型',
        dataIndex: 'type',
        key: 'type',
        width:120,
    }, {
        title: '案例logo',
        dataIndex: 'logo',
        width: 120,
        key: 'logo',
    }, {
        title: '案例简介',
        dataIndex: 'desc',
        key: 'desc',
    },{
        title: '最近一次修改时间',
        dataIndex: 'dateStr',
        key: 'dateStr',
         width: 200,
    }, {
        title: '操作',
        key: 'action',
        width: 150
    }]
})

const { dataSource, columns } = toRefs(state)

const goDetail = (id) => { 
    router.push(`/admin/case/detail${ id ? '?id='+id  : '' }` )
}

const handleDelete = async (id) => {
    try {
        const { data: res } = await  axios({
            method: 'post',
            url: '/api/case/delete',
            data: { id }
        })
        state.dataSource = res.data
        message.success('删除成功')

        getList();
    } catch (err) {
        message.error('新增失败:'+ err);
    }
}

const getList = async () => {
    try {
        const { data: res } = await  axios({
            method: 'get',
            url: '/api/case/list',
        })
        state.dataSource = res.data
    } catch (err) {
        message.error('新增失败:'+ err);
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
        <a-button class="new" @click="goDetail()">新增案例</a-button>
        <a-table class="tabel" :dataSource="dataSource" :columns="columns">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'type'">
                    <span v-show="record.type === 0">新制造</span>
                    <span v-show="record.type === 1">新能源</span>
                    <span v-show="record.type === 2">物联网</span>
                </template>
                <template v-else-if="column.key === 'image'">
                    <a-image height="40" width="40" :src="record.image"/>
                </template>
                 <template v-else-if="column.key === 'logo'">
                    <a-image height="40" width="40" :src="record.logo"/>
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