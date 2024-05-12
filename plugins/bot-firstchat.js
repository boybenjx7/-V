import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `👋 Hola 𝑯𝒚𝒑𝒆𝒓´V ${nombre}!!
 *${saludo}*

📅 Fecha: ${fecha}
⏰ Hora: ${tiempo}

⚠️ *Nota:* no envíe spam al bot 𝑯𝒚𝒑𝒆𝒓´V
🧃 Escriba *.menu* para mostrar el menú 𝑯𝒚𝒑𝒆𝒓´V
  
📝 ¿Quieres apoyar este proyecto para que siga actualizándose? únete a nuestro grupo: 
*https://chat.whatsapp.com/DXAdja6QqGsEqMtuTJNTXn*`, m, fake, )


user.pc = new Date * 1
}
