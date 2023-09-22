<template>
    <div class="view">
        <p class="title">我们陪伴创业，我们陪伴创新</p>
        <p class="title">我们致力于推动产业的“智能化”升级和“数字化”变革</p>

        <img class="xh-icon" src="/images/xiahua.png" />
    </div>
</template>

<style scoped>

.view {
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('/images/home-bg.png');
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.title {
    padding-top: -30px;
    color: #fff;
    font-size: 42px;
    line-height: 68px;
}
@keyframes opacity {
  0% {transform:translateY(15);}
  50% {transform: translateY(0);}
  100% {transform: translateY(15);}
}
.xh-icon {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    width: 32px;
    margin: auto;
    transform: translateY(15px);
    animation-name: opacity;
    animation-duration: 1.5s;
    animation-iteration-count: infinite
}
</style>