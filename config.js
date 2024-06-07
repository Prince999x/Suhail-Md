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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_00_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTIyLFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA3MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJySkFlWXVqM0JSL3JOWXpTeVEyN0ZveTM2VVV0MVRUcEtic3ZEVk01ajdFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrN1VSUXVyeVEwRzE2Q2Rha0ZxVldBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNhYTZiMmIzLWQzN2YtNGVjMC1iMDUwLTcxMDRkNjgzMjYzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDg3LFxuICAgICAgMTk0LFxuICAgICAgMTk3LFxuICAgICAgMjE5LFxuICAgICAgMjEwLFxuICAgICAgMTE3LFxuICAgICAgMTUwLFxuICAgICAgMjQ3LFxuICAgICAgMTIzLFxuICAgICAgMjAwLFxuICAgICAgOTYsXG4gICAgICAyNTAsXG4gICAgICA5MyxcbiAgICAgIDkzLFxuICAgICAgMjM4LFxuICAgICAgMzYsXG4gICAgICAyNDYsXG4gICAgICAxMDQsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAwLFxuICAgICAgOSxcbiAgICAgIDk5LFxuICAgICAgMTQwLFxuICAgICAgMTMzLFxuICAgICAgMTU0LFxuICAgICAgMTI0LFxuICAgICAgMzYsXG4gICAgICAxODksXG4gICAgICAxMSxcbiAgICAgIDMwLFxuICAgICAgMTYyLFxuICAgICAgMTAsXG4gICAgICAxNjIsXG4gICAgICAyNSxcbiAgICAgIDE0OCxcbiAgICAgIDMzLFxuICAgICAgMjAzLFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRBTVhER0xMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEwODE2MjgwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTY1MjY5NTEwNjM3ODM6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkdKemxvUStjQ01zd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoV1czSXVmcXp2SVdDRnNDZDk5NzhQZUR5ajY3aTkveGZEU0hZMWIxY3hvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNGOTg2djNyd1ZzcklxTW1oanYyeks0RTZwMllVTXBhUHBGVzdVbHJhQndHSnBwNlBHcnIyL2tZZXVhVXNnTmtlVFNLRGNEQ0JmN1I5WmVIRGdtb0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9YUjVBeUwxczlGQnlUYi9uaHQzcFN2akdMeFpDc3NJZFpNZWcydm9nVXZkcEhwRGxZcXZXZVJCc0Q4SzZBb0RhY0pFazNmelB6VHVzSmpYTGkzcUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTA4MTYyODA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc3NzI0MTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
