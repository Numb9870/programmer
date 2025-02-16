importScripts('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/xlsx/0.18.2/xlsx.js');

// 生成100万条数据
const arr = [];
for (let i = 0; i < 100000; i++) {
  arr.push({
    id: i,
    name: '张三' + i,
    age: i,
    a: i++,
    b: i--,
    c: i / 2,
  });
}
// 接收数据
self.onmessage = (e) => {
  // 生成工作簿
  const wb = XLSX.utils.book_new();
  // 生成工作表
  const ws = XLSX.utils.json_to_sheet(arr);
  // 添加工作表
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  // 发送数据
  self.postMessage(wb);
};
