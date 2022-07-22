GetProjects();

async function GetProjects() {
	const Projects = await fetch("https://j1233.minetest.land/projects.csv");
	const data = await Projects.text();

	const myTable = data.split("\n").slice(0);

	document.getElementsByClassName("portfolio-icons").item(0).replaceChildren();

	for (let i = 1; i < myTable.length; i++) {

		const row = myTable[i];

		const columns = row.split("|");

		createProject(	
			columns[0],
			columns[1],
			columns[2],
			columns[3]
		);
	};

};

function createProject(Title, Link, Img, Desc) {
	var proj = document.createElement("li");

	var a = document.createElement("a");
	a.href = Link;
	a.style = "background-image: url('" + Img + "'); width: 240px; height: 240px;";

	var info = document.createElement("div");
	info.className = "info";

	var span = document.createElement("span");
	span.innerHTML = Title;

	var p = document.createElement("p");
	p.innerHTML = Desc;

	info.appendChild(span);
	info.appendChild(p);

	a.appendChild(info)

	proj.appendChild(a)


	document.getElementsByClassName("portfolio-icons").item(0).appendChild(proj);
};