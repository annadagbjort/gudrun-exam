// Front page category = 5 (parent)
// http://designhavn.dk/5Wordpress/wp-json/wp/v2/categories?parent=5

//http://designhavn.dk/5Wordpress/wp-json/wp/v2/posts?_embed

// cat id = 6 : about the album

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/posts?_embed")
    .then(res => res.json())
    .then(handlePostData)

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/youtube_link")
    .then(res => res.json())
    .then(handleYoutubeLinkData)

function handlePostData(frontpagePostHandled) {

    frontpagePostHandled.forEach(item => {

        var theHeader = item.title.rendered;
        var theContent = item.content.rendered;


        item.categories.forEach(categor => {

            // Her Album
            if (categor == 6) {
                document.querySelector(".debut-album .fp-header").textContent = theHeader;

                document.querySelector(".text-about-album").innerHTML = theContent;
            }

            // Newsletter
            if (categor == 7) {
                document.querySelector(".newsletter-updates .fp-header").textContent = theHeader;

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
