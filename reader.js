//---------------環境設定-----------------
//remixのボタンを押して取得したコントラクトアドレスを貼り付け
const Address = "0x300359Af32c7964E6DDafe79C12E3024dc7539C7";

//remixのボタンを押して取得したABIを貼り付け
const ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "n",
        "type": "uint256"
      }
    ],
    "name": "setnumber",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get3",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getnumber",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]

//metamask利用許可ダイアログを出す
ethereum.enable();


//--------------ここからメイン処理---------------
//------web3.jsの読み込み待ちのため、window.onloadにメイン処理を入れる--------

window.onload = function () {

  //metamaskの準備
  web3js = new Web3(web3.currentProvider);
  //スマートコントラクト読み込み
  mycontract = new web3js.eth.Contract(ABI, Address);

  //1.00-beta.36と表示されるのが正しい
  console.log("reader.js_is_checking_web3.js_version..." + Web3.version);


  mycontract.methods.get3().call().then((fromblockchain1) => {
    //上記はコントラクト上のget3関数を呼び出すための定型句です。呼び出し結果は「fromblockchain1」で利用可
    document.getElementById("id3").innerHTML = fromblockchain1;
  });
  mycontract.methods.getnumber().call().then((fromblockchain2) => {
    //上記はコントラクト上のgetnumber関数を呼び出すための定型句です。呼び出し結果は「fromblockchain2」で利用可
    document.getElementById("idn").innerHTML = fromblockchain2;
  });
}

