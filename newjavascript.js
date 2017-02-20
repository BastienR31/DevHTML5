/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function stringWork(chaine) {
    var chaineLength = chaine.length;
    alert(chaineLength);
}

function checkMail(mail){
    
    var mail = mail;
    
    var regMail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,6}$","g");
    if(regMail.test(mail)){
        document.getElementById("responseMail").innerHTML = '<span>adresse mail valide</span>';
    }
    else{
        document.getElementById("responseMail").innerHTML = '<span>adresse mail non valide</span>';
    }

}

function calculMoyenne(tableauNombre) {

    var lengthTableau = tableauNombre.length;
    var sommeTotale = 0;
    var moyenne = 0;

    for (var i = 0; i < lengthTableau; i++) {
        sommeTotale += tableauNombre[i];
    }

    moyenne = sommeTotale / lengthTableau;

    alert(moyenne);
}

function calculPlusGrandNombre(tableauNombre) {

    var max = Math.max.apply(null, tableauNombre);
    
    alert(max);
}

function analyseTemperature() {

}

//Exemple d'une fonction max pour les tableaux
function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
        if (Number(arr[len]) > max) {
            max = Number(arr[len]);
        }
    }
    return max;
}

function lectureJSON() {

    var req = new XMLHttpRequest();
    req.open("GET", "newjson.json", true);

    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            var data = req.responseText;
            var jsonResponse = JSON.parse(data);
            var address = jsonResponse['address'].street;
            document.getElementById('name').innerHTML = '<span>' + jsonResponse['name'] + '</span>';
            document.getElementById('age').innerHTML = '<span>' + jsonResponse['age'] + '</span>';
            document.getElementById('address').innerHTML = '<span>' + address + '</span>';
            document.getElementById('codepostal').innerHTML = '<span>' + jsonResponse['codepostal'] + '</span>';
            document.getElementById('ville').innerHTML = '<span>' + jsonResponse['ville'] + '</span>';
        }
    };

    req.send(null);
}

function ajax() {

}