//環境設定

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

//metamask login処理
ethereum.enable().then(console.log);

//--------------ここからメイン処理---------------
//------web3.jsの読み込み待ちのため、window.onloadにメイン処理を入れる--------

window.onload = function (){

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );


mycontract.methods.get3().call().then(r_function1);
mycontract.methods.getnumber().call().then(r_function1);



//---------------------read--------------------------
//コントラクトのread処理は次の書式に統一します。
//定義
//function r_functionN( r_resultN ){ javascriptの処理内容...console.log(read_resultN)など }
//
//利用
//mycontract.methods.getnumber().call().then(r_functionN);
//...solidityの関数呼出の結果が、r_functionNで処理される。
//---------------------------------------------------

}

function r_function1( r_result1 ){ console.log(r_result1); }




