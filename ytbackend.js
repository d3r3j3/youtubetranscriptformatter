const express = require('express')
const fetch = require('node-fetch')
//const axios = require('axios')
const jsdom = require('jsdom')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

let getReq = async (url, lang, time) => {
    try {
        let promise = await fetch(url)
        if(promise) {
            //console.log(time.start, time.end)
            let data = await promise.text()
            let formattedData = data.replace(/\\u0026/g, '&').replace(/\\"/g, "'").replace(/\\/g, '')
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
                console.log("Non/Auto Generated Captiontrack Not Found")
                return {url: "nope", langCodes: [], time: time}
                /*let j = formattedData.search("mimeType")
                if(j > -1) {
                    let splitData = formattedData.split('"streamingData":')
                    splitData.splice(0, 1)
                    let endSub = '"playbackTracking":'
                    if(splitData[0].search('"playerAds":') > -1 && splitData[0].search('"playerAds":') < splitData[0].search('"playbackTracking":')) {
                        endSub = '"playerAds":'
                    }
                    let streamData = splitData[0].substring(0, splitData[0].search(endSub) - 1)
                    streamData = streamData.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f")
                    parsedJSONData = JSON.parse(streamData)
                    let audioData = []
                    parsedJSONData.adaptiveFormats.forEach(stream => {
                        if(stream.mimeType.search('audio') > -1) {
                            audioData.push({'mimeType': stream.mimeType, 'audioQuality': stream.audioQuality, 'url': stream.url})
                        }  
                    })
                    
                    let url = decodeURIComponent(audioData[0].url)
                    console.log(url)
                    return {url: url}
                } else {
                    console.log("No Audio Caption Possible")
                }
                */
            }
            
        }
    } catch (error) {
        console.log(error.message)
    }
}

/*
let fetchAudioStream = async (url) => {
    try {

        postAudioScript(url).then(res => {
            return res
        })

    } catch (error) {
        console.log(error.message)
    }
}


let postAudioScript = async (url) => {
    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
        authorization: "ed8f39919e42437aae81a34c9c2382bb",
        "content-type": "application/json",
        },
    });

    let vidId = ''
  
    assembly.post(`/transcript`, {
        audio_url: url
    }).then(res => {
        getAudioScript(res.data.id).then(response => {
            return response
        })
    }).catch(err => console.log(err))
}

let getAudioScript = async (id) => {
    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
          authorization: "ed8f39919e42437aae81a34c9c2382bb",
          "content-type": "application/json",
        },
    });

    assembly.get(`/transcript/${id}`).then(res => {
        if(res.data.status === "completed") {
            console.log(res.data)
            return res.data
        } else {
            console.log(res.data.status, res.data.id)
            getAudioScript(id)
        }
    }).catch(err => {
        console.log(err)
    })
    
      
}
*/

let fetchTranscript = async (url, codes, segment) => {
    try {
        let promise = await fetch(url, {mode: 'no-cors'})
        if(promise) {
            let data = await promise.text()
            let res = await data.replace(/&amp;/g, '&').replace(/&#39;/g, "'")
            const dom = new jsdom.JSDOM(res)
            const elementNode = dom.window.document.querySelectorAll("text")
            let script = ''
            let timedScript = ''
            let time = []
            await elementNode.forEach(element => {
                
                if(segment.start.length > 0 && segment.start.search(':') > 0) {
                    if((parseFloat(element.getAttribute('start')) >= timeStrConversion(segment.start).totalTime) && ((parseFloat(element.getAttribute('start')) + parseFloat(element.getAttribute('dur'))) <= timeStrConversion(segment.end).totalTime)) {
                        script += ' ' + element.innerHTML
                        timedScript += '' + timeConversion(parseInt(element.getAttribute('start'))) + '  ' + element.innerHTML + '\n'
                    } else {
                        console.log(segment)
                        console.log(element.getAttribute('start'), timeStrConversion(segment.start).totalTime, timeStrConversion(segment.end).totalTime, element.getAttribute('start') + element.getAttribute('dur'))
                        console.log("element not in time range!")
                    }
                } else {
                    script += ' ' + element.innerHTML
                    timedScript += '' + timeConversion(parseInt(element.getAttribute('start'))) + '  ' + element.innerHTML + '\n'
                    time.push({start: element.getAttribute('start'), dur: element.getAttribute('dur')})
                }
                
            })
            return {script: script.slice(1), langCodes: codes, timeScript: timedScript}
        } else {
            console.log("Promise failed")
        }
    } catch (error) {
        console.log("fetchTranscipt Catch Error", error.message)
    }
}

let timeConversion = (secs) => {
    let min = parseInt(secs / 60)
    let sec = secs % 60
    let timeStr = ''
    if(min < 10) {
        timeStr += '0' + min
    } else {
        timeStr += min
    }

    if(sec < 10) {
        timeStr += ':' + '0' + sec
    } else {
        timeStr += ':' + sec
    }

    return timeStr
}

let timeStrConversion = (timeStr) => {
    // timeStr = "05:21"
    if(timeStr.search(':') < 0) {
        console.log("Invalid time please insert colon between minutes and seconds")
    } else {
        let timeArray = timeStr.split(":")
        let min = 0
        let sec = 0
        if(timeArray[0].length === 0) {
            min = 0
        } else {
            min = parseInt(timeArray[0])
        }

        if(timeArray[1].length === 0) {
            sec = 0
        } else {
            sec = parseInt(timeArray[1])
        }
        
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
        if(response.url.search('---sn') > -1) {
            /*
            fetchAudioStream(response.url).then(data => {
                //console.log(data)
                res.send({script: data.text, langCodes: [], timeScript: ''})
            })
            */
        } else {
            fetchTranscript(response.url, response.langCodes, response.time).then(data => {
                return {script: data.script, langCodes: data.langCodes, timeScript: data.timeScript}
            }).then((dta) => {
                res.send({script: dta.script, langCodes: dta.langCodes, timeScript: dta.timeScript})
            }).catch((error) => {
                res.send({script: "No script found", langCodes: [], timeScript: ''})
            })
        }
    })
})

app.listen(PORT, () => {
    console.log("YTBackend Running on ", PORT)
})
