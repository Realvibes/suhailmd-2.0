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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_50_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAzNCxcbiAgICAgICAgNCxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM0LFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNPcjNpR3hjaFRxZGRoU2tPWjFQbnZhU2J6YnpHQ2kvMzBUcGE1ZndaTkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA1NjAyNTMyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTAxNkE2MURGQjM4M0IzMUU0NUNBM0IxMkI1OTEyRkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNjY5NDI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRUdmNCd2ZGU1VDaEVrZ0NPaXF6dFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWM2MjIxNDktOTg1NS00ZWI1LWI5NTAtZmQyYTc1ZWY3MDg1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgOTIsXG4gICAgICAxNDgsXG4gICAgICAxNTUsXG4gICAgICA1OCxcbiAgICAgIDE2MSxcbiAgICAgIDEwNSxcbiAgICAgIDE0MCxcbiAgICAgIDI1NSxcbiAgICAgIDEyOCxcbiAgICAgIDE4NCxcbiAgICAgIDE1OSxcbiAgICAgIDI1MCxcbiAgICAgIDE4NSxcbiAgICAgIDY0LFxuICAgICAgMjI4LFxuICAgICAgMTM2LFxuICAgICAgMTQ4LFxuICAgICAgMjgsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxNDAsXG4gICAgICAyNDEsXG4gICAgICAyNDMsXG4gICAgICAyMDksXG4gICAgICAxMzMsXG4gICAgICAxOSxcbiAgICAgIDIyNSxcbiAgICAgIDIxNixcbiAgICAgIDg2LFxuICAgICAgMTE0LFxuICAgICAgMTkyLFxuICAgICAgMTUyLFxuICAgICAgMTYxLFxuICAgICAgNjAsXG4gICAgICAyNDgsXG4gICAgICAyMDMsXG4gICAgICAxMDEsXG4gICAgICAxNDksXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyODMyVEcxRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NjAyNTMyMDo5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4NzUxNjcxMjE4MTk1Ojk3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05lVGllZ0VFS3prMXJvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieHkyenA3akNycGhQU2FyK3FqY3JNQnBzSmIwYkEzV2ZhWXF6Ulg3T1lTZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDK3JKb252bzVQUVVzY2hUSjJVMWlGcll4MDhsQWxReFZWVjFZZ1NYczhuUXlYSURtMFY3ZzJzdU43N1BKMlJSN2RoQzloUGlLTGYvSHFZaDdaS3pDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzWFVYa2orOU1Rc0krL1U2RVB1cFZFcXZPc04vWVZabWU0TnZObDRHRDlwQ245TEc5c1I1NjA1ejRML0NZejI4K0FuM2pZOUo4Rjd6b3dFbDRxbU5DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDU2MDI1MzIwOjk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY2OTQyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBR0FBQUl5b1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFHQUFBSXlvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVUFvRFNzMkhROUlHV3dKTTd6Q3pQbjlUWGptbFdteTMyRm5vWUw3M0FRRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkxOTk1NjA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCw5Nl19LFwidGltZXN0YW1wXCI6XCIxNzMzNjY5MjgwNzkzXCJ9Igp9"  // PUT your SESSION_ID 


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
