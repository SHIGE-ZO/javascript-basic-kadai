let num = Math.floor(Math.random() * 101);
// 変数確認用
console.log(num);
// 変数の値が３と５の倍数であれば「３と５の倍数です」という文字列を出力する
if (num%5==0 && num%3==0) {
    console.log("3と5の倍数です");
}
// 変数の値が３の倍数であれば「３の倍数です」と出力する
else if (num%3 === 0) {
    console.log("3の倍数です");
}
// 変数の値が５の倍数であれば「５の倍数です」と出力する
else if (num%5 === 0) {
    console.log("5の倍数です");
}
// 条件に当てはまらなければ変数を出力する
else {
    console.log(num);
}