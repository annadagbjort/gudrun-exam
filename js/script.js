//window.addEventListener("DOMContentLoaded", init);
//For quote slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    } for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].className += " active";
}

////About page
//fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/posts?_embed&per_page=100")
//    .then(res => res.json())
//    .then(handleAboutText)

//function handleAboutText (aboutText) {
//    aboutText.forEach(showAboutText)
////    console.log("hej");
//}
//
//function showAboutText (aboutText) {
////    console.log(aboutText);
//    const aboutTemplate = document.querySelector("p .center-paragraph").content;
//
//    const clone = aboutTemplate.cloneNode(true);
//    console.log(aboutText.content.rendered)
//
//    clone.querySelector(".about-text").innerHtml = aboutText.content.rendered;
//
//    document.querySelector(".about-wrapper").appendChild(clone);
//}

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/posts?_embed&per_page=100")
    .then(res => res.json())
    .then(handlePostData)

function handlePostData(frontpagePostHandled) {

    frontpagePostHandled.forEach(item => {

        var theHeader = item.title.rendered;
        var theContent = item.content.rendered;


        item.categories.forEach(categor => {

            //About Gudrun
            if (categor == 2) {
                document.querySelector(".about-wrapper .about-header").textContent = theHeader;

                document.querySelector(".about-wrapper .about-text").innerHTML = theContent;
            }

        });
    });
}



fetch ("http://designhavn.dk/5Wordpress/wp-json/wp/v2/quote?_embed&per_page=100")
    .then(res => res.json())
    .then(handleQuotes)

function handleQuotes (quotes) {
    console.log(quotes);
 }












