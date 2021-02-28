/*
 * This configuration is used to provide a mock SSE server to send requests to for testing.
 */
const compression = require('compression')

module.exports = {
  devServer: {
    before (app) {
      app.use(compression())

      app.get('/sse', (req, res) => {
        req.socket.setTimeout(0)
        req.socket.setNoDelay(true)
        req.socket.setKeepAlive(true)
        res.statusCode = 200

        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Cache-Control', 'no-cache')

        res.write('data: welcome!\n\n')
        res.flush()

        const timer = setInterval(function () {
          res.write(`event: time\ndata: ${new Date()}\n\n`)

          res.flush()
        }, 1000)

        res.on('close', function () {
          clearInterval(timer)
        })
      })
    }
  }
}
