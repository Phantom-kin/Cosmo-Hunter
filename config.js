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
global.github = process.env.GITHUB || "https://github.com/Phantom-kin/Cosmo-Hunter";
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
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUUxemdTaDFiVzNmdVA5Q1NTZUlublNScnRGYnQvV3hqbmh5aVptUkExQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGhpOTlXSm5XZU1zSFFWS0tneDE3b2pnanlva2hVQVlwUnlLOENlOTV5RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUHZkakVrU0o1bG9seS9tRVlNWVFkRmZmQ3dFakJNdmpHT0lJa2J4TkZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwV21UcFA5MW1wV3dxZXJYMC94OTBuWENUS1ByQ2x4Sm5IcS83VzhiR1JnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGR0JXdlJ2S0dhNHl6Lzl0YTNkN0JibjJaYnI2bzFpUHZtbVdFSmhBRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxHNEFITmRiN3ZqOE10VWZEV2lGaUlMVEFlK2VXT2JJUGpsRzlFWDc1bW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUhTcUJ6YlY2WUFBMDVpTWJub090NUYrWmJJZXZoMHpHbXRlSkQ2dlhIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpWc1crUFpud0o4U0lhTys4ZkN0dEt0ay9KZ3RYQ2lPd3laYnJLZnFUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIyWkdoeWk3TFhrUStsL1FCYnRmSE1WTTl3NGtXZGhtRjA3SzhsYXhiU05JL2lHaEZXT2U4L1RYWWFWMHpSajFtNlBzWW91SDROMzA0bFl2WlQ3OUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiI3d2lxRkRDZVN4cENoU0p0eHVoS3NVcnFoMjFIOFphMkpZMi9tdGdUMVdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NzQ4MjU1ODQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYxQzM5QTMxMTE3NUQ2QTA5MjhBNDVDN0NGNjJDOERBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk3OTEwMDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFtMnBHaXByUlNHUlRBakRyd1liYWciLCJwaG9uZUlkIjoiNDE0MjgzMzYtYzUxZC00MjczLTg5NDItMjc4ODJkMDhlNDc1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhFWDdpK0pXWi9oWFQxNHZxM3FZcUJnR1R4VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMHBWeDQ5K0p1aUc5RDVZbzJhQVpVUXhFUjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUhKRk44UkYiLCJtZSI6eyJpZCI6IjI3NzQ4MjU1ODQ4OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifvCdlbvwnZaN8J2WhvCdlpPwnZaZ8J2WlPCdlpIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0szSmdzWUNFSXVJNnJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik13bGVOeXM2ejlOSml1cVFDTCtOWWs4dGV0NE4yd2VmUENiWGFZWFlnM3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFSMERKUWU2S3dDYUNsZmtVempxakJyMG5ZT3NsY2hzdmJDQ3hKMXQwc0pzdzNzUkdRZXB0UENXS1Z3eGNkczIrcGhFMURrVkg3WDhHY1JqVmN2S0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlcy9EZWxTSnhVWnNkYVgyQ3JzRkxlOXRUU1FtSDNJdFF0ditEaExIOFZDM1JBVDdLQnBlUXJlM2E4QnlMRGViZTB4VU9RcUVmWW44OXJwRVIxa2NEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzQ4MjU1ODQ4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVE1KWGpjck9zL1RTWXJxa0FpL2pXSlBMWHJlRGRzSG56d20xMm1GMklOOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTc5MTAwMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQaGsifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝕻𝖍𝖆𝖓𝖙𝖔𝖒™`",
  author: process.env.PACK_AUTHER || "𝕻𝖍𝖆𝖓𝖙𝖔𝖒",
  packname: process.env.PACK_NAME || "P H A N T O M",
  botname: process.env.BOT_NAME || "Cosmo-Hunter",
  ownername: process.env.OWNER_NAME || "𝕻𝖍𝖆𝖓𝖙𝖔𝖒",
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
  LANG: (process.env.THEME || "P H A N T O M").toUpperCase(),
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
