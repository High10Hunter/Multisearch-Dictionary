document.getElementById("search-btn").addEventListener("click", translateWord);

function translateWord() {
	//get the word need to translate
	let word = document.getElementById("search_word").value;
	word = word.toLowerCase();
	console.log(word);

	if (word != null && word != "") {
		let urlOxford = `https://www.oxfordlearnersdictionaries.com/definition/english/${word}`;
		let urlCambridge = `https://dictionary.cambridge.org/dictionary/english/${word}`;
		let urlCollins = `https://www.collinsdictionary.com/us/dictionary/english/${word}`;
		let urlMacmillan = `https://www.macmillandictionary.com/dictionary/british/${word}`;
		let urlFreeDic = `https://www.thefreedictionary.com/${word}`;
		let urlGGTrans = `https://translate.google.com/?hl=vi&sl=en&tl=vi&text=${word}&op=translate`;

		let rememberDicArr = [];
		let urlArr = [];

		if (document.getElementById("oxford").checked) {
			urlArr.push(urlOxford);
			if (rememberDicArr == null || !rememberDicArr.includes("oxford")) {
				rememberDicArr.push("oxford");
			}
		} else {
			if (rememberDicArr != null && rememberDicArr.includes("oxford")) {
				rememberDicArr.splice(rememberDicArr.indexOf("oxford"), 1);
			}
		}
		if (document.getElementById("cambridge").checked) {
			urlArr.push(urlCambridge);
			if (
				rememberDicArr == null ||
				!rememberDicArr.includes("cambridge")
			) {
				rememberDicArr.push("cambridge");
			}
		} else {
			if (
				rememberDicArr != null &&
				rememberDicArr.includes("cambridge")
			) {
				rememberDicArr.splice(rememberDicArr.indexOf("cambridge"), 1);
			}
		}
		if (document.getElementById("collins").checked) {
			urlArr.push(urlCollins);
			if (rememberDicArr == null || !rememberDicArr.includes("collins")) {
				rememberDicArr.push("collins");
			}
		} else {
			if (rememberDicArr != null && rememberDicArr.includes("collins")) {
				rememberDicArr.splice(rememberDicArr.indexOf("collins"), 1);
			}
		}
		if (document.getElementById("macmillan").checked) {
			urlArr.push(urlMacmillan);
			if (
				rememberDicArr == null ||
				!rememberDicArr.includes("macmillan")
			) {
				rememberDicArr.push("macmillan");
			}
		} else {
			if (
				rememberDicArr != null &&
				rememberDicArr.includes("macmillan")
			) {
				rememberDicArr.splice(rememberDicArr.indexOf("macmillan"), 1);
			}
		}
		if (document.getElementById("freeDic").checked) {
			urlArr.push(urlFreeDic);
			if (rememberDicArr == null || !rememberDicArr.includes("freeDic")) {
				rememberDicArr.push("freeDic");
			}
		} else {
			if (rememberDicArr != null && rememberDicArr.includes("freeDic")) {
				rememberDicArr.splice(rememberDicArr.indexOf("freeDic"), 1);
			}
		}
		if (document.getElementById("gg_trans").checked) {
			urlArr.push(urlGGTrans);
			if (
				rememberDicArr == null ||
				!rememberDicArr.includes("gg_trans")
			) {
				rememberDicArr.push("gg_trans");
			}
		} else {
			if (rememberDicArr != null && rememberDicArr.includes("gg_trans")) {
				rememberDicArr.splice(rememberDicArr.indexOf("gg_trans"), 1);
			}
		}
		//set checked dictionary in local storage
		localStorage.setItem("remember_dic", JSON.stringify(rememberDicArr));

		//check the chosen dictionary
		for (let i = 0; i < urlArr.length; i++) {
			let handle = window.open(urlArr[i], "_blank", "popup");
			if (!handle) {
				alert("Turn off popup block!");
			}
		}
	}
}

//handle the press 'Enter' key event
function getKeyCode(event) {
	let keyPress = event.which || event.keyCode;
	if (keyPress === 13) {
		translateWord();
	}
}

let page = document;
page.addEventListener("keydown", getKeyCode);

//Remember the chosen dictionary
let rememberDicArr = JSON.parse(localStorage.getItem("remember_dic"));

if (rememberDicArr != null) {
	for (let i = 0; i < rememberDicArr.length; i++) {
		document.getElementById(rememberDicArr[i]).checked = true;
	}
}
