const express = require('express')
const fetch = require('node-fetch')
const jsdom = require('jsdom')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

let getReq = async (url, lang) => {
    try {
        let promise = await fetch(url, {mode:'no-cors'})
        if(promise) {

            let data = await promise.text()
            console.log(data)
            let formattedData = data.replace(/\\u0026/g, '&').replace(/\\/g, '')
            let n = formattedData.search("captionTracks")
            if(n > -1) {
                let splitData = formattedData.split('"captions":')
                let parsedJSONData = JSON.parse(splitData[1].substring(0, splitData[1].search('"videoDetails":') - 1))
                let url = parsedJSONData.playerCaptionsTracklistRenderer.captionTracks[0].baseUrl
                let langCodes = []
                const isTranslatable = parsedJSONData.playerCaptionsTracklistRenderer.captionTracks[0].isTranslatable
                parsedJSONData.playerCaptionsTracklistRenderer.translationLanguages.forEach(elem => {
                    langCodes.push({name: elem.languageName.simpleText, code: elem.languageCode})
                })
                
                if(isTranslatable) {

                    if(langCodes.includes(lang)) {
                        url += `&tlang=${lang}`
                    } else {
                        url += `&tlang=${lang}`
                    }
                    
                } else {
                    console.log("Transcript not translatable")
                }

                
                return {url: url, langCodes: langCodes}
                
            } else {
                console.log("Caption DNE")
            }
            
        } else {
            console.log("Error")
        }
    } catch (error) {
        console.log(error.message)
    }
}

let fetchTranscript = async (url, codes) => {
    try {
        let promise = await fetch(url, {mode: 'no-cors'})
        if(promise) {
            let data = await promise.text()
            let res = data.replace(/&amp;/g, '&').replace(/&#39;/g, "'")
            const dom = new jsdom.JSDOM(res)
            const elementNode = dom.window.document.querySelectorAll("text")
            let script = ''
            elementNode.forEach(element => {
                script += ' ' + element.innerHTML
            })
            return {script: script, langCodes: codes}
        } else {
            console.log("Oh NO")
        }
    } catch (error) {
        console.log("fetchTranscipt Catch Error", error.message)
    }
}

app.use(cors())

app.get('/scrape', (req, res) => {
    getReq(req.query.v, req.query.code).then(response => {
        console.log("--------------------------------------------", req.query.code)
        fetchTranscript(response.url, response.langCodes).then(data => {
            return {script: data.script, langCodes: data.langCodes}
        }).then((dta) => {
            console.log(dta)
            res.send({script: dta.script, langCodes: dta.langCodes})
        })
    })
})

app.listen(PORT, () => {
    console.log("YTBackend Running on ", PORT)
})
