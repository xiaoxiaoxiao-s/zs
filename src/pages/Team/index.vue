<script setup>
import { onMounted, ref } from 'vue'
import Menu from '@/components/Menu'
import { useActions } from 'vuex-composition-helpers/dist'

const { setMenuIndex } = useActions(['setMenuIndex'])

const model1 = ref(false)
const model2 = ref(false)
const model3 = ref(false)

const handleModel1 = (v) => model1.value = v
const handleModel2 = (v) => model2.value = v
const handleModel3 = (v) => model3.value = v

onMounted(() => {
    setMenuIndex(1)
})
</script>

<template>
    <div class="view">
        <Menu :isTransparent="false">
            <ul class="menu">
                <li class="is">团队介绍</li>
            </ul>
        </Menu>

        <div class="content">
            <div class="title">
                <img class="title-icon" src="/images/title-icon.png" />
                <p class="title-name">管理团队</p>
            </div>
            <p class="title-text">我们谙熟新能源、新制造、IOT。我们熟悉行细分业发展规律和创新价值。我们在垂直领域拥有广泛的资源。<br>我们独立深入调查细分行业，确定细分跑道和价值空间。我们拥有企业变革和领导力的独立视角和判断力，能够加速被投企业的价值成长。<br>我们拥有丰富的企业数字化升级和转型的管理经验，坚信信数字化对于传统行业的价值提升。<br>我们帮助被投企业进行战略梳理，商业模式的更新迭代，企业运营至关重要的选择，人才和团队提升。我们创造我们和创业伙伴之间、创业伙伴相互之间的协同效应</p>

            <div class="cards">
                <div class="card" @click="handleModel1(true)">
                    <img src="/images/csr1.png" />
                    <p class="name">朱 海</p>
                    <p class="card-title">创始合伙人</p>
                </div>

                <div class="card"  @click="handleModel2(true)">
                    <img src="/images/csr2.png" />
                    <p class="name">侯松容</p>
                    <p class="card-title">创始合伙人</p>

                </div>

                <div class="card" @click="handleModel3(true)"> 
                    <img src="/images/csr3.png" />
                    <p class="name">陈剑峰</p>
                    <p class="card-title">创始合伙人</p>
                </div>
            </div>
        </div>

        <div class="modal-bg" v-if="model1"  @click.self="handleModel1(false)">
            <div class="modal">
                <img class="close" src="/images/close.png" @click.self="handleModel1(false)"/>
                <img class="img" src="/images/csr1.png" />


                <div class="modal-info">
                    <p class="info-name">朱 海</p>
                    <p class="info-title">创始合伙人</p>

                    <p class="info-text">曾任世界500强企业施耐德电气中国区董事长兼总裁，全球执行副总裁。具备全方位企业管理经验，对能源负荷侧、新型电力系统、工业自动化、智慧楼宇等核心领域有独到的市场认知、战略思考以及丰富的实战经验。</p>
                    <p class="info-text">曾主导多起成功收购与投资案例并领导投后管理工作，精于产业投资与整合。</p>
                    <p class="info-text">北京大学信息管理学士，中国科学院计算技术研究所计算机科学硕士，中欧国际工商管理学院(CEIBS)高级经理工商管理硕士(EMBA)。</p>
                </div>
            </div>
        </div>

        <div class="modal-bg" v-if="model2" @click.self="handleModel2(false)">
            <div class="modal">
                <img class="close" src="/images/close.png" @click.self="handleModel2(false)"/>
                <img class="img" src="/images/csr2.png" />


                <div class="modal-info">
                    <p class="info-name">侯松容</p>
                    <p class="info-title">创始合伙人</p>

                    <p class="info-text">曾任康佳集团董事局主席兼总裁、华侨城股份有限公司总裁。对消费电子、房地产等行业拥有精准的产业视角与资深的管理经验。</p>
                    <p class="info-text">曾先后完成多个大型产业链整合布局，推动完成了多项大型战略性投资并均取得了良好的经济效益。</p>
                    <p class="info-text">北京大学经济学学士，中国人民大学经济学硕士，哈佛大学商学院CEO班。</p>
                </div>
            </div>
        </div>

        <div class="modal-bg" v-if="model3" @click.self="handleModel3(false)">
            <div class="modal">
                <img class="close" src="/images/close.png" @click.self="handleModel3(false)"/>
                <img class="img" src="/images/csr3.png" />


                <div class="modal-info">
                    <p class="info-name">陈剑峰</p>
                    <p class="info-title">创始合伙人</p>

                    <p class="info-text">曾任施耐德电气（中国）有限公司投资部副总裁、战略部副总裁、亚太区合作及并购执行官，具有丰富的企业投资并购实战经验。</p>
                    <p class="info-text">法国国立行政学院公共管理硕士学位、巴黎大学第九分院管理硕士学位。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes scale {
    form {
        transform: scale(0.2);
    }
    to {
         transform: scale(1);
    }
}
.content {
    padding-top: 100px;
    padding-left: 250px;
    padding-right: 120px;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    background-color: #fff;
}
.title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.title-name {
    color: #323232;
    font-size: 24px;
    font-weight: 600;
    margin-right: 15px;
}
.title-icon {
    width: 15px;
    margin-right: 15px;
}
.title-text {
    color: #646464;
    margin: 10px 30px 30px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 32px;
}
.yh {
    margin-top: -15px;
    width: 14px;
    object-fit: cover;
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
.cards {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.card {
    padding: 15px;
    color: #323232;
}
.card img {
    width: 280px;
    margin-bottom: 10px;
}
.card .name {
    font-weight: 600;
    font-size: 28px;
    color: #000;
}
.card .card-title {
    color: #646464;
}
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
}
.modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 800px;
    height: 500px;
    margin: auto;
    background-color: #fff;
    padding: 15px;
    display: flex;
    transform: scale(0.2);
    animation-name: scale;
    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-iteration-count: .5s;
}
.modal .img {
    width: 254.1px;
    height: 324.8px;
    flex-shrink: 0;
}
.modal .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
}
.modal-info {
    padding: 30px 30px;
    overflow-y: auto;
    flex-grow: 1;
}

.info-name {
    font-weight: 600;
    font-size: 28px;
    color: #000;
}
.info-title {
    font-weight: 600;
    font-size: 20px;
    color: #7b7b7b;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.info-text {
    margin-bottom: 15px;
        color: #000;
}
</style>