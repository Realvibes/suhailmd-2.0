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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_52_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICA3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA5LFxuICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib0ZERk9ZN0Fwd29UVTBhKzloTUJYamUwMnBnMjB0aUp4MEZoQmpCZCtlMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDU2MDI1MzIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5ODAzOUEzMzBCQTkyQkEyMkI2QTU3NzRCMEQ5RUE5MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU3NTM5NzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEpNTE9qSFhULTZXWmRmZ0J1RFVoQVwiLFxuICBcInBob25lSWRcIjogXCI5OGRlOGJjMy1jNWYwLTQ5YzYtYTEzNi1hMjEyODUzYWE2NmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAyMTEsXG4gICAgICA1OCxcbiAgICAgIDIxOSxcbiAgICAgIDk0LFxuICAgICAgMTIwLFxuICAgICAgNDcsXG4gICAgICAyMTEsXG4gICAgICAxNzcsXG4gICAgICA2MyxcbiAgICAgIDIwMSxcbiAgICAgIDksXG4gICAgICA5LFxuICAgICAgNDgsXG4gICAgICA1OCxcbiAgICAgIDEyNixcbiAgICAgIDEyOCxcbiAgICAgIDEzNixcbiAgICAgIDY3LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAxOTAsXG4gICAgICAxMzQsXG4gICAgICAzNCxcbiAgICAgIDQzLFxuICAgICAgMTg0LFxuICAgICAgMjQzLFxuICAgICAgMTUxLFxuICAgICAgMjAzLFxuICAgICAgMTExLFxuICAgICAgMTk5LFxuICAgICAgMjA2LFxuICAgICAgNjgsXG4gICAgICAxNjIsXG4gICAgICA0OSxcbiAgICAgIDYxLFxuICAgICAgNDQsXG4gICAgICAyMyxcbiAgICAgIDExMSxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDNIbHZFREVPNkIxcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnd01WbVQxS1dmbkYvaXZBS0EzNWV5VURqNzZ6dEIzMngyV1BGSm5PUGhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllocktKbXhMb0xuOVZwQkdpK1NXWHVsaDFvdVhqVm9VdnBqaEdzMTQybnVIc0ZnZ3FXUmt4ek1xalFoaEFDaU5abUw2eFNkd2ErVHlmOHEwQTNYTkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlViOHNQYlpwODZoTGYzMkt6cjJyMUZ3SHJ5cjJEU3paZWZ4WjEvSGJZVXI4Y2MvTVM5R2NQaytCamJxVTB4Y3BtY3dLdWlmS0JtUEVQNlQxMkswVWhnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NjAyNTMyMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg3NTE2NzEyMTgxOTU6M0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTYwMjUzMjA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NzUzOTcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTE12XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTXUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzR2kvQzBhMDZsZW42YWVCbTBqNGx6blRjTi9zV2IyUVFPTHFtenBOT2tvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNDI2NTQxMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNdi5qc29uIjogIntcImtleURhdGFcIjpcInNKa0pGZ3hPK0lQRXJ4STI2aGpaaGhwQjNkM1BicHh1UXExZlJoTEFiMk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA0MjY1NDEzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDAzOTM4MTIyNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNdy5qc29uIjogIntcImtleURhdGFcIjpcIlNjLzRnZlA0ZXh3OTFvS2dxTEFISCtVYVlWUVlaZzdZV0RrZW5DMnpMdGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA0MjY1NDEzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE14Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZDVjdUNYdkFna3ZrMGdVcW5PYXEycEpOcUswcWlleUxMRXVRQUk4VE9KTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDQyNjU0MTM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0MDc4NjkzMDk2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE15Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTS9CV1psQmhGaGkwWEhwUHNvRHc3NXlPZnhueEo4NDB1d3hSTiswRFQwaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDQyNjU0MTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjb0dmOEh1OVhJTjhFeldUeXhUandMU2xIbUlPMExWN2FZbFNaYU9CM0NvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNDI2NTQxMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU3NTM4Mjg2NzRcIn0iCn0="  // PUT your SESSION_ID 


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
