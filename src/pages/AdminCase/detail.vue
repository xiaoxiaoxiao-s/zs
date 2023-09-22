<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import { message } from 'ant-design-vue';
// import { QuillEditor, Quill } from '@vueup/vue-quill'

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue'
// import { ImageDrop } from 'quill-image-drop-module';
// import "quill-image-resize-module/image-resize.min.js"
// import ImageUploader from 'quill-image-uploader';

import '@vueup/vue-quill/dist/vue-quill.snow.css';

import config from '@/config'

// Quill.register('modules/ImageDrop', ImageDrop);
// Quill.register('modules/imageUploader', ImageUploader);

// const editorOption = {
//     modules: {
//         toolbar: [
//             // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
//             ['bold', 'italic', 'underline', 'strike'],
//             // 引用  代码块-----['blockquote', 'code-block']
//             ['blockquote', 'code-block'],
//             // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
//             [{ header: 1 }, { header: 2 }],
//             // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
//             [{ list: 'ordered' }, { list: 'bullet' }],
//             // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
//             [{ script: 'sub' }, { script: 'super' }],
//             // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
//             [{ indent: '-1' }, { indent: '+1' }],
//             // 文本方向-----[{'direction': 'rtl'}]
//             [{ direction: 'rtl' }],
//             // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
//             [{ size: ['small', false, 'large', 'huge'] }],
//             // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
//             [{ header: [1, 2, 3, 4, 5, 6, false] }],
//             // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
//             [{ color: [] }, { background: [] }],
//             // 字体种类-----[{ font: [] }]
//             [{ font: [] }],
//             // 对齐方式-----[{ align: [] }]
//             [{ align: [] }],
//             // 清除文本格式-----['clean']
//             ['clean'],
//             // 链接、图片、视频-----['link', 'image', 'video']
//             ['link', 'image'],
//             // ['table'] // 表格
//         ],
//         history: {
//             delay: 1000,
//             maxStack: 50,
//             userOnly: false,
//         },
//         // ImageDrop: true,
//         imageResize: {
//             displayStyles: {
//                 backgroundColor: 'black',
//                 border: 'none',
//                 color: 'white',
//             },
//             modules: ['Resize', 'DisplaySize', 'Toolbar'],
//         },
//         imageUploader: {
//             upload: (file) => {
//                 return new Promise(async (resolve, reject) => {
//                     try {
//                         console.log('file', file)
//                         const { data: res } = await  axios({
//                             method: 'post',
//                             url: '/api/upload',
//                             data: { file },
//                             headers: {
//                                 "content-type": 'multipart/form-data',
//                             }
//                         })
//                         resolve(res.data)
//                     } catch (err) {
//                         console.log(err)
//                     }
//                 });
//             },
//         },
//     },
//     theme: 'snow',
//     placeholder: '请输入正文',
// }

const router = useRouter()
const route = useRoute()

const formState = reactive({
    title: undefined,
    type: undefined,
    image: [],
    logo: [],
    html: undefined,
    desc: undefined,
    url: undefined
})

const typeOptions = [
    { label: '新制造', value: 0 },
    { label: '新能源', value: 1 },
    { label: '物联网', value: 2 },
]

const save = async (value) => {
    console.log('value', value)
    try {
        const { data: res } = await  axios({
            method: 'post',
            url: '/api/case/save',
            data: {
                ...value,
                logo: value.logo[0]?.url || `${value.logo[0]?.response?.data}`,
                image: value.image[0]?.url || `${value.image[0]?.response?.data}`,
                date: new Date().getTime(),
                id: route.query?.id,
                html: "test",
            }
        })

        if (res.code === 0) {
            message.success('保存成功');
            setTimeout(() => {
                router.back()
            }, 1500)
        } else { 
            message.error(res.msg)
        }
    } catch (err) {
        message.error('保存失败:'+ err);
    }
}

const create = async (value) => {
     try {
         const { data: res } = await  axios({
            method: 'post',
            url: '/api/case/create',
            data: {
                ...value,
                logo: `${value.logo[0].response.data}`,
                image: `${value.image[0].response.data}`,
                date: new Date().getTime(),
                html: "test",
            }
         })
         if (res.code === 0) {
             message.success('新增成功');
             setTimeout(() => {
                 router.back()
             }, 1500)
         } else { 
             message.error(res.msg);
         }
    } catch (err) {
        message.error('新增失败:'+ err);
    }
}

