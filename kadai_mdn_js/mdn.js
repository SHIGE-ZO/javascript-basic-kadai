const date = new Date();
const [Month , Day , Year] = [
  date.getMonth()+1,
  date.getDate(),
  date.getFullYear()
];
console.log(Year + '年' + Month + '月' + Day + '日');