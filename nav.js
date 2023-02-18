async function AddNav() {
    var nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    var percentage = 6;
    var screenWidth = window.screen.width;
    var wpixels = Math.round((percentage / 100) * screenWidth);
    var img = new Image(wpixels, wpixels);
    img.src = 'https://j1233.minetest.land/images/j45withname.png';
    img.onclick = function() {
        window.location.href = "https://j1233.minetest.land/"
    }
    nav.appendChild(img);

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox_toggle');
    nav.appendChild(checkbox);

    var burger = document.createElement('label');
    burger.setAttribute('for', 'checkbox_toggle');
    burger.setAttribute('class', 'burger');
    burger.innerHTML = '&#9776;';
    nav.appendChild(burger);

    var homeLink = document.createElement('a');
    homeLink.href = 'https://j1233.minetest.land/#nav';
    homeLink.setAttribute('class', 'nav-link');
    homeLink.innerHTML = 'Home';
    nav.appendChild(homeLink);

    var portfolioLink = document.createElement('a');
    portfolioLink.href = 'https://j1233.minetest.land/portfolio/';
    portfolioLink.setAttribute('class', 'nav-link');
    portfolioLink.innerHTML = 'Portfolio';
    nav.appendChild(portfolioLink);

    var links = document.createElement('a');
    links.href = 'https://j1233.minetest.land/#links';
    links.setAttribute('class', 'nav-link');
    links.innerHTML = 'Links';
    nav.appendChild(links);

    var br = document.createElement('br');

    var center = document.getElementsByTagName('center').item(0);
    center.insertBefore(br, center.firstChild);
    center.insertBefore(nav, center.firstChild);
};

AddNav();