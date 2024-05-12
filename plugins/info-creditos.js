var handler = async (m) => {

let tqto = `🚩 *Desarrollador*
⬡ *@BOYBENJX7*
https://github.com/boybenjx7
⬡ *@USXR_ANGELITO*
https://github.com/karim-off

🎌 *Colaboradores*
⬡ *@boybenjx7* 
⬡ *@usxr_angelito* 

_Envie "colaboradores" para obtener el enlace del perfil de GitHub de los colaboradores_`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🚩 *GitHub - Colaboradores*

⬡ https://github.com/boybenjx7

⬡ https://github.com/karim-off

_Envie "cc" Para Obtener El Contacto De Los Colaboradores_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🎌 *Contacto - Colaboradores* 

⬡ *𝑯𝒚𝒑𝒆𝒓´V*
@51936732723

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}
  
}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler
