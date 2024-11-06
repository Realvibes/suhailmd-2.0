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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_11_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDgsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY2LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5M0x6R1NxejVuam9wV1IvN2gzTVJiWXBhdEpVb1ZRRmFiMGlzT21sa3lrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNTYwMjUzMjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgxRTlFOEYzOTVFRDZDODMwQUQ0RjA5MTI4ODhEOTM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDkwMjI3OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIWTgtaW54RFF6LWtKajYtbnR1Z1VRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBkMzczNzQ5LWJkMjctNDBhYi04NTE1LTgyM2I3YzAzODk4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjYsXG4gICAgICAyMTgsXG4gICAgICAyMjMsXG4gICAgICAxMjUsXG4gICAgICAyMTAsXG4gICAgICAxNzIsXG4gICAgICA3OCxcbiAgICAgIDExNixcbiAgICAgIDYyLFxuICAgICAgMTU4LFxuICAgICAgMjA0LFxuICAgICAgMyxcbiAgICAgIDIzNyxcbiAgICAgIDE5LFxuICAgICAgMTMsXG4gICAgICAxMjksXG4gICAgICAyMDMsXG4gICAgICAxMjcsXG4gICAgICAxNzAsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxMDcsXG4gICAgICAyMzksXG4gICAgICAxMTMsXG4gICAgICA3MyxcbiAgICAgIDIwLFxuICAgICAgMjM4LFxuICAgICAgMTAwLFxuICAgICAgODUsXG4gICAgICAyMDMsXG4gICAgICAyNyxcbiAgICAgIDExMCxcbiAgICAgIDE3OSxcbiAgICAgIDIxNSxcbiAgICAgIDE5MSxcbiAgICAgIDExMCxcbiAgICAgIDE4MCxcbiAgICAgIDY5LFxuICAgICAgMTcwLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1NWUJDMzlQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU2MDI1MzIwOjk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg3NTE2NzEyMTgxOTU6OTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdaM3JvRUVQN3hyYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4eTdERDNkVDZHNDRoZGlPWGdXSkprTW53dWowSGJ5cWNVZ0Zyci9CeTN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNTcml3NDYrcjJXT2s5TERONGZQYUJqYjdKVDhqWFQ4SUs5S2RqKzdPdjB4cW8zSFMvRU9iUHNKNDJ1RzJqTHhTTlh0cjZ6eVo2eUYyVWJiMnVQUkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFIdzhJSXNPWnpZcElheVgyYjgzNm50M1l1VkdxYmszZTRVeUdMb3libWhoSVAwZXZHTHBMbHNFSlJjQWl4ZDdEbmlyaVZVN3dTZHJTdW16Tis3UkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTYwMjUzMjA6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwOTAyMjc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnB0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKcHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTY3o1WEEwWEZLSUhGdWE2QTlLZEVnQ0xsYUE0ZGV3NHB4T2RHclBBODFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExOTY5MjgxODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA5MDIyNDc4MTBcIn0iCn0="  // PUT your SESSION_ID 


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
