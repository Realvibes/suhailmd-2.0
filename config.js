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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_54_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICA1LFxuICAgICAgICA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2RDJ6TU85a2ZjdXJGS0Q3dGlUeE1ORk1obGZ2UVNBOEpNWDNiTEI1UVprPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNTYwMjUzMjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU1NDE5OUQxRUIxNUUwRDQ0OTU2MkVDODFDNUE3ODFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzk1NDA5NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaN3lNbUwxR1FQcVY1aUNCd1lnWi1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0OGUzNGE1LTM4ZTgtNDg1Ni05MGEwLTNjODg2MmMxZjBmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDkxLFxuICAgICAgMjE2LFxuICAgICAgMTAyLFxuICAgICAgMjYsXG4gICAgICA1NCxcbiAgICAgIDMxLFxuICAgICAgMTU5LFxuICAgICAgMjcsXG4gICAgICAyNTMsXG4gICAgICAxOTYsXG4gICAgICA0OSxcbiAgICAgIDExMixcbiAgICAgIDcxLFxuICAgICAgMTY3LFxuICAgICAgODIsXG4gICAgICAxNjgsXG4gICAgICAxNDksXG4gICAgICAxMjQsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDEwMCxcbiAgICAgIDE2NyxcbiAgICAgIDEyNixcbiAgICAgIDExMCxcbiAgICAgIDEwOSxcbiAgICAgIDQ2LFxuICAgICAgNDYsXG4gICAgICAyMTAsXG4gICAgICAxMTIsXG4gICAgICAxODksXG4gICAgICA4OSxcbiAgICAgIDUxLFxuICAgICAgMTAsXG4gICAgICA2OSxcbiAgICAgIDM0LFxuICAgICAgMTQzLFxuICAgICAgOTQsXG4gICAgICA2NSxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbkhsdkVERUtpVTZMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImd3TVZtVDFLV2ZuRi9pdkFLQTM1ZXlVRGo3Nnp0QjMyeDJXUEZKbk9QaEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUzcyYWorN0lmcEFySVd1YWxBMU04L1pvVE1ka0sxcE5sZEtkYXdsYXUyRzJtRU9oazlqU2ZIbTVGSUdpL0VoS09wTjJiOEtDY21pa2FVNGZxRWJRQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU1hmc1FCWUlwelBUQUVkQ2dCSWl3UU9Ub1M0bHN5TjdzaEFWY3pqems4ODJrdWdZQk1ZOUhQZXQxRTRjL1dqVFVnU3pTQkVzbG5xd0p1VHJYTEJaZ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU2MDI1MzIwOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg3NTE2NzEyMTgxOTU6OThAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDU2MDI1MzIwOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM5NTQwOTJcbn0iCn0="  // PUT your SESSION_ID 


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
