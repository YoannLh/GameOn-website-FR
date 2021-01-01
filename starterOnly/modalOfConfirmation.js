

class ModalOfConfirmation {

	 constructor() {

	 	this.modalBg = document.querySelector(".bground");
	 	this.modalBgConfirmation = document.querySelector(".bgroundConfirmation");
		this.buttonSubmit = document.getElementById("btn-submit");
		this.closeButton  = document.getElementById("closeConfirmation");
		this.mainButtonCLose = document.getElementById("btn-submitConfirmation");
	 }

	 displayOrCloseModal() {

		this.buttonSubmit.addEventListener("click", () => {

			console.log("confirmation");

			if(form.goToConfirmation) { 

				this.modalBg.style.display = "none";

				this.modalBgConfirmation.style.display = "block";
			}
		});

		this.closeButton.addEventListener("click", () => {

			this.modalBgConfirmation.style.display = "none";
		});

		this.mainButtonCLose.addEventListener("click", () => {

			this.modalBgConfirmation.style.display = "none";
		})
	}
}

const modalOfConfirmation = new ModalOfConfirmation();

modalOfConfirmation.displayOrCloseModal();