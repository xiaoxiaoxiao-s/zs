<script setup>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const state = reactive({
    status: 0, // 0 待验证 ， 1 未登录， 2已登陆
    menuIndex: 1, 
    account: undefined,
    password: undefined,
})

const { account, password } = toRefs(state)

const handleLogin = () => {
    if (!state.account) { 
        alert('请输入账号') 
        return 
    }

    if (!state.password) { 
        alert('请输入密码') 
        return 
    }

    if (state.account !== 'admin') {
        alert('账号错误') 
        return 
    }

    if (state.password !== 'admin') {
        alert('密码错误') 
        return 
    }

    // 设置登录态
    window.localStorage.setItem('ZSKG_TOKEN', 'LOGIN');
    alert('登录成功')
    router.replace('/admin/case')
}

const inputAccount = (text) => {
    state.account = text
}

const inputPassword = (text) => { 
    state.password = text
}
</script>

<template>
    <div class="not-login">
        <div class="flex">
            <img class="logo" src="/images/logo.png" />
            <p class="name">智数资本管理后台</p>
        </div>

        <div class="flex">
            <p class="label">账号:</p>
            <input class="input" placeholder="请输入账号" :value="account" @input="inputAccount($event.target.value)"/>
        </div>

        <div class="flex">
            <p class="label">密码</p>
            <input class="input" type="password" placeholder="请输入密码" :value="password" @input="inputPassword($event.target.value)" />
        </div>

        <div class="login-btn" @click="handleLogin">登陆</div>
    </div>
</template>

<style scoped lang="less">
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}
.not-login {
    display: flex;
    flex-direction: column;   
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
.login-btn {
    margin: 10px 0 120px;
    background-color: #f08a00;
    color: #fff;
    width: 290px;
    text-align: center;
    border-radius: 4px;
    line-height: 36px;
    cursor: pointer;
}
.input {
    line-height: 32px;
    width: 240px;
    padding: 0 15px;
    /* font-weight: 600; */
    box-sizing: border-box;
    outline: none;
}
.label {
    color: #646464;
    width: 40px;
}

.name {
    font-weight: 600;
    font-size: 26px;
    color: #323232;
}
.logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 24px;
    margin-right: 15px;
}
</style>