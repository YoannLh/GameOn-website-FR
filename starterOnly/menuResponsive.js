

class MenuResponsive {

	editNav() {

		const iconBurger = document.getElementById("myTopnav");

		if (iconBurger.className === "topnav") {

			iconBurger.className += " responsive";

		} else {

			iconBurger.className = "topnav";
		}
	}
}

const menuResponsive = new MenuResponsive();

