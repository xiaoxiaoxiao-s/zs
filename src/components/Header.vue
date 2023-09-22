<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useState } from 'vuex-composition-helpers/dist'

const router = useRouter()
const route = useRoute()

const { menuIndex } = useState(['menuIndex'])

const handlePush = (path) => {
    router.push(path)
}
</script >

<template>
    <div v-if="route.path.indexOf('/admin') < 0" ref="content" :class="['view', menuIndex !== 0 ? 'nt-view' : '']">
        <p :class="{ 'nt-text' : menuIndex !== 0, 'is' : route.path === '/' && menuIndex !== 0 }" @click="handlePush('/?slide=1')">关于我们</p>
        <p :class="{ 'nt-text' : menuIndex !== 0, 'is' : route.path.indexOf('/team') >= 0 }" @click="handlePush('/team')">团队介绍</p>
        <p :class="{ 'nt-text' : menuIndex !== 0, 'is' : route.path.indexOf('/case') >= 0 }" @click="handlePush('/case')">投资案例</p>
        <p :class="{ 'nt-text' : menuIndex !== 0, 'is' : route.path.indexOf('/dynamic') >= 0  }" @click="handlePush('/dynamic')">企业动态</p>
        <p :class="{ 'nt-text' : menuIndex !== 0, 'is' : route.path === '/my'}" @click="handlePush('/my')">联系我们</p>

        <div class="controls">
            <!-- <img class="ss-icon" src="/images/sousuo.png" /> -->
            <!-- <p v-if="isTransparent">
                <span class="is">中</span>
                <span class="is">|</span>
                <span>EN</span>
            </p> -->
        </div>
    </div>

    <div v-if="route.path.indexOf('/admin') >= 0 && route.path !== '/admin/login'" class="admin-head" >
        <div class="logo">
            <img src="/images/logo.png" />
            <div>
                <span class="name">智数资本</span>
                <p class="en-name">STALACAPITAL</p>
            </div>
        </div>

        <div class="menu">
            <p :class="{ 'is' : route.path.indexOf('/admin/num') >= 0}" @click="handlePush('/admin/num')">基金介绍</p>
            <p :class="{ 'is' : route.path.indexOf('/admin/case') >= 0}" @click="handlePush('/admin/case')">投资案例</p>
            <p :class="{ 'is' : route.path.indexOf('/admin/dynamic') >= 0}" @click="handlePush('/admin/dynamic')">企业动态</p>
        </div>

        <div class="user-name">
            <img src="/images/user.png" />
            <p>admin</p>
        </div>
    </div>
</template>


<style scoped lang="less">
.view {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 30px;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 99;
    background-color: transparent;

    > p {
        font-weight: 600;
        margin-left: 50px;
        cursor: pointer;
        color: #fff;
    }

    .nt-text {
        color: #646464;
    }

    
    .is {
        color: #f08a00;
    }

    .controls {
        margin-left: 50px;
        display: flex;
        align-items: center;
    }

    .controls > img {
        width: 14px;
        height: 14px;
        margin-right: 35px;
    }

    .controls span {
        font-size: 14px;
        margin: 0 2.5px;
        color: #fff;
        font-weight: 600;
    }
    .controls .is {
        color: #f08a00;
    }
}

@keyframes backgroundColor {
    form {
        background-color: transparent;
    }
    to {
        background-color: #fff;
    }
}

.nt-view {
    animation-name: backgroundColor;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1s;
}

.logo {
    display: flex;
    align-items: center;
    margin-left: 30px;
    flex-shrink: 0;
}
.logo img {
    width: 18px;
    margin-right: 15px;
}
.logo .name {
    font-weight: 900;
    font-size: 20px;
    letter-spacing:4px;
    line-height: 20px;
    color: #fff;
}
.logo .en-name {
    font-size: 12px;
    font-weight: 900;
    line-height: 12px;
    color: #fff;
}

.admin-head {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: rgb(84, 92, 100);
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    .menu {
        display: flex;
        margin-left: 120px;
        color: #fff;
        font-weight: 600;
    }
    .menu p {
        font-size: 16px;
        margin-right: 30px;
        cursor: pointer;
    }
    .menu .is {
        color: #f08a00;
        font-weight: 600;
    }
    .user-name {
        position: absolute;
        right: 30px;
        top: 0;
        bottom: 0;
        height: 20px;
        margin: auto;
        display: flex;
        align-items: center;
        img {
            width: 20px;
            margin-right: 10px;
        }
        p {
            font-weight: 600;
            color: #fff;
            font-size: 14px;
        }
    }
}
</style>

