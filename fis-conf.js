var config = require('./config.json');
//qa环境http发布
fis.media('qaHttp').match(config.buildPath,{
	deploy:fis.plugin("http-push",{
		receiver:'http://'+config.qa_http.host+':'+config.qa_http.port+'/receiver',
		to:config.qa_http.remotePath
	})
})
//测试环境http发布
fis.media("testHttp").match(config.buildPath,{
	deploy:fis.plugin('http-push',{
		receiver:'http://'+config.test_http.host+':'+config.test_http.port+'/receiver',
		to:config.test_http.remotePath
	})
})
//qa环境sftp发布
fis.media('qaSftp').match(config.buildPath,{
	deploy:fis.plugin('sftp',{
		to:config.qa_sftp.remotePath+config.projectName+'/',
		
		host:config.qa_sftp.host,
		username:config.qa_sftp.user,
		password:config.qa_sftp.password,
		port:config.qa_sftp.port
	})
})
//测试环境sftp发布
fis.media('testSftp').match(config.buildPath,{
	deploy:fis.plugin('sftp',{
		to:config.test_sftp.remotePath+config.projectName+'/',
		
		host:config.test_sftp.host,
		username:config.test_sftp.user,
		password:config.test_sftp.password,
		port:config.test_sftp.port
	})
})






