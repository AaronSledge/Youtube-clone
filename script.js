$(document).ready(function() {
    let key = "AIzaSyBaALcbJBOPeFoo0KrK17yLuG00SiRSOCc";
    let playlistId = "PLzAV3MmF_ZhJ2P8HFMaZDhG8-Q5zax94o";
    let url = "https://www.googleapis.com/youtube/v3/playlistItems";
    let options = {
        part: "snippet",
        key: key,
        maxResults: 36,
        playlistId: playlistId
    }

    loadVids();


    function loadVids() {
        $.getJSON(url, options, function(data){
            console.log(data);
            let id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsloop(data);
        })
    }

    function mainVid(id) {
        $("#video").html(`
        <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/${id}" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        `)
    }

    function resultsloop(data) {

        $.each(data.items, function(i, item) {
            let thumb = item.snippet.thumbnails.medium.url;

            $("main").append(`
            <article>
                <img src="${thumb}" alt="thumbnail" class="thumb">
                <div class="details">
                <h4>Title</h4>
                <p>description</p>
                </div>
            </article>
        
        `);

        });

        
        
    }
});