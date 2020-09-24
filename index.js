const TikTokScraper = require("tiktok-scraper");
const http = require("http");
const url = require("url");
const fs = require("fs");
const got = require("got");
http.createServer(runServer).listen(process.env.PORT || 300);
console.log("- wiretick is running!");
async function runServer(request, resp) {
    var u = url.parse(request.url, true);
    var path = u.pathname;
    var param = u.query;
    var path_parsed = path.split("/");
    if (path_parsed[1] == "api") {
        if (path_parsed[2] == "user") {
            try {
                if (path_parsed[3]) {
                    var uu = path_parsed[3]
                } else {
                    var d = JSON.stringify({
                        "err": "moreDataNeeded"
                    });
                    resp.writeHead(404, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(d);
                    return;
                }
                var user = await TikTokScraper.getUserProfileInfo(uu);
                var video = await TikTokScraper.user(uu, {number: 100});
                var d = JSON.stringify({user, video});
                resp.writeHead(200, {
                    "Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
                })
                resp.end(d);
            } catch (error) {
                console.log(error)
                var d = JSON.stringify({
                    "err": error
                });
                resp.writeHead(404, {
                    "Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
                })
                resp.end(d);
            }
        } else if (path_parsed[2] == "trending") {
            if (!fs.existsSync("./cache/trending.json")) {
                try {
                    var posts = await TikTokScraper.trend('', { number: 50 });
                    var da = (Date.now() / 1000);
                    var exp = da + 3600;
                    var d = {
                        "data": posts,
                        "exp": exp
                    }
                    if (!fs.existsSync("./cache/")) {
                        fs.mkdirSync("./cache/");
                    }
                    if (posts.collector[0]) {
                        fs.writeFileSync("./cache/trending.json", JSON.stringify(d));
                    }
                    posts = JSON.stringify(posts);
                    resp.writeHead(200, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(posts);
                } catch (error) {
                    console.log(error)
                    var d = JSON.stringify({
                        "err": error
                    });
                    resp.writeHead(404, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(d);
                }
            } else {
                var json = JSON.parse(fs.readFileSync("./cache/trending.json"));
                var da = (Date.now() / 1000);
                if (json.exp < da) {
                    try {
                        var posts = await TikTokScraper.trend('', { number: 50 });
                        var da = (Date.now() / 1000);
                        var exp = da + 3600;
                        var d = {
                            "data": posts,
                            "exp": exp
                        }
                        if (!fs.existsSync("./cache/")) {
                            fs.mkdirSync("./cache/");
                        }
                        if (posts.collector[0]) {
                            fs.writeFileSync("./cache/trending.json", JSON.stringify(d));
                        }
                        posts = JSON.stringify(posts);
                        resp.writeHead(200, {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        })
                        resp.end(posts);
                    } catch (error) {
                        console.log(error)
                        var d = JSON.stringify({
                            "err": error
                        });
                        resp.writeHead(404, {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        })
                        resp.end(d);
                    }
                } else {
                    var d = JSON.stringify(json.data);
                    resp.writeHead(200, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(d);
                }
            }
        } else if (path_parsed[2] == "tag") {
            try {
                if (path_parsed[3]) {
                    var hashtag = await TikTokScraper.getHashtagInfo(path_parsed[3]);
                    var hashtagContent = await TikTokScraper.hashtag(path_parsed[3], {number: 100});
                } else {
                    var d = JSON.stringify({
                        "err": "moreDataNeeded"
                    });
                    resp.writeHead(404, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(d);
                    return;
                }
                var d = JSON.stringify({hashtag, hashtagContent});
                resp.writeHead(200, {
                    "Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
                })
                resp.end(d);
            } catch (error) {
                console.log(error)
                var d = JSON.stringify({
                    "err": error
                });
                resp.writeHead(404, {
                    "Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
                })
                resp.end(d);
            }
        } else if (path_parsed[2] == "post") {
            try {
                if (param.url) {
                    var videoMeta = await TikTokScraper.getVideoMeta(param.url);
                    videoMeta = JSON.stringify(videoMeta);
                    resp.writeHead(200, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(videoMeta);
                } else {
                    var d = JSON.stringify({
                        "err": "moreDataNeeded"
                    });
                    resp.writeHead(404, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(d);
                }
            } catch (error) {
                console.log(error)
                var d = JSON.stringify({
                    "err": error
                });
                resp.writeHead(404, {
                    "Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
                })
                resp.end(d);
            }
        } else if (path_parsed[2] == "tune") {
            try {
                if (path_parsed[3]) {
                    var music = await TikTokScraper.music(path_parsed[3], {number: 100});
                    if (music.collector[0]) {
                        var musicInfo = music.collector[0].musicMeta;
                    } else {
                        var musicInfo = {};
                    }
                    var d = JSON.stringify({music, musicInfo});
                    resp.writeHead(200, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(d);
                } else {
                    var d = JSON.stringify({
                        "err": "moreDataNeeded"
                    });
                    resp.writeHead(404, {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(d);
                }
            } catch (error) {
                console.log(error)
                var d = JSON.stringify({
                    "err": error
                });
                resp.writeHead(404, {
                    "Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
                })
                resp.end(d);
            }
        } else {
            var d = JSON.stringify({
                "err": "invalidEndpoint"
            });
            resp.writeHead(404, {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            })
            resp.end(d);
        }
    } else if (path_parsed[1].substring(0, 1) == "@" && path_parsed[2] == "video") {
        fs.readFile("./web-content/post/index.html", function(err,res) {
            if (err) {
                resp.end("see console for errors");
                console.log("incomplete installation has occured.")
            } else {
                resp.writeHead(200, {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "text/html"
                })
                resp.end(res);
            }
        })
    } else if (path_parsed[1].substring(0, 1) == "@") {
        fs.readFile("./web-content/creator/index.html", function(err,res) {
            if (err) {
                resp.end("see console for errors");
                console.log("incomplete installation has occured.")
            } else {
                resp.writeHead(200, {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "text/html"
                })
                resp.end(res);
            }
        })
    } else if (path_parsed[1] == "tune") {
        if (!path_parsed[2]) {
            fs.readFile("./error/404.html", function(err, res) {
                if (err) {
                    resp.end("see console for errors");
                    console.log("incomplete installation has occured.")
                } else {
                    resp.writeHead(404, {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "text/html"
                    })
                    resp.end(res);
                }
            })
        } else if (path_parsed[2] == "index.js") {
            fs.readFile("./web-content/tune/index.js", function(err,res) {
                if (err) {
                    resp.end("see console for errors");
                    console.log("incomplete installation has occured.");
                } else {
                    resp.writeHead(200, {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/javascript"
                    })
                    resp.end(res);
                }
            })
        } else {
            fs.readFile("./web-content/tune/index.html", function(err,res) {
                if (err) {
                    resp.end("see console for errors");
                    console.log("incomplete installation has occured.");
                } else {
                    resp.writeHead(200, {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "text/html"
                    })
                    resp.end(res);
                }
            })
        }
    } else if (path_parsed[1] == "proxy") {
        if (path_parsed[2]) {
            try {
                var ur = Buffer.from(path_parsed[2], "base64").toString("utf-8");
                var u = url.parse(ur, true);
                var d = got.stream(ur, {
                    headers: {
                        "Host":  u.host,
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36 OPR/70.0.3728.189",
                        "Accept-Encoding": "identity;q=1, *;q=0",
                        "Accept":" */*",
                        "Sec-Fetch-Site": "cross-site",
                        "Referer": "https://www.tiktok.com/foryou"
                    }
                }).on("close", function() {
                    resp.end();
                }).on("error", function(e) {
                    resp.end();
                })
                d.pipe(resp)
            } catch (error) {
                if (error.message) {
                    resp.writeHead(404, {
                        "Content-Type": "text/plain"
                    })
                    resp.end(error.message);
                } else {
                    resp.writeHead(404, {
                        "Content-Type": "text/plain"
                    })
                    resp.end(error);
                }
            }
        } else {
            resp.writeHead(404, {
                "Content-Type": "text/plain"
            })
            resp.end("must have url");
        }
        
    } else {
        fs.readFile("./web-content/" + path, function(err, res) {
            if (err) {
                if (err.code == "EISDIR") {
                    fs.readFile("./web-content/" + path + "/index.html", function(err, res) {
                        if (err) {
                            if (err.code == "ENOENT") {
                                fs.readFile("./error/404.html", function(err, res) {
                                    if (err) {
                                        resp.end("see console for errors");
                                        console.log("incomplete installation has occured.")
                                    } else {
                                        resp.writeHead(404, {
                                            "Access-Control-Allow-Origin": "*",
                                            "Content-Type": "text/html"
                                        })
                                        resp.end(res);
                                    }
                                })
                            }
                        } else {
                            resp.writeHead(200, {
                                "Access-Control-Allow-Origin": "*",
                                "Content-Type": "text/html"
                            })
                            resp.end(res);
                        }
                    })
                } else if (err.code == "ENOENT") {
                    fs.readFile("./error/404.html", function(err, res) {
                        if (err) {
                            resp.end("see console for errors");
                            console.log("incomplete installation has occured.")
                        } else {
                            resp.writeHead(404, {
                                "Access-Control-Allow-Origin": "*",
                                "Content-Type": "text/html"
                            })
                            resp.end(res);
                        }
                    })
                } else {
                    resp.end("please report this error to the developers - " + err.code);
                }
            } else {
                var fileType = path.split(".")[path.split(".").length - 1];
                if (fileType == "html") {
                    resp.writeHead(200, {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "text/html"
                    })
                    resp.end(res);
                } else if (fileType == "js") {
                    resp.writeHead(200, {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/javascript"
                    })
                    resp.end(res);
                } else if (fileType == "css") {
                    resp.writeHead(200, {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "text/css"
                    })
                    resp.end(res);
                } else {
                    resp.writeHead(200, {
                        "Access-Control-Allow-Origin": "*"
                    })
                    resp.end(res);
                }
            }
        })
    }
}