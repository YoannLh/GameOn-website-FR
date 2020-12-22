

class Modal {

	constructor() {

		this.modalBg = document.querySelector(".bground");
		this.modalBtn = document.querySelector(".modal-btn");
		this.formData = document.querySelectorAll(".formData");
		this.closeButton = document.getElementById("close");
	}

	displayOrCloseModal() {

		this.modalBtn.addEventListener("click", () => {

			this.modalBg.style.display = "block";
		});

		this.closeButton.addEventListener("click", () => {

			this.modalBg.style.display = "none";
		})
	}
}

const modal = new Modal();

modal.displayOrCloseModal();




// function editNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// // DOM Elements
// const modalbg = document.querySelector(".bground");
// const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");

// // launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// // launch modal form
// function launchModal() {
//   modalbg.style.display = "block";
// }


