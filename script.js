/* Mauvaise façon de créer un prototype */
/*
JF.__proto__ = Etudiant;
*/

/* creer un prototype façon propre*/
var Etudiant = function(nom,prenom,annee){
	this.nom = nom;
	this.prenom = prenom;
	this.annee = annee;
}

var JF = new Etudiant('Durand',"JF",5);

Etudiant.prototype.affichage = function(){
	return "Nom :"+this.nom+
		   ", Prenom :"+this.prenom
		   "Annee :"+this.annee;
}

/* preuve qu'on a crée un prototype*/
console.log(JF.__proto__ == Etudiant.prototype);