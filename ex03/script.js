"use strict";

const Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14.5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7.1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13.3 }
];

function fonctionB(moyenne) {
    return moyenne >= 10;
}

function fonctionA() {
    for (let i = 0; i < Students.length; i++) {
        let resultat = fonctionB(Students[i].note) ? "ADMIS" : "AJOURNÉ";
        console.log(Students[i].id + ": " + resultat);
    }
}