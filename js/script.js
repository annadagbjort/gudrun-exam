// Front page category = 5 (parent)
// http://designhavn.dk/5Wordpress/wp-json/wp/v2/categories?parent=5

//http://designhavn.dk/5Wordpress/wp-json/wp/v2/posts?_embed

// cat id = 6 : about the album
fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/media?_embed")
    .then(res => res.json())
    .then(handleInstagramPhotosData)

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

function handlePostData(frontpagePostHandled) {

    frontpagePostHandled.forEach(item => {

        var theHeader = item.title.rendered;
        var theContent = item.content.rendered;
        var theExcerpt = item.excerpt.rendered;


        item.categories.forEach(categor => {

            // Her Album
            if (categor == 6) {
                document.querySelector(".debut-album .fp-header").textContent = theHeader;

                document.querySelector(".text-about-album").innerHTML = theExcerpt;


            }

            // Newsletter
            if (categor == 7) {
                //                document.querySelector(".newsletter-updates .fp-header").textContent = theHeader;

                document.querySelector(".text-about-newsletter").innerHTML = theContent;
            }

        });
    });
}

function handleYoutubeLinkData(youtubeLinks) {
    youtubeLinks.forEach(TheYoutubeLink => {

        var theHeader = TheYoutubeLink.title.rendered;
        var theVideo = TheYoutubeLink.video_link;

        TheYoutubeLink.categories.forEach(linkCat => {
            if (linkCat == 8) {
                document.querySelector(".front-page-youtube").src = theVideo;

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


        document.querySelector(".press").appendChild(clonePressTemp)

        //        });
    });
}

function handleQuotes(quotes) {
    //    console.log(quotes);
    quotes.forEach(showQuotes)
}


function showQuotes(oneQuote) {

    var thePressQuote = oneQuote.quote_content;
    var quotedPerson = oneQuote.quote_author;

    oneQuote.categories.forEach(quoteCat => {

        if (quoteCat == 13) {
            const pressQuoteTemp = document.querySelector(".pressQuotesTemp").content;

            const clonePressQuoteTemp = pressQuoteTemp.cloneNode(true);

           console.log(oneQuote);
            pressQuoteTemp.querySelector(".thePressQuote").textContent = thePressQuote;

            pressQuoteTemp.querySelector(".quotedPerson").textContent = quotedPerson;

            document.querySelector(".quotes").appendChild(pressQuoteTemp);

        }
    });
}



//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//    showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//    showSlides(slideIndex = n);
//}
//
//document.querySelector(".mySlides").style.display = "block";
//
//function showSlides(n) {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    if (n > slides.length) {
//        slideIndex = 1
//    }
//    if (n < 1) {
//        slideIndex = slides.length
//    }
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex - 1].style.display = "block";
//    dots[slideIndex - 1].className += " active";
//}
