load();

function load() {
    var id = window.location.pathname.split("-")[window.location.pathname.split("-").length - 1];
    console.log(id)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/tune/" + id);
    xhr.send();
    xhr.onload = function () {
        var json = JSON.parse(xhr.responseText);
        if (!json.err) {
            document.getElementById("load").style.display = "none";
            document.getElementById("profile").style.display = "";
            document.getElementById("cover").src = "/proxy/" + btoa(json.musicInfo.coverMedium);
            document.getElementById("title").innerHTML = json.musicInfo.musicName;
            document.title = json.musicInfo.musicName + " | WireTick";
            document.getElementById("authorName").innerHTML = json.musicInfo.musicAuthor;
            for (var c in json.music.collector) {
                var link = document.createElement("A");
                link.href = json.music.collector[c].webVideoUrl.split("https://www.tiktok.com")[1];
                var img = document.createElement("IMG");
                img.src = "/proxy/" + btoa(json.music.collector[c].covers.origin);
                link.appendChild(img);
                document.getElementById("feed").appendChild(link);
            }
        } else {
            document.getElementById("err").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("errTxt").innerHTML = json.err;
        }
    }
    
}