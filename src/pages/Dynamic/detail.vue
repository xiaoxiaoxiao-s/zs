<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios'
import { useActions } from 'vuex-composition-helpers/dist'

import '@vueup/vue-quill/dist/vue-quill.snow.css';

import Menu from '@/components/Menu'

const { setMenuIndex } = useActions(['setMenuIndex'])

const route = useRoute()

const state = ref({})

const getDetail = async () => {
    try {
        const { data: res } = await axios({
            method: 'get',
            url: '/api/dynamic/detail?id=' + route.query?.id,
        })

        if (res.code === 0) {
            state.value = res.data
        }
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    setMenuIndex(1)
    route.query?.id && getDetail()
})

</script>

<template>
    <div>
        <Menu :isTransparent="false">
            <ul class="menu">
                <li class="is">企业动态</li>
            </ul>
        </Menu>

        <div class="content">
             <div class="title">
                <!-- <img src="/images/title-icon.png" /> -->
                <p>{{ state?.title }}</p>
            </div>
            <div class="ql-editor" v-html="state.html"></div>
        </div>
    </div>
</template>


<style lang="less" scoped>
.content {
    padding-top: 100px;
    padding-left: 250px;
    padding-right: 50px;
    box-sizing: border-box;
    /* height: 100vh; */
    width: 100vw;
    background-color: #fff;
    color: #000;

    .title {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }
    .title p {
        font-size: 24px;
        font-weight: 600;
        color: #323232;
    }
    .title img {
        width: 15px;
        margin-right: 15px;
    }
}
ul {
    padding: 0; 
    margin: 0;
}
li {
    list-style: none;
    font-size: 20px;
    color: #646464;
    line-height: 50px;
    text-align: center;
    margin: 10px 5px 10px 0;
}
.is {
    background-color: #f08a00;
    color: #fff;
}
.menu {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
} 
</style>

