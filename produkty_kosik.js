'use strict';

/* ---------------------- produkty ---------------------- */

const produkty = [
  //////////////////////////telefony//////////////////////////
  {
    id: 1,
    name: 'Iphone 17 Air',
    price: 1239,
    category: 'telefon',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'RI057d1-SK.webp' },
      { name: 'zlata', hex: '#d3a72f', img: 'RI057b3-zlata.webp' },
      { name: 'modra', hex: '#e7f0f4', img: 'RI057b4-modra.webp' },
      { name: 'biela', hex: '#f7f7f7', img: 'RI057b2-SK-biela.webp' }
    ]
  },
  {
    id: 2,
    name: 'Iphone 17 Pro',
    price: 1339,
    category: 'telefon',
    colors: [
      { name: 'kozmicky_oranzova', hex: '#d66b16', img: 'RI055b2.webp' },
      { name: 'strieborna', hex: '#c6c6c6', img: 'RI055b3-stireboena.webp' },
      { name: 'polnocna', hex: '#002a79', img: 'RI055b1-modra.webp' },
    ]
  },
  {
    id: 3,
    name: 'Iphone 17',
    price: 978.90,
    category: 'telefon',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'RI054b1-SK-cierna.webp' },
      { name: 'modra', hex: '#002a79', img: 'RI054b3-modra.webp' },
      { name: 'biela', hex: '#f7f7f7', img: 'RI054b2-SK-biela.webp' },
      { name: 'zelena', hex: '#10630a', img: 'RI054b4-zelena.webp' },
      { name: 'fialova', hex: '#7d1ea4', img: 'RI054b5-fialova.webp' }
    ]
  },
  {
    id: 4,
    name: 'Samsung Galaxy S25',
    price: 809,
    category: 'telefon',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'SAMO0269c5.webp' },
      { name: 'modra', hex: '#002a79', img: 'SAMO0269c3.webp' },
      { name: 'tmavomodra', hex: '#001d53ff', img: 'SAMO0269c4.webp' },
      { name: 'zelena', hex: '#10630a', img: 'SAMO0269c2.webp' },
      { name: 'strieborna', hex: '#c6c6c6', img: 'SAMO0269c1.webp' }
    ]
  },
  //////////////////////////hodinky//////////////////////////
  {
    id: 5,
    name: 'Apple Watch Ultra 3',
    price: 899,
    category: 'hodinky',
    colors: [
      { name: 'strieborna', hex: '#c6c6c6', img: 'JA049u25n1-01-SK.webp' },
      { name: 'cierna', hex: '#1d1d1f', img: 'JA049u25b1-01-SK.webp' }
    ]
  },
  {
    id: 6,
    name: 'Apple Watch Ultra 3',
    price: 899,
    category: 'hodinky',
    colors: [
      { name: 'strieborna', hex: '#c6c6c6', img: 'JA049u25n1-01-SK.webp' },
      { name: 'cierna', hex: '#1d1d1f', img: 'JA049u25b1-01-SK.webp' }
    ]
  },
  {
    id: 7,
    name: 'Apple Watch Ultra 3',
    price: 899,
    category: 'hodinky',
    colors: [
      { name: 'strieborna', hex: '#c6c6c6', img: 'JA049u25n1-01-SK.webp' },
      { name: 'cierna', hex: '#1d1d1f', img: 'JA049u25b1-01-SK.webp' }
    ]
  },
  {
    id: 8,
    name: 'Apple Watch Ultra 3',
    price: 899,
    category: 'hodinky',
    colors: [
      { name: 'strieborna', hex: '#c6c6c6', img: 'JA049u25n1-01-SK.webp' },
      { name: 'cierna', hex: '#1d1d1f', img: 'JA049u25b1-01-SK.webp' }
    ]
  },
  //////////////////////////notebooky//////////////////////////
  {
    id: 9,
    name: 'MacBook Pro 14" M4 2024 512GB',
    price: 2179,
    category: 'notebooky',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'NL269b1o4-SK.webp' },
      { name: 'siva', hex: '#838383', img: 'NL269b1o1-SK.webp' },
      { name: 'strieborna', hex: '#c6c6c6', img: 'NL269b1p1-SK.webp' },
    ]
  },
  {
    id: 10,
    name: 'MacBook Pro 14" M4 2024 512GB',
    price: 2179,
    category: 'notebooky',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'NL269b1o4-SK.webp' },
      { name: 'siva', hex: '#838383', img: 'NL269b1o1-SK.webp' },
      { name: 'strieborna', hex: '#c6c6c6', img: 'NL269b1p1-SK.webp' },
    ]
  },
  {
    id: 11,
    name: 'MacBook Pro 14" M4 2024 512GB',
    price: 2179,
    category: 'notebooky',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'NL269b1o4-SK.webp' },
      { name: 'siva', hex: '#838383', img: 'NL269b1o1-SK.webp' },
      { name: 'strieborna', hex: '#c6c6c6', img: 'NL269b1p1-SK.webp' },
    ]
  },
  {
    id: 12,
    name: 'MacBook Pro 14" M4 2024 512GB',
    price: 2179,
    category: 'notebooky',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'NL269b1o4-SK.webp' },
      { name: 'siva', hex: '#838383', img: 'NL269b1o1-SK.webp' },
      { name: 'strieborna', hex: '#c6c6c6', img: 'NL269b1p1-SK.webp' },
    ]
  },
  {
    id: 13,
    name: 'MacBook Pro 14" M4 2024 512GB',
    price: 2179,
    category: 'notebooky',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'NL269b1o4-SK.webp' },
      { name: 'siva', hex: '#838383', img: 'NL269b1o1-SK.webp' },
      { name: 'strieborna', hex: '#c6c6c6', img: 'NL269b1p1-SK.webp' },
    ]
  },
  //////////////////////////prislusenstvo//////////////////////////
  {
    id: 14,
    name: 'iPhone 17 Pro TechWoven Case',
    price: 59,
    category: 'prislusenstvo',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'MGF34.jpeg' },
      { name: 'zelena', hex: '#10630a', img: 'MGF74.jpeg' },
      { name: 'sienna', hex: '#ab6036', img: 'MGF64.jpeg' },
      { name: 'fialova', hex: '#7d1ea4', img: 'MGF54.jpeg' },
      { name: 'modra', hex: '#002a79', img: 'MGF44.jpeg' },
    ]
  },
  {
    id: 15,
    name: 'iPhone 17 Pro TechWoven Case',
    price: 59,
    category: 'prislusenstvo',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'MGF34.jpeg' },
      { name: 'zelena', hex: '#10630a', img: 'MGF74.jpeg' },
      { name: 'sienna', hex: '#ab6036', img: 'MGF64.jpeg' },
      { name: 'fialova', hex: '#7d1ea4', img: 'MGF54.jpeg' },
      { name: 'modra', hex: '#002a79', img: 'MGF44.jpeg' },
    ]
  },
  {
    id: 16,
    name: 'iPhone 17 Pro TechWoven Case',
    price: 59,
    category: 'prislusenstvo',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'MGF34.jpeg' },
      { name: 'zelena', hex: '#10630a', img: 'MGF74.jpeg' },
      { name: 'sienna', hex: '#ab6036', img: 'MGF64.jpeg' },
      { name: 'fialova', hex: '#7d1ea4', img: 'MGF54.jpeg' },
      { name: 'modra', hex: '#002a79', img: 'MGF44.jpeg' },
    ]
  },
  {
    id: 17,
    name: 'iPhone 17 Pro TechWoven Case',
    price: 59,
    category: 'prislusenstvo',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'MGF34.jpeg' },
      { name: 'zelena', hex: '#10630a', img: 'MGF74.jpeg' },
      { name: 'sienna', hex: '#ab6036', img: 'MGF64.jpeg' },
      { name: 'fialova', hex: '#7d1ea4', img: 'MGF54.jpeg' },
      { name: 'modra', hex: '#002a79', img: 'MGF44.jpeg' },
    ]
  },
  {
    id: 18,
    name: 'iPhone 17 Pro TechWoven Case',
    price: 59,
    category: 'prislusenstvo',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'MGF34.jpeg' },
      { name: 'zelena', hex: '#10630a', img: 'MGF74.jpeg' },
      { name: 'sienna', hex: '#ab6036', img: 'MGF64.jpeg' },
      { name: 'fialova', hex: '#7d1ea4', img: 'MGF54.jpeg' },
      { name: 'modra', hex: '#002a79', img: 'MGF44.jpeg' },
    ]
  },
  {
    id: 19,
    name: 'iPhone 17 Pro TechWoven Case',
    price: 59,
    category: 'prislusenstvo',
    colors: [
      { name: 'cierna', hex: '#1d1d1f', img: 'MGF34.jpeg' },
      { name: 'zelena', hex: '#10630a', img: 'MGF74.jpeg' },
      { name: 'sienna', hex: '#ab6036', img: 'MGF64.jpeg' },
      { name: 'fialova', hex: '#7d1ea4', img: 'MGF54.jpeg' },
      { name: 'modra', hex: '#002a79', img: 'MGF44.jpeg' },
    ]
  },
];

