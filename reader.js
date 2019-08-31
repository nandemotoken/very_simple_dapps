//環境設定
var Address = "0x66325a60194e087388ac11c92909a5c5ba170876";

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );


//---------------------read--------------------------
//コントラクトのread処理は次の書式に統一します。
//定義
//function r_functionN( r_resultN ){ javascriptの処理内容...console.log(read_resultN)など }
//
//利用
//mycontract.methods.getnumber().call().then(r_functionN);
//...solidityの関数呼出の結果が、r_functionNで処理される。
//---------------------------------------------------

function r_function1( r_result1 ){ console.log(r_result1); }
mycontract.methods.get3().call().then(r_function1);
mycontract.methods.getnumber().call().then(r_function1);




