<script setup>
import { onMounted, reactive } from 'vue'
import { message } from 'ant-design-vue';
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()

const formState = reactive({
    id: undefined,
    num1: undefined,
    num2: undefined,
    num3: undefined,
    num4: undefined,
    title1: undefined,
    title2: undefined,
    title3: undefined,
    title4: undefined,
})

const onFinish = async (value) => {
    console.log('value', value)

    if (!formState.id) { 
         message.error('保存失败: 未获取的关键ID');
        return 
    }
    try {
        const { data: res } = await  axios({
            method: 'post',
            url: '/api/num/save',
            data: {
                ...value,
                id: formState.id
            }
        })

        if (res.code === 0) {
            message.success('保存成功');
        } else { 
            message.error(res.msg)
        }
    } catch (err) {
        message.error('保存失败:'+ err);
    }
}

const getDetail = async () => {
     try {
        const { data: res } = await  axios({
            method: 'get',
            url: '/api/num/findOne',
        })

         if (res.code === 0) { 
            formState.id = res.data._id
            formState.num1 = res.data.num1
            formState.num2 = res.data.num2
            formState.num3 = res.data.num3
            formState.num4 = res.data.num4
            formState.title1 = res.data.title1
            formState.title2 = res.data.title2
            formState.title3 = res.data.title3
            formState.title4 = res.data.title4
        }
    } catch (err) {
        message.error('新增失败:'+ err);
    }
}

onMounted(() => { 
    if (window.localStorage.getItem('ZSKG_TOKEN') !== 'LOGIN') {
        router.replace('/admin/login')
    } else { 
        getDetail()
    }
})

</script>

<template>
    <div class="view">
         <a-form
            class="form"
            :model="formState"
            name="basic"
            autocomplete="off"
            @finish="onFinish"
        >
            <a-divider>卡片1</a-divider>
            <a-form-item
                label="名称"
                name="title1"
                :rules="[{ required: true, message: '请填写卡片名称!' }]"
            >
                <a-input v-model:value="formState.title1" placeholder="请填写卡片名称"/>
            </a-form-item>
            <a-form-item
                label="数量"
                name="num1"
                :rules="[{ required: true, message: '请填写数量!' }]"
            >
                <a-input v-model:value="formState.num1" placeholder="请填写数量"/>
            </a-form-item>

            <a-divider>卡片2</a-divider>
            <a-form-item
                label="名称"
                name="title2"
                :rules="[{ required: true, message: '请填写卡片名称!' }]"
            >
                <a-input v-model:value="formState.title2" placeholder="请填写卡片名称"/>
            </a-form-item>
            <a-form-item
                label="数量"
                name="num2"
                :rules="[{ required: true, message: '请填写数量!' }]"
            >
                <a-input v-model:value="formState.num2" placeholder="请填写数量"/>
            </a-form-item>

            <a-divider>卡片3</a-divider>
            <a-form-item
                label="名称"
                name="title3"
                :rules="[{ required: true, message: '请填写卡片名称!' }]"
            >
                <a-input v-model:value="formState.title3" placeholder="请填写卡片名称"/>
            </a-form-item>
            <a-form-item
                label="数量"
                name="num3"
                :rules="[{ required: true, message: '请填写数量!' }]"
            >
                <a-input v-model:value="formState.num3" placeholder="请填写数量"/>
            </a-form-item>

            <a-divider>卡片4</a-divider>
            <a-form-item
                label="名称"
                name="title4"
                :rules="[{ required: true, message: '请填写卡片名称!' }]"
            >
                <a-input v-model:value="formState.title4" placeholder="请填写卡片名称"/>
            </a-form-item>
            <a-form-item
                label="数量"
                name="num4"
                :rules="[{ required: true, message: '请填写数量!' }]"
            >
                <a-input v-model:value="formState.num4" placeholder="请填写数量"/>
            </a-form-item>

             <a-form-item>
                <a-button class="btn" html-type="submit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped>
.view {
    padding: 100px 30px 30px;
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    .form {
        width: 420px;
    }
}
.btn {
    margin-bottom: 15px;
    background-color: #f08a00;
    border-color: #f08a00;
    color: #fff;
    width: 100px;
}
</style>