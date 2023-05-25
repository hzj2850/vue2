class Countdown {
	constructor() {
		this.Inter = null; // 定时器
		this.count_text = null; // 默认文字
		this.time = 60;
		this.count = this.time;
	}
	
	start(v, fn) {
		if(this.Inter) return false;
		else this.count = this.time;
		if(v) this.count_text = v;
		
		fn && fn({count: --this.count});
			
		const that = this;
		this.Inter = setInterval(function() {
			that.count -= 1;
			if(that.count <= 0) {
				that.count = that.count_text;
				clearInterval(that.Inter);
				that.Inter = null;
			}
			fn && fn({count: that.count});
		}, 1000);
	}
	
	clear() {
		if(this.Inter) {
			clearInterval(this.Inter);
			this.Inter = null;
			this.count = this.time;
		}
	}
}

export default new Countdown();