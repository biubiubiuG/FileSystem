/**
 * Created by dllo on 17/7/31.
 */

var fs = require('fs');

/*
 * 打开文件
 *
 *    参数1 - 文件的路径。
 *    参数2 - 文件打开的行为。
 *    参数3 - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
 *    参数4 - 回调函数，带有两个参数如：callback(err, fd)。
 * */
fs.open('./01.txt', 'r+', 0666, function (err, fd) {
    console.log('1');
});


/*
 * 修改文件时间戳。
 *
 *  path -  文件路径
 *  atime  -  访问时间 ，表示文件最后被访问的时间和日期。 每一次应用程序或服务使用系统调用，读取一个文件时，文件的访问时间都会更新。
 *  mtime - 修改时间 ，表示文件被修改的时间和日期。文件的内容发生改变时，文件的修改日期将随之更新
 *  callback - 回调，传递一个异常参数err
 * */

fs.utimes('./01.txt', new Date(), new Date(), function (err) {
    if (err) {
        throw err;
    }
    console.log('2');
})



/*
 * 监视文件
 *
 * filename, 完整路径及文件名；
 * [options], persistent true表示持续监视，不退出程序；interval 单位毫秒，表示每隔多少毫秒监视一次文件
 * listener, 文件发生变化时回调，有两个参数：curr为一个fs.Stat对象，被修改后文件，prev,一个fs.Stat对象，表示修改前对象
 */
fs.watchFile('./01.txt', {interval: 20}, function (curr, prev) {
    console.log('3');
});





//4.取消对文件进行监视
// 参数1: 完整路径及文件名
// 参数2: 要取消的监听器事件，如果不指定，则取消所有监听处理事件
fs.unwatchFile('./01.txt', function (curr, prev) {
    console.log("4");
});




// 5.创建硬链接
// 参数1: 为源目录或文件的路径
// 参数2: 它是存放转换后的目录的路径，默认为当前工作目录
// 参数3: 回调，传递一个err异常参数
fs.link('./01.js', './02.txt', function (err) {
    if (err) {
        throw err;
    }
    console.log("5");
});












