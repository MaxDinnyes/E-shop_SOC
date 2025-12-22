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




let index = 0;
const left = 0, middle = 1, right = 2;

const zlavy = document.querySelector('.zlavaLand');
const zlavyProdukty = Array.from(zlavy.getElementsByClassName('zlavaItem'));
const zlavaText = document.getElementById("zlavaText");

function updatePositions() {
  const middleWidthPercent = 33.33;
  const sideWidthPercent = (100 - middleWidthPercent) / 2;
  
  zlavyProdukty.forEach((item, i) => {
    if(width <= 697) {
      if(i === index) {
        item.style.width = `100%`;
        item.style.left = `0%`;
        item.classList.add('opacity');
        zlavaText.textContent = "Samsung Galaxy S25";
      } else if (i === (index + 2) % 3) {
        item.style.width = `100%`;
        item.style.left = `-200%`;
        item.classList.remove('opacity');
        zlavaText.textContent = "iPhone 17";
      } else if (i === (index + 1) % 3) {
        item.style.width = `100%`;
        item.style.left = `200%`;
        item.classList.remove('opacity');
        zlavaText.textContent = "Apple Watch Ultra 3";
      }
    } else if(width <= 887) {
      if(i === index) {
        item.style.width = `${middleWidthPercent}%`;
        item.style.left = `${sideWidthPercent}%`;
        item.classList.add('opacity');
        zlavaText.textContent = "Samsung Galaxy S25";
      } else if (i === (index + 2) % 3) {
        item.style.width = `${sideWidthPercent}%`;
        item.style.left = `0%`;
        item.classList.remove('opacity');
        zlavaText.textContent = "iPhone 17";
      } else if (i === (index + 1) % 3) {
        item.style.width = `${sideWidthPercent}%`;
        item.style.left = `${sideWidthPercent + middleWidthPercent}%`;
        item.classList.remove('opacity');
        zlavaText.textContent = "Apple Watch Ultra 3";
      }
    } else {
      if(i === index) {
        item.style.width = `33.33%`;
        item.style.left = `33.33%`;
        item.classList.add('opacity');
        zlavaText.textContent = "Samsung Galaxy S25";
      } else if (i === (index + 2) % 3) {
        item.style.width = `33.33%`;
        item.style.left = `0%`;
        item.classList.remove('opacity');
        zlavaText.textContent = "iPhone 17";
      } else if (i === (index + 1) % 3) {
        item.style.width = `33.33%`;
        item.style.left = `66.66%`;
        item.classList.remove('opacity');
        zlavaText.textContent = "Apple Watch Ultra 3";
      }
    }
  });
}

function plusImg(n) {
  index += n;
  if(index > 2) index = 0;
  if(index < 0) index = 2;
  updatePositions();
}

updatePositions();