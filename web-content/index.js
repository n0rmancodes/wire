load();

function load() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/trending");
    xhr.send();
    xhr.onload = function () {
        var json = JSON.parse(xhr.responseText);
        for (var c in json.collector) {
            var link = document.createElement("A");
            link.href = json.collector[c].webVideoUrl.split("https://www.tiktok.com/")[1];
            var div = document.createElement("DIV");
            var img = document.createElement("IMG");
            img.src = json.collector[c].covers.dynamic;
            div.appendChild(img);
            var div2 = document.createElement("DIV");
            div2.classList.add("infoBox");
            var cr = document.createElement("H2");
            var cr_ico = document.createElement("SPAN");
            cr_ico.classList.add("material-icons");
            cr_ico.innerHTML = "person";
            cr.appendChild(cr_ico);
            cr.innerHTML = cr.innerHTML + " " + json.collector[c].authorMeta.name;
            div2.appendChild(cr);
            var mu = document.createElement("H2");
            var mu_ico = document.createElement("SPAN");
            mu_ico.classList.add("material-icons");
            mu_ico.innerHTML = "headset";
            mu.appendChild(mu_ico);
            mu.innerHTML = mu.innerHTML + " " + json.collector[c].musicMeta.musicName + " - " + json.collector[c].musicMeta.musicAuthor;
            div2.appendChild(mu);
            var pu = document.createElement("H2");
            var pu_ico = document.createElement("SPAN");
            pu_ico.classList.add("material-icons");
            pu_ico.innerHTML = "date_range";
            pu.appendChild(pu_ico);
            var d = new Date(json.collector[c].createTime * 1000);
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
            pu.innerHTML = pu.innerHTML + " posted on " +  month + "/" + day + "/" + year + " at " + hour + ":" + min + ":" + sec + ap;
            div2.appendChild(pu);
            var vi = document.createElement("H2");
            var vi_ico = document.createElement("SPAN");
            vi_ico.classList.add("material-icons");
            vi_ico.innerHTML = "visibility";
            vi.appendChild(vi_ico);
            vi.innerHTML = vi.innerHTML + " " + json.collector[c].playCount.toLocaleString() + " views";
            div2.appendChild(vi);
            var li = document.createElement("H2");
            var li_ico = document.createElement("SPAN");
            li_ico.classList.add("material-icons");
            li_ico.innerHTML = "thumb_up";
            li.appendChild(li_ico);
            li.innerHTML = li.innerHTML + " " + json.collector[c].diggCount.toLocaleString() + " likes";
            div2.appendChild(li);
            var sh = document.createElement("H2");
            var sh_ico = document.createElement("SPAN");
            sh_ico.classList.add("material-icons");
            sh_ico.innerHTML = "reply";
            sh.appendChild(sh_ico);
            sh.innerHTML = sh.innerHTML + " " + json.collector[c].shareCount.toLocaleString() + " shares";
            div2.appendChild(sh);
            var text = document.createElement("P");
            text.innerHTML = json.collector[c].text;
            div2.appendChild(text);
            div.appendChild(div2);
            link.appendChild(div);
            document.getElementById("feed").appendChild(link);
        }
    }
}