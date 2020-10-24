load();

function load() {
    var xhr = new XMLHttpRequest();
    var id = window.location.href.split("/@")[1];
    xhr.open("GET", "/api/user/" +id);
    xhr.send();
    xhr.onload = function () {
        var json = JSON.parse(xhr.responseText);
        if (!json.err) {
            document.getElementById("load").style.display = "none";
            document.getElementById("profile").style.display = "";
            document.getElementById("authName").innerHTML = json.user.user.uniqueId;
            document.getElementById("videoCount").innerHTML = json.user.stats.videoCount.toLocaleString();
            document.getElementById("followerCount").innerHTML = json.user.stats.followerCount.toLocaleString();
            document.getElementById("followingCount").innerHTML = json.user.stats.followingCount.toLocaleString();
            document.getElementById("totalLikes").innerHTML = json.user.stats.heartCount.toLocaleString();
            document.getElementById("authPfp").src = "/proxy/" + btoa(json.user.user.avatarMedium);
            document.title = json.user.user.uniqueId + " | WireTick";
            for (var c in json.video.collector) {
                var link = document.createElement("A");
                link.href = json.video.collector[c].webVideoUrl.split("https://www.tiktok.com")[1];
                var img = document.createElement("IMG");
                img.src = "/proxy/" + btoa(json.video.collector[c].covers.origin);
                link.appendChild(img);
                document.getElementById("feed").appendChild(link);
            }
        } else {
            document.getElementById("load").style.display = "none";
            document.getElementById("err").style.display = "";
            document.getElementById("errTxt").innerHTML = json.err;
        }
    }
}