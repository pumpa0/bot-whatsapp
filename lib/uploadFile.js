FormData = require('form-data');
axios = require('axios')
type = require("file-type")

module.exports = async function uploadFile(buffer) {
       return Promise(async function (resolve, reject) {
        const bodyForm = new FormData();
        let { ext } = type.fromBuffer(buffer)
        bodyForm.append('file', buffer, 'res.'+ext)
        await axios(`https://uploader.clph.me/upload`,{
            method: 'POST',
            data: bodyForm,
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
            }
        }).then(({ data }) => {
            console.log(data)
         resolve(data.result.url)
    }).catch(reject)
    })
    }
