load();

function load() {
    var id = window.location.pathname.split("/tune/")[1].split("/")[0]
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/tune/" + id);
    xhr.send();
    xhr.onload = function () {
        var json = JSON.parse(xhr.responseText);
        document.getElementById("load").style.display = "none";
        document.getElementById("profile").style.display = "";
        document.getElementById("cover").src = json.musicInfo.coverMedium;
        document.getElementById("title").innerHTML = json.musicInfo.musicName;
        document.getElementById("authorName").innerHTML = json.musicInfo.musicAuthor;
        for (var c in json.music.collector) {
            var link = document.createElement("A");
            link.href = json.music.collector[c].webVideoUrl.split("https://www.tiktok.com")[1];
            var img = document.createElement("IMG");
            img.src = json.music.collector[c].covers.origin;
            link.appendChild(img);
            document.getElementById("feed").appendChild(link);
        }
    }
    
}