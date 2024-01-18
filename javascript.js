const plyBalanceUI = document.getElementById("plyBalanceUI");
const btnUI = document.getElementById("btnBGOne")

var plyBalance = 1000000;

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
/* Create UI elements on window load */
window.onload = function generateUI(){
	const text = "Amount: "
	for (var x = 1; x < 6; x++){
	const newNode = document.createTextNode(text);
	if(!document.getElementById("g" + x + "inline").children[2]){
			const element = document.getElementById("g" + x + "inline").children[1];
			element.classList.add("inline");
			element.setAttribute("id", "Gen" + x + "Amount")
			element.replaceChild(newNode, element.childNodes[0]);
		}
	}
}
/* Update UI plyBalances every milisecond */
setInterval(function checkVal(){
	plyBalance = plyBalance;
	plyBalanceUI.innerHTML = "Balance: " + plyBalance.toString();
	let amount = document.getElementsByClassName("gen UI")

	for(var x = 1; x <= amount.length; x++){
		var buyGen = document.getElementById("buyGenerator_" + x);
		buyGen.innerHTML = "Buy (" + genPrices.get("Generator " + x) + ")"
		var text = document.getElementById("Gen" + x + "Amount");
		text.innerHTML = "Amount: " + boughtGens.get("Generator " + x);
	}
}, 50);

setInterval(function updateUI(){
	let amount = document.getElementsByClassName("gen UI")
	for(x = 0; x < amount.length; x++){
		var updates = document.getElementsByClassName("gen UI")[x].id;
		id = updates.replace("_", " ");
		genPrices.set(id, genPrices.get(id))
	}
}, 50);	

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