/* ---------------------- render produkt ---------------------- */

function renderProducts(list) {
  const produktGrid = document.getElementById("produktGrid");
  if (!produktGrid) return;

  produktGrid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "produkt";

    let colorButtons = '';
    p.colors.forEach(c => {
      colorButtons += `
        <button
          data-color="${c.name}" 
          data-img="${c.img}" 
          style="background: ${c.hex};">
        </button>`;
    });

    const defaultImg = p.colors.length > 0 ? p.colors[0].img : p.img;

    card.innerHTML = `
      <img src="${p.category}/${defaultImg}" alt="${p.name}" id="img-${p.id}">
      <div class="farbaPick" id="farba-${p.id}">
        ${colorButtons}
      </div>
      <div class="produkt-body">
        <h5>${p.name}</h5>
        <p>${p.price} €</p>
        <button onclick="addToCart(${p.id})" class="btn_produkt">Do košíka</button>
      </div>
    `;
    produktGrid.appendChild(card);
  });

  document.querySelectorAll('.farbaPick button').forEach(btn => {
    btn.addEventListener('click', function () {
      const parentPicker = this.parentElement;
      parentPicker.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const productId = parentPicker.id.replace('farba-', '');
      const productImg = document.getElementById(`img-${productId}`);

      const product = produkty.find(p => p.id == productId);
      productImg.src = `${product.category}/${this.dataset.img}`;
    });
  });
}

