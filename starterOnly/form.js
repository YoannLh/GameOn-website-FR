 
// Les données doivent être saisies correctement :
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// (3) L'adresse électronique est valide.
// (4) Pour le nombre de concours, une valeur numérique est saisie.
// (5) Un bouton radio est sélectionné.
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

// Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. 
// Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :
// "Veuillez entrer 2 caractères ou plus pour le champ du nom."
// "Vous devez choisir une option."
// "Vous devez vérifier que vous acceptez les termes et conditions."
// "Vous devez entrer votre date de naissance."

class Form {

	constructor() {

		this.buttonSubmit = document.getElementById("btn-submit");
		this.firstName = document.getElementById("first");
		this.firstName.value = localStorage.getItem("firstName");
		this.alertFirstName = document.getElementById("alertFirstName");
		this.lastName = document.getElementById("last");
		this.lastName.value = localStorage.getItem("lastName");
		this.alertLastName = document.getElementById("alertLastName")
		this.mail = document.getElementById("email");
		this.alertMail = document.getElementById("alertMail");
		this.mail.value = localStorage.getItem("mail");
		this.birthdate = document.getElementById("birthdate");
		this.alertBirthdate = document.getElementById("alertBirthdate");
		this.birthdate.value = localStorage.getItem("birthdate");
		this.numberOfTournament = document.getElementById("quantity");
		this.numberOfTournament.value = localStorage.getItem("tournament");
		this.alertTournament = document.getElementById("alertTournament");
		this.location1 = document.getElementById("location1");
		this.location2 = document.getElementById("location2");
		this.location3 = document.getElementById("location3");
		this.location4 = document.getElementById("location4");
		this.location5 = document.getElementById("location5");
		this.location6 = document.getElementById("location6");
		this.alertTown = document.getElementById("alertTown");
		this.checkbox1 = document.getElementById("checkbox1");
		this.checkbox2 = document.getElementById("checkbox2");
		this.alertCGU = document.getElementById("alertCGU");
		this.checkIfSubmitFailed = false;
		this.goToConfirmation = false;
	}

	isItAllGood() {

		if(this.checkIfSubmitFailed) { 

			// check si le prénom est valide
			if(this.firstName.value.length < 2) {

				this.alertFirstName.style.display = "block";

			} else {

				this.alertFirstName.style.display = "none";
			}

			// check si le nom est valide
			if(this.lastName.value.length < 2) {

				this.alertLastName.style.display = "block";

			} else {

				this.alertLastName.style.display = "none";
			}

			// check si le mail est valide
			let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

			if(!this.mail.value.match(mailFormat)) {

				this.alertMail.style.display = "block";

			} else {

				this.alertMail.style.display = "none";
			}

			// check si la date de naissance est saisie
			if(!this.birthdate.value) {

				this.alertBirthdate.style.display = "block";

			} else {

				this.alertBirthdate.style.display = "none";
			}

			// check si la valeur est saisie est numérique et différente de 0
			if(!this.numberOfTournament.value 
			|| isNaN(this.numberOfTournament.value)
			|| this.numberOfTournament.value === "0") {

				this.alertTournament.style.display = "block";

			} else {

				this.alertTournament.style.display = "none";
			}

			// boutons radio villes
			if(this.location1.checked === false 
			&& this.location2.checked === false
			&& this.location3.checked === false
			&& this.location4.checked === false
			&& this.location5.checked === false
			&& this.location6.checked === false) {

				this.alertTown.style.display = "block";

			} else {

				this.alertTown.style.display = "none";
			}

			// check si CGU est cochée
			if(this.checkbox1.checked === false) {

				this.alertCGU.style.display = "block";

			} else {

				this.alertCGU.style.display = "none";
			}
		}
	}

	storeNames() {

		console.log(this.firstName.value);
		console.log(this.lastName.value);

		this.firstName.addEventListener("input", () => {

			this.isItAllGood();

			localStorage.setItem("firstName", this.firstName.value);
		});

		this.lastName.addEventListener("input", () => {

			this.isItAllGood();

			localStorage.setItem("lastName", this.lastName.value);
		});	
	}

	storeMail() {

		this.mail.addEventListener("input", () => {

			this.isItAllGood();

			localStorage.setItem("mail", this.mail.value);
		});
	}

	storeBirthdate() {

		this.birthdate.addEventListener("input", () => {

			this.isItAllGood();	

			localStorage.setItem("birthdate", this.birthdate.value);
		});
	}

	storeNumberOfTournaments() {

		this.numberOfTournament.addEventListener("input", () => {

			this.isItAllGood();

			console.log(Number(this.numberOfTournament.value));

			localStorage.setItem("tournament", Number(this.numberOfTournament.value));
		})
	}

	storeTown() {

		this.location1.addEventListener("click", () => {

			this.isItAllGood();

			if(this.location1.checked === true) { 

				localStorage.setItem("town", this.location1.value);
			}
		});

		this.location2.addEventListener("click", () => {

			this.isItAllGood();

			if(this.location2.checked === true) { 

				localStorage.setItem("town", this.location2.value);
			}
		});

		this.location3.addEventListener("click", () => {

			this.isItAllGood();

			if(this.location3.checked === true) { 

				localStorage.setItem("town", this.location3.value);
			}
		});

		this.location4.addEventListener("click", () => {

			this.isItAllGood();

			if(this.location4.checked === true) { 

				localStorage.setItem("town", this.location4.value);
			}
		});

		this.location5.addEventListener("click", () => {

			this.isItAllGood();

			if(this.location5.checked === true) { 

				localStorage.setItem("town", this.location5.value);
			}
		});

		this.location6.addEventListener("click", () => {

			this.isItAllGood();

			if(this.location6.checked === true) { 

				localStorage.setItem("town", this.location6.value);
			}
		});

		let town = localStorage.getItem("town");

		if(this.location1.value === town) {

			this.location1.checked = true;
		}

		if(this.location2.value === town) {

			this.location2.checked = true;
		}

		if(this.location3.value === town) {

			this.location3.checked = true;
		}

		if(this.location4.value === town) {

			this.location4.checked = true;
		}

		if(this.location5.value === town) {

			this.location5.checked = true;
		}

		if(this.location6.value === town) {

			this.location6.checked = true;
		}
	}

	isItAllGoodWhenButtonSubmitIsClicked() {

		this.buttonSubmit.addEventListener("click", () => {

			console.log("submit");

			this.checkIfSubmitFailed = true;

			this.isItAllGood();		

			if(this.alertFirstName.style.display === "none" 
			&& this.alertLastName.style.display === "none"
			&& this.alertMail.style.display === "none"
			&& this.alertBirthdate.style.display === "none"
			&& this.alertTournament.style.display === "none"
			&& this.alertTown.style.display === "none"
			&& this.alertCGU.style.display === "none") {

				this.goToConfirmation = true;
			
			} else {

				this.goToConfirmation = false;
			}

			console.log(this.goToConfirmation);
		});
	}
}

const form = new Form();

form.storeNames();
form.storeMail();
form.storeBirthdate();
form.storeNumberOfTournaments();
form.storeTown();
form.isItAllGoodWhenButtonSubmitIsClicked();

console.log(localStorage);

//localStorage.clear();














