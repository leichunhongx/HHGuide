
module.exports = {
	lang: 'zh-CN',
	title: 'ChatGPT中文网',
	description: 'ChatGPT中文网',
	theme: 'vuepress-theme-vdoing',
	head: [['link', {
		rel: 'icon',
		href: '/logo.png'
	}], ["script", {},
	`
	var _hmt = _hmt || []; (function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?59033874dd991ce9246775fed052092a";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();`],
	['meta', {name: 'keywords',content: 'ChatGPT注册,ChatGPT升级,GPT-4,GPT4,GPT-4升级,ChatGPT Plus 一键升级,WildCard虚拟卡'}],
	['script', {}, `
      document.addEventListener('DOMContentLoaded', function () {
        document.body.oncopy = function () { return false; };
        document.body.oncut = function () { return false; };
        document.body.oncontextmenu = function () { return false; };
      });
    `],
	],
	plugins: [['sitemap', {
		hostname: "https://chatgpt.diqiulian.net",
		// 排除无实际内容的页面
		exclude: ["/404.html"]
	}],
	['@vuepress/back-to-top', true], ['vuepress-plugin-baidu-autopush', {}], ['@vuepress/active-header-links', {
		sidebarLinkSelector: '.sidebar-link',
		headerAnchorSelector: '.header-anchor'
	}],
	['@vuepress/medium-zoom', {
		selector: 'img',
		// See: https://github.com/francoischalifour/medium-zoom#options
		options: {
			margin: 16
		}
	}],
	{
		name: 'custom-plugins',
		globalUIComponents: ["PageInfo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
	},

	],
	themeConfig: {
		logo: "/logo.png",
		siteTitle: false,
		lastUpdated: '上次更新',
		// string | boolean
		sidebar: 'structuring',
		displayAllHeaders: true,
		// 默认值：false
		sidebarDepth: 2,

		pageStyle: 'line',
		nav: [
		{
			text: '首页',
			link: '/'
		},
		{
			text: '索引',
			link: '/archives/',
			items: [{
				text: '分类',
				link: '/categories/'
			},
			{
				text: '标签',
				link: '/tags/'
			},
			{
				text: '归档',
				link: '/archives/'
			},
			],
		}],

	  /* blogger: {
              avatar: '/head.jpg',
              name: 'GPT中文站',
              slogan: '活着就是折腾呀！！！',
        },*/
		footer: {
			createYear: 2024,
			// 博客创建年份
			copyrightInfo: 'HH | <a href="https://chatgpt.diqiulian.net/" target="_blank">ChatGPT中文网</a>',
			// 博客版权信息、备案信息等，支持a标签或换行标签</br>
		},
		sidebar: {
			'/chatgpt/': [{
				title: 'ChatGPT',
				children: [''],
			},
			],
		}

	}
}