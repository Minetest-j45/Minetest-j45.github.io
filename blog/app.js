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

	}

}

function createPostTitle(Number,Title,Date,Text){

	//Question Block
	var newDiv=document.createElement('Div');
	newDiv.className='blog';
	newDiv.id='Post'+Number;
	//document.body.appendChild(newDiv);
	document.getElementsByClassName('blogs').item(0).appendChild(newDiv);


	//Question text
	var newContent=document.createTextNode('<a href="https://j1233.minetest.land/blog">'+Title+'</a> - '+Date);
	newDiv.appendChild(newContent);

	var newLine=document.createElement('br');
 	newDiv.appendChild(newLine);
}
