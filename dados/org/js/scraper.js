var request = require('request')
var axios = require('axios')
var cheerio = require('cheerio')
var fetch = require("node-fetch");
var { JSDOM } = require("jsdom");
const fs = require("fs")

async function downloadPinterestLinks(type, url) {
try {
var response = await fetch(url);
if (!response.ok) {
throw new Error(`HTTP error ${response.status}`)}
var html = await response.text();
var links = extractLinks(html, type);
return links;
} catch (error) {
throw new Error(error.message);
}}

function extractLinks(html, type) {
let regex;
switch (type) {
case 'video':
regex = /(https?:\/\/[^\s<>"]+\.(?:mp4|mov|avi|wmv|flv|3gp|webm|mkv)|https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|vimeo\.com\/)([\w\-]+))/gi;
break;
case 'gif':
regex = /(https?:\/\/[^\s<>"]+\.(?:gif))/gi;
break;
case 'image':
regex = /(https?:\/\/[^\s<>"]+\.(?:jpg|jpeg|png))/gi;
break;
default:
throw new Error("Invalid type specified");
}
var matches = html.match(regex);
if (!matches) {
throw new Error(`No ${type} links found`);
}
return matches;
}


var Telesticker = async (url) => {//zanga
return new Promise(async (resolve, reject) => {
packName = url.replace("https://t.me/addstickers/", "")
data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
var hasil = []
for (let i = 0; i < data.data.result.stickers.length; i++) {
fileId = data.data.result.stickers[i].thumb.file_id
data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
result = {
status: 200,
url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
}
hasil.push(result)
}// zanga
resolve(hasil)
})
}

function lirik(musica){
	return new Promise(async(resolve, reject) => {
   		axios.get('https://www.musixmatch.com/search/' + musica)
   		.then(async({ data }) => {
   		var $ = cheerio.load(data)
   		var hasil = {};
   		let limk = 'https://www.musixmatch.com'
   		var link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
	   		await axios.get(link)
	   		.then(({ data }) => {
		   		var $$ = cheerio.load(data)
		   		hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
		  		$$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
		   hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
		   })
	   })
	   resolve(hasil)
   })
   .catch(reject)
   })
}

function hentai() {
    return new Promise((resolve, reject) => {
        var page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            var $ = cheerio.load(data.data)
            var hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {

    return new Promise((resolve, reject) => {

        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}


 async function igstalk(user) {
  	try {
  		var {data} = await axios.get('https://i.instagram.com/api/v1/users/web_profile_info/?username=' + user, {
  			headers: {
				"cookie": 'sessionid=54783047583%3Ai4JciXYggGKxDb%3A17%3AAYfjd_uYP5UXrpXdXRbG0EJ-0acF4r7lMEZNaCXIcQ',
  				"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36",
  				"x-asbd-id": "198387",
  				"x-csrftoken": "VXLPx1sgRb8OCHg9c2NKXbfDndz913Yp",
  				"x-ig-app-id": "936619743392459",
  				"x-ig-www-claim": "0"
  			}
  		})
  		return(data.status == 'ok' ? {
        			status: true,
        			profile: {
    			      low: data.data.user.profile_pic_url,
    			      high: data.data.user.profile_pic_url_hd,
              },
              data: {
    			      url: data.data.user.external_url,
    				    id: data.data.user.id,
    			      fullname: data.data.user.full_name,
    			      private: data.data.user.is_private,
    			      verified: data.data.user.is_verified,
    			      bio: data.data.user.biography,
    			      follower: data.data.user.edge_followed_by.count,
    			      following: data.data.user.edge_follow.count,
    			      conneted_fb: data.data.user.connected_fb_page,
    			      videotimeline: data.data.user.edge_felix_video_timeline.count,
    			      timeline: data.data.user.edge_owner_to_timeline_media.count,
    			      savedmedia: data.data.user.edge_saved_media.count,
    			      collections: data.data.user.edge_media_collections.count,
              }
      } : {status: false, message: 'user not found'})
  	} catch {
  		return ({
  			status: false,
  			message: 'user not found'
  		})
  	}
  }

async function attp(text) {
  return new Promise(async(resolve, reject) => {
	  var getid = await axios.get('https://id.bloggif.com/text')
	  var id = cheerio.load(getid.data)('#content > form').attr('action')
	  var options = {
		    method: "POST",
		    url: `https://id.bloggif.com${id}`,
		    headers: {
			"content-type": 'application/x-www-form-urlencoded',
			"user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
		    },
		    formData: {
			target: 1,
			text: text,
			glitter_id: Math.floor(Math.random() * 2821),
			font_id: 'lucida_sans_demibold_roman',
			size: 100,
			bg_color: 'FFFFFF',
			transparent: 1,
			border_color: 000000,
			border_width: 2,
			shade_color: 000000,
			shade_width: 1,
			angle: 0,
			text_align: 'center'
		    },
		};
		request(options, async function(error, response, body) {
		  var $ = cheerio.load(body)
		  var url = $('#content > div:nth-child(10) > a').attr('href')
		  resolve(url != '' ? {status: true, text: text, url: 'https://id.bloggif.com' + url} : {status: false})
		})
    })
}



async function ttp(text) {
    return new Promise((resolve, reject) => {
            var options = {
                method: 'POST',
                url: `https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
"Cookie": "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1"
                },
                formData: {
                    'TextToRender': text,
                    'FontSize': '100',
                    'Margin': '30',
                    'LayoutStyle': '0',
                    'TextRotation': '0',
                    'TextColor': 'ffffff',
                    'TextTransparency': '0',
                    'OutlineThickness': '3',
                    'OutlineColor': '000000',
                    'FontName': 'Lekton',
                    'ResultType': 'view'
                }
            };
            request(options, async function(error, response, body) {
                if (error) return resolve({status: false, message: error})
                var $ = cheerio.load(body)
                var result = 'https://www.picturetopeople.org' + $('#idResultFile').attr('value')
                resolve({ status: true, author: "expar animej", result: result })
            });
        })
}

async function zodiak(zodiak) {
return new Promise((resolve, reject) => {
axios.get(`https://primbon.com/zodiak/${zodiak}.htm`)
.then(({ data }) => {
let $ = cheerio.load(data)
let fetchText =$('#body').text()
let hasil
try {
hasil = {
status: true,
message: {
zodiak: fetchText.split('Nomor Keberuntungan:')[0].trim(),
nomor_keberuntungan: fetchText.split('Nomor Keberuntungan: ')[1].split('\n')[0],
aroma_keberuntungan: fetchText.split('Aroma Keberuntungan: ')[1].split('\n')[0],
planet_yang_mengitari: fetchText.split('Planet Yang Mengitari: ')[1].split('\n')[0],
bunga_keberuntungan: fetchText.split('Bunga Keberuntungan: ')[1].split('\n')[0],
warna_keberuntungan: fetchText.split('Warna Keberuntungan: ')[1].split('\n')[0],
batu_keberuntungan: fetchText.split('Batu Keberuntungan: ')[1].split('\n')[0],
elemen_keberuntungan:fetchText.split('Elemen Keberuntungan: ')[1].split('\n')[0],
pasangan_zodiak: fetchText.split('Pasangan Serasi: ')[1].split('\n')[0],
catatan: fetchText.split('\n\n\n\n\n\n\n\n\n\n\n')[1].split('<<< Kembali')[0].trim()
                        }
                    }
                } catch {
                    hasil = {
                        status: false,
                        message: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                    }
                }
                resolve(hasil)
            })
        })
    }

module.exports = { downloadPinterestLinks, zodiak, Telesticker, lirik, hentai, wikimedia, attp, ttp, igstalk }