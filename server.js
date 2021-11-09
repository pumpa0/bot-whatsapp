let express = require('express')
let path = require('path')
let qrcode = require('qrcode')
let ngrok = require('ngrok')
let uploadFile = require('./lib/uploadFile')
let fs = require('fs')

async function connect(conn, PORT) {
    let app = global.app = express()
    let _qr = 'invalid'
      const ngrok_url = await ngrok.connect({
  proto: 'http', 
  addr: PORT, 
  region: 'jp'
   })
    app.use(async (req, res) => {
        if (req.path == '/session' && conn.state == 'open') return res.send(conn.base64EncodedAuthInfo())
        if (conn.state == 'open') return res.status(200).send({status: 200, message: 'Bot Telah Tersambung ke whatsapp web anda!', user: conn.user })
        qrr = await qrcode.toBuffer(_qr, { scale: 17 })
        let { url } = (await uploadFile(qrr)).result
        html = fs.readFileSync('./views/scan.html', 'utf-8')
        res.send(html.replace(/\$QRURL/g, url))
    })
    console.log('Scan QR on :', ngrok_url)
    conn.on('qr', qr => {
        _qr = qr
    })
    
    let server = app.listen(PORT, () => console.log('App listened on port', PORT))
}

module.exports = connect