/* ---------------------- KOSIK ---------------------- */


let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartOpen = document.getElementById("cartOpen");
const cartClose = document.getElementById("cartClose");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

if (cartOpen && cartModal)
  cartOpen.addEventListener('click', () => cartModal.style.display = "flex");

if (cartClose && cartModal)
  cartClose.addEventListener('click', () => cartModal.style.display = "none");

if (cartCount) {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function addToCart(id) {
  const product = produkty.find(p => p.id === id);

  const colorPicker = document.getElementById(`farba-${id}`);
  if (!colorPicker) return;

  const selectedColorBtn = colorPicker.querySelector('button.active');

  if (!selectedColorBtn) {
    alert('Prosím vyberte farbu pred pridaním do košíka!');
    return;
  }

  const selectedColor = selectedColorBtn.dataset.color;
  const colorHex = selectedColorBtn.style.background;

  const existingItem = cart.find(item => item.id === id && item.color === selectedColor);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      color: selectedColor,
      colorHex: colorHex,
      quantity: 1
    });
  }

  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));

  let total = 0;
  let totalItems = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    totalItems += item.quantity;
  });

  if (cartCount)
    cartCount.textContent = totalItems;

  if (cartTotal)
    cartTotal.textContent = total.toFixed(2) + " €";

  if (cartItems) {
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <span>${item.name}
        <span style="display:inline-block;width:15px;height:15px;background:${item.colorHex};
        border-radius:50%;margin-left:5px;"></span></span>

        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="decreaseQuantity(${index})">-</button>
          <span>x${item.quantity}</span>
          <button onclick="increaseQuantity(${index})">+</button>
          <span>${(item.price * item.quantity).toFixed(2)} €</span>
        </div>
      `;
      cartItems.appendChild(li);
    });
  }

  localStorage.setItem("cartCount", totalItems);
}

function increaseQuantity(i) {
  cart[i].quantity++;
  updateCart();
}

function decreaseQuantity(i) {
  if (cart[i].quantity > 1) cart[i].quantity--;
  else cart.splice(i, 1);
  updateCart();
}

updateCart();

