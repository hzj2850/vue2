//vue定义全局过滤器
const install = (Vue) => {
	/**
	 * 自定义时间样式Y/M/D h:m:s
	 */
	Vue.filter('minList', (arr, len = 20) => {
		let arr2 = [], minLen = len - arr.length;
		if (minLen > 0) {
			for (let i = 0; i < minLen; i++) {
				arr2.push({})
			}
		}
		return [...arr, ...arr2];
	});
}

export default install
