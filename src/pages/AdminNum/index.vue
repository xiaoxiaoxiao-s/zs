<script setup>
import { onMounted, reactive } from 'vue'
import { message } from 'ant-design-vue';
import axios from 'axios'

const formState = reactive({
    id: undefined,
    num1: undefined,
    num2: undefined,
    num3: undefined,
    num4: undefined,
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
        }
    } catch (err) {
        message.error('新增失败:'+ err);
    }
}

onMounted(() => {
    getDetail()
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
            <a-form-item
                label="已投企业"
                name="num1"
                :rules="[{ required: true, message: '请填写已投企业有多少家!' }]"
            >
                <a-input v-model:value="formState.num1" suffix="家" placeholder="请填写已投企业有多少家"/>
            </a-form-item>
            <a-form-item
                label="专精特新"
                name="num2"
                :rules="[{ required: true, message: '请填写专精特新有多少家!' }]"
            >
                <a-input v-model:value="formState.num2" suffix="家" placeholder="请填写专精特新有多少家"/>
            </a-form-item>
            <a-form-item
                label="成功推出企业"
                name="num3"
                :rules="[{ required: true, message: '请填写成功推出企业有多少家!' }]"
            >
                <a-input v-model:value="formState.num3" suffix="家" placeholder="请填写推出企业有多少家"/>
            </a-form-item>
            <a-form-item
                label="上市公司"
                name="num4"
                :rules="[{ required: true, message: '请填上市公司有多少家!' }]"
            >
                <a-input v-model:value="formState.num4" suffix="家" placeholder="请填上市公司有多少家"/>
            </a-form-item>
               <a-form-item>
                <a-button class="btn" html-type="submit">保存</a-button>
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
</style>