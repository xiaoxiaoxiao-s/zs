<script setup>
import { onMounted } from 'vue'
import Menu from '@/components/Menu'
import { useActions } from 'vuex-composition-helpers/dist'

const { setMenuIndex } = useActions(['setMenuIndex'])

onMounted(() => {
    setMenuIndex(1)
})
</script>

<template>
    <div>
        <Menu :isTransparent="false">
            <ul class="menu">
                <li class="is">联系我们</li>
            </ul>
        </Menu>

        <div class="content">
            <div class="info">
                <img class="img" src="/images/my-img.png" />

                <div>
                    <div class="info-msg">
                        <div class="msg-title">
                            <img src="/images/my-icon1.png" />
                            <p>加入我们</p>
                        </div>
                        <p class="msg-text1 mr80">请将简历和求职信发送至</p>
                        <p class="msg-text2 mr80">hr@stalacapital.com</p>
                    </div>

                     <div class="info-msg">
                        <div class="msg-title">
                            <img src="/images/my-icon2.png" />
                            <p>项目投递</p>
                        </div>
                        <p class="msg-text1 mr80">请将BP材料发至</p>
                        <p class="msg-text2 mr80">bp@stalacapotal.com</p>
                    </div>
                </div>
            </div>
            
            <div class="fool">
                <div class="msg-title mb30">
                    联系方式
                </div>

                <div class="flex">
                    <p class="msg-text1 fool-text">北京：北京市朝阳区望京京辉大厦2901</p>
                    <p class="msg-text1 fool-text">深圳：深圳市保安区辅三路金港商务大厦B座1810</p>
                </div>

                <p class="msg-text1 fool-text">电话: 010-64788187</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    position: relative;
    padding-top: 100px;
    padding-left: 200px;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
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
.info {
    padding-left: 50px;
    display: flex;
    justify-content: flex-start;
}
.info .img {
    width: 640px;
    margin-right: 50px;
}
.info-msg {
    margin-bottom: 70px;
}
.msg-title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 30px;
    font-size: 24px;
    font-weight: 600;
    color: #323232;
}
.msg-title img {
    width: 30px;
    margin-right: 15px;
}
.msg-text1 {
    color: #646464;
    letter-spacing: 1.5px;
    font-size: 17px;
}
.msg-text2 {
    color: #f08a00;
    letter-spacing: 1.5px;
    font-size: 17px;
}
.mr80 {
    margin-left: 80px;
}
.fool {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/my-fool.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 240px;
    padding: 30px 30px 30px 230px;
}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
}
.fool-text {
    padding: 0 30px;
}
.mb30 {
    margin-bottom: 30px;
}
</style>