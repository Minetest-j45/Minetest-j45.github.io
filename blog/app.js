GetBlogs();

async function GetBlogs() {
	const Blogs = await fetch('https://j1233.minetest.land/blog/blogs.csv');
	const data = await Blogs.text();

	const myTable = data.split('\n').slice(1);

	document.getElementsByClassName('blogs').item(0).replaceChildren();

	var neDiv=document.createElement('Div');
	neDiv.className = 'blog';
	neDiv.id = "Title";
	document.getElementsByClassName('blogs').item(0).appendChild(neDiv);

	var newLine = document.createElement('br');
 	neDiv.appendChild(newLine);
	
	var bt = document.createElement("bigtext");
	bt.innerHTML = "My Posts:";
	neDiv.appendChild(bt)

	var newLine = document.createElement('br');
 	neDiv.appendChild(newLine);

	//for share option
	for (let iRow = 0; iRow < myTable.length; iRow++) {
		const row = myTable[iRow];
		const columns = row.split('|');
		var hash = window.location.hash.toLowerCase();
		var lowTitle = "#"+columns[0].replaceAll(" ", "_").toLowerCase();
		if (hash == lowTitle) {
			makePageSpecificBlog(columns[0],columns[1],columns[2]);
			return;
		};
	};

	for (let iRow = myTable.length-1; iRow >= 0; iRow--) {

		const row = myTable[iRow];

		const columns = row.split('|');

		createPostTitle(	
			columns[0],
			columns[1],
			columns[2]
		);
	};

};

function createPostTitle(Title,Date,Text) {
	//Blog Block
	var newDiv=document.createElement('Div');
	newDiv.className = 'blog';
	document.getElementsByClassName('blogs').item(0).appendChild(newDiv);

	var newLine = document.createElement('br');
 	newDiv.appendChild(newLine);

	//Blog title
	var btn = document.createElement("myButton");
	btn.innerHTML = Title;
	btn.onclick = function () {
		makePageSpecificBlog(Title,Date,Text);
	};
	newDiv.appendChild(btn);
};

function makePageSpecificBlog(Title,Date,Text) {
	//tip
	document.getElementsByClassName('tips').item(0).replaceChildren();
	var newTip = document.createTextNode("TIP: Click on the return arrow at the bottom of the blog to go back to the main blog page!");
	document.getElementsByClassName('tips').item(0).appendChild(newTip);

	//blog
	document.getElementsByClassName('blogs').item(0).replaceChildren();
	var nDiv = document.createElement('Div');
	document.getElementsByClassName('blogs').item(0).appendChild(nDiv);

	//new line
	var newLine = document.createElement('br');
 	nDiv.appendChild(newLine);

	//title big
	var big = document.createElement("bigtext");
	big.innerHTML = Title;
	nDiv.appendChild(big);

	//date small
	var date = document.createTextNode(' - '+Date);
	nDiv.appendChild(date);


	var newLine = document.createElement('br');
 	nDiv.appendChild(newLine);

	//text
	newText = document.createTextNode(Text);
	nDiv.appendChild(newText);
	
	var newLine = document.createElement('br');
 	nDiv.appendChild(newLine);
	
	var a = document.createElement('a');
	var linkText = document.createTextNode("Share this blog post!");
	a.appendChild(linkText);
	a.title = "Share this blog post!";
	a.href = "http://j1233.minetest.land/blog/#"+Title.replaceAll(" ", "_");
	nDiv.appendChild(a);

	var newLine = document.createElement('br');
 	nDiv.appendChild(newLine);
	

	var img = document.createElement("img");
	img.src = 'https://j1233.minetest.land/images/return.png';
	img.onclick = function(){
		window.location = "https://j1233.minetest.land/blog";
	};
	nDiv.appendChild(img);
	
	var newLine = document.createElement('br');
 	nDiv.appendChild(newLine);
};