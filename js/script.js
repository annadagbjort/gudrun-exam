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
            if (categor == 11) {
                document.querySelector(".about-wrapper .about-see-more").innerHTML = theContent;
            }

            //            Vocal coaching
            if (categor == 10) {
                document.querySelector(".vocal-coaching-wrapper .vocal-coaching-header").textContent = theHeader;

                document.querySelector(".vocal-coaching-wrapper .vocal-coaching-paragraph").innerHTML = theContent;
            }
        });
    });
}

const seeMoreExpand = document.querySelector(".about-expand");
const shortAbout = document.querySelector("about-wrapper");
const longAbout = document.querySelector(".about-see-more");
longAbout.style.display = "none";

seeMoreExpand.addEventListener("click", showMoreAbout);

function showMoreAbout() {
    if (longAbout.style.display === "none") {
        longAbout.style.display = "block";
        longAbout.classList.add("fade-in");
        longAbout.classList.remove("fade-out");
        seeMoreExpand.innerHTML = "Show Less"
    } else {
        setTimeout(function () {
            longAbout.style.display = "none";
            seeMoreExpand.innerHTML = "Show More";
        }, 100);
        longAbout.classList.remove("fade-in");
        longAbout.classList.add("fade-out");
    }
}

//For quote slideshow


//fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/quote?_embed&per_page=100")
//    .then(res => res.json())
//    .then(handleQuotes)

//function handleQuotes(quotes) {
//    console.log(quotes);
//    quotes.forEach(showQuotes)
//
//
//    function showQuotes(quotesAboutPage) {
//        var aboutQuote = quotesAboutPage.quote_content;
//        var quoteAuthorAbout = quotesAboutPage.quote_author;
//
//        quotesAboutPage.categories.forEach(quoteCategory => {
//            if (quoteCategory == 14) {
//                const aboutQuoteTemp = document.querySelector(".quote-template").content;
//
//                const cloneAboutQuoteTemp = aboutQuoteTemp.cloneNode(true);
//                console.log(quoteAuthorAbout);
//
//                cloneAboutQuoteTemp.querySelector(".quote").textContent = aboutQuote;
//
//                cloneAboutQuoteTemp.querySelector(".author").textContent = quoteAuthorAbout;
//
//                document.querySelector(".slideshow-container").appendChild(cloneAboutQuoteTemp);
//            }
//        });
//    }

    const oneSlide = document.querySelector(".mySlides");
    oneSlide.style.display = "block";

    const firstDot = document.querySelector(".dot");
    firstDot.classList.add("active");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.querySelector(".mySlides").style.display = "block";

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
