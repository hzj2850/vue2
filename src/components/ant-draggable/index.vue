<template>
    <transition-group tag="ul" name="flip-list">
        <li v-for="(e, i) in list" :key="e" :data-index="i" draggable="true">
            <slot :item="e">{{ e }}</slot>
        </li>
        <div class="delbox" key="del" :data-index="-1" v-if="delbox">
            <div><slot :name="'del'">拖入删除</slot></div>
        </div>
    </transition-group>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => ([1,2,3])
        },
        delbox: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        let ul = this.$el, self = null;
        // 开始
        ul.ondragstart = e => {
            self = e.target;
            ul.classList.add('uling');
            setTimeout(() => self.classList.add('moving'), 20);
        }
        // 划过
        ul.ondragover = e => {
            e.preventDefault();
        }
        // 进入
        ul.ondragenter = e => {
            const i = e.target.dataset.index, i2 = self.dataset.index;
            if(i === '-1') return e.target.classList.add('deling');
            if(!i || i === i2) return false;
            this.list.splice(i * 1, 0, this.list.splice(i2 * 1, 1)[0]);
        }
        // 离开
        ul.ondragleave = e => {
            if(e.target.dataset.index === '-1') {
                e.target.classList.remove('deling');
            }
        }
        // 放入
        ul.ondrop = e => {
            if(e.target.dataset.index === '-1') {
                e.target.classList.remove('deling');
                this.list.splice(self.dataset.index * 1, 1);
            }
        }
        // 结束
        ul.ondragend = () => {
            ul.classList.remove('uling');
            self.classList.remove('moving');
        }
    }
}
</script>

<style lang="less" scoped>
ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
}
li{
    background: blue;
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 4px;
}
.moving{
    background: transparent;
    color: transparent;
    border: 1px dashed #d9d9d9;
}
.delbox{
    position: absolute;
    background: rgb(253, 80, 80);
    > div{
        pointer-events: none;
    }
}
.deling{
    background: red;
}

.flip-list-move {
    transition: all 300ms linear;
    pointer-events: none;
}
</style>