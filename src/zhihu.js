const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

const { log, parse } = require('./util')
const user = 'tombkeeper'
// const user = 'ysbl'


async function saveResponse(res) {
    const url = res.url()
    const p = `https://www.zhihu.com/api/v4/members/${user}/answers`
    if (url.startsWith(p)) {
        log('url is ', url)
        const u = parse(url)
        const json = await res.json()
        log('json is ', json)
        saveData(json, u.query.offset)
    }
}

const save = (data, path) => {
    const s = JSON.stringify(data, null, 2)
    fs.writeFileSync(path, s)
    log('save success')
}

const saveData = (data, name) => {
    const filename = `${name}.json`
    const p = path.join(__dirname, '../db', filename)
    save(data, p)
}
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
async function main() {
    // todo 遇到反爬问题，可能是 webdriver 导致
    const browser = await puppeteer.launch({
        headless: false,
        ignoreDefaultArgs: ['--enable-automation'],
        // executablePath: chromePath,
    })

    const page = await browser.newPage()
    // 订阅 response 事件，参数是一个 response 实体
    page.on('response', async function (response){
        await saveResponse(response)
    })

    await page.goto(`https://www.zhihu.com/people/${user}/answers`)
    await page.screenshot({path: './screenshot/zhihu.png'})

    // await browser.close()
}


module.exports = main
