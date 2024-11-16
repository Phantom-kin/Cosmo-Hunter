//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bayashikatakuri@gmail.com";
global.location = "Pretoria, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Pretoria";
global.github = process.env.GITHUB || "https://github.com/Phantom-kin/King_Phantom";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "27748255848";
global.sudo = process.env.SUDO || "27748255848, 2349123731026";
global.owner = process.env.OWNER_NUMBER || "27748255848";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://king-phantom.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVsMmZORGlpYjJ5SWhUOVRvNUlGMThCcEo1M2g1aC82QURBb3hPaWkyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRld5VnFVUXplOGd1Y0crVDVMb3pEMGFRR21nOHhEQmJjOG1MOXdvazF4cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QXlhbExianpmajR5T3JkSTVueVFMblo0aWdRbDgzL1M3TmhMSlE4UkZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ2lES1J5elUyQWYxb3hPMEEyd3Nhakl4RFkvQlBNYXZJWkF2dldvdDFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMRlFBOWkwa0lWRlkrRE1meWhtaENNMUh2aGluK3g3RFRQVmdPeWx6V3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp0YWxBaE9mNXo4L25ZTEVHTzN1MktJQTBDUjhwaVdrQVJpb2pQNWtKeU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZuNGN1TEhXUUZ3RUI2YUgyd2p0UFhBamFGSVZYdHRpYXZjUUpBM04wYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3RuSXZWaXZMeVVMYVRXOWdudmNrU3hxVUxoRDVtVUpVaEl1UlA4dFhuRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5DTXRoZ0pPQVBzL2NGUDRUYjl0TGx1cjdZczVGRzlKOTdpTXRMQVJHMGs5ZWJQWmd2MVJVT05hVmRJVldUaGNDZXBWTFBFb0tVcXhlNlI4ZWlEL2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IkpsdEZvQWFEcGk3R1hsaFZiNmhqYi9BMVg0Znd5VnUvQzRKcGU3U1NZY289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InMzM3ptaDRSU3V5NTY1RkRTSmJoZnciLCJwaG9uZUlkIjoiMDkyYzNmODAtNTg1YS00OTE0LThhNWQtMzZlNGIwM2Q3N2U1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilphd28xVGR2ZHVuelVobmJCTzRkQlZWNUxVTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1MG95MTFmMUc3ektjdHpxSEhudElZUXduM0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEg5NFhIUEUiLCJtZSI6eyJpZCI6IjI3NzQ4MjU1ODQ4OjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0szSmdzWUNFTnV0ajdrR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik13bGVOeXM2ejlOSml1cVFDTCtOWWs4dGV0NE4yd2VmUENiWGFZWFlnM3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRJd0FKNUI5Tm5mNmxMTFh0WTdOeUk5aStPRXozSGlpZ2VaV0RBT0JCck1vVkVSSi9ycXVSZTVDV3R2Z25aSkUzZUN5VnNqd2x5U2sxVHpGb2srS0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxYVV2dTBDMkJpL0RtR3FySVpMM2dKOExlTkplN2NpZWdJU01Ia2p4MXNjMDVyUTQrOEUraVBoU24vRXJqV3BQVW9ZRU1nVmxZSk4wZVJBcjJYSHJpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzQ4MjU1ODQ4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVE1KWGpjck9zL1RTWXJxa0FpL2pXSlBMWHJlRGRzSG56d20xMm1GMklOOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDQwMjAyNH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝙋𝙃𝘼𝙉𝙏𝙊𝙈™`",
  author: process.env.PACK_AUTHER || "𝙋𝙃𝘼𝙉𝙏𝙊𝙈",
  packname: process.env.PACK_NAME || "𝙋 𝙃 𝘼 𝙉 𝙏 𝙊 𝙈",
  botname: process.env.BOT_NAME || "𝙆𝙄𝙉𝙂 𝙋𝙃𝘼𝙉𝙏𝙊𝙈 ",
  ownername: process.env.OWNER_NAME || "𝙋𝙃𝘼𝙉𝙏𝙊𝙈",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝙋 𝙃 𝘼 𝙉 𝙏 𝙊 𝙈").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
