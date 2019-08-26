		console.log( web3 );
		console.log( web3.version );
		console.log( Web3.version );
		web3js = new Web3(web3.currentProvider);
			
                var Address = "0x427444759bb5d100cc7483e9e32bdb32de577b06";
                mycontract = new web3js.eth.Contract(ABI , Address);
		console.log(mycontract);
                mycontract.methods.get3().call().then(console.log);


