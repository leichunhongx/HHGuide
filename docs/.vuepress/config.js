module.exports = {
	lang: 'zh-CN',
	title: 'ChatGPT小站',
	description: 'ChatGPT小站',
	theme: 'vuepress-theme-vdoing',
	head: [["script", {},
	`
	var _hmt = _hmt || []; (function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?59033874dd991ce9246775fed052092a";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();`], ["meta", {
		name: "keywords",
		content: "ChatGPT升级,Onlyfans订阅"
	}]],
	plugins: [['sitemap', {
		hostname: "https://chatgpt.diqiulian.net",
		exclude: ["/404.html"]
	}]],
	themeConfig: {
		sidebar: 'auto',
		nav: [{
			text: '首页',
			link: '/'
		},
		{
			text: 'OnlyFans订阅',
			link: '/onlyfans/'
		}],
		sidebar: {
			'/onlyfans/': ['/']
		}
	}
}