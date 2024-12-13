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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_32_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMixcbiAgICAgICAgNDksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitzM05OTmkzaWJxVUhoSmR3L1N3Yk1CY3h4MFFTdUN4VndIdjRXQ3NDYTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZvVkFIcWJzU0dtWktTNERtMmxlandcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDUwMGE1MjktYWQwNC00NTFmLTllMWMtMGIyZjNiNTg3MzU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMTc5LFxuICAgICAgNjEsXG4gICAgICAyMjcsXG4gICAgICAyMTIsXG4gICAgICAxMTksXG4gICAgICAxNTAsXG4gICAgICAxMDYsXG4gICAgICAxMDcsXG4gICAgICA5NSxcbiAgICAgIDE5MCxcbiAgICAgIDU2LFxuICAgICAgODgsXG4gICAgICAxOTQsXG4gICAgICAxNjgsXG4gICAgICA3NixcbiAgICAgIDE4OCxcbiAgICAgIDIyMCxcbiAgICAgIDEzNixcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAyMSxcbiAgICAgIDI0NyxcbiAgICAgIDY3LFxuICAgICAgOTMsXG4gICAgICAyNDAsXG4gICAgICAyNixcbiAgICAgIDgyLFxuICAgICAgMTc2LFxuICAgICAgODcsXG4gICAgICA4NSxcbiAgICAgIDEyLFxuICAgICAgMzEsXG4gICAgICA1MSxcbiAgICAgIDk5LFxuICAgICAgMTkwLFxuICAgICAgMTExLFxuICAgICAgMTgsXG4gICAgICAxNzgsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzRURLTVRCUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NjAyNTMyMDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg3NTE2NzEyMTgxOTU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdkhsdkVERUpuaTc3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImd3TVZtVDFLV2ZuRi9pdkFLQTM1ZXlVRGo3Nnp0QjMyeDJXUEZKbk9QaEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVzBWYW1wNU9BaytJeE5pdXNjMTFvVDZSa1NpOVRaeUtCOVdTSUtjeXo2b1llVGVNN21MMzZCb200ZE93NWUwRkpmTmQ4M3BRdWlMWXZ5d1hjWE5lQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV0NhbytNWkdTSDhnS2hna0YreGl3Q0IwaUJpc0hQOHBLK0VwM0pJV05JOXNzZWxlNUpkRGtLMzhOc1h3RWNveG1GeFhCVFRoZVpuVHQwUXk0Z0FFaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1NjAyNTMyMDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwNzg3NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMTXZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNdi5qc29uIjogIntcImtleURhdGFcIjpcInNKa0pGZ3hPK0lQRXJ4STI2aGpaaGhwQjNkM1BicHh1UXExZlJoTEFiMk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA0MjY1NDEzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDAzOTM4MTIyNlwifSIKfQ=="  // PUT your SESSION_ID 


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
