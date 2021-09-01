GetBlogs();

async function GetBlogs() {
	const Blogs = await fetch('https://j1233.minetest.land/blog/blogs.csv');
	const data = await Blogs.text();

	const myTable = data.split('\n').slice(1);

	for (let iRow = myTable.length-1; iRow >= 0; iRow--) {

		const row = myTable[iRow];

		const columns = row.split('|');

		createPostTitle(	
			columns[0],
			columns[1],
			columns[2]
		);
	}

}

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
}

function makePageSpecificBlog(Title,Date,Text) {
	//remove all current things
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
	var newText = document.createTextNode(Text);
	nDiv.appendChild(newText);
	
	var newLine = document.createElement('br');
 	nDiv.appendChild(newLine);
	
	var a = document.createElement('a');
	var linkText = document.createTextNode("Share this blog post!");
	a.appendChild(linkText);
	a.title = "Share this blog post!";
	a.href = "http://j1233.minetest.land/blog/#"+Title.replaceAll(" ", "_");
	nDiv.appendChild(a);
}