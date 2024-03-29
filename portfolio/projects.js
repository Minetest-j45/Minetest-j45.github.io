CreatePortfolio();

async function CreatePortfolio() {
    var wrapper = document.getElementById("portfolio");
    wrapper.innerHTML = "";
    
    const Projects = await fetch("https://j45.dev/portfolio/projects.csv");
	const data = await Projects.text();

	const projects = data.split("\n").slice(0);
    projects.shift();//remove the first line (the header)

	document.getElementById("portfolio").replaceChildren();

	var portfolio = document.getElementById("portfolio");
    //determine the number of items from portfolio that would fit in one row
    var itemsPerRow = Math.max(Math.ceil((portfolio.offsetWidth-(260*3)) / 260), 0)+1;

    //get the number of rows needed
    var rows = Math.ceil(projects.length / itemsPerRow);

    pIndex = 0;

    //create the rows
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("div");
        row.className = "row";

        //for each row, create the items
        var span1 = document.createElement("span");

        pIndexBefore = pIndex;
        for (var j = 0; j < itemsPerRow; j++) {
            if (pIndex >= projects.length) {
                break;
            }

            var pject = document.createElement("a");
            pject.className = "pject";
            pject.href = projects[pIndex].split("|")[1];
			
			var pict = document.createElement("picture");

			var srcwebp = document.createElement("source");
			srcwebp.type = "image/webp";
			srcwebp.srcset = "https://j45.dev/images/portfolio/" + projects[pIndex].split("|")[2] + ".webp";
			pict.append(srcwebp);

			var srcpng = document.createElement("source");
			srcpng.type = "image/png";
			srcpng.srcset = "https://j45.dev/images/portfolio/" + projects[pIndex].split("|")[2] + ".png";
			pict.append(srcpng);

			var img = document.createElement("img");
			img.src = "https://j45.dev/images/portfolio/" + projects[pIndex].split("|")[2] + ".png";
			img.alt = projects[pIndex].split("|")[0];

			pict.append(img)

			pject.append(pict);

            var info = document.createElement("div");
	        info.className = "info";

            var spen = document.createElement("spen");
	        spen.innerHTML = projects[pIndex].split("|")[0];

            var p = document.createElement("p");
	        p.innerHTML = projects[pIndex].split("|")[3];

	        info.appendChild(spen);
	        info.appendChild(p);

	        pject.appendChild(info);

            pIndex++;
            span1.appendChild(pject);
        }
        row.appendChild(span1);

        portfolio.appendChild(row);
    }
};
