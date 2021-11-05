const fetch = require('node-fetch')
const uploadFile = require('./uploadFile')


async function whtanime(buffer) {
if (!buffer) throw `Buffer is undefined`
try {
let { url } = (await uploadFile(buffer)).result
const response = await fetch(`https://api.trace.moe/search?anilistInfo&url=${url}`)
if (response.status !== 200) throw { status: response.status, message: response.statusText, data: await response.text() }
json = await response.json()
res = json.result[0]
result = {
title: res.anilist.synonyms,
native: res.anilist.title.native,
romaji: res.anilist.title.romaji,
timestamp: `${new Date(res.from * 1000).toISOString().substr(11, 8)} - ${new Date(res.to * 1000).toISOString().substr(11, 8)}`,
similarity: (res.similarity * 100).toFixed(1) + '%',
video: res.video,
ecchi: res.anilist.isAdult
}
return { status: 200, result }
  
} catch (e) {
  
throw e
}
  
}
  
  
module.exports = { whatanime: whtanime }
