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
            document.getElementById("authName").innerHTML = json.user.uniqueId;
            document.getElementById("videoCount").innerHTML = parseInt(json.user.video).toLocaleString();
            document.getElementById("followerCount").innerHTML = parseInt(json.user.fans).toLocaleString();
            document.getElementById("followingCount").innerHTML = parseInt(json.user.following).toLocaleString();
            document.getElementById("totalLikes").innerHTML = parseInt(json.user.heart).toLocaleString();
            document.getElementById("authPfp").src = json.user.coversMedium[0];
        } else {
            document.getElementById("load").style.display = "none";
            document.getElementById("err").style.display = "";
        }
    }
}