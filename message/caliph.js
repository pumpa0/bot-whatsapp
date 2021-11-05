/*
Info Author

github : caliph91
YouTube : caliph71
Website : https://caliph71.xyz 

*/
let util = require('util')
let fs = require('fs')
let chalk = require('chalk')
let getBuffer = require('../lib/fetcher').buffer
let getJson = require('../lib/fetcher').json
let getText = require('../lib/fetcher').text
let tahta = require('../lib/tahta')
let tahta2 = require('../lib/tahta2')
let axios = require('axios')
let { whatanime } = require(`../lib/functions`)
let brainly = require ('brainly-scraper')
let ocr = require('../lib/ocr')
let fetch = require('node-fetch')
let bdr = require("rumus-bdr")
let {
MessageType: mType,
GroupSettingChange: gcSet
} = require('@adiwajshing/baileys')
let { sticker, addExif } = require('../lib/sticker')
let antidelete = JSON.parse(fs.readFileSync('./database/chat/antidelete.json').toString())
let welcome = JSON.parse(fs.readFileSync('./database/chat/welcome.json').toString())
let left = JSON.parse(fs.readFileSync('./database/chat/left.json').toString())
let detect = JSON.parse(fs.readFileSync('./database/chat/detect.json').toString())
let regist = JSON.parse(fs.readFileSync('./database/user/register.json').toString())
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json').toString())
let { exec } = require("child_process")
let { color } = require('../lib/color')
let moment = require('moment')
module.exports = async function connect(caliph, m) {
try {
if (m.isBaileys) return
let groupMetadata = m.isGroup ? await caliph.groupMetadata(m.chat).catch(e => {}) : ''
let groupMem = m.isGroup ? groupMetadata.participants : ''
let groupAdm = m.isGroup ? groupMem.filter(a => a.isAdmin) : []
let isBotAdm = m.isGroup ? groupMem.find(a => a.jid == caliph.user.jid).isAdmin : false
let isAdmin = m.isGroup ? groupMem.find(a => a.jid == m.sender).isAdmin : false
let budy = (typeof m.text == 'string' ? m.text : '')
let body = budy
let isVideo = (m.quoted ? m.quoted.mtype : m.mtype) == mType.video
let isImage = (m.quoted ? m.quoted.mtype : m.mtype) == mType.image
let isMedia = /image|video|sticker|audio/.test(m.quoted ? m.quoted.mtype : m.mtype)
let args = body.trim().split(/ +/).slice(1)
let isRegist = regist.includes(m.sender)
let command = (budy.toLowerCase().split(/ +/)[0] || '')
let prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~`,*zxcv!?#$%^&.\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓=|~`,*zxcv!?#$%^&.\/\\©^]/gi) : global.prefix
let isCmd = body.startsWith(prefix)
let isBan = ban.includes(m.sender)
let { ffmpeg } = require('../lib/converter')
let isOwner = global.owner.includes(m.sender.split('@')[0]) || m.key.fromMe
if (isCmd && !m.isGroup) {console.log(color('[EXEC]', 'cyan'), color(moment(m.messageTimestamp.low * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(caliph.getName(m.sender)))}
if (isCmd && m.isGroup) {console.log(color('[EXEC]', 'cyan'), color(moment(m.messageTimestamp.low * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(caliph.getName(m.sender)), 'in', color(groupMetadata.subject))}
let text = q = args.join(' ')
if (isBan && !isOwner) return
if (m.mentionedJid.includes(caliph.user.jid)) {
// function kalo ngetag bakal ngirim stiker sendiri
caliph.sendMessage(m.chat, { url: 'https://i.ibb.co/sFbdXfj/6984d8315885.webp' }, 'stickerMessage', { quoted: m, fileLength: 99999999999999 })
} 

if (body.toLowerCase().includes('assalamualaikum')) {
caliph.reply(m.chat, `Waalaikumsalam kak ${caliph.getName(m.sender)}`, m)
}
/* Fake Reply */
function freply(texts = fakereplyt, thumbnail = Buffer.alloc(0)) {
return {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {

					"productMessage": {
						"product": {
							"productImage": {
                                                                "jpegThumbnail": thumbnail
		},
							"productId": "0",
							"title": texts,
							"currencyCode": "USD",
							"priceAmount1000": "99",
							"productImageCount": 1
						},
						"businessOwnerJid": "0@s.whatsapp.net"}}}
}
/* Ends Fake Reply */
    if (!isRegist && isCmd && !command.includes('regist')) {
    let buttons = [
  {buttonId: '/regist', buttonText: {displayText: 'REGISTER'}, type: 1}
]
const buttonsMessage = {
    contentText: `Maaf @${m.sender.split('@')[0]}, Kamu Belum Terdaftar Sebagai User Bot`.trim(),    
footerText: `ketik .regist jika button tidak terlihat`,
    buttons: buttons,
    headerType: 1
}
const sendMsg = await caliph.prepareMessageFromContent(m.chat,{buttonsMessage},{ contextInfo: { mentionedJid: [m.sender] }, sendEphemeral: true})

return caliph.relayWAMessage(sendMsg)
}
						 switch(command) {
case prefix+'help': case prefix+'menu':
caliph.updatePresence(m.chat, 'composing')
var menu = `*WHATSAPP BOT*

Source code : https://clph.pw/m9oU
Author : @caliph91
Lib : Baileys
Battery : ${caliph.battery ? caliph.battery.value +'%' : 'Belum kedetect'} ${caliph.battery ? caliph.battery.live ? '🔌 Charging...' : '⚡ Discharging' : ''}

Main Menu 
- ${prefix}blocklist
- ${prefix}ping
- ${prefix}owner 

Group Menu
- ${prefix}kick @tag/reply message
- ${prefix}add 628×××××/reply message
- ${prefix}demote @tag/reply message
- ${prefix}antidelete enable/disable
- ${prefix}welcome enable/disable
- ${prefix}left enable/disable
- ${prefix}promote @tag/reply message
- ${prefix}hidetag text
- ${prefix}linkgroup 

Owner Menu
- ${prefix}block @tag/reply message
- ${prefix}unblock @tag/reply message
- ${prefix}setname text
- ${prefix}setbio text
- ${prefix}join linkgroup
- > JavaScript Code
- => JavaScript Code
- ${prefix}public
- ${prefix}self
- ${prefix}ban @tag/reply message
$ ${prefix}unban @tag/reply message

Other Menu
- ${prefix}toimg (reply sticker)
- ${prefix}tahta (teks)
- ${prefix}tahta2 (teks)
- ${prefix}ttp (teks)
- ${prefix}ttp2 (teks)
- ${prefix}ttp3 (teks)
- ${prefix}attp (teks)
- ${prefix}attp2 (teks)
- ${prefix}attp3 (teks)
- ${prefix}sticker (reply image/video)
- ${prefix}shortlink (url)

Search Menu
- ${prefix}pinterest (query)
- ${prefix}wiki (query)
- ${prefix}playvid (query)
- ${prefix}play (query)

Education Menu
- ${prefix}brainly (pertanyaan)
- ${prefix}wiki (query)
- ${prefix}wikipedia (query)
- ${prefix}calc 10-3

Convert Menu 
- ${prefix}tomp3 (Reply/Kirim Video)
- ${prefix}toimg (Reply Sticker)
- ${prefix}togif (Reply Sticker GIF)
- ${prefix}tovideo (Reply Sticker GIF)

Random Menu 
- ${prefix}ppcouple
- ${prefix}loli
- ${prefix}waifu
- ${prefix}neko
- ${prefix}katabijak
- ${prefix}dare
- ${prefix}truth
- ${prefix}dadu 
- ${prefix}lolivid

Maker Menu
- ${prefix}lolimaker (teks)
- ${prefix}nekologo (teks|teks2)
- ${prefix}sadboy (teks|teks2)
- ${prefix}remlogo (teks)
- ${prefix}kanekilogo (teks|teks2)
`.trim()
var img = fs.readFileSync(global.thumb)
caliph.sendMessage(m.chat, img, mType.image, { quoted: freply('Rikka-Botz WhatsApp', img), caption: menu })
break 
case prefix+'upload':
case prefix+'tourl':
if (!isMedia) throw `Reply Media Dengan Perintah *${command}*`
buffer = await (m.quoted ? m.quoted : m).download()
var { result } = await require('../lib/uploadFile')(buffer)
m.reply(`*SUCCESS*\n\nURL : \`\`\`${result.url}\`\`\``)
break
case prefix+'ocr':
case prefix+'imgtotext':
case prefix+'img2text':
if (!isImage) throw `Reply Gambar Dengan Caption ${command} Untuk Menjadikan Gambar ke teks`
med = m.quoted ? m.quoted.fakeObj : m
dl = await caliph.downloadAndSaveMediaMessage(med)
result = await ocr(dl)
m.reply(`*IMAGE TO TEXT*:\n\nResult : \`\`\`${result}\`\`\``)
break
case prefix+'wait':
case prefix'whatanime': 
if (!isImage) throw `kirim screenshot dari scene anime yang ingin anda cari untuk menampilkan detail dari scene tersebut dengan caption *${command}*`
m.reply('Mohon tunggu sebentar...')
buffer = await (m.quoted ? m.quoted : m).download()
var { result } = await whatanime(buffer)
caption `*WHAT ANIME IS THIS*\n\nJudul : ${result.title.english}\nEpisode : ${result.episode}\nEcchi : ${result.similarity}\nTimestamp : ${result.timestamp}\nKemiripan : ${result.similarity}\nEcchi :  ${result.ecchi ? 'Ya' : 'Tidak'}`
caliph.sendMessage(m.chat, { url: result.video }, mType.video, { quoted: m, caption })
break
case prefix+'listblock':
case prefix+'blocklist':
blok = caliph.blocklist.map(a => a.split('@')[0] + '@s.whatsapp.net')
tex = 'Daftar Kontak Yang Diblokir :\n\n'
nan = 0
for (let i of blok) {
nan += 1
tex += `${nan}. @${i.split('@')[0]}\n`
}
caliph.sendMessage(m.chat, tex, mType.text, { quoted: m, contextInfo : { mentionedJid: blok }})
break
case prefix+'sider':
if (!m.quoted) throw `Reply Chat Bot!`
if (!m.quoted.fromMe) throw `Reply Chat Bot!`
qtss = m.quoted
responnya = `• *LIST SIDER*\n\n`
result = (await caliph.messageInfo(qtss.chat, qtss.id)).reads
for (let i of result) {
responnya += `• wa.me/${i.jid.split('@')[0]}\n• _${require('moment-timezone')(i.t * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD MMMM YYYY')}_\n\n`
}
caliph.sendMessage(m.chat, responnya.trim(), mType.text, { quoted: m })
break
case prefix+'perkalian':
case prefix+'kali':
if (!text) throw `Contoh : ${command} 10×10`
let [tekss, teksss] = text.split('×')
if (!tekss) throw `Contoh : ${command} 10×10`
if (!teksss) throw `Contoh : ${command} 10×10`
result = bdr.rdb.perkalian(tekss, teksss)
respon = `*PERKALIAN*\n
Angka Perkalian : ${tekss}
Jumlah Perkalian : ${teksss}

*RESULT*

\`\`\`${result}\`\`\`

`.trim()
m.reply(respon)
break
case prefix+'del':
case prefix+'delete':
if (!m.quoted) throw `Reply Pesannya Banh!`
if (!m.quoted.fromMe) throw `Gbisa hpus pesan org lain!`
m.quoted.delete()
break
case prefix+'lolivid':
case prefix+'asupanloli':
m.reply(`_*Tunggu permintaan anda sedang diproses..*_`)
var url = global.API('caliphAPI', '/api/asupan/loli', {}, 'apikey')
caliph.sendMessage(m.chat, { url }, mType.video, { quoted: m })
break
case prefix+'regist':
if (isRegist) throw `Kamu Telah Daftar Sebelumnya!`
link = `https://wa.me/${caliph.user.jid.split('@')[0]}?text=.unregist ${m.sender.split('@')[0]}`
shortlink = await getJson(`https://clph.pw/create.php?url=${encodeURIComponent(link)}`)
ingfo = `╭─ *「 REGISTER 」*
│ Nama: ${caliph.getName(m.sender)}
│ Bio: ${(await caliph.getStatus(m.sender)).status}
│ API: wa.me/${m.sender.split('@')[0]}
│ UNREG: ${shortlink.result.url}
╰────`.trim()
regist.push(m.sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(regist, null, 2))
ppget = await caliph.getProfilePicture(m.sender).catch(() => 'https://storage.caliph71.xyz/img/itsuki.jpg')
caliph.sendMessage(m.chat, { url: ppget }, mType.image, { quoted: m, caption: ingfo })
break
case prefix+'unregist':
if (!isRegist) throw `Kamu Belum Terdaftar!`
if (!args[0]) return
if (args[0] !== m.sender.split('@')[0]) throw `Nomor Tidak valid!` 
tempat = regist.indexOf(m.sender)
regist.splice(tempat, 1)
fs.writeFileSync('./database/user/register.json', JSON.stringify(regist, null, 2))
m.reply(`Unreg Berhasil...`)
break
case prefix+'waifu':
m.reply(`_*Tunggu permintaan anda sedang diproses..*_`)
var waifu = global.API('https://api.waifu.pics', '/sfw/waifu')
var { url } = await getJson(waifu)
caliph.sendMessage(m.chat, { url }, mType.image, { quoted: m , caption: 'Larii Ada Wibu...'})
break
case prefix+'setpref':
if (!isOwner) return
if (!text) return 
global.prefix = args[0]
m.reply(`\`\`\`PREFIX : ${args[0]}\`\`\``)
break
case prefix+'neko':
m.reply(`_*Tunggu permintaan anda sedang diproses..*_`)
var waifu = global.API('https://api.waifu.pics', '/sfw/neko')
var { url } = await getJson(waifu)
caliph.sendMessage(m.chat, { url }, mType.image, { quoted: m , caption: 'Larii Ada Wibu...'})
break
case prefix+'public':
if (!isOwner) throw `Perintah Ini Khusus Owner Bot!`
global.selfmode = false
m.reply(`\`\`\`STATUS : PUBLIC\`\`\``)
break
case prefix+'self':
if (!isOwner) throw `Perintah Ini Khusus Owner Bot!`
global.selfmode = true
m.reply(`\`\`\`STATUS : SELF\`\`\``)
break
case prefix+'nulis':
if (!text) throw `Teksnya ko gada mhank?`
var { result } = await getJson(`https://pythonapis.clph.me/api/nulis?text=${encodeURIComponent(text)}`)
caliph.sendMessage(m.chat, { url: result }, mType.image, { quoted: m, fileLength: 999999999999999, caption: 'Neh mhank. Dah Jadi Ni...' })
break
case prefix+'loli':
m.reply(`_*Tunggu permintaan anda sedang diproses..*_`)
var url = global.API('caliphAPI', '/api/loli', {}, 'apikey')
caliph.sendMessage(m.chat, { url }, mType.image, { quoted: m , caption: 'Lolinya banh...'})
break
case prefix+'lolimaker':
if (!text) throw `Teksnya manaaa??`
apii = global.API('caliphAPI', '/api/lolimaker', { text }, 'apikey')
buffer = await getBuffer(apii)
caliph.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: 'Neh banh lolinya :v' })
break
case prefix+'remlogo':
if (!text) throw `Teksnya manaaa??`
apii = global.API('caliphAPI', '/api/rem', { text }, 'apikey')
buffer = await getBuffer(apii)
caliph.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: 'Neh banh logo remnya :v' })
break
case prefix+'kanekilogo':
case prefix+'kanekimaker':
if (!text) throw `Teksnya manaaa??`
apii = global.API('caliphAPI', '/api/kaneki', { text }, 'apikey')
buffer = await getBuffer(apii)
caliph.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: 'Neh banh logo kanekinya :v' })
break
case prefix+'sadboy':
if (!text) throw `Teksnya manaaa??\nContoh : ${command} caliph|ganz`
var [tek, tek2] = text.split('|')
apii = global.API('caliphAPI', '/api/sadboy', { text: tek, text2: tek2 }, 'apikey')
buffer = await getBuffer(apii)
caliph.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: 'Jgn ngesad mulu lh bng :(' })
break
case prefix+'nekologo':
case prefix+'nekomaker':
if (!text) throw `Teksnya manaaa??\nContoh : ${command} caliph|ganz`
var [tek, tek2] = text.split('|')
apii = global.API('caliphAPI', '/api/girlneko', { text: tek, text2: tek2 }, 'apikey')
buffer = await getBuffer(apii)
caliph.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: 'Neh banh logo nekonya :v' })
break
case prefix+'setthumb':
if (!isOwner) return
if (!isImage) throw `Kirim/Reply Foto Dengan Caption ${command}`
yoi = m.quoted ? m.quoted : m
 buffer = await yoi.download()
