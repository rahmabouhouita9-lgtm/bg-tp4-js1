"use strict";

function F1() {
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

function F2() {
    let etudiant = {nom: 'John', prenom: 'DOE', age: 30};
    console.log(etudiant);
}

function F3() {
    let etudiantsObjs = [
        {nom: 'nom1', prenom: 'prenom1', age: 21},
        {nom: 'nom2', prenom: 'prenom2', age: 22},
        {nom: 'nom3', prenom: 'prenom3', age: 23}
    ];
    for (let i = 0; i < etudiantsObjs.length; i++) {
        console.log(etudiantsObjs[i].nom + "-" + etudiantsObjs[i].prenom + "-" + etudiantsObjs[i].age);
    }
}