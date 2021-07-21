const express = require('express')
const fetch = require('node-fetch')
const jsdom = require('jsdom')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

let getReq = async (url, lang, time) => {
    try {
        let promise = await fetch(url, {mode:'no-cors'})
        if(promise) {
            //console.log(time.start, time.end)
            let data = await promise.text()
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

                
                return {url: url, langCodes: langCodes, time: time}
                
            } else {
                console.log("Caption DNE")
            }
            
        }
    } catch (error) {
        console.log(error.message)
    }
}

let fetchTranscript = async (url, codes, segment) => {
    try {
        let promise = await fetch(url, {mode: 'no-cors'})
        if(promise) {
            let data = await promise.text()
            let res = data.replace(/&amp;/g, '&').replace(/&#39;/g, "'")
            const dom = new jsdom.JSDOM(res)
            //console.log(res)
            const elementNode = dom.window.document.querySelectorAll("text")
            let script = ''
            let time = []
            elementNode.forEach(element => {
                
                
                if(segment.start.length > 0) {
                    if((parseFloat(element.getAttribute('start')) >= timeStrConversion(segment.start).totalTime) && ((parseFloat(element.getAttribute('start')) + parseFloat(element.getAttribute('dur'))) <= timeStrConversion(segment.end).totalTime)) {
                        script += ' ' + element.innerHTML
                    } else {
                        console.log(element.getAttribute('start'), timeStrConversion(segment.start).totalTime, timeStrConversion(segment.end).totalTime, element.getAttribute('start') + element.getAttribute('dur'))
                        console.log("element not in time range!")
                    }
                } else {
                    script += ' ' + element.innerHTML
                    time.push({start: element.getAttribute('start'), dur: element.getAttribute('dur')})
                }
                
            })
            return {script: script.slice(1), langCodes: codes}
        } else {
            console.log("Oh NO")
        }
    } catch (error) {
        console.log("fetchTranscipt Catch Error", error.message)
    }
}

let timeConversion = (secs) => {
    let min = secs / 60
    let sec = secs % 60
    return {minutes: min, seconds: sec}
}

let timeStrConversion = (timeStr) => {
    // timeStr = "05:21"
    if(timeStr.search(':') < 0) {
        console.log("Invalid time please insert colon between minutes and seconds")
    } else {
        let timeArray = timeStr.split(":")
        let min = parseInt(timeArray[0])
        let sec = parseInt(timeArray[1])
        return {minutes: min, seconds: sec, totalTime: timeStrSeconds(min, sec)}
    }
}

let timeStrSeconds = (mins, secs) => {
    let totalSecs = (mins * 60) + secs
    return totalSecs
}

app.use(cors())

app.get('/scrape', (req, res) => {
    let time = {start: req.query.timeStart, end: req.query.timeEnd}
    getReq(req.query.v, req.query.code, time).then(response => {
        console.log("--------------------------------------------", req.query.code)
        fetchTranscript(response.url, response.langCodes, response.time).then(data => {
            return {script: data.script, langCodes: data.langCodes}
        }).then((dta) => {
            //console.log(dta)
            res.send({script: dta.script, langCodes: dta.langCodes})
        })
    })
})

app.listen(PORT, () => {
    console.log("YTBackend Running on ", PORT)
})
