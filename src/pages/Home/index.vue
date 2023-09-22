<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router';
import Menu from '@/components/Menu'
import { useActions } from 'vuex-composition-helpers/dist'

import View1 from './components/View1'
import View2 from './components/View2'
import View3 from './components/View3'
import View4 from './components/View4'

import { ref } from 'vue'

const route = useRoute()

const isSlide = ref(route.query?.slide ? +route.query?.slide : 0)
let swiperEl = null

const { setMenuIndex } = useActions(['setMenuIndex'])

const slideChange = (e) => {
   setMenuIndex(e.detail[0].activeIndex)
    isSlide.value = e.detail[0].activeIndex
}

const goSlide = (index) => {
    swiperEl.swiper.slideTo(index)
}

const slidechangetransitionend = () => { 
    console.log('slidechangetransitionend')
}

onMounted(() => {
    swiperEl = document.querySelector('swiper-container')

    if (route.query?.slide) {
        goSlide(+route.query?.slide)
        // slideChange(+route.query?.slide)
    } else { 
        setMenuIndex(0)
    }
})

</script >

<template>
    <div>
        <Menu :isTransparent="isSlide === 0">
            <ul class="menu" v-if="isSlide > 0">
                <li :class="{ 'is' : isSlide === 1}" @click="goSlide(1)">基金介绍</li>
                <li :class="{ 'is' : isSlide === 2}" @click="goSlide(2)">投资理念</li>
                <li :class="{ 'is' : isSlide === 3}" @click="goSlide(3)">投资版图</li>
            </ul>
        </Menu>

        <swiper-container class="swiper" direction="vertical" slides-per-view="1" speed="500" css-mode="true" @slidechangetransitionend="slidechangetransitionend" @slidechange="slideChange">
            <swiper-slide>
                <View1 />
            </swiper-slide>
            <swiper-slide>
                <View2 />
            </swiper-slide>
            <swiper-slide>
                <View3 />
            </swiper-slide>
              <swiper-slide>
                <View4 />
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<style scoped>
.swiper {
    width: 100vw;
    height: 100vh;
    color: #000;
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

</style>

