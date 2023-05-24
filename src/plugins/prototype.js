//vue定义全局变量
import userApi from '@/api/userApi'

const install = (Vue) => {
	// 判断是否有登录权限
	Vue.prototype.$limits = function() {
		return new Promise(resolve => {
			let qx = true;
			if(qx) {
				resolve(true)
			} else {
				this.$router.push({ name: 'UserLogin' })
				resolve(false)
			}
		})
	}

	// 放置接口
	Vue.prototype.$userApi = userApi;
}

export default install
