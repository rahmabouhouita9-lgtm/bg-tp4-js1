// 1. Représenter un produit avec son nom, son prix et sa quantité. Déterminer et afficher la valeur totale de son stock[cite: 1].
const produitUnique = { nom: "Clavier", prix: 45, quantite: 12 };
const valeurStockUnique = produitUnique.prix * produitUnique.quantite;
console.log(`1. Valeur totale du stock pour ${produitUnique.nom} : ${valeurStockUnique}€`);

// 2. Constituer un catalogue de 5 produits et afficher uniquement ceux dont le prix dépasse le prix moyen du catalogue[cite: 1].
const catalogue = [
    { nom: "Clavier", prix: 45, quantite: 12 },
    { nom: "Souris", prix: 25, quantite: 30 },
    { nom: "Écran", prix: 150, quantite: 8 },
    { nom: "Casque", prix: 60, quantite: 15 },
    { nom: "Tapis", prix: 10, quantite: 50 }
];

let sommePrix = 0;
for (let i = 0; i < catalogue.length; i++) {
    sommePrix += catalogue[i].prix;
}
const prixMoyen = sommePrix / catalogue.length;

const produitsChers = catalogue.filter(produit => produit.prix > prixMoyen);
console.log(`2. Prix moyen : ${prixMoyen}€. Produits au-dessus du prix moyen :`, produitsChers);

// 3. Déterminer le nombre total d'articles disponibles dans le magasin ainsi que la valeur globale du stock (en utilisant reduce)[cite: 1].
const totalArticles = catalogue.reduce((accumulateur, produit) => accumulateur + produit.quantite, 0);
const valeurGlobaleStock = catalogue.reduce((accumulateur, produit) => accumulateur + (produit.prix * produit.quantite), 0);

console.log(`3. Nombre total d'articles : ${totalArticles}`);
console.log(`3. Valeur globale du stock : ${valeurGlobaleStock}€`);

// 4. Mettre en place un mécanisme permettant de calculer la valeur du stock d'un produit donné. Vérifier son fonctionnement sur plusieurs produits (en utilisant une fonction)[cite: 1].
function calculerValeurStockProduit(produit) {
    return produit.prix * produit.quantite;
}

console.log(`4. Valeur du stock de Souris : ${calculerValeurStockProduit(catalogue[1])}€`);
console.log(`4. Valeur du stock de Écran : ${calculerValeurStockProduit(catalogue[2])}€`);

// 5. Mettre en place un mécanisme permettant d'appliquer différents traitements à l'ensemble du catalogue. L'utiliser pour afficher les noms, puis les prix (callbacks)[cite: 1].
function appliquerTraitementCatalogue(catalogue, callback) {
    catalogue.forEach(produit => callback(produit));
}

console.log("5. Noms des produits du catalogue :");
appliquerTraitementCatalogue(catalogue, produit => console.log(`- ${produit.nom}`));

console.log("5. Prix des produits du catalogue :");
appliquerTraitementCatalogue(catalogue, produit => console.log(`- ${produit.prix}€`));