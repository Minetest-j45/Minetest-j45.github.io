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
	newDiv.id = Title.replaceAll(" ", "_");
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

async function search() {
	var input = document.getElementById("myInput");

	//filter words to lower case
	var filter = input.value.toLowerCase();
	if (filter == "") {
		GetBlogs();
		return;
	};
	var filters = filter.split(" ");

	var toDisplay= [];

	const Blogs = await fetch('https://j1233.minetest.land/blog/blogs.csv');
	const data = await Blogs.text();

	const myTable = data.split('\n').slice(1);

	//for every row (post)
	for (let iRow = myTable.length-1; iRow >= 0; iRow--) {
		const row = myTable[iRow];

		const columns = row.split('|');

		//for every column in the row (string)
		for (let iCol = 0; iCol < columns.length; iCol++) {

			//for each word in filter
			for (let fRow = 0; fRow < myTable.length; fRow++) {
				//make the blog string lower case
				var lowCol = columns[iCol].toLowerCase();
				var fil = filters[fRow];

				//if search success and not already in todisplay
				if (lowCol.includes(fil) && !toDisplay.includes(myTable[iRow])) {
					toDisplay.push(myTable[iRow]);
				};
			};
		};
	};

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

	for (let nRow = 0; nRow < toDisplay.length; nRow++) {

		const rrow = toDisplay[nRow];

		const ccolumns = rrow.split('|');

		createPostTitle(	
			ccolumns[0],
			ccolumns[1],
			ccolumns[2]
		);
	};
};