<script setup>
import { onMounted, ref, reactive, computed } from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router';

import Menu from '@/components/Menu'
import { useActions } from 'vuex-composition-helpers/dist'

const { setMenuIndex } = useActions(['setMenuIndex'])

const router = useRouter()

const isTag = ref(1)
const state = reactive({
    dataSource: [],
})

const getList = async () => {
    try {
        const { data: res } = await axios({
            method: 'get',
            url: '/api/dynamic/list',
        })

        if (Array.isArray(res.data)) { 
            state.dataSource = res.data
        }
    } catch (err) {
        // message.error('新增失败:'+ err);
    }
}

const handleTag = (i) => {
    isTag.value = i
}

const handleDetail = (id) => {
    router.push('/dynamic/detail?id=' + id)
}

const handlePrev = () => {
    if (isTag.value <= 1) return
    isTag.value--
}

const handleNext = () => {
    const pagesNum = (parseInt(state.dataSource.length / 10) + 1)

    if (isTag.value >= pagesNum) return
    isTag.value++
}

const list = computed(() => {
    const len = (isTag.value - 1) * 10
    return state.dataSource.slice(len, len + 10)
})

onMounted(() => {
    setMenuIndex(1)
    getList()
})

</script>

<template>
    <div class="view">
        <Menu :isTransparent="false">
            <ul class="menu">
                <li class="is">企业动态</li>
            </ul>
        </Menu>

        <div class="content">
            <div class="card" v-for="item in list" @click="handleDetail(item._id)">
                <img :src="item.image" />
                <p class="name">{{ item.title }}</p>
                <p class="text">{{ item.desc }}</p>
                <p class="day">{{ dayjs(item.date).format('YYYY-MM-DD') }}</p>
            </div>
        </div>

        <div class="paging">
            <div @click="handlePrev"><img src="/images/left.png" /></div>
            <div v-for="item in ((parseInt(state.dataSource.length / 10) + 1))" :class="{ 'is' : isTag === item }" @click="handleTag(item)">{{ item }}</div>
            <div @click="handleNext"><img src="/images/right.png" /></div>
        </div>
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
.card {
    position: relative;
    box-shadow: 0px 5px 10px #ccc;
    width: 320px;
    height: 285px;
    border: 1px solid #ddd;
    margin-right: 30px;
    margin-bottom: 30px;
    cursor: pointer;
}
.card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
}
.card .name {
    color: #323232;
    font-weight: 600;
    font-size: 15px;
    padding: 0 20px;
}
.card .text {
    color: #646464;
    font-size: 12px;
    padding: 0 20px;
    height: 60px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 5px;
}
.card .day {
    font-size: 12px;
    text-align: right;
    color: #646464;
    padding-right: 20px;
}

.paging {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
}
.paging > div {
    position: relative;
    width: 30px;
    height: 30px;
    border:  1px solid #b2b2b2;
    margin-left: 15px;
    color: #b2b2b2;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
}
.paging > div > img {
    width: 50%;
    height: 50%;
}
.paging .is {
     background-color: #f08a00;
    color: #fff;
    border-color: #f08a00;
}
</style>