const plyBalanceUI = document.getElementById("plyBalanceUI");
const btnUI = document.getElementById("btnBGOne")

var plyBalance = 1000;

const boughtGens = new Map([
	["Generator 1", 0],
	["Generator 2", 0],
	["Generator 3", 0],
	["Generator 4", 0],
	["Generator 5", 0]
]);

genPrices = new Map([
	["Generator 1", 10],
	["Generator 2", 100],
	["Generator 3", 500],
	["Generator 4", 1000],
	["Generator 5", 5000]
]);

/* Update UI plyBalances every milisecond */
setInterval(function checkVal(){
	plyBalance = plyBalance;
	plyBalanceUI.innerHTML = "Balance: " + plyBalance.toString();
	buyGenerator_1.innerHTML = "Buy (" + genPrices.get("Generator 1") + ")"
	buyGenerator_2.innerHTML = "Buy (" + genPrices.get("Generator 2") + ")"


}, 50);

function updateUI(){
	var updates = document.getElementsByClassName("gen UI");
	console.log(updates)
}

genProd = new Map([
	["Generator 1", 1],
	["Generator 2", 5],
	["Generator 3", 10],
	["Generator 4", 15],
	["Generator 5", 25]
]);


/* When the button is pressed add +1 to the plyBalance */

function btnClick() {
	plyBalance = plyBalance + 1;
	plyBalanceUI.innerHTML = "Balance: " + plyBalance.toString();
	console.log("Click!");
};

/* UPDATE [ Money Gained Method ]*/
/* Make it so plyBalance = plyBalance + KW/s value for smooth money gain*/

/* Dynamic Buying Generators without hard-coding each one*/

function buyGen(id){

	id = id.slice(3,14).replace("_", " ")
	let price = genPrices.get(id);
	switch(true){
		case (plyBalance >= price):
			plyBalance = plyBalance - genPrices.get(id);
			boughtGens.set(id, boughtGens.get(id) + 1 );
			genPrices.set(id, Math.floor(genPrices.get(id) * 1.25));
			
		break
	
	case (plyBalance < price):
		console.log("Cannot Afford!")
	break;

	default:
		console.log("Something weird just happend?");
	break;
	}
}