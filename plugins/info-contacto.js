import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, text, args, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => '')
let name = await conn.getName(who)
let biografia = await conn.fetchStatus('5217294888993' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus('5214531287294' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let bio = biografia.status?.toString() || 'Sin Biografía'
let biobot = biografiaBot.status?.toString() || 'Sin Biografía'

await conn.sendContactArray(m.chat, [
[devnum, `${await conn.getName('5214434703586'+'@s.whatsapp.net')}`, `🍭 Creador`, dev, email, 'PE PERU`, `+51 936732723`, bio],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `𝑯𝒚𝒑𝒆𝒓´V`, `📵 No Hacer Spam`, email, `PE PERU`, `https://github.com/boybenjx7`, biobot]
], m)
  
}
handler.help = ['owner', 'contacto', 'creador', 'contactos']
handler.tags = ['info']
handler.command = /^(owner|contacto|creador|contactos)/i

handler.register = true

export default handler
