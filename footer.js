async function AddFooter() {
    var footer = document.createElement('span');
    footer.innerHTML = 'Copyright (c) 2021-2023 j45 &lt;j45minetest@gmail.com&gt;';
    footer.style = 'bottom: 0px;';

    var newline = document.createElement('br');

    var license = document.createElement('span');
    license.innerHTML = 'MIT License';
    license.style = 'bottom: 0px;';

    var center = document.getElementsByTagName('center').item(0);
    center.appendChild(footer);
    center.appendChild(newline);
    center.appendChild(license);
};

AddFooter();