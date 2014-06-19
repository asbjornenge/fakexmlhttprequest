var assert = require('assert')
var XMLHttpRequest = require('../fakexmlhttprequest')

describe('FakeXMLHttpRequest', function() {

    it('should support responding', function(done) {
        var req    = new XMLHttpRequest()
        req.onload = function() {
            if (this.readyState === 4) {
                assert(this.url === '/hurlcat.json')
                assert(this.status === 200)
                assert(this.method === 'GET')
                assert(this.responseHeaders['Content-Type'] === 'application/json')
                assert(JSON.parse(this.responseText).status === 'hurling hairballs')
                done()
            }
        }.bind(req)
        req.open('GET', '/hurlcat.json', false)
        req.respond(200, { "Content-Type": "application/json" }, JSON.stringify({ status : 'hurling hairballs' }))
    })

})