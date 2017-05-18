var gulp = require('gulp');
var sftp = require('gulp-sftp');

var config = require('./config.json');
var file = config.buildPath;
//qa环境Sftp发布
gulp.task('qaSftp',function(cb){
	var c = config.qa_sftp;
	c.remotePath = c.remotePath+config.projectName+'/';
	
	return gulp.src(file,{buffer:false})
		.pipe(sftp(c))
		.on('error',function(err){
		cb(err)
	})
})
//测试环境Sftp发布
gulp.task('testSftp',function(){
	var c = config.test_sftp;
	c.remotePath = c.remotePath+config.projectName+'/';
	
	return gulp.src(file,{buffer:false})
		.pipe(sftp(c))
		.on('error',function(){
		cb(err)
	})
})
