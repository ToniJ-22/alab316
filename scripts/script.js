//PART 1 constructing main 
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');
//PART 2 building nav bar
let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
//PART 3
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
for (let link of menuLinks) {
  let anchor = document.createElement('a');
  anchor.setAttribute('href', link.href);
  anchor.textContent = link.text;
  topMenuEl.appendChild(anchor);
}
//PART 2.3
let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//part 2.4
let topMenuLinks = topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener('click', handleClick);
function handleClick(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') return;

  console.log(event.target.textContent);

  let isActive = event.target.classList.contains('active');
  topMenuLinks.forEach(link => link.classList.remove('active'));
  if (!isActive) {
    event.target.classList.add('active');
  }
  let linkObj = menuLinks.find(
  link => link.text === event.target.textContent.toLowerCase()
);
  if (!linkObj)return;

  if (!isActive && linkObj.subLinks) {
    subMenuEl.style.top = '100%';
    buildSubmenu(linkObj.subLinks);
  } else {
    subMenuEl.style.top = '0';
  }

  if (linkObj.text === 'about') {
    mainEl.innerHTML = '<h1>About</h1>';
  }
}
//part 2.5
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(link => {
    let a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  });
}


subMenuEl.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.tagName !== "A") return;

  console.log(event.target.textContent);
  subMenuEl.style.top = '0';

  topMenuLinks.forEach(link => link.classList.remove('active'));
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});