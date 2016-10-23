/* Mauvaise façon de créer un prototype */
/*
JF.__proto__ = Etudiant;
*/

/* creer un prototype façon propre*/
var Etudiant = function(nom,prenom,annee, notes){
	this.nom = nom;
	this.prenom = prenom;
	this.annee = annee;
	if (notes != undefined){
		this.notes = notes
	}
}

Etudiant.prototype.getName = function(){
	return this.nom;
}

Etudiant.prototype.getPrenom = function(){
	return this.prenom;
}

Etudiant.prototype.getAnnee = function(){
	return this.annee;
}

Etudiant.prototype.affichage = function(){
	return "Nom :"+this.nom+
		   ", Prenom :"+this.prenom+
		   "Annee :"+this.annee;
}

Etudiant.prototype.moyenne = function(){
	var sum = 0;
	for (var i = 0; i < this.notes.length; i++) {
		sum +=this.notes[i];
	}
	return sum/this.notes.length;
}


var JF = new Etudiant('Durand',"JF",5);
var JF2 = new Etudiant('Durand',"JF",5,[10,15]);
/* preuve qu'on a crée un prototype*/
console.log(JF.__proto__ == Etudiant.prototype);