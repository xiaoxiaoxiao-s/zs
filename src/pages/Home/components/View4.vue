<template>
    <div class="view">
        <div class="content">
            <div>
                <div class="title">
                    <img src="/images/title-icon.png" />
                    <p>智能制造</p>
                </div>
                <p class="text">中国是全球最大的制造业国家，是最大的3C产品和汽车消费市场。伴随着高端制造业发展，细分领域会出现新一批拥有极高壁垒的本土隐形龙头企业。我们专注在关键设备、核心部件、数字化与智能化制造等方向的投资机会。</p>
            </div>
            <img class="img" src="/images/xinzhizao.png" />
        </div>

        <div class="content">
            <div>
                <div class="title">
                    <img src="/images/title-icon.png" />
                    <p>智慧能源</p>
                </div>
                <p class="text">在国家双碳趋势下，随着新能源占比的快速提高，电力供应不稳定性快速增长，新型电力系统会向“源荷互动”、“荷随源动”的方向发展。在国家电改快速落地的市场背景下，负荷侧柔性管理成为刚需，储能、电力电子、微网和电力可靠性管理将迎来巨大的技术应用升级。围绕新型电力系统，我们寻找具有创新技术和商业模式的企业。</p>
            </div>
            <img class="img" src="/images/xinnengyuan.png" />
        </div>

        <div class="content">
            <div>
                <div class="title">
                    <img src="/images/title-icon.png" />
                    <p>物联网/IOT</p>
                </div>
                <p class="text">物联网技术可以实现工业设备和生产线的互联互通，实现工业生产的“高速”、“高精”、“高效”升级。我们关注数字化变革，寻找在数据采集、传输、连接、分析和应用等环节具备核心技术和创新能力的企业。</p>
            </div>
            <img class="img" src="/images/wulianwang.png" />
        </div>
    </div>
</template>

<style scoped>
.view {
    background-color: #fff;
    padding-top: 100px;
    padding-left: 250px;
    padding-right: 50px;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
}
.content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 80px;
}
.title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.title p {
    font-size: 24px;
    font-weight: 600;
}
.title img {
    width: 15px;
    margin-right: 15px;
}
.text {
    color: #646464;
    letter-spacing: 1.5px;
    font-size: 16px;
    line-height: 32px;
    margin-left: 30px;
}
.img {
    width: 288px;
    height: 144px;
    flex-shrink: 0;
    margin-left: 60px;
    margin-top: 7.5px;
}
</style>
