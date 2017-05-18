<h1>说明：</h1>
<p>
这是一个通过http或Sftp将项目文件上传至服务器端的fis3或gulp配置文件，其中不包括打包及压缩，
需要修改的地址及密码可在config.json文件中修改，
当你使用时，
1、复制config.json文件及fis-conf.js或gulpfile.js文件到你的项目中，
2、添加相关依赖npm install --save-dev fis3 fis3-deploy-sftp
或者npm install --save-dev gulp gulp-sftp(需要看你采用的是gulp还是fis3，值得说明的是gulp中没有添加http上传只添加了sftp)
3、修改package.json文件
在script中添加：
    "qaHttp": "node node_modules/fis3/bin/fis.js release qaHttp",
    "testHttp":"node node_modules/fis3/bin/fis.js release testHttp",
    "qaSftp":"node node_modules/fis3/bin/fis.js release qaSftp",
    "testSftp":"node node_modules/fis3/bin/fis.js release testSftp",
    "gulpQa":"node node_modules/gulp/bin/gulp.js qaSftp",
    "gulpTest":"node node_modules/gulp/bin/gulp.js testSftp"

</p>
