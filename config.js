const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347010816280";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_14_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICA4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3LFxuICAgICAgICA0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICA2MSxcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDU5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJqUXJTYVRGUEdzTXh1OVp3U25aVE5tc3AzdzNET2tSMEoxUXFYbDh1SmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm8wa1BKaTZJVHYtaHpyRFplNXREclFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTU2ZjQ4ZWYtMjNjNS00NDBiLTg3MWQtM2M0ZjE0NTg5YTNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDI0NixcbiAgICAgIDcwLFxuICAgICAgMTE4LFxuICAgICAgMTE3LFxuICAgICAgMTczLFxuICAgICAgODcsXG4gICAgICAxMDksXG4gICAgICA4MCxcbiAgICAgIDYsXG4gICAgICAyNDksXG4gICAgICAxODMsXG4gICAgICAxODgsXG4gICAgICAxMzgsXG4gICAgICAyMjAsXG4gICAgICAyNDAsXG4gICAgICA5MixcbiAgICAgIDE4MyxcbiAgICAgIDEzNSxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxLFxuICAgICAgNDMsXG4gICAgICA3MSxcbiAgICAgIDg3LFxuICAgICAgMjQxLFxuICAgICAgMjMxLFxuICAgICAgMTEyLFxuICAgICAgMTk1LFxuICAgICAgMTAxLFxuICAgICAgMjAzLFxuICAgICAgMjU0LFxuICAgICAgMzQsXG4gICAgICAxOTUsXG4gICAgICAyMjgsXG4gICAgICAyMTksXG4gICAgICA1NyxcbiAgICAgIDE2NixcbiAgICAgIDQxLFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldYRDhKSzQyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEwODE2MjgwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNjUyNjk1MTA2Mzc4Mzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002Snpsb1F6NFdKc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFdXM0l1ZnF6dklXQ0ZzQ2Q5OTc4UGVEeWo2N2k5L3hmRFNIWTFiMWN4bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFTjhQV1EyaU5aNi9xMnJSYzQvQ0lwbzR0VUVwNVZxazdrTXFaZ3ZtTHF6TWEwakpab25zOUhiZkppVi8rWXNTM1Uzd3FsU01DUjIxbEh0K2hib1ZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzYkJMbURPZ1BjUUd2M3JJRXMxazJaL0FtYnQxUVhBWkJRV25uN0VoQ2hMbGl5bjRYSk0vTWlyYkRHOW5iM3JmcFZ6UFA3YUh1cmhkeG11aFpPTndpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEwODE2MjgwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc3MTU2NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ1cy5qc29uIjogIntcImtleURhdGFcIjpcIlBDajJYK1hva3QyclBDWVAzeUQ1QU5yYTVLMzR0Kzc1eERXVzh1VG42akE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkwMDIyODU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
