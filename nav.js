async function AddNav() {
    var nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    var icon = document.createElement('img');
    icon.src = 'https://j1233.minetest.land/images/j45withname.png';
    icon.width = '6%';
    icon.height = '6%';
    icon.style = 'image-rendering: pixelated; image-rendering: crisp-edges;';
    nav.appendChild(icon);

    var homeLink = document.createElement('a');
    homeLink.href = 'https://j1233.minetest.land/#nav';
    homeLink.setAttribute('class', 'nav-link');
    homeLink.innerHTML = 'Home';
    nav.appendChild(homeLink);

    var portfolioLink = document.createElement('a');
    portfolioLink.href = 'https://j1233.minetest.land/#portfolio';
    portfolioLink.setAttribute('class', 'nav-link');
    portfolioLink.innerHTML = 'Portfolio';
    nav.appendChild(portfolioLink);

    var blogLink = document.createElement('a');
    blogLink.href = 'https://j1233.minetest.land/blog/';
    blogLink.setAttribute('class', 'nav-link');
    blogLink.innerHTML = 'Blog';
    nav.appendChild(blogLink);

    var discordLink = document.createElement('a');
    discordLink.onclick = function() {
        window.open("https://discordapp.com/invite/pQ8HaE78Mt ").focus();
    };
    discordLink.setAttribute('class', 'nav-link');
    discordLink.innerHTML = 'Discord';
    nav.appendChild(discordLink);

    var br = document.createElement('br');

    var center = document.getElementsByTagName('center').item(0);
    center.insertBefore(br, center.firstChild);
    center.insertBefore(nav, center.firstChild);
};

AddNav();