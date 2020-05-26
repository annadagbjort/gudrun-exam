// fetching for repertoire subpage

//fetching operas

const operasLink = "http://designhavn.dk/5Wordpress/wp-json/wp/v2/opera?_embed";
fetch(operasLink)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        showData(data)
    })

function showData(showOperas) {
    console.log(showOperas);


    showOperas.forEach(showOneOpera);

    var clone;
    document.querySelector(".rep-opera-button").classList.add("active-rep-button");

    function showOneOpera(oneOpera) {
        // for multiple items
        const operaNameSplit = oneOpera.opera_name.split(", ");
        const operaRoleSplit = oneOpera.role.split(", ");
        const templateRepertoireOperas = document.querySelector(".template-repertoire-all-operas").content;
        clone = templateRepertoireOperas.cloneNode(true);
        clone.querySelector(".repertoire-opera-composer").textContent = oneOpera.composer;
        // adding list items
        for (i = 0; i < operaNameSplit.length; i++) {
            const elemLi = document.createElement("li");
            elemLi.textContent = operaNameSplit[i];
            clone.querySelector(".repertoire-opera-name ul").appendChild(elemLi);

        }
        for (i = 0; i < operaRoleSplit.length; i++) {
            const elemLi = document.createElement("li");
            elemLi.textContent = operaRoleSplit[i];
            clone.querySelector(".repertoire-opera-role ul").appendChild(elemLi);

        }
        document.querySelector(".repertoire-all-operas").appendChild(clone);
    }

}

//fetching oratorios

const oratoriosLink = "http://designhavn.dk/5Wordpress/wp-json/wp/v2/oratorio";
fetch(oratoriosLink)
    .then(function (response) {
        return response.json()
    })
    .then(function (data2) {
        showData2(data2)
    })

function showData2(showOratorios) {
    /*console.log(showOperas);*/


    showOratorios.forEach(showOneOratorio);

    var clone;

    function showOneOratorio(oneOratorio) {
        // for multiple items
        const oratorioTitleSplit = oneOratorio.composition_titles.split(", ");
        const templateRepertoireOratorios = document.querySelector(".template-repertoire-all-oratorios").content;
        clone = templateRepertoireOratorios.cloneNode(true);
        clone.querySelector(".repertoire-oratorio-composer").textContent = oneOratorio.composer;
        // adding list items
        for (i = 0; i < oratorioTitleSplit.length; i++) {
            const elemLi = document.createElement("li");
            elemLi.textContent = oratorioTitleSplit[i];
            clone.querySelector(".repertoire-oratorio-titles ul").appendChild(elemLi);

        }

        document.querySelector(".repertoire-all-oratorios").appendChild(clone);
        document.querySelector(".repertoire-all-oratorios").classList.add("hide");
    }

}

//fetching chamber music

const musicLink = "http://designhavn.dk/5Wordpress/wp-json/wp/v2/chamber_music";
fetch(musicLink)
    .then(function (response) {
        return response.json()
    })
    .then(function (data3) {
        showData3(data3)
    })

function showData3(showMusic) {
    /*console.log(showOperas);*/


    showMusic.forEach(showOneMusic);

    var clone;

    function showOneMusic(oneMusic) {
        // for multiple items
        const templateRepertoireMusic = document.querySelector(".template-repertoire-all-music").content;
        clone = templateRepertoireMusic.cloneNode(true);
        clone.querySelector(".repertoire-music-title").textContent = oneMusic.event_title;
        clone.querySelector(".repertoire-music-description").textContent = oneMusic.event_description;
        clone.querySelector(".repertoire-music-works").textContent = oneMusic.works;


        document.querySelector(".repertoire-all-music").appendChild(clone);
        document.querySelector(".repertoire-all-music").classList.add("hide");
    }

}



document.querySelector(".rep-oratorio-button").addEventListener("click", oratoriosAppear);

function oratoriosAppear() {
    document.querySelector(".repertoire-all-operas").classList.add("hide");
    document.querySelector(".repertoire-all-music").classList.add("hide");
    document.querySelector(".repertoire-all-oratorios").classList.add("fade-in");
    document.querySelector(".repertoire-all-oratorios").classList.remove("hide");
    document.querySelector(".rep-oratorio-button").classList.add("active-rep-button");
    document.querySelector(".rep-opera-button").classList.remove("active-rep-button");
    document.querySelector(".rep-music-button").classList.remove("active-rep-button");
}

document.querySelector(".rep-opera-button").addEventListener("click", operasAppear);

function operasAppear() {
    document.querySelector(".repertoire-all-oratorios").classList.add("hide");
    document.querySelector(".repertoire-all-music").classList.add("hide");
    document.querySelector(".repertoire-all-operas").classList.add("fade-in");
    document.querySelector(".repertoire-all-operas").classList.remove("hide");
    document.querySelector(".rep-opera-button").classList.add("active-rep-button");
    document.querySelector(".rep-oratorio-button").classList.remove("active-rep-button");
    document.querySelector(".rep-music-button").classList.remove("active-rep-button");
}

document.querySelector(".rep-music-button").addEventListener("click", musicAppear);

function musicAppear() {
    document.querySelector(".repertoire-all-oratorios").classList.add("hide");
    document.querySelector(".repertoire-all-operas").classList.add("hide");
    document.querySelector(".repertoire-all-music").classList.add("fade-in");
    document.querySelector(".repertoire-all-music").classList.remove("hide");
    document.querySelector(".rep-music-button").classList.add("active-rep-button");
    document.querySelector(".rep-oratorio-button").classList.remove("active-rep-button");
    document.querySelector(".rep-opera-button").classList.remove("active-rep-button");
}


/*(function() { if (document.querySelector(".repertoire-all-oratorios").classList.contains("hide")) {
    document.querySelector(".rep-oratorio-button").classList.remove("active-rep-button");
} else {
    document.querySelector(".rep-oratorio-button").classList.add("active-rep-button");
}
})*/
