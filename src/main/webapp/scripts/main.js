function haeAutot(){
	console.log("hakusana"+ document.getElementById("hakusana").value);
	let url = "autot?hakusana=" + document.getElementById("hakusana").value;
	let requestOptions = {
		method: "GET",
		headers: {"Content-Type": "application/x-www-form-urlencoded"}
	};
	fetch (url, requestOptions)
	.then(response => response.json())//muutetaan vastausteksti JSON-objektiksi
	.then(response => printItems(response))
	.catch(errorText => console.error("Fetch failed: " + errorText));
}
//Kirjoitetaan tiedot taulukkoon JSON-objektilistasta
function printItems(respObjList){
	//console.log (respObjList);
	let htmlStr="";
	for (let item of respObjList){ //yksi kokoelmaloopeista
		htmlStr+="<tr id='rivi'_"+item.id+"'>";
		htmlStr+="<td>"+item.rekno+"</td>";
		htmlStr+="<td>"+item.merkki+"</td>";
		htmlStr+="<td>"+item.malli+"</td>";
		htmlStr+="<td>"+item.vuosi+"</td>";
		//htmlStr+="<td><a href='muutaauto.jsp?id="+item.id+"'>Muuta</a>&nbsp;";
		//htmlStr+="<span class='poista' onclick=varmistaPoisto('"+item.id"','"+encodeURI(item.rekno)+"')>Poista</span></td>";
		htmlStr+="</tr>";	
	}
	document.getElementById("tbody").innerHTML=htmlStr;	
}