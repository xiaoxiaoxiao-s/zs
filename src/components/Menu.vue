<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const { isTransparent } = defineProps({
    isTransparent: Boolean
})

const handleHome = () => {
    router.push('/')
}
</script>

<template>
    <div :class="['view', isTransparent ? '' : 'nt-view']">
        <img class="logo" src="/images/logo-hei.png"  @click="handleHome"/>

        <slot></slot> 
    </div>
</template>

<style scoped>
@keyframes backgroundColor {
    form {
        box-shadow: none;
        background-color: transparent;
    }
    to {
        background-color: #fff;
        box-shadow:  4px 10px 20px #d1d1d1;
    }
}

.nt-view {
    animation-name: backgroundColor;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1s;
}
.view {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100vh;
    z-index: 99; 
    box-shadow: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
}
.nt-view {
    animation-name: backgroundColor;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1s;
}

.logo {
  
    align-items: center;
    margin-top: 12px;
    margin-left: 30px;
    flex-shrink: 0;
    cursor: pointer;
    width: 130px;
    margin-right: 15px;
}
</style>