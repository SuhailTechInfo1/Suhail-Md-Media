/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．2．2                                                   // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail <https://github.com/SuhailTechInfo>
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @infoription : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.5 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin date : 11/12/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/







const {
    smd,
    tlang,
    prefix, 
    Config ,
    sleep,
    getBuffer, 
    smdJson,
    smdBuffer
} = require('../lib');

smd({
    pattern: "fakereply",
    alias: ['freply'],
    desc: "Create fake Reply by given texts or replied media!",
    type: "general",
    use: "msg|reply_text|number|type",
    usage: "generates fake messages of given text and number!",
    filename: __filename,
    public: true,
}, async (message, args) => {
    try {
        let types = ["text", "order", "contact", "image", "video"];
        let reply, msg, num, type, mediaBuffer;
        
        // If replying to a message
        if (message.quoted) {
            let quoted = message.quoted;
            let textArgs = args ? args.split("|") : [];
            
            reply = textArgs[0] || " ";
            msg = textArgs[1] || "";
            num = textArgs[2] ? `${textArgs[2].replace(/[^0-9]/g, '')}@s.whatsapp.net` : message.sender;
            
            if (quoted.mtype === "imageMessage") {
                type = "image";
                mediaBuffer = await message.bot.downloadMediaMessage(quoted);
            } else if (quoted.mtype === "videoMessage") {
                type = "video";
                mediaBuffer = await message.bot.downloadMediaMessage(quoted);
            } else if (quoted.mtype === "audioMessage") {
                type = "audio";
                mediaBuffer = await message.bot.downloadMediaMessage(quoted);
            } else {
                type = textArgs[3] && types.includes(textArgs[3]) ? textArgs[3] : "text";
            }
        } else {
            // Text-based fake reply
            let textArgs = args.split("|");
            if (!args || textArgs.length < 3) {
                return await message.reply(`*Use ${prefix}fakereply text|Reply_text|923184474176|type(text,order,contact,image,video)*\n\n*Or reply to an image/video/audio with:*\n${prefix}fakereply myMessage|theirReply|number`);
            }
            reply = textArgs[0];
            msg = textArgs[1];
            num = `${textArgs[2].replace(/[^0-9]/g, '')}@s.whatsapp.net`;
            type = textArgs[3] && types.includes(textArgs[3]) ? textArgs[3] : "text";
        }
        
        let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let smds = 'SMD';
        for (let i = 0; i < 13; i++) {
            smds += charset[Math.floor(Math.random() * charset.length)];
        }
        
        let fak;
        
        if (mediaBuffer && type === "image") {
            fak = {
                key: { id: smds, remoteJid: message.isGroup ? message.chat : num, participant: num, fromMe: false },
                message: { imageMessage: { jpegThumbnail: mediaBuffer.slice(0, 100), caption: msg || "" } }
            };
        } else if (mediaBuffer && type === "video") {
            fak = {
                key: { id: smds, remoteJid: message.isGroup ? message.chat : num, participant: num, fromMe: false },
                message: { videoMessage: { url: mediaBuffer, caption: msg || "", mimetype: "video/mp4" } }
            };
        } else {
            fak = await message.bot.fakeMessage(type, { id: smds, remoteJid: message.isGroup ? message.chat : num, participant: num }, msg);
        }
        
        try {
            if (type === "contact") {
                fak.message.contactMessage.jpegThumbnail = await message.getpp(num);
            }
        } catch (e) {
            console.log(e);
        }
        
        await message.bot.sendMessage(message.chat, { text: reply }, { quoted: fak });
        
    } catch (e) {
        message.error(`${e}\n\nCommand: fakereply`, e, false);
    }
});
