/* ⚙️ Credits to:
* @boybenjx7
* Hyper´V
* Hyper´V */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['𝑯𝒚𝒑𝒆𝒓´V', '𝑯𝒚𝒑𝒆𝒓´V', true], ['51936732723', ' 𝐎𝐰𝐧𝐞𝐫 ', true], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +51936732723
global.confirmCode = ''

global.suittag = ['51936732723']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['51936732723'], */ ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723'], ['51936732723']]

//Aqui encuentras los nombres del bot 
global.packname = ''
global.author = '𝑯𝒚𝒑𝒆𝒓´V'
global.wm = '𝑯𝒚𝒑𝒆𝒓´V'
global.wm2 = '𝑯𝒚𝒑𝒆𝒓´V : Bot'
global.azami = '@boybenjx7'
global.cb = '𝑯𝒚𝒑𝒆𝒓´V'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '𝘽𝙚𝙣𝙟𝙖´𝙑'
global.devnum = '+51 936732723'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
