# API Documentation
This is documentation for the API used in WireTick. Based on the private API used on TikTok's website.

Things in ``[brackets]`` are variables and need to be changed yourself.

## User Feed
### GET ``/api/user/[username]``
This gets a user's metadata and their most recent posts (100 or less).
### Example Body 
*This example was shortened to prevent the size from getting too big to scroll through easily. You can use the link below if you'd like to see a live example.*
```json
{
  "user": {
    "user": {
      "id": "6619407237554651142",
      "uniqueId": "kierapleaze",
      "nickname": "Kiera Please",
      "avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_100x100.jpeg?x-expires=1603598400&x-signature=ZBPzqlH88xCfuVM9PkIvm1pX2Mo%3D",
      "avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_720x720.jpeg?x-expires=1603598400&x-signature=S5rn%2Ftq%2BVa2RV1IdnRsUK%2FKGKDw%3D",
      "avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_1080x1080.jpeg?x-expires=1603598400&x-signature=Qfyb3oNLHJUVYUlTHKz3LQx0WXs%3D",
      "signature": "I am alive .. i think 🐛🦋 💫\nig, twitter, youtube, my soul: kieraplease",
      "verified": false,
      "secUid": "MS4wLjABAAAAssSVm9mYJdUv9OBAaOK-_cjOlVFqCl62vn_95G6a_NJVM693IvxpcIfOU7wqRWpW",
      "secret": false,
      "ftc": false,
      "relation": 0,
      "openFavorite": false,
      "commentSetting": 0,
      "duetSetting": 0,
      "stitchSetting": 0,
      "privateAccount": false
    },
    "stats": {
      "followingCount": 44,
      "followerCount": 470700,
      "heartCount": 7100000,
      "videoCount": 113,
      "diggCount": 0,
      "heart": 7100000
    },
    "shareMeta": {
      "title": "Kiera Please on TikTok",
      "desc": "@kierapleaze 470.0k Followers, 44 Following, 7.0m Likes - Watch awesome short videos created by Kiera Please"
    }
  },
  "video": {
    "collector": [
      {
        "id": "6886892080350629125",
        "text": "is this worth posting, i can’t tell",
        "createTime": 1603479563,
        "authorMeta": {
          "id": "6619407237554651142",
          "secUid": "MS4wLjABAAAAssSVm9mYJdUv9OBAaOK-_cjOlVFqCl62vn_95G6a_NJVM693IvxpcIfOU7wqRWpW",
          "name": "kierapleaze",
          "nickName": "Kiera Please",
          "verified": false,
          "signature": "I am alive .. i think 🐛🦋 💫\nig, twitter, youtube, my soul: kieraplease",
          "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_1080x1080.jpeg?x-expires=1603598400&x-signature=Qfyb3oNLHJUVYUlTHKz3LQx0WXs%3D"
        },
        "musicMeta": {
          "musicId": "6886891493907335942",
          "musicName": "Funny Thing Thundercat",
          "musicAuthor": "Kiera Please",
          "musicOriginal": true,
          "playUrl": "https://sf16-va.tiktokcdn.com/obj/musically-maliva-obj/6886891332107848453.mp3",
          "coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_100x100.jpeg?x-expires=1603598400&x-signature=ZBPzqlH88xCfuVM9PkIvm1pX2Mo%3D",
          "coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_720x720.jpeg?x-expires=1603598400&x-signature=S5rn%2Ftq%2BVa2RV1IdnRsUK%2FKGKDw%3D",
          "coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_1080x1080.jpeg?x-expires=1603598400&x-signature=Qfyb3oNLHJUVYUlTHKz3LQx0WXs%3D"
        },
        "covers": {
          "default": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/76fbdfff364042a08ab87d22954557e3?x-expires=1603533600&x-signature=GkTF%2B0GLCskNr6oEay%2Fq1rnPBbY%3D",
          "origin": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c5b263782d33436fa1479c39c7640a6e_1603479564?x-expires=1603533600&x-signature=4AXPg5wOexz1ytGMfwiPTYU%2F0zw%3D",
          "dynamic": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0c86d98f1eda48eba524b2df3e009abf_1603479564?x-expires=1603533600&x-signature=rQ63ptQ4Xn94dHjY7OuE8VJB%2BlI%3D"
        },
        "webVideoUrl": "https://www.tiktok.com/@kierapleaze/video/6886892080350629125",
        "videoUrl": "https://v19-web-newkey.tiktokcdn.com/f3b47ef33beb95f406e07a06a4c57fbb/5f93fb36/video/tos/useast2a/tos-useast2a-ve-0068c002/d8116e63aaf5405facc86a862bc2145a/?a=1988&br=3182&bt=1591&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202010240400070101890482104B110059&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anl4d25sOzNseDMzZjczM0ApNzZpZThlNzs0NzU1NzpmM2dpZmcvZXAwZDZfLS0wMTZzc2AwMjUyYF41YjIvMy41MmI6Yw%3D%3D&vl=&vr=",
        "videoUrlNoWaterMark": "",
        "videoMeta": {
          "height": 1024,
          "width": 576,
          "duration": 15
        },
        "diggCount": 80600,
        "shareCount": 715,
        "playCount": 185100,
        "commentCount": 1334,
        "downloaded": false,
        "mentions": [],
        "hashtags": []
      }
    ]
  }
}
```
[Live Example](https://wiretick.me/api/user/kierapleaze)

## Trending Feed
### GET ``/api/trending``
This gets the trending page in your area.
### Example Body
*This example was shortened to prevent the size from getting too big to scroll through easily. You can use the link below if you'd like to see a live example.*
```json
{
  "collector": [
    {
      "id": "6882425748389514502",
      "text": "#stepmomsoftiktok #daughter #funny #dance #trending #fyp",
      "createTime": 1602439661,
      "authorMeta": {
        "id": "6838325248925074437",
        "secUid": "MS4wLjABAAAAH0tr_VB4Bo0HjcgZTyNLk8pJKeGxxJDbwh1k9JRFzrTl_Tr3S8FYqxCsxmTK-ARk",
        "name": "bigdaddytex_tiffie",
        "nickName": "user4359157966849",
        "verified": false,
        "signature": "PayPal.Me/tiffie252",
        "avatar": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/4c333b309286fd614915db8b11fdee1e~c5_1080x1080.jpeg?x-expires=1603598400&x-signature=WRcEkAxKSNgUCS35IqNOAyLPvZg%3D"
      },
      "musicMeta": {
        "musicId": "6881096052292750082",
        "musicName": "original sound",
        "musicAuthor": "Giorgia ",
        "musicOriginal": true,
        "playUrl": "https://sf16-sg.tiktokcdn.com/obj/tiktok-obj/6881095991349545730.mp3",
        "coverThumb": "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/09d8bc56ff6cc3f30c3c1ad34f18b457.jpeg?x-expires=1603598400&x-signature=3gRG6aAFKSbMJdv%2BtIFKh2lZ3n4%3D",
        "coverMedium": "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/09d8bc56ff6cc3f30c3c1ad34f18b457.jpeg?x-expires=1603598400&x-signature=cO3EtN3GvalLiIMLuGPNNV6SocY%3D",
        "coverLarge": "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/09d8bc56ff6cc3f30c3c1ad34f18b457.jpeg?x-expires=1603598400&x-signature=R4a4EWaQ6ZfngsgOqkKp14MbGEA%3D"
      },
      "covers": {
        "default": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8e57bf2fd1d545fbbf7a3850d8ba3174?x-expires=1603533600&x-signature=wFpHd1gY7Q4mecvL1r682Xi6ilw%3D",
        "origin": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b6d9d60a99b8439cb917995f229542a4_1602439663?x-expires=1603533600&x-signature=uaUaaYd%2B6lisZpW0bpCE2%2FU8EcQ%3D",
        "dynamic": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/a68e17ee00e544dc8077553a70bd98ef_1602439663?x-expires=1603533600&x-signature=Tqtw0MfA7748Ujb2GCnqcZcbT3M%3D"
      },
      "webVideoUrl": "https://www.tiktok.com/@bigdaddytex_tiffie/video/6882425748389514502",
      "videoUrl": "https://v19-web-newkey.tiktokcdn.com/960adaccdcc7c039e345463d9d77347d/5f93fc50/video/tos/useast2a/tos-useast2a-ve-0068c002/5b0bad367fb8497894eb3d6f39b8f9fa/?a=1988&br=5080&bt=2540&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201024040449010190209083071108C1&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajludDdmOnRueDMzNjczM0ApZmg7NDg0PGRlN2c0OWVnaGdrNDU1NmU0Zy5fLS0yMTZzcy4vMGFfMy0tMDFgY2FiLTQ6Yw%3D%3D&vl=&vr=",
      "videoUrlNoWaterMark": "",
      "videoMeta": {
        "height": 1024,
        "width": 576,
        "duration": 15
      },
      "diggCount": 85700,
      "shareCount": 1538,
      "playCount": 664500,
      "commentCount": 682,
      "downloaded": false,
      "mentions": [],
      "hashtags": [
        {
          "id": "1644257666229253",
          "name": "stepmomsoftiktok",
          "title": "",
          "cover": ""
        },
        {
          "id": "3560",
          "name": "daughter",
          "title": "",
          "cover": ""
        },
        {
          "id": "5424",
          "name": "funny",
          "title": "",
          "cover": ""
        },
        {
          "id": "5054",
          "name": "dance",
          "title": "",
          "cover": ""
        },
        {
          "id": "20105",
          "name": "trending",
          "title": "",
          "cover": ""
        },
        {
          "id": "229207",
          "name": "fyp",
          "title": "",
          "cover": ""
        }
      ]
    }
  ]
}
```
[Live Example](https://wiretick.me/api/trending)

## Hashtag Feed
### GET ``/api/tag/[hashtag]```
This gets a hashtag's metadata and posts within the hashtag.
### Example Body
*This example was shortened to prevent the size from getting too big to scroll through easily. You can use the link below if you'd like to see a live example.*
```json
{
  "hashtag": {
    "challenge": {
      "id": "229207",
      "title": "fyp",
      "desc": "",
      "profileThumb": "",
      "profileMedium": "",
      "profileLarger": "",
      "coverThumb": "",
      "coverMedium": "",
      "coverLarger": "",
      "isCommerce": false
    },
    "stats": {
      "videoCount": 0,
      "viewCount": 5314600000000
    },
    "shareMeta": {
      "title": "#fyp on TikTok",
      "desc": "5314600.0m views - Watch awesome short videos created with trending hashtag #fyp"
    },
    "challengeAnnouncement": {}
  },
  "hashtagContent": {
    "collector": [
      {
        "id": "6862153058223197445",
        "text": "To the 🐝 🐝 🐝  #fyp",
        "createTime": "1597719521",
        "authorMeta": {
          "id": "6748458643983238149",
          "secUid": "MS4wLjABAAAAIQGNoHByQvokcLbWCGnIfas0OV2nctsZnRFbN7eB04xt-9usrHe3UvXJRZLxBWlJ",
          "name": "bellapoarch",
          "nickName": "Bella Poarch",
          "following": 572,
          "fans": 38800000,
          "heart": "623200000",
          "video": 112,
          "digg": 6813,
          "verified": true,
          "private": false,
          "signature": "🇵🇭ako ay pilipino☀️\n✨Surprise at 40 mil✨\nThank u for 38\n bellapoarch@bas.media",
          "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2f8bad02bdad7e5d50e82a1081f05582~c5_720x720.jpeg?x-expires=1603598400&x-signature=wLvH7lesCbjniIz0a3c%2F2ebkFrs%3D"
        },
        "musicMeta": {
          "musicId": "6840839890826038022",
          "musicName": "M to the B",
          "musicAuthor": "Millie B",
          "musicOriginal": "",
          "playUrl": "https://sf16-sg.tiktokcdn.com/obj/tiktok-obj/d635f63c46aea260fed3a3b69d8595ed.mp3"
        },
        "covers": {
          "default": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/567504ab3e4648dea968213ce979f281?x-expires=1603533600&x-signature=6DcaBP%2B7jQQuso7tCdOXeXAznyk%3D",
          "origin": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f5de6be77f5a4922acd52380d1f9d3bb_1597719526?x-expires=1603533600&x-signature=JblbuMxMwF%2FoSrIE7IFHEvO%2F%2BBo%3D",
          "dynamic": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cbac911b3ff3473398dcfaceabb7b620_1597719522?x-expires=1603533600&x-signature=na6vY6gqfAESnAmvhiWcZoA3M2I%3D"
        },
        "imageUrl": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/f5de6be77f5a4922acd52380d1f9d3bb_1597719526?x-expires=1603533600&x-signature=JblbuMxMwF%2FoSrIE7IFHEvO%2F%2BBo%3D",
        "webVideoUrl": "https://www.tiktok.com/@bellapoarch/video/6862153058223197445",
        "videoUrl": "https://v19-web-newkey.tiktokcdn.com/44e2969fa3d89711a97e338251dfdd59/5f93fcce/video/tos/useast2a/tos-useast2a-ve-0068c004/ebbb4b852e534f16b22b9e658d65114c/?a=1988&br=2072&bt=1036&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201024040700010189074016251129CA&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anlwdTY8dXBudjMzNzczM0ApZDg2OTQ8aTw4NzVnaThpOGdfZnBub2xjNHFfLS0yMTZzc2FfYS81NmM1MF8yYl81MTI6Yw%3D%3D&vl=&vr=",
        "videoUrlNoWaterMark": "",
        "videoMeta": {
          "width": 576,
          "height": 1024,
          "ratio": 10,
          "duration": 10
        },
        "diggCount": 40500000,
        "shareCount": 1300000,
        "playCount": 494600000,
        "commentCount": 1300000,
        "downloaded": false,
        "mentions": [],
        "hashtags": [
          {
            "id": "229207",
            "name": "fyp",
            "title": "",
            "cover": []
          }
        ]
      }
    ]
  }
}
```
[Live Example](https://wiretick.me/api/tag/fyp)

## Post Metadata and Streaming URLs
### GET ``/api/post?url=[url]``
This gets a TikTok URL's metadata and streaming URL.

The headers have to fit a specific critera in order to be recieved correctly. This is why WireTick's web UI uses a proxy to access videos and such.
Below are the headers the proxy uses to retrieve videos.

```
"Host":  [URL Hostname],
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36 OPR/70.0.3728.189",
"Accept-Encoding": "identity;q=1, *;q=0",
"Accept":" */*",
"Sec-Fetch-Site": "cross-site",
"Referer": "https://www.tiktok.com/foryou"
```

This does not make it foolproof. The proxy could stop working at any time.
### Example Body
```json
{
  "id": "6886892080350629125",
  "text": "is this worth posting, i can’t tell",
  "createTime": 1603479563,
  "authorMeta": {
    "id": "6619407237554651142",
    "secUid": "MS4wLjABAAAAssSVm9mYJdUv9OBAaOK-_cjOlVFqCl62vn_95G6a_NJVM693IvxpcIfOU7wqRWpW",
    "name": "kierapleaze",
    "nickName": "Kiera Please",
    "following": 44,
    "fans": 470700,
    "heart": 7100000,
    "video": 113,
    "digg": 1989,
    "verified": false,
    "private": false,
    "signature": "I am alive .. i think 🐛🦋 💫\nig, twitter, youtube, my soul: kieraplease",
    "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_1080x1080.jpeg?x-expires=1603598400&x-signature=Qfyb3oNLHJUVYUlTHKz3LQx0WXs%3D"
  },
  "musicMeta": {
    "musicId": "6886891493907335942",
    "musicName": "Funny Thing Thundercat",
    "musicAuthor": "Kiera Please",
    "musicOriginal": true,
    "coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_100x100.jpeg?x-expires=1603598400&x-signature=ZBPzqlH88xCfuVM9PkIvm1pX2Mo%3D",
    "coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_720x720.jpeg?x-expires=1603598400&x-signature=S5rn%2Ftq%2BVa2RV1IdnRsUK%2FKGKDw%3D",
    "coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/651777e25d4eaeed90ea61be4243aaf3~c5_1080x1080.jpeg?x-expires=1603598400&x-signature=Qfyb3oNLHJUVYUlTHKz3LQx0WXs%3D"
  },
  "imageUrl": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/76fbdfff364042a08ab87d22954557e3?x-expires=1603533600&x-signature=GkTF%2B0GLCskNr6oEay%2Fq1rnPBbY%3D",
  "videoUrl": "https://v16-web-newkey.tiktokcdn.com/2c751c45506ecb0541ebd8ee23d633b6/5f93fe5c/video/tos/useast2a/tos-useast2a-ve-0068c002/d8116e63aaf5405facc86a862bc2145a/?a=1988&br=3182&bt=1591&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202010240413330101880322230C115845&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anl4d25sOzNseDMzZjczM0ApNzZpZThlNzs0NzU1NzpmM2dpZmcvZXAwZDZfLS0wMTZzc2AwMjUyYF41YjIvMy41MmI6Yw%3D%3D&vl=&vr=",
  "videoUrlNoWaterMark": null,
  "videoMeta": {
    "width": 576,
    "height": 1024,
    "ratio": "720p",
    "duration": 15
  },
  "covers": {
    "default": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/76fbdfff364042a08ab87d22954557e3?x-expires=1603533600&x-signature=GkTF%2B0GLCskNr6oEay%2Fq1rnPBbY%3D",
    "origin": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c5b263782d33436fa1479c39c7640a6e_1603479564?x-expires=1603533600&x-signature=4AXPg5wOexz1ytGMfwiPTYU%2F0zw%3D"
  },
  "diggCount": 81600,
  "shareCount": 718,
  "playCount": 1348,
  "commentCount": 187300,
  "downloaded": false,
  "mentions": [],
  "hashtags": []
}
```
[Live Example](https://wiretick.me/api/post?url=https://www.tiktok.com/@kierapleaze/video/6886892080350629125?lang=en)

## Sound Metadata
### GET ``/api/tune/[id]``
Music, or what's more referred to as "sound" metadata is retrieved using this endpoint.
### Example Body
*This example was shortened to prevent the size from getting too big to scroll through easily. You can use the link below if you'd like to see a live example.*
```json
{
  "music": {
    "collector": [
      {
        "id": "6872825393766796549",
        "text": "dc @jubi2fye",
        "createTime": 1600204370,
        "authorMeta": {
          "id": "5831967",
          "secUid": "MS4wLjABAAAA-VASjiXTh7wDDyXvjk10VFhMWUAoxr8bgfO1kAL1-9s",
          "name": "charlidamelio",
          "nickName": "charli d’amelio",
          "verified": true,
          "signature": "i am a megan thee stallion stan for life",
          "avatar": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/0a0242e5f906bf9301f859c568b5ecc4~c5_1080x1080.jpeg?x-expires=1603598400&x-signature=%2B7r7wVexueAVV1Jkm%2FLeTFVtii4%3D"
        },
        "musicMeta": {
          "musicId": "6865402095672068869",
          "musicName": "THICK",
          "musicAuthor": "DJ Chose & Beatking",
          "musicOriginal": false,
          "playUrl": "https://sf16-sg.tiktokcdn.com/obj/tiktok-obj/c79d1d6cb6efc7f434be0138a683e0b6.mp3",
          "coverThumb": "https://p16-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/d38188b8720b46b4a2c1adad65dab63d.jpeg",
          "coverMedium": "https://p16-sg.tiktokcdn.com/aweme/200x200/tos-alisg-i-0000/d38188b8720b46b4a2c1adad65dab63d.jpeg",
          "coverLarge": "https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-i-0000/d38188b8720b46b4a2c1adad65dab63d.jpeg"
        },
        "covers": {
          "default": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c3d2d2d348d64901a04cce6ae52b8e12?x-expires=1603533600&x-signature=4RT9B0gwuBFkxH%2FGo4WVnoW%2FwMk%3D",
          "origin": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bd5bff4595994c23a8a664996c88acb3_1600204371?x-expires=1603533600&x-signature=pdHNrAmDoktjX2OHG3xNpbrAapc%3D",
          "dynamic": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/cce55b80ccc44c1fbfc9f95ca53eeecb_1600204371?x-expires=1603533600&x-signature=uLmIBexLz0XSE1EcyO%2F7qJ501WA%3D"
        },
        "webVideoUrl": "https://www.tiktok.com/@charlidamelio/video/6872825393766796549",
        "videoUrl": "https://v16-web-newkey.tiktokcdn.com/fe7c22890089771e5fba45c1615d24f4/5f93ffd5/video/tos/useast2a/tos-useast2a-ve-0068c002/b1106ef9cdce42729548862efe6fe706/?a=1988&br=2842&bt=1421&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202010240419500101902182221300025D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2g1NDVuO2xsdzMzNDczM0ApPDw8NTgzNWRlN2k8NTZpO2dqMGFwX2BzcGRfLS1fMTZzc2MzYGBiMC8tYV8tXi8uMzM6Yw%3D%3D&vl=&vr=",
        "videoUrlNoWaterMark": "",
        "videoMeta": {
          "height": 1024,
          "width": 576,
          "duration": 15
        },
        "diggCount": 6900000,
        "shareCount": 132600,
        "playCount": 54800000,
        "commentCount": 107400,
        "downloaded": false,
        "mentions": [
          "@jubi2fye"
        ],
        "hashtags": []
      }
    ]
  },
  "musicInfo": {
    "musicId": "6865402095672068869",
    "musicName": "THICK",
    "musicAuthor": "DJ Chose & Beatking",
    "musicOriginal": false,
    "playUrl": "https://sf16-sg.tiktokcdn.com/obj/tiktok-obj/c79d1d6cb6efc7f434be0138a683e0b6.mp3",
    "coverThumb": "https://p16-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/d38188b8720b46b4a2c1adad65dab63d.jpeg",
    "coverMedium": "https://p16-sg.tiktokcdn.com/aweme/200x200/tos-alisg-i-0000/d38188b8720b46b4a2c1adad65dab63d.jpeg",
    "coverLarge": "https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-i-0000/d38188b8720b46b4a2c1adad65dab63d.jpeg"
  }
}
```
[Live Example](https://wiretick.me/api/tune/6865402095672068869)