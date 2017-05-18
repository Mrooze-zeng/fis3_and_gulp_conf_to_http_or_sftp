
<h1>说明：</h1>
<p>适用于使用CLI工具但不想修改fis3或gulp的朋友,而对于自己配置的小伙伴来说这可能没有什么卵用</p>

<h4>这是一个通过http或Sftp将项目文件上传至服务器端的fis3或gulp配置文件，<br/>其中不包括打包及压缩，</h4>
<p>需要修改的地址及密码可在config.json文件中修改，</p>
<h3>当你使用时，</h3>
<ul>
<ol>1、复制config.json文件及fis-conf.js或gulpfile.js文件到你的项目中</ol>
<ol>2、添加相关依赖npm install --save-dev fis3 fis3-deploy-sftp<br/>
或者npm install --save-dev gulp gulp-sftp(需要看你采用的是gulp还是fis3，值得说明的是gulp中没有添加http上传只添加了sftp)</ol>
<ol>3、修改package.json文件<br/>
<strong>在script中添加：</strong>
<ol>
<ul>
    <li>"qaHttp": "node node_modules/fis3/bin/fis.js release qaHttp",</li>
    <li>"testHttp":"node node_modules/fis3/bin/fis.js release testHttp",</li>
    <li>"qaSftp":"node node_modules/fis3/bin/fis.js release qaSftp",</li>
    <li>"testSftp":"node node_modules/fis3/bin/fis.js release testSftp",</li>
    <li>"gulpQa":"node node_modules/gulp/bin/gulp.js qaSftp",</li>
    <li>"gulpTest":"node node_modules/gulp/bin/gulp.js testSftp"</li>
<ul>
</ol>
</ul>
