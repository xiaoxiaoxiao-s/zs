<script setup>
import { defineProps, ref, onMounted } from 'vue'
import { message } from 'ant-design-vue';

const props = defineProps(['dataSource'])

const isSlide = ref(0)
let swiperEl = null

const slideChange = (e) => {
    isSlide.value = e.detail[0].activeIndex
}

const swiperLeft = () => {
    swiperEl.swiper.slidePrev()
}

const swiperRight = () => { 
    swiperEl.swiper.slideNext()
}

const goDetail = (link) => {
    if (!link) {
        message.error('未获取到详情链接')
    }
    window.open(link)
}

onMounted(() => {
    swiperEl = document.querySelector('.case1-swiper')
})

</script>

<template>
    <div class="view">
        <div v-show=" props.dataSource.length > 0">
            <div class="case-info">
                <img class="case-logo" :src="props.dataSource[isSlide]?.logo || ''" />
                 <div class="info">
                    <p class="title">{{ props.dataSource[isSlide]?.title || '' }}</p>
                    <p class="desc">{{ props.dataSource[isSlide]?.desc || '' }}</p>
                    <p class="btn" @click="goDetail(props.dataSource[isSlide]?.url)">了解更多</p>
                </div>
            </div>
            <div class="swiper-view">
                <swiper-container class="case1-swiper swiper" slides-per-view="1" speed="500" css-mode="true" @slidechange="slideChange">
                    <swiper-slide v-for="item in props.dataSource">
                        <div class="slide">
                            <img :src="item.image" />
                        </div>
                    </swiper-slide>
                </swiper-container>

                <div class="pagination">
                    <img src="/images/pagination-left.png" @click="swiperLeft"/>
                    <p class="pagination-slide">{{ isSlide + 1 }}</p>
                    <p>/</p>
                    <p>{{ props.dataSource.length }}</p>
                    <img src="/images/pagination-right.png" @click="swiperRight"/>
                </div> 
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.view {
    background-color: #fff;
    padding-top: 100px;
    padding-left: 250px;
    padding-right: 50px;
    box-sizing: border-box;

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

    .case-info {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .info {
            // color: #fff;
        }
        .title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 0;
            color: #323232;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 20px;
        }
        .desc {
            font-size: 15px;
            color: #646464;
            padding: 7.5px 0;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .btn {
            background-color: #f08a00;
            width: 120px;
            text-align: center;
            border-radius: 32px;
            font-size: 15px;
            line-height: 32px;
            color: #fff;
            cursor: pointer;
        }
    }
    .case-logo {
        width: auto;
        height: 40px;
        margin-right: 30px;
        flex-shrink: 0;
    }
    .swiper-view {
         position: relative;

        .pagination {
            position: absolute;
            right: 30px;
            bottom: 30px;
            color: #fff;
            z-index: 99;
            display: flex;
            align-items: center;
            font-weight: 900;
            img {
                width: 16px;
                height: 20px;
                margin: 0 15px;
                cursor: pointer;
            }
            p {
                font-weight: 900;
                margin: 0 5px;
                font-size: 16px;
            }
            .pagination-slide {
                color: #f08a00;
            }
        }
    }
    .swiper {
        // position: relative;
        width: 100vw - 300px;
        height: 500px;
    }

    .slide {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .slide > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

}
</style>