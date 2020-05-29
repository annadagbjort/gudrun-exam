//music page

fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/posts?_embed")
    .then(res => res.json())
    .then(handlePostData)



function handlePostData(frontpagePostHandled) {



    frontpagePostHandled.forEach(item => {



        // The header fetched
        var theHeader = item.title.rendered;

        // The content fetched (all text that is not h1, so the h2, body text and everything)
        var theContent = item.content.rendered;




// I find the category id of the post so I can find the one I need
        item.categories.forEach(categor => {



            // Her Album
            if (categor == 6) {
                document.querySelector(".album-section-header").textContent = theHeader;



                document.querySelector(".album-col2").innerHTML = theContent;

            }

        });
    });
}


//music page performance videos


fetch("http://designhavn.dk/5Wordpress/wp-json/wp/v2/youtube_link")
    .then(res => res.json())
    .then(handleYoutubePostData)

function handleYoutubePostData(youtubeVideos) {

    youtubeVideos.forEach(performanceVideo => {


        const performanceVideosTemplate =              document.querySelector(".performanceVideosTemplate").content;

        const cloneYoutubeTemp = performanceVideosTemplate.cloneNode(true);

        cloneYoutubeTemp.querySelector(".youtubeVideosIframe").src = performanceVideo.video_link;

//        console.log(performanceVideo.video_link)

        document.querySelector(".live-performances-videos").appendChild(cloneYoutubeTemp);
    })
}







