let getmenuicon=document.querySelector(".menu-icon")
let getmenu=document.querySelector(".menu")
getmenuicon.addEventListener("click",()=>{
	getmenu.classList.toggle("active")
	getmenu.style=`opacity: 1;
			visibility: visible;
			 transform: Y(0);
			 transition:1s;`
})

$(document).ready(function(){
              $('.center').slick({
                    autoplay: true,
  					autoplaySpeed: 2000,
                    dots:false,
                    slidesToShow: 5,
                    responsive: [
                     {
                        breakpoint: 992,
                        settings: {
                        arrows: false,
                        slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                        arrows: false,
                        slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                        arrows: false,
                        slidesToShow: 2
                        }
                    },
                     {
                        breakpoint: 440,
                        settings: {
                        arrows: false,
                        slidesToShow: 1
                        }
                    }
                    ]
              });
              $('.sliderjs').slick({
                    autoplay: true,
  					autoplaySpeed: 1000,
                    dots:false,
                    slidesToShow: 3,
                    responsive: [
                     {
                        breakpoint: 1260,
                        settings: {
                        arrows: true,
                        slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                        arrows: false,
                        slidesToShow: 1
                        }
                    }
                    ]
              });
              $('.bestjs').slick({
                    autoplay: true,
  					autoplaySpeed: 2000,
                    dots:true,
                    slidesToShow: 3,
                    responsive: [
                     {
                        breakpoint: 1260,
                        settings: {
                        arrows: true,
                        slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                        arrows: false,
                        slidesToShow: 1
                        }
                    }
                    ]
              });
              $('.activitesjs').slick({
                    autoplay: true,
  					autoplaySpeed: 2000,
                    dots:true,
                    slidesToShow: 3,
                    responsive: [
                     {
                        breakpoint: 1260,
                        settings: {
                        arrows: false,
                        slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                        arrows: false,
                        slidesToShow: 1
                        }
                    }
                    ]
              });
              $('.largestjs').slick({
                    autoplay: true,
  					autoplaySpeed: 2000,
                    dots:true,
                    slidesToShow: 2,
                    responsive: [
                     {
                        breakpoint: 992,
                        settings: {
                        arrows: false,
                        slidesToShow: 1
                        }
                    },
                    ]
              });
            });
let getblock=document.querySelector(".block")
setTimeout(()=>{
    getblock.style=`display:none;`
},1000)

let getcoverfind=document.querySelector(".cover-find")
let getcoversearch=document.querySelector(".cover-search")
let getslider=document.querySelector(".slider")
let getstart=document.querySelector(".start")
let getnearby=document.querySelector(".nearby")
let getsliderjs=document.querySelector(".sliderjs")
let gettrend=document.querySelector(".trend")
let getbestjs=document.querySelector(".bestjs")
let getexplore=document.querySelector(".explore")
let getactivites=document.querySelector(".activites")
let getactivitesjs=document.querySelector(".activitesjs")
let gettopend=document.querySelector(".top-end")
let getlargestjs=document.querySelector(".largestjs")
window.addEventListener("scroll",()=>{
   if (scrollY>60) {
        getcoverfind.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>80) {
        getcoversearch.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>80) {
        getslider.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>200) {
        getstart.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>300) {
        getnearby.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if(scrollY>700){
        getsliderjs.style=`opacity: 1;
            visibility: visible;
            transform:rotateY(0);
            transition:2s;`
    }
    if (scrollY>1200) {
        gettrend.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>1400) {
        getbestjs.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>2280) {
        getexplore.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>2524) {
        getactivites.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
     if (scrollY>2900) {
        getactivitesjs.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>3000) {
        gettopend.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
    if (scrollY>3500) {
        getlargestjs.style=`opacity: 1;
            visibility: visible;
             transform: translateY(0);
             transition:2s;`
    }
})


 