function tashizan(){

    let i = document.querySelector('input[name=left]');
    left = Number(i.value);
    //console.log(i);動作確認

    let j = document.querySelector('input[name=right]');
    right = Number(j.value);
    //console.log(right);動作確認

    let answer = left+right;
    console.log('答え：'+answer);
    let p = document.querySelector('span#answer');
    p.textContent = answer;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', tashizan);