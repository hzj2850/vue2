<template>
    <div>
        压缩
        <ant-scroll-bar>
            压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩
        </ant-scroll-bar>
        <ant-scroll-bar>
            压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩
        </ant-scroll-bar>
        <ant-scroll-bar>
            压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩
        </ant-scroll-bar>
        <ant-scroll-bar>
            压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩
        </ant-scroll-bar>
        <ant-scroll-bar>
            压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩
        </ant-scroll-bar>
        <ant-scroll-bar>
            压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩
        </ant-scroll-bar>
        <ant-scroll-bar>
            压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩
        </ant-scroll-bar>
        <ant-scroll-bar>
            压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩压缩
        </ant-scroll-bar>
        <div ref="jk" style="border:2px solid red">
            33333333333333
        </div>
    </div>
</template>

<script>
import {compressImg, fileToBase64} from '@/utils/compressImg'
import AntScrollBar from '../../components/ant-scroll-bar/index.vue'
import { GlobalResizeObserver } from '../../components/ant-scroll-bar/GlobalResizeObserver'
export default {
    components: {
        AntScrollBar
    },
    data() {
        return {
            imgUrl: ''
        }
    },
    mounted() {
        GlobalResizeObserver.observe(this.$refs.jk, r => {
            console.log('111111111111')
        })

    },
    methods: {
        upload(o) {
            compressImg(o.file, {size: 100}).then(res => {
                console.log('压缩：',parseInt(o.file.size / 1024),parseInt(res.size / 1024))
                fileToBase64(res).then(r => {
                    this.imgUrl = r;
                })
            })
        },
    }
}
</script>
