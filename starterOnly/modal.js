

class Modal {

	constructor() {

		this.modalBg = document.querySelector(".bground");
		this.modalBtn = document.querySelector(".modal-btn");
		this.modalBtnMobile = document.getElementById("buttonSignUpForMobile");
		this.formData = document.querySelectorAll(".formData");
		this.closeButton = document.getElementById("close");
	}

	displayOrCloseModal() {

		this.modalBtn.addEventListener("click", () => {

			this.modalBg.style.display = "block";
		});

		this.modalBtnMobile.addEventListener("click", () => {

			this.modalBg.style.display = "block";
		});

		this.closeButton.addEventListener("click", () => {

			this.modalBg.style.display = "none";
		})
	}
}

const modal = new Modal();

modal.displayOrCloseModal();





