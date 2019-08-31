//環境設定
var Address = "0x66325a60194e087388ac11c92909a5c5ba170876";

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );


//---------------------write-------------------------
//コントラクトのwrite処理は次の書式に統一します。
//定義
//function w_functionN( hidari , migi ){ mycontract.methods.setnumber(setnum).send({from: migi[0] });}
//
//利用
//web3js.eth.getAccounts( w_functionN );
//...metamaskの準備が出来たらw_functionNを実行する
//--------------------------------------------------


var tmp_info;
function w_function1( hidari , migi ){ mycontract.methods.setnumber(tmp_info).send({from: migi[0] });}
function simple_test(){ web3js.eth.getAccounts( w_function1 ); }
function w_f1( t ){ 
	tmp_info = Number(t);
	simple_test();
}


