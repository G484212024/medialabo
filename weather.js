
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log('経度'+data.coord.lon);
    console.log('緯度'+data.coord.lat);
    console.log('天気'+data.weather[0].description);
    console.log('最低気温'+data.main.temp_min);
    console.log('最高気温'+data.main.temp_max);
    console.log('湿度'+data.main.humidity);
    console.log('風速'+data.wind.speed);
    console.log('風向'+data.wind.deg);
    console.log('都市名'+data.name);
}




// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    let d=[
  {n:'経度'+(data.coord.lon)},
  {n:'緯度'+data.coord.lat},
  {n:'天気'+data.weather[0].description},
  {n:'最低気温'+data.main.temp_min},
  {n:'最高気温'+data.main.temp_max},
  {n:'湿度'+data.main.humidity},
  {n:'風速'+data.wind.speed},
  {n:'風向'+data.wind.deg},
  {n:'都市名'+data.name}
    ];

    let di=document.querySelector('div#result'); 
    let u=document.createElement('ul');
    u.setAttribute('id','jyoho');
    di.insertAdjacentElement('afterend',u); 
     

    for(let a of d){
      let l=document.createElement('li');
      l.textContent = a.n;                  // ul要素の中に追加
      u.insertAdjacentElement('beforeend', l); 
    }
    
}
// 6-1 のイベントハンドラ登録処理は以下に記述

let toshi = {
  'カイロ': 360630, 'エジプト': 360630, Cairo: 360630,
  'モスクワ': 524901, 'ロシア': 524901, Moscow: 524901,
  'ヨハネスブルク': 993800, '南アフリカ': 993800, Johannesburg: 993800,
  '北京': 1816670, '中華人民共和国': 1816670, Beijing: 1816670,
  '東京': 1850147, '日本': 1850147, Tokyo: 1850147,
  'シンガポール': 1880252, Singapore: 1880252,
  'シドニー': 2147714, 'オーストラリア': 2147714, Sydney: 2147714,
  'ロンドン': 2643743, 'イギリス': 2643743, London: 2643743,
  'パリ': 2968815, 'フランス': 2968815, Paris: 2968815,
  'リオデジャネイロ': 3451189, 'ブラジル': 3451189, 'Rio de Janeiro': 3451189,
  'ニューヨーク': 5128581, 'アメリカ合衆国': 5128581, 'New York': 5128581,
  'ロサンゼルス': 5368361, 'Los Angeles': 5368361
};


let b = document.querySelector('button#print');

b.addEventListener('click',sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  u=document.querySelector('ul#jyoho'); 
  if(u!==null){
    u.remove();
  }
  
  let x=document.querySelector('input[name=kuni]');
  let kuni = x.value;
  console.log(kuni);  

	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/';
  
  let id=toshi[kuni];
  let url2='.json';
  let url3=url+id+url2;
	// 通信開始
	axios.get(url3)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

  
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること

