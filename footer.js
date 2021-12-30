async function AddFooter() {
    var footer = document.createTextNode('Copyright (c) 2021 j45 <j45minetest@gmail.com>');
    var newline = document.createElement('br');
    var license = document.createTextNode('MIT License');
    var center = document.getElementsByTagName('center').item(0);
    center.appendChild(footer);
    center.appendChild(newline);
    center.appendChild(license);
};

AddFooter();