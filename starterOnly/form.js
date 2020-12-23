
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

	}

	isAllGoodWhenButtonSubmitIsClicked() {

		this.buttonSubmit.addEventListener("click", () => {

			console.log("submit");

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

			if(this.checkbox1.checked === false) {

				this.alertCGU.style.display = "block";

			} else {

				this.alertCGU.style.display = "none";
			}

		});
	}

	storeAndcheckIfNamesAreEnoughLonger() {

		console.log(this.firstName.value);
		console.log(this.lastName.value);

		this.firstName.addEventListener("input", () => {

			if(this.firstName.value.length < 2) {

				this.alertFirstName.style.display = "block";

			} else {

				this.alertFirstName.style.display = "none";
			}

			localStorage.setItem("firstName", this.firstName.value);
		});

		this.lastName.addEventListener("input", () => {

			if(this.lastName.value.length < 2) {

				this.alertLastName.style.display = "block";

			} else {

				this.alertLastName.style.display = "none";
			}

			localStorage.setItem("lastName", this.lastName.value);
		});	
	}

	checkIfMailIsOk() {

		this.mail.addEventListener("input", () => {

			if(!this.mail.value) { // <<< Regex

				this.alertMail.style.display = "block";

			} else {

				this.alertMail.style.display = "none";
			}

			localStorage.setItem("mail", this.mail.value);
		});
	}

	storeBirthdate() {

		this.birthdate.addEventListener("input", () => {

			if(!this.birthdate.value) {

				this.alertBirthdate.style.display = "block";

			} else {

				this.alertBirthdate.style.display = "none";
			}

			localStorage.setItem("birthdate", this.birthdate.value);
		});
	}

	checkIfTournamentsIsANumber() {

		this.numberOfTournament.addEventListener("input", () => {

			if(!this.numberOfTournament.value) {

				this.alertTournament.style.display = "block";

			} else {

				this.alertTournament.style.display = "none";
			}

			let numberOfTour = this.numberOfTournament.value;

			console.log(Number(numberOfTour));

			localStorage.setItem("tournament", Number(numberOfTour));

			// if(typeof Number(numberOfTour) === "number") {

			// 	console.log("Veuillez renseigner une valeur numérique");
			// }
		});
	}
}

const form = new Form();

form.isAllGoodWhenButtonSubmitIsClicked();
form.storeAndcheckIfNamesAreEnoughLonger();
form.checkIfMailIsOk();
form.storeBirthdate();
form.checkIfTournamentsIsANumber();

console.log(localStorage);

//localStorage.clear();














