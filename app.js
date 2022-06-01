const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

let currentImgIndex;

const showNextImg = () => {
	if (currentImgIndex === THUMBNAILS.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex++;
	}
	POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};


const showPreviousImg = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = THUMBNAILS.length - 1;
	} else {
		currentImgIndex--;
	}
	POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const closePopup = () => {
	POPUP.classList.add("hidden");
};
	

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


THUMBNAILS.forEach((thumbnail, index) => {
	thumbnail.addEventListener("click", (e) => {
		POPUP.classList.remove("hidden");
		POPUP_IMG.src = e.target.src;
		currentImgIndex = index;
	});
});

POPUP_CLOSE.addEventListener("click", closePopup);

ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
	if (!POPUP.classList.contains("hidden")) {
		if (e.code === "ArrowRight" &&	e.keyCode === 39) {
			 showNextImg(); 
		}

		if (e.code === "ArrowLeft" && e.keyCode === 37) {
			showPreviousImg();
		}

		if (e.code === "Escape" && e.keyCode === 27) {
			closePopup();
		}	
	}
});

POPUP.addEventListener("click", (e) => {
	if (e.target === POPUP) {
		closePopup();
	}
});