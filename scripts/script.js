//PART 1 constructing main 
let mainEl= document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = <h1>DOM Manipulation</h1>;
mainEl.classList.add('flex-ctr');
//PART 2 building nav bar
let topMenuEl= document.querySelector('top-menu');
topMenuEl.style.height('100%');
mainEl.style.backgroundColor= 'var(--top-menu-bg)';
mainEl.classList.add('flex-around');
//PART 3
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
for (let i = 0; i < menuLinks.length; i ++){
    let linkEl = document.createElement('a');
    linkEl.setAttribute('href', menuLinks[i].href);
    linkEl.textContent = menuLinks[i].text;
    topMenuEl.apprendChild(linkEl);
}
