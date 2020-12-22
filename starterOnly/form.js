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
		this.lastName = document.getElementById("last");
		this.lastName.value = localStorage.getItem("lastName");
		this.mail = document.getElementById("email");
		this.mail.value = localStorage.getItem("mail");
		this.birthdate = document.getElementById("birthdate");
		this.birthdate.value = localStorage.getItem("birthdate");
		this.numberOfTournament = document.getElementById("quantity");
		this.numberOfTournament.value = localStorage.getItem("tournament");
	}

	isAllGoodWhenButtonSubmitIsClicked() {

		this.buttonSubmit.addEventListener("click", () => {

		});
	}

	storeAndcheckIfNamesAreEnoughLonger() {

		console.log(this.firstName.value);
		console.log(this.lastName.value);

		this.firstName.addEventListener("input", () => {

			if(this.firstName.value.length < 2) {

				console.log("Rentre au moins 2 caractères");
			}

			localStorage.setItem("firstName", this.firstName.value);
		});

		this.lastName.addEventListener("input", () => {

			if(this.lastName.value.length < 2) {

				console.log("Rentre au moins 2 caractères");
			}

			localStorage.setItem("lastName", this.lastName.value);
		});	
	}

	checkIfMailIsOk() {

		// Regex

		this.mail.addEventListener("input", () => {
			localStorage.setItem("mail", this.mail.value);
		});
	}

	storeBirthdate() {

		this.birthdate.addEventListener("input", () => {
			localStorage.setItem("birthdate", this.birthdate.value);
		});
	}

	checkIfTournamentsIsANumber() {

		this.numberOfTournament.addEventListener("input", () => {

			let numberOfTour = this.numberOfTournament.value;

			console.log(Number(numberOfTour));

			localStorage.setItem("tournament", Number(numberOfTour));

			// if(typeof Number(numberOfTour) === "number") {

			// 	console.log("Veuillez renseigner une valeur numérique");
			// }
		});
	}

	checkIfCGUIsChecked() {

		// boolean ? 	if(unchecked) {}
	}
}

const form = new Form();

form.storeAndcheckIfNamesAreEnoughLonger();
form.checkIfMailIsOk();
form.storeBirthdate();
form.checkIfTournamentsIsANumber();
form.checkIfCGUIsChecked();

console.log(localStorage);

//localStorage.clear();














