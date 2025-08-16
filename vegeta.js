var handler = async (m, { conn, text }) => {
    if (!text) throw '❎ Write your message!\n\nExample:\n.vegeta Kakarot, you are too weak!';

    let name = "Vegeta 🥦";
    let thumb = "https://static.wikia.nocookie.net/dragonball/images/4/4e/Vegeta_DBZ_Episode_287.png"; // صورة فيجيتا

    await conn.sendMessage(m.chat, {
        text: text,
        contextInfo: {
            externalAdReply: {
                title: name,
                body: "Dragon Ball Z",
                thumbnailUrl: thumb,
                sourceUrl: "https://dragonball.fandom.com/wiki/Vegeta",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};

handler.help = ['vegeta <text>'];
handler.tags = ['fun'];
handler.command = /^vegeta$/i;

export default handler;
