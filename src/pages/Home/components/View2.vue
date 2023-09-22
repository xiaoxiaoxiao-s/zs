<script setup>
import { onMounted, reactive } from 'vue'
import axios from 'axios'

const state = reactive({
    num1: undefined,
    num2: undefined,
    num3: undefined,
    num4: undefined,
    title1: undefined,
    title2: undefined,
    title3: undefined,
    title4: undefined,
})

const getDetail = async () => {
     try {
        const { data: res } = await  axios({
            method: 'get',
            url: '/api/num/findOne',
        })

         if (res.code === 0) { 
            state.num1 = res.data.num1
            state.num2 = res.data.num2
            state.num3 = res.data.num3
            state.num4 = res.data.num4
            state.title1 = res.data.title1
            state.title2 = res.data.title2
            state.title3 = res.data.title3
            state.title4 = res.data.title4
        }
     } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    getDetail()
})
</script>

<template>
    <div class="view">
        <div class="content">
            <div class="title">
                <img src="/images/title-icon.png" />
                <p>聚焦实业，智数在握</p>
            </div>
            <p class="text">智数专注于智慧能源、智能制造和物联网领域的投资机遇，深入了解行业发展趋势、技术创新和市场需求，挖掘技术应用和商业模式带来的巨大价值。</p>

            <div class="imgs">
                <div class="card">
                    <img class="img1" src="/images/yitouqiye.png" /> 
                    <div>
                        <p class="num">{{ state?.num1 || '0' }}</p>
                        <p class="desc">{{ state?.title1 || '' }}</p>
                    </div>
                </div>
                <div class="card">
                    <img class="img2" src="/images/zhuanxintexing.png" /> 
                    <div>
                        <p class="num">{{ state?.num2 || '0' }}</p>
                        <p class="desc">{{ state?.title2 || '' }}</p>
                    </div>
                </div>
            </div>
            <div class="imgs">
                <div class="card">
                    <img class="img2" src="/images/yituichuqiye.png" /> 
                    <div>
                        <p class="num">{{ state?.num3 || '0' }}</p>
                        <p class="desc">{{ state?.title3 || '' }}</p>
                    </div>
                </div>
                <div class="card">
                    <img class="img2" src="/images/shangshigongsi.png" /> 
                    <div>
                       <p class="num">{{ state?.num4 || '0' }}</p>
                        <p class="desc">{{ state?.title4 || '' }}</p>
                    </div>
                </div>
            </div>
        </div>
         <img  class="img" src="/images/home-view1-img.png" />
    </div>
</template>

<style scoped>
.view {
    background-color: #fff;
    padding-top: 100px;
    padding-left: 250px;
    padding-right: 50px;
    box-sizing: border-box;
    display: flex;
}
.img {
    flex-shrink: 0;
    width: 420px;
    margin-left: 60px;
}
.content {
    flex-grow: 1;
}
.text {
    color: #646464;
    letter-spacing: 1.5px;
    margin-bottom: 70px;
    font-size: 17px;
}
.title {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}
.title p {
    font-size: 24px;
    font-weight: 600;
}
.title img {
    width: 15px;
    margin-right: 15px;
}
.imgs {
    width: 450px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}
.card {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    width: 300px;
    padding: 30px;
    box-shadow: 0px 0px 10px #ddd;
    margin-right: 50px;
}
.card .img1 {
    width: 54px;
    height: auto;
    flex-shrink: 0;
    margin-right: 30px;
}

.card .img2 {
    width: 54px;
    height: auto;
    flex-shrink: 0;
    margin-right: 30px;
}

.card .num {
    color: #f08a00;
    font-weight: 600;
    font-size: 48px;
}

.card .desc {
    font-size: 13px;
    color: #646464;
}
</style>
