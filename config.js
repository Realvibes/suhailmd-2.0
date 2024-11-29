const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348157553029,2348101119500,2349049374785";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347056025320";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_28_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcwLFxuICAgICAgICA1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDc2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDkwLFxuICAgICAgICA4MixcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTkxLFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICA4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImkrYkgwbExvSmZXdGdGRWw3VzRjQUlCQ25iSUZ2dStFdW9CS0JCNVVLVjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA1NjAyNTMyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDA4MTVGRTNCQkQxM0NBMEY4MDNBNThCOTY5ODk0NzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyODUwODgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpOR1dWTkhaUWsySzM4NkhIMldBTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFhY2ZhZmUtZTI1OC00YTM0LWIxZWQtYmU3ZTdmMjQ0MzZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDQ1LFxuICAgICAgMTExLFxuICAgICAgODQsXG4gICAgICA4OSxcbiAgICAgIDEzLFxuICAgICAgMjUzLFxuICAgICAgMTg4LFxuICAgICAgODcsXG4gICAgICA0NyxcbiAgICAgIDE2MCxcbiAgICAgIDU2LFxuICAgICAgMjQ0LFxuICAgICAgMTIsXG4gICAgICAxODgsXG4gICAgICAxMjMsXG4gICAgICA5OCxcbiAgICAgIDExMSxcbiAgICAgIDIwMCxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjEyLFxuICAgICAgNDgsXG4gICAgICAyNDIsXG4gICAgICAyMTIsXG4gICAgICAxOTksXG4gICAgICAxMTIsXG4gICAgICA1MyxcbiAgICAgIDExMixcbiAgICAgIDEwNixcbiAgICAgIDE3MyxcbiAgICAgIDIwLFxuICAgICAgMjMzLFxuICAgICAgMTUsXG4gICAgICAyMzYsXG4gICAgICAyNDIsXG4gICAgICA3OSxcbiAgICAgIDIyMyxcbiAgICAgIDE3LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ5QVc3NzU4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU2MDI1MzIwOjk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg3NTE2NzEyMTgxOTU6OTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnZpdzZZQ0VMYnBwTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2Y1d5V2ZiRzdXNDlIdUdUM3hpdnFmR2ZubGhoQ1FwWjlVaytVRmsyYUFrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRXRWI2MTFjOXBmZmd6UzB6eUh3L0dkdEpheS9pY2MvaXNQU3MwZHEvNnpwZnBJZHhodHQ1cm5WMlEvTXo1TnZTWmoyampZbWF6MnpCb1NMeHQ2TkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1PSWNMMTA0a3FqUGlFcFd5alhFK0d0NHZJL1RPSERMNkN5NUJ4UCt0UXlsdEJRM0t4cC9RSDF5dlI2bnVKakhRaDdPaVBXU1RGQWp6VVhzR3VENUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTYwMjUzMjA6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyODUwODc1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
