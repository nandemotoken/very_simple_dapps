//---------------環境設定-----------------
//remixのボタンを押して取得したコントラクトアドレスを貼り付け
//ただし、同じ値をreader.jsで読み込んでいるのでここはコメントアウト
// const Address = "0x300359Af32c7964E6DDafe79C12E3024dc7539C7";

//remixのボタンを押して取得したABIを貼り付け
//ただし、同じ値をreader.jsで読み込んでいるのでここはコメントアウト
// const ABI = [
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "n",
//         "type": "uint256"
//       }
//     ],
//     "name": "setnumber",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "get3",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "getnumber",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]

//--------------ここからメイン処理---------------
//------writerはボタンが押されたときに動くようにするので、ボタンと関連させる関数を作ってメイン処理を入れる--------

function myButtonClicked() {

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( "writer.js_is_checking_web3.js_version..." + Web3.version );

console.log(document.getElementById('id100'))

// var tmp_info;
// function w_function1( hidari , migi ){ mycontract.methods.setnumber(tmp_info).send({from: migi[0] });}
// function simple_test(){ web3js.eth.getAccounts( w_function1 ); }
// function w_f1( t ){ 
// 	tmp_info = Number(t);
// 	simple_test();
// }

}
