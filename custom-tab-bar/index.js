Component({
	data: {
    active: 0,
		list: [
			{
				icon: '../static/tabbar/home.png',
				active: '../static/tabbar/home-fill.png',
				text: '首页',
				url: '/pages/index/home/index'
			},
			{
				icon: '../static/tabbar/account.png',
				active: '/static/tabbar/account-fill.png',
				text: '我的',
				url: '/pages/personal/home/index'
			}
		]
	},
	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},
		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