fs.writeFileSync(global.thumb, buffer)
caliph.reply(m.chat, 'Sukses Mengganti Thumbnail...', freply(null, buffer))
break
case prefix+'tomp3':
if (!isVideo) return m.reply(`Reply/Kirim Video Dengan Caption ${command}`)
m.reply('Mohon tunggu sebentar')
json = m.quoted ? m.quoted.fakeObj : m
det = new Date / 1000
var media = await caliph.downloadAndSaveMediaMessage(json, `./tmp/${det}`)
exec(`ffmpeg -i ${media} ./tmp/${det}.mp3`, async (err) => {
if (err) return m.reply('Error!')
await caliph.sendMessage(m.chat, { url: `./tmp/${det}.mp3` }, mType.audio, { quoted: m, mimetype: 'audio/mpeg' })
fs.unlinkSync(media)
fs.unlinkSync(`./tmp/${det}.mp3`)
})
break
case prefix+'setgc':
case prefix+'setgroup':
case prefix+'group':
guide = `List Option : \n- tutup / close\n- buka / open\n- subject <string>\n- desc <string>\n- revoke / reset\n- picture / profile\n\n Example :\n${command} close`
if (!args[0]) throw guide
switch (args[0]) {
case 'open':
case 'buka': 
 await caliph.groupSettingChange(m.chat, gcSet.messageSend, false)
 m.reply('```Sukses Membuka Grup...```')
	break
	case 'close':
	case 'tutup':
	await caliph.groupSettingChange(m.chat, gcSet.messageSend, true)
 m.reply('```Sukses Menutup Grup...```')
  break
    case 'subject':
    if (args.length == 1) return m.reply(`Example : ${command} ${args[0]} BOT WA`)
    await caliph.groupUpdateSubject(m['chat'], args.slice(1).join(' '))
    m.reply(`\`\`\`Sukses Mengganti Nama Grup Menjadi : ${args.slice(1).join(' ')}\`\`\``)
     break
     case 'revoke':
     case 'reset':
   await caliph.revokeInvite(m.chat)
   m.reply(`\`\`\`Sukses Mereset Undangan Grup ${groupMetadata.subject}\`\`\``)
      break
      case 'desc':
      if (args.length == 1) return m.reply(`Example : ${command} ${args[0]} BOT WA`)
      await caliph.groupUpdateDescription(m.chat, args.slice(1).join(' '))
      m.reply(`\`\`\`Sukses merubah deskripsi grup ${groupMetadata.subject}\`\`\``)
      break
    case 'profile':
     case 'picture':
     case 'pp':
	 q = m.quoted ? m.quoted : m
    mime = (q.msg || q).mimetype || ''
  if (!mime) return m.reply('Tidak ada foto')
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Mime ${mime} tidak support`)
  ah = await q.download()
  await caliph.updateProfilePicture(m.chat, ah)
  caliph.sendMessage(m.chat, ah, mType.image, { quoted: m, caption: 'Sukses Mengganti Profile Grup...', fileLength: 999999999999999 })
  break

      default: 
      m.reply(guide)
      }
break
case prefix+'calc':
caliph.updatePresence(m.chat, 'composing')
if (!text) return m.reply(`Teksnya Mana ajg!!!`)
var val = text

    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
 var formats = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')

result = require('mathjs').evaluate(val)

m.reply(`_${formats}_ = ${result}`)
break
case prefix+'ping': 
old = new Date
await m.reply(`Testing ping...`)
m.reply('Speed : '+String(new Date - old) + 'ms')
break
case prefix+'ppcouple': 
m.reply('Mohon tunggu sebentar...')
data = await getJson(global.API('caliphAPI', '/api/ppcouple', null, 'apikey'))
caliph.sendMessage(m.chat, { url: data.result.male }, 'imageMessage', { quoted: m })
caliph.sendMessage(m.chat, { url: data.result.female }, 'imageMessage', { quoted: m })
break
case prefix+'katabijak': 
data = await getText('https://raw.githubusercontent.com/Caliph91/txt/main/katabijak.txt')
array = data.split('\n')
random = array[Math.floor(Math.random() * array.length)]
m.reply(random)
break
case prefix+'play':
if (!q) throw 'Cari apa?'
var { video, result } = await getJson(global.API('caliphAPI', '/api/ytplaymp3', { text }, 'apikey'))
var caption = `Title : ${video.title}\nDuration : ${video.timestamp}\nUrl : https://youtu.be/${video.videoId}\nViews : ${video.views}\nUpload by : ${video.author.name}\nLink Channel : ${video.author.url}`.trim()
caliph.sendMessage(m.chat, { url: video.image }, 'imageMessage', { quoted: m, caption })
caliph.sendMessage(m.chat, { url: result.url }, 'audioMessage', { quoted: m, mimetype: 'audio/mpeg' })
break
case prefix+'playvid':
if (!q) throw 'Cari apa?'
var { video, result } = await getJson(global.API('caliphAPI', '/api/ytplaymp4', { text }, 'apikey'))
var caption = `Title : ${video.title}\nDuration : ${video.timestamp}\nUrl : https://youtu.be/${video.videoId}\nViews : ${video.views}\nUpload by : ${video.author.name}\nLink Channel : ${video.author.url}`.trim()
caliph.sendMessage(m.chat, { url: video.image }, 'imageMessage', { quoted: m, caption })
caliph.sendMessage(m.chat, { url: result.url }, 'videoMessage', { quoted: m })
break
case prefix+'togif':
if (!m.quoted && m.quoted.mtype != mType.sticker) throw 'Reply Stikernya!'
if (!m.quoted.isAnimated) throw 'Reply Sticker Yang berbentuk gif!'
m.reply('Mohon tunggu sebentar~')
var url = await require('../lib/webp2mp4').webp2mp4(await m.quoted.download())
caliph.sendMessage(m.chat, { url }, 'videoMessage', { caption: `Sukses~`, mimetype: 'video/gif', quoted: m })
break
case prefix+'shortlink':
case prefix+'shorturl':
if (!text) throw `linknya mana??`
var { url, delete: del } = (await getJson('https://clph.pw/create.php?url='+encodeURIComponent(text))).result
response = `*SHORT URL*\n
Original Url : \`\`\`${text}\`\`\`

==================================

Short Url : \`\`\`${url}\`\`\`

==================================

Delete URL : *Udh Dikirim Di Private Chat :)*
`.trim()
m.reply(response)
caliph.reply(m.sender, `*DELETE URL*\n\n\`\`\`${del}\`\`\`\n\nNote : Jika Url Dihapus, Maka Short Link Anda Tidak Bisa Di Akses..`, m)
break
case prefix+'getsesi':
if (m.isGroup) throw `Private Chat Aja Banh Biar aman :)`
if (!isOwner) throw `Affkh kmu owner?`
await m.reply('Nih Banh Session Botnya :)')
baffer = fs.readFileSync(global.authfile)
await caliph.sendMessage(m.chat, baffer, mType.document, { filename: 'session.json', mimetype: 'application/json' })
await caliph.reply(m.chat, 'Nih versi teksnya...')
caliph.reply(m.chat, baffer.toString())
break 
case prefix+'base64':
qts = m.quoted ? m.quoted.text : text
if (!qts) throw `Teksnya Mana banh?`
str = Buffer.from(qts, 'utf-8')
await m.reply('Nih banh..')
m.reply(str.toString('base64'))
break
case prefix+'tovideo':
case prefix+'tovid':
case prefix+'tomp4':
if (!m.quoted) throw 'Reply Stiker/video Yang ingin dijadikan video!'
if (m.quoted.mtype == mType.audio) {
m.reply('```Tunggu bentar...```')
media = await ffmpeg(await m.quoted.download(), [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')

caliph.sendMessage(m.chat, media, mType.video, { quoted: m, caption: `Sukses~` })
} else if (m.quoted.mtype == mType.sticker && m.quoted.isAnimated) {
m.reply('```Tunggu bentar```')
var url = await require('../lib/webp2mp4').webp2mp4(await m.quoted.download())
caliph.sendMessage(m.chat, { url }, 'videoMessage', { caption: `Sukses~`, mimetype: 'video/mp4', quoted: m })
} else throw 'Reply Stiker/Audio Yang Mau dijadiin video!'
break
case prefix+'dadu':
var array_dadu = ["https://storage.caliph71.xyz/dadu/v2/1.webp", "https://storage.caliph71.xyz/dadu/v2/2.webp", "https://storage.caliph71.xyz/dadu/v2/3.webp", "https://storage.caliph71.xyz/dadu/v2/4.webp", "https://storage.caliph71.xyz/dadu/v2/5.webp", "https://storage.caliph71.xyz/dadu/v2/6.webp" ]
var random = array_dadu[Math.floor(Math.random() * array_dadu.length)]
caliph.sendMessage(m.chat, { url: random }, mType.sticker, { quoted: m })
break
case prefix+'dare': 
data = await getJson('https://raw.githubusercontent.com/Caliph91/txt/main/dare.json')
array = data
random = array[Math.floor(Math.random() * array.length)]
m.reply(random)
break
case prefix+'truth': 
data = await getJson('https://raw.githubusercontent.com/Caliph91/txt/main/truth.json')
array = data
random = array[Math.floor(Math.random() * array.length)]
m.reply(random)
break
case prefix+'brainly':
if (!q) return m.reply('Soalnya?')
m.reply('*_Tunggu permintaan anda sedang diproses..._*')
brainly(q, 10)
.then(async bren => {
 teks = '*「 _BRAINLY_ 」*\n\n'

	no = 0
   for (let data of bren.data) {
   hem = data.jawaban
    no += 1
	teks += `\n*➸ Pertanyaan ${no}:* ${data.pertanyaan}\n\n*➸ Jawaban ${no}:* ${data.jawaban[0].text}\n\n❉───────────❉\n`
	}
	caliph.sendMessage(m.chat, teks, 'conversation', {quoted: m, detectLinks: false})
    }).catch(console.error)
break
case prefix+'pinterest':
case prefix+'pin':
if (!q) throw `Cari apa?`
m.reply('_*Tunggu permintaan anda sedang diproses...*_')
var { result } = await getJson(global.API('caliphAPI', '/api/pinterest', { q }, 'apikey'))
caliph.sendMessage(m.chat, { url: result[Math.floor(Math.random() * result.length)] }, mType.image, { quoted: m, caption: `Hasil pencarian : ${q}` })
break
case prefix+'wiki':
case prefix+'wikipedia':
if (!q) return m.reply(`Contoh Penggunaan\n${prefix}wiki google`)
m.reply(`_*Tunggu permintaan anda sedang diproses..._*`)
result = await require('wikijs').default({ apiUrl: 'https://id.wikipedia.org/w/api.php' }).page(text).then(page => page.rawContent())
hasil = `*${text}*\n\n${result}`.trim()
m.reply(hasil)
break
case prefix+'darkjokes':
url = global.API('caliphAPI',  '/api/darkjokes', null, 'apikey')
caliph.sendMessage(m.chat,  { url }, mType.image,  { quoted: m })
break
case prefix+'tiktok':
case prefix+'tiktokdl':
if (!q) throw 'URLnya Mana kak?'
if (!/https?:\/\//.test(q) && !q.includes('tiktok.com')) throw `Silahkan masukkan URL yang valid!`
m.reply(`Mohon tunggu sebentar....`)
url = global.API('caliphAPI', '/api/tiktok', { url : q }, 'apikey') 
json = await axios.get(url)
if (json.data.result == {}) throw 'URL tidak valid!'
yeh = await getBuffer(json.data.result.nowatermark).catch(err => {
throw `File Gagal Di Download...\nSilahkan Download Sendiri\nLink : ${json.data.result.nowatermark}`
})
caliph.sendMessage(m.chat, yeh,'videoMessage', { quoted: m, caption:'Video Berhasil didownload!' })
break
case '>':
if (!isOwner) return 
try {
ev = await eval(`(async () => {
 ${args.join(' ')}
 })()`)
m.reply(util.format(ev))
} catch (e) {
m.reply(util.format(e))
}
break
case '=>':
if (!isOwner) return 
try {
ev = await eval(`(async () => {
 return ${args.join(' ')}
 })()`)
m.reply(util.format(ev))
} catch (e) {
m.reply(util.format(e))
}
break
case prefix+'sc': 
case prefix+'script':
m.reply(`Bot ini menggunakan script :\nhttps://github.com/caliph91/bot-whatsapp`)
break
case prefix+'kick': 
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!isBotAdm) return m.reply('Jadikan bot sebagai admin terlebih dahulu!')
isQuod = m.quoted ? [m.quoted.sender] : m.mentionedJid
if (!isQuod[0]) return m.reply('Tag member yang ingin dikick!')
isQuod.map(a => {
caliph.groupRemove(m.chat, [a]).catch(() => m.reply('Gagal!'))
})
break
case prefix+'bcgc': 
if (!isOwner) return m.reply('Perintah ini khusus Owner bot!')
if (!args[0]) return m.reply('Teksnya mana amsu!')
var chats = caliph.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  var content = await caliph.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + '' + '*「 BROADCAST 」*')
  for (let id of chats) await caliph.copyNForward(id, content, true)
  caliph.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} group_`, m)
break
case prefix+'promote': 
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!isBotAdm) return m.reply('Jadikan bot sebagai admin terlebih dahulu!')
isQuod = m.quoted ? [m.quoted.sender] : m.mentionedJid
if (!isQuod[0]) return m.reply('Tag member yang ingin di promote!')
isQuod.map(a => {
caliph.groupMakeAdmin(m.chat, [a]).catch(() => m.reply('Gagal!'))
})
break
case prefix+'join':
if (!isOwner) return
if (!args[0]) return m.reply('Linknya?')
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let [_, code] = args[0].match(linkRegex) || []
if (!code) return m.reply('Link Invalid.')
caliph.acceptInvite(code).then(a => {
m.reply(mess.success)
}).catch(a => {
m.reply(mess.error)
})
break
case prefix+'tahta':
case prefix+'hartatahta':
if (!args[0]) return m.reply('Teksnya?')
m.reply(`_*Tunggu permintaan anda sedang diproses....*_`)
var hasil = global.support.magick || global.support.convert ? await tahta(q) : await getBuffer(global.API('zeks', '/api/hartatahta', { text }, 'apikey'))
caliph.sendMessage(m.chat, hasil, 'imageMessage', { quoted: m, caption: 'Harta Tahta '+args.join(' ') })
break
case prefix+'tahta2':
case prefix+'hartatahta2':
if (!args[0]) return m.reply('Teksnya?')
m.reply(`_*Tunggu permintaan anda sedang diproses....*_`)
var hasil = global.support.magick || global.support.convert ? await tahta2(q) : await getBuffer(global.API('zeks', '/api/hartatahta', { text }, 'apikey'))
caliph.sendMessage(m.chat, hasil, 'imageMessage', { quoted: m, caption: 'Harta Tahta '+args.join(' ') })
break
case prefix+'stiker':
case prefix+'sticker':
case prefix+'s':
case prefix+'sgif':
case prefix+'stikergif':
case prefix+'stickergif':
if (args[0] && /https?:\/\//.test(args[0])) return caliph.sendSticker(m.chat, args[0], m, { packname, author })
json = m.quoted ? m.quoted : m
if (!/image|video/.test(json.mtype)) return m.reply(`Balas Video/Gambar dengan caption *${prefix + command}*!`)
caliph.sendSticker(m.chat, await json.download(), m, { packname, author })
break
case prefix+'ttp':
  if (!args[0]) return m.reply('Teksnya?')
  caliph.sendSticker(m.chat, global.API('xteam', '/ttp', { text, file: '' }, 'APIKEY'), m, { packname, author })
  break
  case prefix+'ttp2':
  if (!args[0]) return m.reply('Teksnya?')
  caliph.sendSticker(m.chat, global.API('lol', '/api/ttp', { text }, 'apikey'), m, { packname, author })
  break
  case prefix+'ttp3':
  if (!args[0]) return m.reply('Teksnya?')
   listwarna = ["red", "green", "blue", "purple", "cyan", "yellow", "white"]
   warna = listwarna[Math.floor(Math.random() * listwarna.length)]
  caliph.sendSticker(m.chat, global.API('vh', '/textmaker', { text, warna }, 'apikey'), m, { packname, author })
  break
  case prefix+'attp':
  if (!args[0]) return m.reply('Teksnya?')
  buffer = await getBuffer(global.API('lol', '/api/attp', { text }, 'apikey'))
  webp = await addExif(buffer, packname, author)
  caliph.sendMessage(m.chat, webp, mType.sticker, { quoted: m })
  break
  case prefix+'attp2':
  if (!args[0]) return m.reply('Teksnya?')
  buffer = await getBuffer(global.API('xteam', '/attp', { text, file:''}, 'APIKEY'))
  webp = await addExif(buffer, packname, author)
  caliph.sendMessage(m.chat, webp, mType.sticker, { quoted: m })
  break 
  case prefix+'attp3':
  if (!args[0]) return m.reply('Teksnya?')
  buffer = await getBuffer(global.API('rikka', '/attp', { text }, 'apikey'))
  caliph.sendSticker(m.chat, buffer, m, { packname, author })
  break
case prefix+'toimg':
case prefix+'stoimg':
if (m.quoted && m.quoted.mtype !== 'stickerMessage') return caliph.reply(m.chat, 'Reply stikernya..', m)
json = m.quoted.fakeObj 
m.reply('Mohon tunggu sebentar~')
det = new Date * 1
var media = await caliph.downloadAndSaveMediaMessage(json, `./tmp/${det}`)
exec(`ffmpeg -i ${media} ./tmp/${det}.png`, async (err) => {
if (err) return m.reply('Error!')
await caliph.sendMessage(m.chat, { url: `./tmp/${det}.png` }, 'imageMessage', { quoted: m, caption: '>//<' })
fs.unlinkSync(media)
fs.unlinkSync(`./tmp/${det}.png`)
})
break
case prefix+'antidelete':
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!args[0]) {
  let buttons = [
  {buttonId: '/antidelete enable', buttonText: {displayText: 'Enable'}, type: 1},
  {buttonId: '/antidelete disable', buttonText: {displayText: 'Disable'}, type: 1}
]
const buttonsMessage = {
    contentText: `Pilih Enable atau Disable
`.trim(),    
footerText: `🔰 ${caliph.user.name} By Caliph71🔰`,
    buttons: buttons,
    headerType: 1
}
const sendMsg = await caliph.prepareMessageFromContent(m.chat,{buttonsMessage},{ contextInfo: { mentionedJid: [] }, sendEphemeral: true})

caliph.relayWAMessage(sendMsg)
} else if (/on|enable/gi.test(args[0])) {
if (antidelete.includes(m.chat)) return m.reply('Antidelete Telah Diaktifkan Sebelumnya')
antidelete.push(m.chat) 
fs.writeFileSync('./database/chat/antidelete.json', JSON.stringify(antidelete, null, 2))
m.reply('Sukses mengaktifkan antidelete di grup ini....')
} else if (/off|disable/gi.test(args[0])) {
index = antidelete.indexOf(m.chat)
antidelete.splice(index, 1) 
m.reply('Sukses menonaktifkan antidelete di grup ini....')
fs.writeFileSync('./database/chat/antidelete.json', JSON.stringify(antidelete, null, 2))
} else m.reply('Pilih enable atau disable')
break
case prefix+'welcome':
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!args[0]) {
  let buttons = [
  {buttonId: '/welcome enable', buttonText: {displayText: 'Enable'}, type: 1},
  {buttonId: '/welcome disable', buttonText: {displayText: 'Disable'}, type: 1}
]
const buttonsMessage = {
    contentText: `Pilih Enable atau Disable
`.trim(),    
footerText: `🔰 ${caliph.user.name} By Caliph71🔰`,
    buttons: buttons,
    headerType: 1
}
const sendMsg = await caliph.prepareMessageFromContent(m.chat,{buttonsMessage},{ contextInfo: { mentionedJid: [] }, sendEphemeral: true})

caliph.relayWAMessage(sendMsg)
} else if (/on|enable/gi.test(args[0])) {
if (welcome.includes(m.chat)) return m.reply('Welcome Telah Diaktifkan Sebelumnya')
welcome.push(m.chat) 
fs.writeFileSync('./database/chat/welcome.json', JSON.stringify(welcome, null, 2))
m.reply('Sukses mengaktifkan welcome di grup ini....')
} else if (/off|disable/gi.test(args[0])) {
index = welcome.indexOf(m.chat)
welcome.splice(index, 1) 
m.reply('Sukses menonaktifkan welcome di grup ini....')
fs.writeFileSync('./database/chat/welcome.json', JSON.stringify(welcome, null, 2))
} else m.reply('Pilih enable atau disable')
break
case prefix+'left':
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!args[0]) {
  let buttons = [
  {buttonId: '/left enable', buttonText: {displayText: 'Enable'}, type: 1},
  {buttonId: '/left disable', buttonText: {displayText: 'Disable'}, type: 1}
]
const buttonsMessage = {
    contentText: `Pilih Enable atau Disable
`.trim(),    
footerText: `🔰 ${caliph.user.name} By Caliph71🔰`,
    buttons: buttons,
    headerType: 1
}
const sendMsg = await caliph.prepareMessageFromContent(m.chat,{buttonsMessage},{ contextInfo: { mentionedJid: [] }, sendEphemeral: true})

caliph.relayWAMessage(sendMsg)
} else if (/on|enable/gi.test(args[0])) {
if (left.includes(m.chat)) return m.reply('Left Telah Diaktifkan Sebelumnya')
left.push(m.chat) 
fs.writeFileSync('./database/chat/left.json', JSON.stringify(left, null, 2))
m.reply('Sukses mengaktifkan left di grup ini....')
} else if (/off|disable/gi.test(args[0])) {
index = left.indexOf(m.chat)
left.splice(index, 1) 
m.reply('Sukses menonaktifkan welcome di grup ini....')
fs.writeFileSync('./database/chat/left.json', JSON.stringify(left, null, 2))
} else m.reply('Pilih enable atau disable')
break
case prefix+'hidetag': 
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
users = groupMem.map(u => u.jid)

  qz = m.quoted ? m.quoted : m
  c = m.quoted ? m.quoted : m.msg
  msgs = caliph.cMod(
    m.chat,
    caliph.prepareMessageFromContent(
      m.chat,
      { [c.toJSON ? qz.mtype : mType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      } },
      {
        contextInfo: {
          mentionedJid: users
        },
        quoted: m
      }
    ),
    text || qz.text 
  )
  await caliph.relayWAMessage(msgs)
break
case prefix+'ohidetag': 
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isOwner) return m.reply('Perintah ini khusus admin grup!')
users = groupMem.map(u => u.jid)

  qz = m.quoted ? m.quoted : m
  c = m.quoted ? m.quoted : m.msg
  msgss = caliph.cMod(
    m.chat,
    caliph.prepareMessageFromContent(
      m.chat,
      { [c.toJSON ? qz.mtype : mType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      } },
      {
        contextInfo: {
          mentionedJid: users
        },
      }
    ),
    text || qz.text 
  )
  await caliph.relayWAMessage(msgss)
break
case prefix+'linkgc': 
case prefix+'linkgrup': 
case prefix+'link': 
case prefix+'linkgroup': 
case prefix+'grouplink': 
case prefix+'gruplink': 
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
//if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!isBotAdm) return m.reply('Jadikan bot sebagai Admin terlebih dahulu')
caliph.sendMessage(m.chat, `https://chat.whatsapp.com/${await caliph.groupInviteCode(m.chat)}\n\nLink Grup *${groupMetadata.subject}*`, 'conversation', { detectLinks: false, quoted: m})
break
case prefix+'demote': 
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!isBotAdm) return m.reply('Jadikan bot sebagai admin terlebih dahulu!')
isQuod = m.quoted ? [m.quoted.sender] : m.mentionedJid
if (!isQuod[0]) return m.reply('Tag admin yang ingin di demote!')
isQuod.map(a => {
caliph.groupDemoteAdmin(m.chat, [a]).catch(() => m.reply('Gagal!'))
})
break
case prefix+'block': 
case prefix+'blok': 
if (!isOwner) return
isQuod = m.quoted ? [m.quoted.sender] : m.mentionedJid
if (!isQuod[0]) return m.reply('Tag member yang ingin di block!')
isQuod.map(a => {
caliph.blockUser(a).catch(() => {})
})
break
case prefix+'setname': 
if (!isOwner) return
if (!args[0]) return m.reply('Teksnya?')
caliph.updateProfileName(args.join(' ')).then(a => {
m.reply(mess.success)
}).catch(a => {
m.reply(mess.error)
})
break
case prefix+'setppbot': 
if (!isOwner) return
ye = m.quoted ? m.quoted : m
if (!/image/.test(ye.mtype)) return m.reply('Fotonya?')
caliph.updateProfilePicture(caliph.user.jid, await ye.download()).then(a => {
m.reply(mess.success)
}).catch(a => {
m.reply(mess.error)
})
break
case prefix+'setbio': 
if (!isOwner) return
if (!args[0]) return m.reply('Teksnya?')
caliph.setStatus(args.join(' ')).then(a => {
m.reply(mess.success)
}).catch(a => {
m.reply(mess.error)
})
break
case prefix+'unblock': 
case prefix+'unblok': 
//if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
//if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!isOwner) return
isQuod = m.quoted ? [m.quoted.sender] : m.mentionedJid
if (!isQuod[0]) return m.reply('Tag member yang ingin di block!')
isQuod.map(a => {
caliph.blockUser(a, 'remove').catch(() => {})
})
break
case prefix+'ban': 
if (!isOwner) throw `Situ Owner??`
isQuod = m.quoted ? [m.quoted.sender] : m.mentionedJid
if (!isQuod[0]) return m.reply('Tag member yang ingin di ban!')
isQuod.map(a => {
if (!ban.includes(a)) ban.push(a)
})
await caliph.sendMessage(m.chat, `Sukses Banned Nomor : ${isQuod.map(a => a.split('@')[0]).join(', ')}`, mType.text, { quoted: m })
fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban, null, 2))
break
case prefix+'unban': 
if (!isOwner) throw `Situ Owner??`
isQuod = m.quoted ? [m.quoted.sender] : m.mentionedJid
if (!isQuod[0]) return m.reply('Tag member yang ingin di unban!')
isQuod.map(a => {
if (ban.includes(a)) {
num = ban.indexOf(a)
ban.splice(num, 1)
}
})
await caliph.sendMessage(m.chat, `Sukses Menghapus Banned Nomor : ${isQuod.map(a => a.split('@')[0]).join(', ')}`, mType.text, { quoted: m })
fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban, null, 2))
break
case prefix+'add': 
if (!m.isGroup) return m.reply('Perintah ini khusus didalam grup!')
if (!isAdmin) return m.reply('Perintah ini khusus admin grup!')
if (!isBotAdm) return m.reply('Jadikan bot sebagai admin terlebih dahulu!')
isQuod = m.quoted ? [m.quoted.sender] : text.split(',').map(v => v.replace(/[^0-9]/gi, '') +'@s.whatsapp.net')
if (isQuod.length == 0) return m.reply(`Siapa Yang Mau Di Add?`)
_participants = groupMem.map(user => user.jid)
  users = (await Promise.all(
    isQuod
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await caliph.isOnWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  response = await caliph.groupAdd(m.chat, users)
  pp = await caliph.getProfilePicture(m.chat).catch(_ => `https://storage.caliph71.xyz/img/404.jpg`)
  jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
  for (let user of response.participants.filter(user => Object.values(user)[0].code == 403)) {
    var [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    teks = `Mengundang @${jid.split('@')[0]} menggunakan undangan grup...`
    m.reply(teks, null, {
      contextInfo: {
        mentionedJid: caliph.parseMention(teks)
      }
    })
    await caliph.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, false, 'Invitation to join my WhatsApp group', jpegThumbnail ? {
      jpegThumbnail
    } : {})
  }
break
case prefix+'owner': 
case prefix+'creator':
if(owner.length == 1) return caliph.sendContact(m.chat, owner[0], caliph.getName(owner[0] + '@s.whatsapp.net'), m)
caliph.sendContactArray(m.chat, owner.map(a => a + '@s.whatsapp.net'),{ quoted: m })
break
case '$':
if (!text) return
if (!isOwner) throw `Perintah Ini Khusus Owner Bot Ya ajg!!!!`
m.reply('```Executing...```')
exec(text, async (e, q, s) => {
if (e) return m.reply(util.format(e), null, { detectLinks: false })
if (q) m.reply(util.format(q), null, { detectLinks: false })
if (s) m.reply(util.format(s), null, { detectLinks: false })
})
break
							 case prefix+"update":
if (!isOwner) throw `Perintah Ini Khusus Owner Bot Ya ajg!!!!`
exec('git pull', (e, q, s) => {
if (e) return m.reply(util.format(e), null, { detectLinks: false })
if (q) m.reply(util.format(q), null, { detectLinks: false })
if (s) m.reply(util.format(s), null, { detectLinks: false })
})
break
default: 
if (isCmd && (command.length == 1) == false) m.reply(`Command *${command}* not found`)
}

} catch (e) {
//caliph.reply(m.chat, 'Ada Yang Error!', m)
m.reply(util.format(e.message ? `Error : `+e.message : e))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update './lib/caliph.js'"))
  delete require.cache[file]
  require(file)
})
