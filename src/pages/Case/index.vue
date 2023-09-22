<script setup>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import Menu from '@/components/Menu'
import { useActions } from 'vuex-composition-helpers/dist'

import View1 from './components/View1'
import View2 from './components/View2'
import View3 from './components/View3'

const { setMenuIndex } = useActions(['setMenuIndex'])

const isSlide = ref(1)
let swiperEl = null

const state = reactive({
    View1DataSource: [],
    View2DataSource: [],
    View3DataSource: []
})

const slideChange = (e) => {
    isSlide.value = (e.detail[0].activeIndex + 1)
}

const goSlide = (index) => {
    swiperEl.swiper.slideTo(index)
}

const getList = async () => {
    try {
        const { data: res } = await axios({
            method: 'get',
            url: '/api/case/list',
        })

        if (Array.isArray(res.data)) { 
            res.data.forEach(e => {
                e.type === 0 && state.View1DataSource.push(e)
                e.type === 1 && state.View2DataSource.push(e)
                e.type === 2 && state.View3DataSource.push(e)
            });
        }
        state.dataSource = res.data
    } catch (err) {
        // message.error('新增失败:'+ err);
    }
}

onMounted(() => {
    swiperEl = document.querySelector('.swiper-case')
    setMenuIndex(1)
    getList()
})
</script>

<template>
    <div>
        <Menu :isTransparent="false">
            <ul class="menu">
                <li :class="{ 'is' : isSlide === 1 }" @click="goSlide(0)">新制造</li>
                <li :class="{ 'is' : isSlide === 2 }" @click="goSlide(1)">新能源</li>
                <li :class="{ 'is' : isSlide === 3 }" @click="goSlide(2)">物联网</li>
            </ul>
        </Menu>

         <swiper-container class="swiper swiper-case" direction="vertical" slides-per-view="1" speed="500" css-mode="true" @slidechange="slideChange">
            <swiper-slide>
                <View1 :dataSource="state.View1DataSource"/>
            </swiper-slide>
            <swiper-slide>
                <View2 :dataSource="state.View2DataSource"/>
            </swiper-slide>
            <swiper-slide>
                <View3 :dataSource="state.View3DataSource"/>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<style scoped>
.content {
    padding-top: 100px;
    padding-left: 250px;
    padding-right: 50px;
    box-sizing: border-box;
    /* height: 100vh; */
    width: 100vw;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
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
    cursor: pointer;
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
.swiper {
    width: 100vw;
    height: 100vh;
    color: #000;
}
</style>