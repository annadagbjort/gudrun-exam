const menuIcon = document.querySelector('.burgerMenu');

const navbar = document.querySelector('.top-nav')

menuIcon.addEventListener('click',() => {
    navbar.classList.toggle("change");
})

//burger menu code from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/media?_embed")
    .then(res => res.json())
    .then(handleInstagramPhotosData)
//    .catch(err => {
//            if (typeof err.text === 'function') {
//                err.text().then(errorMessage => {
//                    this.props.dispatch(displayTheError(errorMessage))
//                });
//                console.log("error")
//            } else {
//                console.log(err)
//                console.log("else error")
//            }
//        });
// //https://gist.github.com/odewahn/5a5eeb23279eed6a80d7798fdb47fe91

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/youtube_link")
    .then(res => res.json())
    .then(handleYoutubeLinkData)

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/posts?_embed")
    .then(res => res.json())
    .then(handlePostData)

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/article")
    .then(res => res.json())
    .then(handleArticleData)

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/quote?_embed&per_page=100")
    .then(res => res.json())
    .then(handleQuotes)

//has comments √
function handlePostData(frontpagePostHandled) {

    // Now we have an array with all the posts
    // We need to "look into" the array to see each post "individually"
    frontpagePostHandled.forEach(item => {

        // Find everything I want to fetch from the json and give it a name (put it into a var)
        var theHeader = item.title.rendered;
        var theContent = item.content.rendered;
        var theExcerpt = item.excerpt.rendered;

        // Inorder to choose the posts I want to display I look into all the category ids being used
        // Since I don't aways want to display every post
        item.categories.forEach(categor => {

            // Her Album > the category for the text about the album is 6
            // So now we look through each post and if the category is 6 we add the content we need to html
            if (categor == 6) {

                //We choose where to display the content we need
                //By selecting elements(by class) in the html document
                document.querySelector(".debut-album .fp-header").textContent = theHeader;

                //Since in this case wordpress gives us "marked up" text we need to use .innerHTML
                document.querySelector(".text-about-album").innerHTML = theExcerpt;
            }

            // Newsletter > the category for the Newsletter is 7
            if (categor == 7) {
                // document.querySelector(".newsletter-updates .fp-header").textContent = theHeader;

                document.querySelector(".text-about-newsletter").innerHTML = theContent;
            }

        });
    });
}

//has comments √
function handleYoutubeLinkData(youtubeLinks) {
    //Have an array of all links > need to look into each >>
    youtubeLinks.forEach(TheYoutubeLink => {

        //Have an each link

        //Find everything we need to fetch
        var theHeader = TheYoutubeLink.title.rendered;
        var theVideo = TheYoutubeLink.video_link;

        // Want to filter by category so look into all categories to find what we need
        TheYoutubeLink.categories.forEach(linkCat => {

            // category id of frontpage video is 8
            if (linkCat == 8) {

                // Display the video
                document.querySelector(".front-page-youtube").src = theVideo;

                //Display the title of the video
                document.querySelector(".the-video-title-fetched").textContent = theHeader;
            }
        });
    });
}

function handleInstagramPhotosData(InstagramPhotos) {

    InstagramPhotos.forEach(instaPhoto => {
        //        cloneInstaTemp.instaPhoto
        const instagramTemplate = document.querySelector(".instagramTemplate").content;
        const cloneInstaTemp = instagramTemplate.cloneNode(true);

        cloneInstaTemp.querySelector(".imgInstagramCarousel").src = instaPhoto.source_url

        console.log(instaPhoto.source_url)

        document.querySelector(".theInstagram").appendChild(cloneInstaTemp);
    });

    //        cloneInstaTemp.querySelector(".imgInstagramCarousel").src = instaPhoto.source_url
}

function handleArticleData(ArticleData) {
    ArticleData.forEach(theArticle => {

        var theArticleLink = theArticle.article_link;
        var theArticleTitle = theArticle.title.rendered;
        var theWebsiteName = theArticle.website_name;
        var theArticlePhotoLink = theArticle.article_image_link;

        //        theArticle.forEach(displayArticle => {

        const pressTemplate = document.querySelector(".pressArticles").content;
        const clonePressTemp = pressTemplate.cloneNode(true);


        clonePressTemp.querySelector(".pressTitle").textContent = theArticleTitle;

        clonePressTemp.querySelector(".websiteName").textContent = theWebsiteName;

        clonePressTemp.querySelector(".pressImg").src = theArticlePhotoLink;

        clonePressTemp.querySelector(".theArticleLink").href = theArticleLink;


        document.querySelector(".press").appendChild(clonePressTemp)

        //        });
    });
}

function handleQuotes(quotes) {
    quotes.forEach(showQuotes)
}

function showQuotes(oneQuote) {

    var thePressQuote = oneQuote.quote_content;
    var quotedPerson = oneQuote.quote_author;


    oneQuote.categories.forEach(quoteCat => {

        if (quoteCat == 13) {

            const pressQuoteTemp = document.querySelector(".pressQuotesTemp").content;

            const clonePressQuoteTemp = pressQuoteTemp.cloneNode(true);

            console.log(quotedPerson);

            clonePressQuoteTemp.querySelector(".thePressQuote").textContent = thePressQuote;

            clonePressQuoteTemp.querySelector(".quotedPerson").textContent = quotedPerson;

            document.querySelector(".containerPressQuotes").appendChild(clonePressQuoteTemp);


            const oneSlide = document.querySelector(".myPressSlides");
            oneSlide.style.display = "block";

            const firstDot = document.querySelector(".pressDot");
            firstDot.classList.add("active");

        }
    });
}


//function showQuotes (quotes) {
//    console.log(quotes);
//    const quoteTemp = document.querySelector(".quote-template").content;
//    const copy = quoteTemp.cloneNode(true);
//    console.log(quotes.quote_content);
//
//    copy.querySelector(".quote").textContent = quotes.quote_content;
//    copy.querySelector(".author").textContent = quotes.quote_author;
//
//
//    document.querySelector(".slideshow-container").appendChild(copy);
//
//    const oneSlide = document.querySelector(".myPressSlides");
//    oneSlide.style.display = "block";
//
//    const firstDot = document.querySelector(".dot");
//    firstDot.classList.add("active");
//}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.querySelector(".myPressSlides").style.display = "block";

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myPressSlides");
    var dots = document.getElementsByClassName("pressDot");
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















