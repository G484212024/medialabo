function tashizan(){

    let i = document.querySelector('input[name=left]');
    left = Number(i.value);
    console.log(i);

    let j = document.querySelector('input[name=right]');
    right = Number(j.value);
    console.log(right);

    let answer = left+right;
    console.log('答え：'+answer);
    let p = document.querySelector('span#answer');
    p.textContent = answer;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', tashizan);