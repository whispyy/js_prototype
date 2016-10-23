class Etudiant {
	constructor(nom, prenom, annee, notes){
		this.nom = nom;
		this.prenom = prenom;
		this.annee = annee;

		if(notes != undefined){
			this.notes = notes;
		}
	}

	getName(){
		return this.nom;
	}

	getPrenom(){
		return this.prenom;
	}

	getAnnee(){
		return this.annee;
	}
	
	moyenne(){
		var sum = 0;
		for (var i = 0; i < this.notes.length; i++) {
			sum +=this.notes[i];
		}
		return sum/this.notes.length;
	}



}