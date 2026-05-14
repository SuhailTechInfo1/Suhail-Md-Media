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

const DB = require('../lib/scraper');
const { tlang, Config, prefix, smd, sleep } = require('../lib');
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');

//---------------------------------------------------------------------------
async function updateHerokuApp(heroku = '') {
  if (heroku === 'no') {
    try {
      await simpleGit().reset("hard", ["HEAD"]);
      await simpleGit().pull();
      return "*Successfully updated. Bot Restarting...!*";
    } catch (error) {
      return error;
    }
  } else if (heroku === "yes") {
    const herokuClient = new Heroku({ 'token': process.env.HEROKU_API_KEY });
    await git.fetch();
    const commits = await git.log(['main..origin/main']);
    
    if (commits.total === 0) {
      return "You already have the latest version installed.";
    } else {
      const app = await herokuClient.get("/apps/" + process.env.HEROKU_APP_NAME);
      const gitUrl = app.git_url.replace("https://", "https://api:" + process.env.HEROKU_API_KEY + '@');
      
      try {
        await git.addRemote("heroku", gitUrl);
      } catch (error) {
        console.log("Heroku remote adding error");
      }
      
      await git.push("heroku", "main");
      return "Bot updated. Restarting.";
    }
  }
}

//---------------------------------------------------------------------------
smd({
  pattern: "update",
  desc: "Shows repo's refreshed commits.",
  category: "tools",
  filename: __filename
}, async (message, args, { isCreator }) => {
  if (!isCreator) {
    return message.reply(`This command is only for my owner`);
  }
  
  let commits = await DB.syncgit();
  if (commits.total === 0) {
    return await message.reply(`*BOT IS UPTO DATE...!!*`);
  }
  
  let update = `*SUHAIL_MD New Updates:*\n\n${await DB.sync()}`;
  
  await message.bot.sendMessage(message.chat, { text: update }, { quoted: message });
  
  if (Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY && args == 'start') {
    await message.reply('Heroku Build started...');
    try {
      // Heroku build trigger
    } catch (e) {
      return await message.error(e);
    }
    return await message.reply(updater);
  }
});

//---------------------------------------------------------------------------
smd({
  pattern: "updatenow",
  desc: "Shows repo's refreshed commits.",
  category: "tools",
  filename: __filename
}, async (message, args, { isCreator }) => {
  if (!isCreator) {
    return await message.reply("Only Owner Can Use This Command");
  }
  
  let commits = await DB.syncgit();
  if (commits.total === 0) {
    return await message.reply(`*YOU HAVE LATEST VERSION INSTALLED!*`);
  }
  
  let update = await DB.sync();
  
  await message.send(" *SUHAIL_MD Updater Started...!*\n\n*Please wait you have new updates*\n *───────────────────────────*\n" + update + "\n\n\n" + Config.caption);
  await sleep(3000);
  
  try {
    // Perform update
  } catch (e) {
    return await message.error(e);
  }
  
  await message.reply(`*Successfully updated. Now You Have Latest Version Installed!*`);
  process.exit(0);
});

//---------------------------------------------------------------------------
smd({
  pattern: "restart",
  desc: "To restart bot",
  category: "tools",
  filename: __filename
}, async (message, args, { isCreator }) => {
  if (!isCreator) {
    return message.reply(tlang().owner);
  }
  
  const { exec } = require("child_process");
  message.reply('Restarting');
  exec('pm2 restart all');
});