// 提交
const onFinish = async (value) => {
    if (route.query?.id) {
        save(value)
    } else { 
        create(value)
    }
}

const getDetail = async () => {
     try {
        const { data: res } = await  axios({
            method: 'get',
            url: '/api/case/detail?id=' + route.query?.id ,
        })

         console.log('res.data', res.data)
         if (res.code === 0) { 
            formState.title = res.data.title
            formState.type = res.data.type
             formState.image = [{
                uid: res.data.image,
                name: res.data.image,
                status: 'done',
                url: res.data.image
             }]
             formState.logo = [{
                uid: res.data.logo,
                name: res.data.logo,
                status: 'done',
                 url: res.data.logo
             }]
             formState.desc = res.data.desc
            formState.url = res.data.url
            formState.html = res.data.html
         }
    } catch (err) {
        message.error('新增失败:'+ err);
    }
}

onMounted(() => { 
    if (window.localStorage.getItem('ZSKG_TOKEN') !== 'LOGIN') {
        router.replace('/admin/login')
    } else { 
        if (route.query?.id) { 
            getDetail()
        }
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
            <a-form-item
                label="案例标题"
                name="title"
                :rules="[{ required: true, message: '请填写案例标题!' }]"
            >
                <a-input v-model:value="formState.title" placeholder="请填写案例标题"/>
            </a-form-item>
            <a-form-item
                label="案例类型"
                name="type"
                :rules="[{ required: true, message: '请选择案例类型!' }]"
            >
                <a-radio-group v-model:value="formState.type" :options="typeOptions" />
            </a-form-item>
            <a-form-item
                label="案例简介"
                name="desc"
                :rules="[{ required: true, message: '请填写案例简介!' }]"
            >
                <a-textarea v-model:value="formState.desc" placeholder="请填写案例简介"/>
            </a-form-item>
            <a-form-item
                label="案例logo"
                name="logo"
                :rules="[{ required: true, message: '请上传案例logo!' }]"
            >
                <a-upload
                    v-model:file-list="formState.logo"
                    name="file"
                    maxCount="1"
                    list-type="picture-card"
                    :action="config.apiHost + 'api/upload'"
                >
                    <div v-if="formState.logo.length < 1">
                        <LoadingOutlined v-if="loading"/>
                        <PlusOutlined v-else/>
                        <div class="ant-upload-text">上传logo</div>
                    </div>
                </a-upload>
            </a-form-item>
            <a-form-item
                label="案例封面"
                name="image"
                :rules="[{ required: true, message: '请上传案例封面!' }]"
            >
                <a-upload
                    v-model:file-list="formState.image"
                    name="file"
                    maxCount="1"
                    list-type="picture-card"
                    class="avatar-uploader"
                    :action="config.apiHost + 'api/upload'"
                >
                    <div v-if="formState.image.length < 1">
                        <LoadingOutlined v-if="loading"/>
                        <PlusOutlined v-else/>
                        <div class="ant-upload-text">上传封面</div>
                    </div>
                </a-upload>
            </a-form-item>
            <a-form-item
                label="详情链接"
                name="url"
                :rules="[{ required: true, message: '请填写详情链接!' }]"
            >
                <a-textarea v-model:value="formState.url" placeholder="请填写详情链接"/>
            </a-form-item>
            <!-- <a-form-item label="案例正文" name="html">
                <QuillEditor ref="editor" class="quill-editor" :options="editorOption" v-model:content="formState.html" contentType="html" />
            </a-form-item> -->
             <a-form-item>
                <a-button class="btn" html-type="submit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped lang="less">
.view {
    padding: 100px 30px 30px;
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
}
.form {
    width: 100%;
}
.btn {
    margin-bottom: 15px;
    background-color: #f08a00;
    border-color: #f08a00;
    color: #fff;
    width: 100px;
}
</style>

<style>
.ql-editor {
    height: 300px;
}
</style>