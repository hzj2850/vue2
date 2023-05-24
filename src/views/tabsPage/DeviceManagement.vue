<template>
    <div class="DeviceManagement">
        <div class="content">
            <!-- 左边 -->
            <div class="l_content is_card">
                <!-- 标题 -->
                <div class="title">
                    DNA实验室-测序室1
                    <div class="title_r">
                        <div>设备数量：4</div>
                        <div>
                            <span class="Disabled">停用：0</span>
                            <span class="Restricted">限用：0</span>
                            <span class="Normal">正常：0</span>
                        </div>
                    </div>
                </div>
                <!-- 轮播 -->
                <my-swiper class="my-swiper" :cfig="{loop: false}">
                    <template>
                        <div class="swiper-slide swiper-no-swiping" v-for="(item, index) in 5" :key="index">
                            <div class="is_device_card" v-for="(e, i) in 6" :key="i+'kk'">
                                <div class="l_img" v-viewer="{navbar: false}">
                                    <img src="../../assets/images/温湿度压差.svg" alt="图片">
                                </div>
                                <div class="r_div">
                                    <span class="card_title ellipsis">漩涡震荡器（SXGJ-SDV-02）</span>
                                    <p class="ellipsis">安装位置：23楼DNA实验室测序室1</p>
                                    <p class="ellipsis">设备管理人：黄华{{ item + '-' + e }}</p>
                                    <div style="text-align: right;">
                                        <my-btn class="my-btn" text="运行" type="deongaree"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <a-icon type="left-circle" slot="prev" />
                    <a-icon type="right-circle" slot="next" />
                </my-swiper>
            </div>
            <!-- 右边 -->
            <div class="r_content is_card">
                <!-- 标题 -->
                <div class="title">房间列表</div>
                <!-- 列表 -->
                <div class="list_content hide-scroll-bar">
                    <div class="list_item is_device_card" v-for="e in 10" :key="e">
                        <span class="card_title">00000{{ e }}</span>
                        <div class="title_r">
                            <div>设备数量：4</div>
                            <div>
                                <span class="Disabled">停用：0</span>
                                <span class="Restricted">限用：0</span>
                                <span class="Normal">正常：0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MySwiper from '@/components/my-swiper/index.vue'
import MyBtn from '@/components/svg/my-btn.vue'
export default {
    components: {
        MySwiper,
        MyBtn
    },
    mounted() {

    },
}
</script>

<style lang="less" scoped>
.DeviceManagement {
    margin: 0 20px;
}
.content {
    display: flex;
    align-content: baseline;
    height: calc(100% - 10px);
}
.l_content {
    // flex: 1;
    width: calc((100% - 20px * 3) / 3 * 2.17);
}
.r_content {
    margin-left: 20px;
    flex: 1;
}

.title {
    color: @text-color;
    font-family: Microsoft YaHei;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: baseline;
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid @border-color-base;
    overflow: hidden;
    padding: 0 20px;
}
.title_r{
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
    span{
        margin-left: 30px;
    }
}
// 停用
.Disabled{
    color: @alarm-color;
}
// 限用
.Restricted{
    color: @warning-color;
}
// 正常
.Normal{
    color: @success-color;
}

// 轮播图
.my-swiper {
    width:calc(100% - 100px);
    height: calc(100% - 64px - 20px);
    margin: auto;
    .swiper-slide{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .is_device_card{
        width: calc((100% - 20px) / 2);
        height: calc((100% - 60px) / 3);
        margin-top: 20px;
        &:nth-child(2n) {
            margin-left: 0px;
        }
        .l_img{
            width: 40%; height: 100%; background: #fff;float: left;margin-right: 20px; border-radius: 3px;overflow: hidden;
            > img{width:100%;height:100%;}
        }
        .r_div{ 
            height: 100%;
            font-size: 14px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .my-btn{
            width: 126px; height: 45px;font-size: 16px;
        }
    }
    /deep/ .next{right: -40px;font-size: 30px;}
    /deep/ .prev{left: -40px;font-size: 30px;}
}

.list_content{
    height: calc(100% - 64px);
    overflow: auto;
    > .list_item{
        margin: 20px 20px 0 20px;
        cursor: pointer;
        user-select: none;
        &:nth-last-child(1) {
            margin-bottom: 20px;
        }
        .title_r{
            margin-left: 0;
            margin-top: 12px;
        }
    }
}

.is_device_card{
    background: rgb(0, 22, 98);
    border: 1px solid @text-color;
    border-radius: 10px;
    padding: 20px;
}
.card_title{
    font-size: 20px;
    color: @text-color;
    display: block;
}
</style>