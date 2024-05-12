import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

//Imagenes
global.imagen1 = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.imagen2 = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.imagen3 = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.imagen4 = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.icon = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')

global.config = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.suerte = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.oracion = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.rosas = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.refran = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')
global.linksjpg = fs.readFileSync('https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn')

var img = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img1 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img2 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img3 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img4 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img5 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'
var img6 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img7 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img8 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img9 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'; var img10 = 'https://th.bing.com/th/id/OIG2.t6SMLw75Pp9ssDkcg_m7?pid=ImgGn'

global.ImgAll = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

//Enlaces
global.ig = 'https://instagram.com/boybenjx7'
global.md = 'https://github.com/boybenjx7/Hyper-V'
global.git = 'https://github.com/boybenjx7'
global.email = 'benjaparchado@gmail.com'
global.group = 'https://chat.whatsapp.com/DXAdja6QqGsEqMtuTJNTXn' //Grupo ofc
global.group2 = 'https://chat.whatsapp.com/DXAdja6QqGsEqMtuTJNTXn' //enlace hyper´v
global.group3 = 'https://chat.whatsapp.com/DXAdja6QqGsEqMtuTJNTXn' //hyper´v global

//Raíz
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './storage/logos/Menu1.jpg'

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*■□□□□ 20%*'
global.waitt = '*■■■□□ 60%*'
global.waittt = '*■■■■□ 90%*'
global.waitttt = '*■■■■■ 100%*'

//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'

//Apis
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = {
amel: 'https://melcanz.com',
bx: 'https://bx-hunter.herokuapp.com',
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
bg: 'http://bochil.ddns.net',
fdci: 'https://api.fdci.se',
dzx: 'https://api.dhamzxploit.my.id',
bsbt: 'https://bsbt-api-rest.herokuapp.com',
zahir: 'https://zahirr-web.herokuapp.com',
zeks: 'https://api.zeks.me',
hardianto: 'https://hardianto-chan.herokuapp.com',
pencarikode: 'https://pencarikode.xyz',
LeysCoder: 'https://leyscoders-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
lol: 'https://api.lolhuman.xyz',
fgmods: 'https://api-fgmods.ddns.net',
pencarikode: 'https://pencarikode.xyz',
Velgrynd: 'https://velgrynd.herokuapp.com',
rey: 'https://server-api-rey.herokuapp.com',
hardianto: 'http://hardianto-chan.herokuapp.com',
shadow: 'https://api.reysekha.xyz',
apialc: 'https://api-alc.herokuapp.com',
botstyle: 'https://botstyle-api.herokuapp.com',
neoxr: 'https://neoxr-api.herokuapp.com',
ana: 'https://anabotofc.herokuapp.com/',
kanx: 'https://kannxapi.herokuapp.com/',
dhnjing: 'https://dhnjing.xyz'
},

global.APIKeys = {
'https://api-alc.herokuapp.com': 'ConfuMods',
'https://api.reysekha.xyz': 'apirey',
'https://melcanz.com': 'F3bOrWzY',
'https://bx-hunter.herokuapp.com': 'Ikyy69',
'https://api.xteam.xyz': '5bd33b276d41d6b4',
'https://zahirr-web.herokuapp.com': 'zahirgans',
'https://bsbt-api-rest.herokuapp.com': 'benniismael',
'https://api.zeks.me': 'apivinz',
'https://hardianto-chan.herokuapp.com': 'hardianto',
'https://pencarikode.xyz': 'pais',
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
'https://server-api-rey.herokuapp.com': 'apirey',
'https://api.lolhuman.xyz': 'GataDios',
'https://botstyle-api.herokuapp.com': 'Eyar749L',
'https://neoxr-api.herokuapp.com': 'yntkts',
'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//Rpg
global.multiplier = 200 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆', limit: '💎', exp: '✨',
health: '❤️',
money: '💵',
potion: '🥤',
pickaxe: '⛏️' 
}

let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)
  

//No muevas nada de aqui
let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellowBright('Se actualizo el archivo store.js'))
import(`${file}?update=${Date.now()}`)
})
