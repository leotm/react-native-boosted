/* eslint-disable import/no-extraneous-dependencies */
import { Application, Context } from '@curveball/core'
import router from '@curveball/router'

const app = new Application()

console.log('http://localhost:1337 or http://127.0.0.1:1337')
console.log('Check: $ netstat -an')

app.use(
  router('/data', (ctx: Context) => {
    ctx.status = 200
    ctx.response.body = ['l', 'e', 'e', 't']
  })
)

app.listen(1337)
