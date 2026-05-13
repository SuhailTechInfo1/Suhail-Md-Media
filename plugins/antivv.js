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
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @infoription : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin date : 11/18/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/

const { smd, tlang, botpic, prefix, Config, bot_ } = require('../lib');
let bgmm = false;

// Command: antiviewonce
smd({
  'cmdname': "antiviewonce",
  'alias': ["antivv"],
  'desc': "turn On/Off auto viewOnce Downloder",
  'fromMe': true,
  'type': "general",
  'use': "<on/off>",
  'filename': __filename
}, async (message, args) => {
  try {
    bgmm = (await bot_.findOne({ 'id': "bot_" + message.user })) || 
           (await bot_.new({ 'id': "bot_" + message.user }));
    
    let option = args.toLowerCase().split(" ")[0].trim();
    
    if (option === 'on' || option === "enable" || option === 'act') {
      if (bgmm.antiviewonce === "true") {
        return await message.reply("*AntiViewOnce already enabled!*");
      }
      await bot_.updateOne({ 'id': "bot_" + message.user }, { 'antiviewonce': 'true' });
      return await message.reply("*AntiViewOnce Succesfully enabled*");
    } 
    else if (option === "off" || option === "disable" || option === "deact") {
      if (bgmm.antiviewonce === "false") {
        return await message.reply("*AntiViewOnce already disabled*");
      }
      await bot_.updateOne({ 'id': "bot_" + message.user }, { 'antiviewonce': 'false' });
      return await message.reply("*AntiViewOnce Succesfully deactivated*");
    } 
    else {
      return await message.send("*_Use on/off to enable/disable antiViewOnce!_*");
    }
  } catch (error) {
    await message.error(error + "\n\nCommand: AntiViewOnce ", error);
  }
});

// Event: viewonce detection
smd({
  'on': "viewonce"
}, async (msg, body) => {
  try {
    if (!bgmm) {
      bgmm = await bot_.findOne({ 'id': "bot_" + msg.user });
    }
    
    if (bgmm && bgmm.antiviewonce && bgmm.antiviewonce === "true") {
      let viewOnceMessage = msg.quoted && msg.quoted.msg && msg.quoted.msg.viewOnce ? msg.quoted : false;
      
      if (!viewOnceMessage) return;
      
      let fakeMessage = {
        'key': viewOnceMessage.key,
        'message': { 'conversation': "```[VIEWONCE DETECTED] downloading!```" }
      };
      
      let mediaUrl = await msg.bot.downloadAndSaveMediaMessage(viewOnceMessage.msg);
      
      await msg.bot.sendMessage(msg.sender, {
        [viewOnceMessage.mtype2.split('Mes')[0]]: { 'url': mediaUrl },
        'caption': viewOnceMessage.body
      }, { 'quoted': fakeMessage });
    }
  } catch (error) {
    console.log("error while getting antiviewOnce media\n, ", error);
  }
});
