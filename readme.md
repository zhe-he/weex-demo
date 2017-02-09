##使用说明：     
1. [安装nodejs](https://nodejs.org/en/)
建议下载开发版current    

1. 全局安装webpack   
`npm install webpack -g`    

1. 安装所需插件    
`npm install`	

1. 运行  
`npm run start`		

1. 开发	
`npm run watch`	

1. 上线(打包)
`npm run build`	

1. 启动本地服务器(默认端口3332)	
`npm run server` or `node server --自定义端口号`	

-新增页面，页面中js请放在js/page目录下，文件名默认和css文件名相同。
	 

###仓库地址	
origin  git@git.ihangmei.com:H5-web/bizdata-dashboard.git 	
测试环境地址  ssh://wmr@42.159.29.181:65022/opt/repo/beta.git 	
预上线地址   ssh://nginx@139.217.17.36:65022/opt/source/php_stg_h5.repo 	
生产环境地址  ssh://nginx@42.159.26.226:65022/opt/source/php_h5.repo 


###项目介绍：	
1. *css、images、js目录为开发目录，assets为输出目录*    
1. 	
> 1. js/components -> 组件(含js、css、font)	
> 1. js/lib -> 插件(仅仅js)	
> 1. js/vue -> vue插件	
> 1. js/data -> 数据	
> 1. js/page -> 页面入口文件	
> 1. js/modules -> 模块方法	
1.  
> 1.  images/tmp -> 静态资源路径(html和js中引入资源图片，如占位图，请把图片保存在此处，引入地址为assets/images/tmp/……，支持文件夹多级路径)	
> 1.  尽量避免在页面中和js中引入图片资源	

---
###关于webpack.confing.js的说明		
1. 如果引入了插件，想要简化路径引入，请在resolve中自行添加	
1. js语法支持ES6语法，css支持自动添加厂商前缀，你也可以写less和sass，编译后的文件会自动帮你处理       
1. 如果你想要修改配置   
> 1. `const ASSETS = 'assets'`		
> 1. ``var commonJs = [`js/lib/fastclick.js`]``		
> 1. `publicPath: `../${ASSETS}/``		
> 1. 更多请查看[webpack指南](https://webpack.toobug.net/zh-cn/index.html)  	

#####有任何问题请[联系我](mailto:hezhe@ihangmei.com) 	