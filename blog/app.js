const fs = require('fs') 

GetBlogs();

async function GetBlogs(){
	const Blogs=await fetch('https://j1233.minetest.land/blog/blogs.csv');
	const data=await Blogs.text();
	console.log(data);

	const myTable=data.split('\n').slice(1);

	for (let iRow = myTable.length-1; iRow >= 0; iRow--) {

		const row = myTable[iRow];

		const columns=row.split('|');

		console.log(columns[1]);

		createPostTitle(
			columns[0],
			columns[1],
			columns[2],
			columns[3]
		);
		
		fs.readFile('./posts/'+columns[0]+'.html', 'utf8' , (err, data) => {
			if (err) {
				//no post page for that blog yet
				createPostPage(
					columns[0],
					columns[1],
					columns[2],
					columns[3]
				);
			}
		});

	}

}

function createPostTitle(Number,Title,Date,Text){

	//Blog Block
	var newDiv=document.createElement('Div');
	newDiv.className='blog';
	newDiv.id='Post'+Number;
	//document.body.appendChild(newDiv);
	document.getElementsByClassName('blogs').item(0).appendChild(newDiv);


	//Blog title
	var a = document.createElement('a');
	var linkText = document.createTextNode(Title);
	a.appendChild(linkText);
	a.title = Title;
	a.href = "https://j1233.minetest.land/blog";
	newDiv.appendChild(a);

	var newLine=document.createElement('br');
 	newDiv.appendChild(newLine);
}

function createPostTitle(Number,Title,Date,Text){

	let data = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<html lang="en">

		<link rel="stylesheet" href="https://j1233.minetest.land/css/index.css?v=1.0">
		<link rel = "icon" href = "https://j1233.minetest.land/images/j45.png" type = "image/x-icon">

		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="j45's blog">
		
		<meta property="og:type" content="website">
		<meta property="og:url" content="http://j1233.minetest.land/">
		<meta property="og:title" content="j45">
		<meta name="og:description" content="Hi, I'm j45(he/him). I am 15 years old and I live in England; in my free time, I like to program, play video games or hang out with friends.">
		<meta name="og:image" content="https://j1233.minetest.land/images/bigj45.png">

		<title>j45's website</title>

		<style type="text/css">
			#nav {
				border: 5px outset purple;
				background-color: white;
				width: 30%;
				height: 40%;
			}
			.blogs {
				border: 5px outset purple;
				background-color: #ff9b9b;
				margin: 1% 10% 0;
			}
			verybigtext {
				font-size: 40px;
			}
			bigtext {
				font-size: 23px;
			}
		</style>
	</head>
	<body>
		<center>
			<div id="nav">
				<img src="https://j1233.minetest.land/images/j45withname.png" width="18%" height="18%">
				<button onclick="location = 'https://j1233.minetest.land/#nav';">Home</button>
				<button onclick="location = 'https://j1233.minetest.land/#portfolio';">Portfolio</button>
				<button onclick="location = 'https://j1233.minetest.land/discord/';">Discord</button>
				<button onclick="location = 'https://j1233.minetest.land/contact/';">Contact</button>
			</div>
			<verybigtext>`+Title+`</verybigtitle> - <bigtext>`+Date+`</bigtext>
			<div class="blogs">
				<bigtext>`+Text+`</bigtext>
			</div>
		</center>
	</body>
</html>`

	fs.writeFile('./posts/'+Number+'.html', data, (err) => { 
		if (err) throw err; 
	});
}
