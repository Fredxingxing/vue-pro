import Mock from 'mockjs'
Mock.setup({
    timeout:'200-600'
})

let mockFiles = []

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().map((key) => {
    if (key === './index.js') return;
    mockFiles = mockFiles.concat(files(key).default);
});

// 注册所有的mock服务
mockFiles.map((item) => {
    for (let [path, target] of Object.entries(item)) {
        let protocol = path.split('|');
        Mock.mock(`/api/${protocol[1]}`, protocol[0], target);
    }
});