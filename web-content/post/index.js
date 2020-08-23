load();

function load() {
    var xhr = new XMLHttpRequest();
    var url = "https://www.tiktok.com/@" + window.location.href.split("/@")[1]
    console.log(url)
    xhr.open("GET", "/api/post?url=" + url);
    xhr.send();
    xhr.onload = function () {
        var json = JSON.parse(xhr.responseText);
        if (!json.err) {
            document.getElementById("load").style.display = "none";
            document.getElementById("page").style.display = "";
            document.getElementById("player").poster = "/proxy/" + btoa(json.imageUrl);
            document.getElementById("player").src = "/proxy/" + btoa(json.videoUrl);
            document.getElementById("authLink").href = "/@" + json.authorMeta.name;
            document.getElementById("auth").innerHTML = json.authorMeta.name;
            document.getElementById("musiLink").href = "/tune/" + json.musicMeta.musicId;
            document.getElementById("musi").innerHTML = json.musicMeta.musicName + " - " + json.musicMeta.musicAuthor;
            var d = new Date(parseInt(json.createTime) * 1000);
            var month = d.getMonth();
            var day = d.getDate();
            var year = d.getFullYear();
            if (d.getHours() >= 13) {
                var ap = "pm";
                var hour = d.getHours() - 12;
            } else {
            if (d.getHours == 0) {
                    var hour = 12; 
                    var ap = "am"
                } else {
                    var ap = "am";
                    var hour = d.getHours();
                }
            }
            if (d.getSeconds().toString().length == 1) {var sec = "0" + d.getSeconds();} else {var sec = d.getSeconds();}
            if (d.getMinutes().toString().length == 1) {var min = "0" + d.getMinutes();} else {var min = d.getMinutes();}
            document.getElementById("pub").innerHTML = month + "/" + day + "/" + year + " at " + hour + ":" + min + ":" + sec + ap;
            document.getElementById("vi").innerHTML = json.playCount.toLocaleString();
            document.getElementById("li").innerHTML = json.diggCount.toLocaleString();
            document.getElementById("sh").innerHTML = json.shareCount.toLocaleString();
            document.getElementById("content").innerHTML = json.text;
            document.title = json.text + " | WireTick";
        } else {
            document.getElementById("err").style.display = "";
            document.getElementById("load").style.display = "none";
            document.getElementById("errTxt").innerHTML = json.err;
        }
    }
}