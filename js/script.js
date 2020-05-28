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
