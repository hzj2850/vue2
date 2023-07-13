import * as imageConversion from 'image-conversion'

export function compressImg(file, cfig = {}) {
    return new Promise((resolve, reject) => {
        if(file.type.includes('image/') === false) return resolve(file);

        const size = cfig.size || 200, //图片大小压缩到200kb
              width = cfig.width || 1200, // 宽度压缩到1200
              isLt2M = Math.ceil(file.size / 1024) < size; // 判定图片大小

        if (isLt2M) return resolve(file);

        // 压缩图片
        imageConversion.compressAccurately(file, {size, width}).then(res => {
            resolve(blobToFile(res, file.name));
        }).catch(() => {
            alert('图片压缩失败，请联系管理员进行查看！');
            reject();
        })
    })
}

// blob转file
export function blobToFile (blob, name) {
    return new File([blob], name, {type: blob.type});
}

// 页面展示file文件
export function fileToBase64(file) {
    return new Promise(resolve => {
        const that = this;
        const obj = new FileReader();
        obj.readAsDataURL(file);
        obj.onloadend = function() {
            resolve(this.result);
        }
    })
}
