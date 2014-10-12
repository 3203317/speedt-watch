/*!
 * SpeedT-Watch
 * Copyright(c) 2014 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var program = require('commander');

program
	.version('0.0.1')
	.usage('test')
	.option('-p, --peppers', 'Add peppers')
	.option('-P, --pineapple', 'Add pineapple')
	.option('-b, --bbq', 'Add bbq sauce')
	.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')

program
	.command('start')
	.description('启动服务器')
	.action(function (name){
		console.log('Deploying "%s"', name);
	});
program
	.command('startall')
	.description('启动服务器集群')
	.action(function (name){
		console.log('Deploying "%s"', name);
	});

program
	.command('restartall')
	.description('重启服务器集群')
	.action(function (name){
		console.log('all "%s"', name);
	});

program
	.command('stop')
	.description('关闭指定服务器')
	.action(function (sid){
		console.log('stop "%s"');
	});

program
	.command('stopall')
	.description('停止全部服务器')
	.action(function (){
		console.log('stopall "%s"');
	});

program
	.command('list')
	.description('显示所有运行的服务器')
	.action(function (){
		console.log('stopall "%s"');
	});

program.parse(process.argv);

console.log('you ordered a pizza with:');
if(program.peppers) console.log('  - peppers');
if(program.pineapple) console.log('  - pineapple');
if(program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);