const fs = require('fs'); 

GetBlogs();

async function GetBlogs(){
	const Blogs = await fetch('https://j1233.minetest.land/blog/blogs.csv');
	const data = await Blogs.text();

	let stuff = `test`

	fs.writeFile('./posts/test.txt', stuff, (err) => { 
		if (err) throw err; 
	});

	const myTable=data.split('\n').slice(1);

	for (let iRow = myTable.length-1; iRow >= 0; iRow--) {

		const row = myTable[iRow];

		const columns=row.split('|');

		createPostTitle(
			columns[0],
			columns[1],
			columns[2],
			columns[3]
		);
		
//		fs.readFile('./posts/'+columns[0]+'.txt', 'utf8' , (err, data) => {
//			if (err) {
//				//no post page for that blog yet
//				createPostPage(
//					columns[0],
//					columns[1],
//					columns[2],
//					columns[3]
//				);
//			}
//		});
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

	var newLine = document.createElement('br');
 	newDiv.appendChild(newLine);
}

//function createPostTitle(Number,Title,Date,Text){
//
//	let data = `test`
//
//	fs.writeFile('./posts/'+Number+'.txt', data, (err) => { 
//		if (err) throw err; 
//	});
//}
