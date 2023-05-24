<template>
    <div class="ModularMachine">
        <div class="title">
            模块机系统监控
        </div>

        <div class="content">
            <div class="left hide-scroll-bar">
                <div class="is_card" v-for="(item, index) in 3" :key="'l-' + index">
                    <div v-for="e in 3" :key="e">111111</div>
                </div>
            </div>
            <div class="center is_card hide-scroll-bar">
                <img src="../../assets/404.svg" alt="设备图片">
            </div>
            <div class="right hide-scroll-bar">
                <div class="is_card" v-for="(item, index) in 5" :key="'r-' + index">
                    <div class="r-c">
                        <div class="icon_view" v-for="(e, i) in 3" :key="index + '-' + i">
                            运行状态
                            <i class="my-rect-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="footer_item" v-for="e in 5" :key="e">
                <div class="icon_view">
                    运行状态
                    <i class="my-rect-icon"/>
                </div>
                <my-btn text="照明总开" type="deongaree"/>
            </div>
        </div>
    </div>
</template>

<script>
import MyBtn from '@/components/svg/my-btn.vue'
export default {
    components: {
        MyBtn,
    },
    computed: {
        points() {
            let w = 150, h = 50, r = h / 5;
            let arr = [ [r, 0], [0, r], [0, h - r], [r, h], [w - r, h], [w, h - r], [w, r], [w - r, 0], [r, 0] ];
            let arr2 = [];
            for(let e of arr) {
                arr2.push(e.join(' '))
            }
            return arr2.join(',')
        }
    }
}
</script>

<style lang="less" scoped>
.ModularMachine{
    margin: 0 20px;
}
.title{
    color: #fff;
    font-family: Microsoft YaHei;
    font-size: 30px;
    font-weight: 700;
    line-height: 70px;
    text-align: center;
}

.content{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: calc(100% - 70px - 140px);
    > .left, > .center, > .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 100%;
        .is_card{
            margin-top: 20px;
            &:nth-child(1) {
                margin-top: 0;
            }
        }
    }
    > .center{
        margin: 0 20px;
        > img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    > .right{
        .is_card{
            min-height: calc((100% - 20px) / 2);
        }
        .r-c{
            display: flex;
            justify-content: space-around;
        }
    }
}

.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 140px;
}

.footer_item{
    display: flex;
    align-items: center;
    margin-left: 50px;
    &:nth-child(1){
        margin-left: 0;
    }
    > .icon_view{
        margin-right: 10px;
    }
}

.icon_view{
    font-size: 14px;
    text-align: center;
    color: @text-color;
}


.my-rect-icon{
    margin-top: 12px;
}
</style>