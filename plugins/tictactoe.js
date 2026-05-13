/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
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
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.8
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
 **/






const { smd, parseJid,getAdmin,tlang } = require("../lib/");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(mongodb);


const stickers = [
 "https://raw.githubusercontent.com/SuhailTechInfo1/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-1.webp",
 "https://raw.githubusercontent.com/SuhailTechInfo1/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-2.webp",
 "https://raw.githubusercontent.com/SuhailTechInfo1/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-3.webp",
 "https://raw.githubusercontent.com/SuhailTechInfo1/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-3.webp",
 "https://raw.githubusercontent.com/SuhailTechInfo1/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-4.webp",
 "https://raw.githubusercontent.com/SuhailTechInfo1/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-4.webp",
 "https://raw.githubusercontent.com/SuhailTechInfo1/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-5.webp",
 "https://raw.githubusercontent.com/SuhailTechInfo1/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-6.webp",
 ];

/**
* Thanks to @siraj-7
* For These Dice Stickers
* @author : Suhail Tech Info
**/

smd(
 {
   pattern: "dice",
   desc: "Rolling Dice Game",
   filename: __filename,
   category: "game",
 },
 async (Suhail,msgs,text) => {        
   function _0x1057(){const _0x1197c1=['19265RxwKNW','780DDnVuc','sᴜʜᴀɪʟ-ᴍᴅ','3528awUTID','length','621548LyOqYd','1498381wAYdEg','1612210HskIPI','chat','18aDiqRh','22YBynzo','42384744BVxsBD','6️⃣','5️⃣','4️⃣','sendMessage','7552ClpecV','random','2RtaivP','5267941SjazyO','floor','ᴅɪᴄᴇ','1️⃣'];_0x1057=function(){return _0x1197c1;};return _0x1057();}function _0x42fa(_0x59f5c3,_0x27342d){const _0x105742=_0x1057();return _0x42fa=function(_0x42fa63,_0x296206){_0x42fa63=_0x42fa63-0x189;let _0x13f68a=_0x105742[_0x42fa63];return _0x13f68a;},_0x42fa(_0x59f5c3,_0x27342d);}const _0x3f5752=_0x42fa;(function(_0x515ee8,_0x26c5b6){const _0x24734b=_0x42fa,_0x34fa6f=_0x515ee8();while(!![]){try{const _0x4cca3a=-parseInt(_0x24734b(0x19d))/0x1*(parseInt(_0x24734b(0x192))/0x2)+-parseInt(_0x24734b(0x189))/0x3*(parseInt(_0x24734b(0x19c))/0x4)+parseInt(_0x24734b(0x197))/0x5*(parseInt(_0x24734b(0x198))/0x6)+-parseInt(_0x24734b(0x193))/0x7+-parseInt(_0x24734b(0x190))/0x8*(-parseInt(_0x24734b(0x19a))/0x9)+-parseInt(_0x24734b(0x19e))/0xa*(parseInt(_0x24734b(0x18a))/0xb)+parseInt(_0x24734b(0x18b))/0xc;if(_0x4cca3a===_0x26c5b6)break;else _0x34fa6f['push'](_0x34fa6f['shift']());}catch(_0x430693){_0x34fa6f['push'](_0x34fa6f['shift']());}}}(_0x1057,0xdb10c));try{const randomIndex=Math['floor'](Math[_0x3f5752(0x191)]()*stickers[_0x3f5752(0x19b)]),randomSticker=stickers[randomIndex];return await Suhail.bot['sendMessage'](msgs[_0x3f5752(0x19f)],{'sticker':{'url':randomSticker},'packname':_0x3f5752(0x195),'author':_0x3f5752(0x199)});}catch(_0x141513){const randomNumber=Math[_0x3f5752(0x194)](Math[_0x3f5752(0x191)]()*0x6),diceEmoji=['⚀','⚁','⚂','⚃','⚄','⚅'],reactEmoji=[_0x3f5752(0x196),'2️⃣','3️⃣',_0x3f5752(0x18e),_0x3f5752(0x18d),_0x3f5752(0x18c)];let index=Math[_0x3f5752(0x194)](Math[_0x3f5752(0x191)]()*diceEmoji[_0x3f5752(0x19b)]),msg=await Suhail.bot['sendMessage'](msgs['chat'],{'text':diceEmoji[index]});return await Suhail.bot[_0x3f5752(0x18f)](msgs[_0x3f5752(0x19f)],{'react':{'text':reactEmoji[index],'key':msg['key']}});}
 })

smd(
 {
   pattern: "delttt",
   desc: "deletes TicTacToe running session.",
   filename: __filename,
   category: "game",
 },
 async (Suhail,msgs,text,{isCreator}) => {
       if (!msgs.isGroup) return msgs.reply(tlang().group);
       const groupMetadata = msgs.isGroup ? await Suhail.bot.groupMetadata(msgs.chat).catch((e) => {}) : "";
       const participants = msgs.isGroup ? await groupMetadata.participants : "";
       const groupAdmins = await getAdmin(Suhail.bot, msgs)
       const isAdmins = msgs.isGroup ? groupAdmins.includes(msgs.sender) : false;
       if(!isAdmins && !isCreator) return msgs.send('This command is only for Group Admin and my owner.')
        this.game = this.game ? this.game : false
        if (
       Object.values(this.game).find(
         (room) =>
           room.id.startsWith("tictactoe")
       )
     ) {
       delete this.game
       return msgs.send(`_Successfully Deleted running TicTacToe game._`);
       } else {  return msgs.send(`No TicTacToe game🎮 is running.`)}



 })
 
