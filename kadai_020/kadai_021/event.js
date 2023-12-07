const btn = document.getElementById('btn');
btn.addEventListener('click' , () => {
    const text = document.getElementById('text');
    // console.log('処理２')
    
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
        // console.log('処理１');
    }, 2000);
});
// console.log('処理３');
