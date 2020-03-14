const qs = require('querystring')
const parseUrl = require('parseurl')
const log = console.log.bind(console)

const parse = function (url) {
    const req = {url}
    const u = parseUrl(req)
    const result = {
        host: u.host,
        href: url,
        path: u.pathname,
        port: u.port,
        protocol: u.protocol.slice(0, -1),
        query: qs.parse(u.query),
        querystring: u.query,
        url,
    }
    return result
}

module.exports = {
    log,
    parse,
}