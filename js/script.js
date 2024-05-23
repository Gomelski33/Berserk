const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  
	slidesPerView: 3,

	pagination: {
    el: '.swiper-pagination',
  },
	scrollbar: {
    el: '.swiper-scrollbar',
  },

  
});
let i =0;
let image = document.getElementById("img0-1");
let imgs =new Array(
	"../img/1-00/001.jpg",
	"../img/1-00/002.jpg",
	"../img/1-00/003.jpg",
	"../img/1-00/004.jpg",
	"../img/1-00/005.jpg",
	"../img/1-00/006.jpg",
	"../img/1-00/007.jpg",
	"../img/1-00/008.jpg",
	"../img/1-00/009.jpg",
	"../img/1-00/010.jpg",
	"../img/1-00/011.jpg",
	"../img/1-00/012.jpg",
	"../img/1-00/013.jpg",
	"../img/1-00/014.jpg",
	"../img/1-00/015.jpg",
	"../img/1-00/016.jpg",
	"../img/1-00/017.jpg",
	"../img/1-00/018.jpg",
	"../img/1-00/019.jpg",
	"../img/1-00/020.jpg",
	"../img/1-00/021.jpg",
	"../img/1-00/022.jpg",
	"../img/1-00/023.jpg",
	"../img/1-00/024.jpg",
	"../img/1-00/025.jpg",
	"../img/1-00/026.jpg",
	"../img/1-00/027.jpg",
	"../img/1-00/028.jpg",
	"../img/1-00/029.jpg",
	"../img/1-00/030.jpg",
	"../img/1-00/031.jpg",
	"../img/1-00/032.jpg",
	"../img/1-00/033.jpg",
	"../img/1-00/034.jpg",
	"../img/1-00/035.jpg",
	"../img/1-00/036.jpg",
	"../img/1-00/037.jpg",
	"../img/1-00/038.jpg",
	"../img/1-00/039.jpg",
	"../img/1-00/040.jpg",
	"../img/1-00/041.jpg",
	"../img/1-00/042.jpg",
	"../img/1-00/043.jpg",
	"../img/1-00/044.jpg",
	"../img/1-00/045.jpg",
	"../img/1-00/046.jpg",
)
function change(){
	i++;i%=imgs.length;
	image.src = imgs[i];
}
function back(){
	i--;i%=imgs.length;
	image.src = imgs[i];
}