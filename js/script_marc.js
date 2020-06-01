const checkForElementRepertoire = document.querySelector(".repertoireHeader");
// run the functions only if the element exists on the page
if (checkForElementRepertoire) {
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

}


var checkForElementScedule = document.querySelector(".schedule-main-heading");
if (checkForElementScedule) {
    // fetching for the schedule subpage
    //fetching events

    const eventsLink = "http://designhavn.dk/5Wordpress/wp-json/wp/v2/event";
    fetch(eventsLink)
        .then(function (response) {
            return response.json()
        })
        .then(function (data4) {
            showData4(data4)
        })

    function showData4(showEvents) {
        /*console.log(showOperas);*/


        /*showMusic.forEach(showOneMusic);*/

        showEvents.forEach(showOneEvent);


        function showOneEvent(oneEvent) {
            const templateEvents = document.querySelector(".schedule-temp").content;
            const clone = templateEvents.cloneNode(true);
            clone.querySelector(".schedule-date").textContent = oneEvent.event_date;
            console.log(oneEvent.event_date)
            clone.querySelector(".schedule-perf-name").textContent = oneEvent.event_name;
            clone.querySelector(".schedule-perf-location").textContent = oneEvent.event_location;
            const elemBtn = document.createElement("button");
            elemBtn.textContent = "More information";
            elemBtn.addEventListener("click", windowOpen);

            function windowOpen() {
                window.open("http://www.gudrun-ingimars.com/", "_blank", "width=800, height=600");
            }
            elemBtn.classList.add("grey-button");
            clone.querySelector(".schedule-btn-wrapper").appendChild(elemBtn);
            var childNumber = document.querySelector(".upcoming-container").childElementCount;
            if (childNumber < 5) {
                document.querySelector(".upcoming-container").appendChild(clone);
            } else {
                document.querySelector(".upcoming-container2").appendChild(clone);
            }
        }
    }


    const buttonExpand = document.querySelector(".schedule-expand");
    const firstContainer = document.querySelector(".upcoming-container");
    const secondContainer = document.querySelector(".upcoming-container2");
    secondContainer.style.display = "none";

    buttonExpand.addEventListener("click", showMore);

    function showMore() {
        if (secondContainer.style.display === "none") {
            secondContainer.style.display = "block";
            secondContainer.classList.add("fade-in");
            secondContainer.classList.remove("fade-out");
            buttonExpand.innerHTML = "Show less"
        } else {
            setTimeout(function () {
                secondContainer.style.display = "none";
                buttonExpand.innerHTML = "Show more";
            }, 450);
            secondContainer.classList.remove("fade-in");
            secondContainer.classList.add("fade-out");


        }

    }

    document.querySelector(".btn-to-repertoire").addEventListener("click", goToRepertoire)

    function goToRepertoire() {
        window.location.replace("repertoire.html");
    }

    document.querySelector(".btn-to-contact").addEventListener("click", goToContact)

    function goToContact() {
        window.location.replace("contact.html");
    }
}

// check if the page contains specific HTML element - in order to prevent running code meant for different subpages and errors
var checkForElementContact = document.querySelector(".contact-main-wrapper");

if (checkForElementContact) {
    //fetching info for contact page
    const contactLink = "http://designhavn.dk/5Wordpress/wp-json/wp/v2/contact";
    fetch(contactLink)
        .then(function (response) {
            return response.json()
        })
        .then(function (data6) {
            showData6(data6)
        })

    function showData6(showContactInf) {
        /*console.log(showOperas);*/


        /*showMusic.forEach(showOneMusic);*/

      /*  showContactInf.forEach(contactInf);*/
        showContactInf.forEach(showContactDetails);

        function showContactDetails(oneContactInf) {
            const templateContactInf = document.querySelector(".contact-inf-temp").content;
            const clone = templateContactInf.cloneNode(true);
            clone.querySelector(".fullname-d").textContent = oneContactInf.full_name;
            clone.querySelector(".email-d").textContent = oneContactInf.email_address;
            clone.querySelector(".phone-d").textContent = oneContactInf.phone_number;
            clone.querySelector(".address-d").textContent = oneContactInf.location;
            document.querySelector(".contact-info-det").appendChild(clone);
        }


    }

}



/* FETCHING FOOTER */
fetch("https://designhavn.dk/5Wordpress/wp-json/wp/v2/contact?_embed")
.then(function (response){
    return response.json()
})
.then(function (data){
    showInfo(data)
})

function showInfo(jsonData){
    jsonData.forEach(showInfo)


function showInfo(contact){
const template = document.querySelector("#myTemplateFooter").content;
const clone = template.cloneNode(true);

clone.querySelector(".contact-name").textContent = contact.full_name;

clone.querySelector(".contact-email").textContent = contact.email_address;

clone.querySelector(".contact-phone").textContent = contact.phone_number;

clone.querySelector(".contact-location").textContent = contact.location;

document.querySelector(".footer-items-contact").appendChild(clone);

}
}