smd(
 {
   pattern: "ttt",
   desc: "Play TicTacToe",
   filename: __filename,
   category: "game",
 },
 async (Suhail,msgs,text) => {
   if (!msgs.isGroup) return msgs.reply(tlang().group);
   let {prefix} = require('../lib')
   {
     let TicTacToe = require("../lib/ttt");
     this.game = this.game ? this.game : {};
     if ( Object.values(this.game).find( (room) => room.id.startsWith("tictactoe") && [room.game.playerX, room.game.playerO].includes(msgs.sender))) return msgs.send("_A game is already going on_");
     let room = Object.values(this.game).find((room) =>  room.state === "WAITING" && (text ? room.name === text : true)  );
     if (room) {
       room.o = msgs.chat;
       room.game.playerO = msgs.sender || msgs.mentionedJid[0] 
       room.state = "PLAYING";
       let arr = room.game.render().map((v) => {
         return {
           X: "❌",
           O: "⭕",
           1: "1️⃣",
           2: "2️⃣",
           3: "3️⃣",
           4: "4️⃣",
           5: "5️⃣",
           6: "6️⃣",
           7: "7️⃣",
           8: "8️⃣",
           9: "9️⃣", 
         }[v];
       });
       let str = `
Current turn: @${room.game.currentTurn.split("@")[0]}
Room ID: ${room.id}
${arr.slice(0, 3).join("  ")}
${arr.slice(3, 6).join("  ")}
${arr.slice(6).join("  ")}
`;

       return await Suhail.bot.sendMessage(msgs.chat, { text: str, mentions: [room.game.currentTurn], });
     } else {
       room = {
         id: "tictactoe-" + +new Date(),
         x: msgs.chat,
         o: "",
         game: new TicTacToe(msgs.sender, "o"),
         state: "WAITING",
       };
       if (text) room.name = text;
       msgs.send("_Waiting for player,use .ttt to join this game._ ");
       this.game[room.id] = room;
     }
   }
 }
);

smd({ on: "text" },
 async (Suhail,msgs,text) => {
   if(!msgs.isGroup) return
   let {prefix} = require('../lib')
   this.game = this.game ? this.game : {};
   let room = Object.values(this.game).find(
     (room) =>
       room.id &&
       room.game &&
       room.state &&
       room.id.startsWith("tictactoe") &&
       [room.game.playerX, room.game.playerO].includes(msgs.sender) &&
       room.state == "PLAYING"
   );

   if (room) {
     let ok;
     let isWin = !1;
     let isTie = !1;
     let isSurrender = !1;
     if (!/^([1-9]|(me)?give_up|surr?ender|off|skip)$/i.test(msgs.text)) return;
     isSurrender = !/^[1-9]$/.test(msgs.text);
     if (msgs.sender !== room.game.currentTurn) {  if (!isSurrender) return !0;  }
     if (
       !isSurrender &&
       1 >
         (ok = room.game.turn(
           msgs.sender === room.game.playerO,
           parseInt(msgs.text) - 1
         ))
     ) {
       msgs.reply(
         {
           "-3": "The game is over.",
           "-2": "Invalid",
           "-1": "_Invalid Position_",
           0: "_Invalid Position_",
         }[ok]
       );
       return !0;
     }
     if (msgs.sender === room.game.winner) isWin = true;
     else if (room.game.board === 511) isTie = true;
     let arr = room.game.render().map((v) => {
       return {
         X: "❌",
         O: "⭕",
         1: "1️⃣",
         2: "2️⃣",
         3: "3️⃣",
         4: "4️⃣",
         5: "5️⃣",
         6: "6️⃣",
         7: "7️⃣",
         8: "8️⃣",
         9: "9️⃣",
       }[v];
     });
     if (isSurrender) {
       room.game._currentTurn = msgs.sender === room.game.playerX;
       isWin = true;
     }
     let winner = isSurrender ? room.game.currentTurn : room.game.winner;
     let str = `Room ID: ${room.id}
     
${arr.slice(0, 3).join("  ")}
${arr.slice(3, 6).join("  ")}
${arr.slice(6).join("  ")}
${ isWin ? `@${winner.split("@")[0]} Won ! and got 2000💎 in wallet🤑` : isTie ? `Game Tied,well done to both of you players.` : `Current Turn ${["❌", "⭕"][1 * room.game._currentTurn]} @${ room.game.currentTurn.split("@")[0]}`  }
⭕:- @${room.game.playerO.split("@")[0]}
❌:- @${room.game.playerX.split("@")[0]}`;

     if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== msgs.chat)
       room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = msgs.chat;
     if(isWin){  await eco.give(msgs.sender, "Suhail", 2000);  }
     if (isWin || isTie) { 
       await Suhail.bot.sendMessage(msgs.chat, { text: str, mentions: [room.game.playerO,room.game.playerX], });
       delete this.game[room.id];
     } 
     else {  await Suhail.bot.sendMessage(msgs.chat, {  text: str,   mentions: [room.game.playerO,room.game.playerX], });  }
   }
 }
);
