'use strict';

const width = screen.width;
const landImg = document.getElementById("novinkaIMG");
const hamburger = document.querySelector('.hamburger');
const navPhone = document.querySelector('.navPhone');
const navBar = document.querySelector("nav");
const lineTop = document.querySelector("#lineTop");
const lineMid = document.querySelector("#lineMid");
const lineBot = document.querySelector("#lineBot");
let navPhoneOpen = 0;

if(width <= 697) {
    landImg.setAttribute('src', 'iphone-17-pro_overview__er68vecct16q_og.png');
}

hamburger.addEventListener('click', function () {
  if(navPhoneOpen){
    navPhone.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      navPhone.style.display = 'none';
    }, 1000);
    navBar.style.borderRadius = "";
    navPhoneOpen = 0;

    lineTop.style.transform = 'rotate(0deg)';
    lineTop.style.transformOrigin = 'top left';
    lineTop.style.width = '';

    lineMid.style.transform = 'scale(1)';

    lineBot.style.transform = 'rotate(0deg)';
    lineBot.style.transformOrigin = 'bottom left';
    lineBot.style.width = '';
    
  } else {
    navPhone.style.display = 'flex';
    navPhone.style.transform = 'translateY(60px)';
    setTimeout(() => {
      navBar.style.borderRadius = "16px 16px 0 0";
    }, 900);

    lineTop.style.transform = 'rotate(45deg)';
    lineTop.style.transformOrigin = 'top left';
    lineTop.style.width = '20.4px';

    lineMid.style.transform = 'scale(0)';

    lineBot.style.transform = 'rotate(-45deg)';
    lineBot.style.transformOrigin = 'bottom left';
    lineBot.style.width = '20.4px';

    navPhoneOpen = 1;
  }
})