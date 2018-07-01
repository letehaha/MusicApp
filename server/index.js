const express = require('express')
const cors = require('cors')
const request = require('request')
const querystring = require('querystring')
const cookieParser = require('cookie-parser')
// const generateRandomString = require('./utils/generateRandomString.js')
const app = express()

const client_id = 'd3f6d8fe02494b16b60dd96d75e362f3' // Spotify client ID
const client_secret = 'd20e93bfec3c437c8a1a4b73b3bac5a5' // Spotify secret client ID
const redirect_uri = 'http://localhost:8888/callback'

const stateKey = 'spotify_auth_state'

let client_redirect

function generateRandomString (length) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let text = ''
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', 'http://localhost:8888')
  // Request methods you wish to allow
  // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // // Request headers you wish to allow
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.header('Access-Control-Allow-Credentials', true)
  next();
});
app.use(cors())
app.use(cookieParser())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', function(req, res) {
  // client_redirect = req.headers.origin
  const state = generateRandomString(16)
  const scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public user-read-birthdate user-read-currently-playing user-read-playback-state'
  res.cookie(stateKey, state)
  console.log(res.he)

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    })
  )
})

app.get('/callback', function(req, res) {

  // application requests refresh and access tokens
  // after checking the state parameter

  const code = req.query.code || null
  const state = req.query.state || null
  const storedState = req.cookies ? req.cookies[stateKey] : null

  if (state === null || state !== storedState) {
    res.redirect('/#' + querystring.stringify({ error: 'state_mismatch' }))
  } else {
    res.clearCookie(stateKey)
    
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    }

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        const access_token = body.access_token
        const refresh_token = body.refresh_token

        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        }

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body)
        })

        res.redirect(client_redirect) // redirect after succefull auth to client rout
      }
    })
  }
})

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  }

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token
      res.send({
        'access_token': access_token
      })
    }
  })
})

app.listen(8888)