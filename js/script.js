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
}

function showInfo(contact)
const template = document.querySelector("template").content;
const clone = template.cloneNode(true);

clone.querySelector(".contact-name").textContent = contact.full_name;

clone.querySelector(".contact-email").textContent = contact.email_address;

clone.querySelector(".contact-phone").textContent = contact.phone_number;

clone.querySelector(".contact-location").textContent = contact.location;

document.querySelector(".footer-items-contact").appendChild(clone);
