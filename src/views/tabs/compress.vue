<template>
    <div>
        压缩
    </div>
</template>

<script>
import {compressImg, fileToBase64} from '@/utils/compressImg'
export default {
    data() {
        return {
            imgUrl: ''
        }
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
