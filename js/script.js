/* FETCHING FOOTER */

function getContact(){
    fetch("https://designhavn.dk/5Wordpress/wp-json/wp/v2/contact")
    .then(function (response){
        return response.json()
    })

    .then(function (data){
        const conInfo = data
        data.forEach(showInfo)
    })
}

function showInfo(jsonData){
    console.log(jsonData)
    jsonData.forEach(showInfo)
}

function showInfo(contact)
console.log(contact)
const template = document.querySelector("template").content;
const clone = template.cloneNode(true);

clone.querySelector(".contact-name").textContent = contact.full_name;

clone.querySelector(".contact-email").textContent = contact.email_address;

clone.querySelector(".contact-phone").textContent = contact.phone_number;

clone.querySelector(".contact-location").textContent = contact.location;
