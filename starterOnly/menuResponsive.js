

class MenuResponsive {

	constructor() {

		this.iconMenu = document.getElementById("iconMenu");
	}

	editNav() {

		this.iconMenu.addEventListener("click", () => {

			const iconBurger = document.getElementById("myTopnav");

			if (iconBurger.className === "topnav") {

				iconBurger.className += " responsive";

			} else {

				iconBurger.className = "topnav";
			}
		})
	}
}

const menuResponsive = new MenuResponsive();

menuResponsive.editNav();

