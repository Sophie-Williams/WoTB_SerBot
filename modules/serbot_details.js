const SerBotData = require('../SerBot.json');

module.exports = {
    "CommandArray":{
        "HelpArray":{
            "hidden": false,
            "command": ["HELP"],
            "name": "Help Message",
            "action": "Request Help Message To be sent via PM.",
            "example": "help",
            "usage": "Display help Message."
        },
        "BotNewsArray":{
            "hidden": false,
            "command": ["NEWS"],
            "name": "RSS feed for SerBot Updates",
            "action": "Request SerBot RSS Updates",
            "example": "news",
            "usage": "Obtains news about SerBot's latest status."
        },
        "PSArray":{
            "hidden": false,
            "command": ['PS','PLAYER','PLAYERSTATS'],
            "name": "Player Stats",
            "action": "Check Player stats via WG API.",
            "example": "PlayerStats [Server Tag] [Player IGN Search] (-rating)",
            "usage": `Server Tag: \`SEA\` for Asian Server, \`EU\` for European server, \`RU\` for Russian server, \`NA\` for North America server.\nPlease use Full Player In Game Name (IGN) That is at least 3 Characters Long For Checking. Alias: \`Player\`, \`PS\`\n\`${SerBotData.commandInvoke}rating\` is for checking rating for Rating Battles, Optional. Alias: \`${SerBotData.commandInvoke}ranting\`, \`${SerBotData.commandInvoke}r\`\n\`${SerBotData.commandInvoke}fuzzy\` is for fuzzy IGN search when you can't remember the exact IGN, optional. Alias: \`${SerBotData.commandInvoke}f\`.`
        },
        "CSArray":{
            "hidden": false,
            "command": ['CS','CLAN','CLANSTATS'],
            "name": "Clan Stats",
            "action": "Check Clan Stats",
            "example": "ClanStats [Server Tag] [Clan Tag Search]",
            "usage": `Server Tag: \`SEA\` for Asian Server, \`EU\` for European server, \`RU\` for Russian server, \`NA\` for North America server.\nPlease use a Clan Tag that is 2-5 Characters Long For Checking. Alias: \`Clan\`, \`CS\`\n\`${SerBotData.commandInvoke}member\` is for listing the full member list of the clan, with simple statistics of the players. Optional. Alias: \`${SerBotData.commandInvoke}members\`, \`${SerBotData.commandInvoke}m\``
        },
        "SPArray":{
            "hidden": false,
            "command": ["SERVERP","SP","SERVERPOPULATION"],
            "name": "Server Population Module",
            "action": "Check Server Populaton of WoTB Servers via WG API, Alias: \`SP\`, \`Serverpopulation\`.",
            "example": "serverp",
            "usage": ""
        },
        "KAArray":{
            "hidden": false,
            "command": ["KEYART","KA"],
            "name": "Keyart Mod Generation Module",
            "action": "Generate login Keyarts Mods using Images.",
            "example": "Keyart [URL to image]",
            "usage": "**URL will not be used if there is an image attachment to the message with the command used.**\nRecommended Input Image Size is 2728 x 1536, SerBot will deal with cropping and scaling when a different size is provided"
        },
        "RequestArray":{
            "hidden": true,
            "command": ["REQUEST"],
            "name": "Web Request",
            "action": "Carry out Request",
            "example": "request [URL]",
            "usage": "Carry out Request from given address. Only Supports JSON Objects."
        },
        "UptimeArray":{
            "hidden": true,
            "command": ["UPTIME"],
            "name": "Uptime Show",
            "action": "Show SerBot Uptime.",
            "example": "uptime",
            "usage": "Display Uptime"
        },
        "PingArray":{
            "hidden": false,
            "command": ["PING"],
            "name": "Ping-Pong Module",
            "action": "Check SerBot Availability and TTS Permission",
            "example": "ping",
            "usage": "Simply Replys Pong with TTS When Sent."
        },
        "InviteArray":{
            "hidden": false,
            "command": ["INVITE"],
            "name": "Invitation Link Module",
            "action": "Sends the Bot Invitation Link via PM.",
            "example": "invite",
            "usage": "This will request SerBot to PM you a Invite link to invite it to your server!"
        },
        "AboutArray":{
            "hidden": false,
            "command": ["ABOUT"],
            "name": "SerBot Information",
            "action": "Gets Detailed Infromation about SerBot.",
            "example": "about",
            "usage": ""
        }
    },
    "ErrorArray":{
        "Missing_Attachment":{
            "sus": "error",
            "catagory": "Keyart Generation Missing Image or URL as Attachment!",
            "reason": "Attachment for Keyart generation or URL for Keyart Generation is missing, Please attach a valid image attachment and try again.",
            "console_reason": "missing attachment"
        },
        "WG_api_Error":{
            "sus": "error",
            "catagory": "WG API Search Error!",
            "reason": "Searching from WG API Returned Expected Array, Please try again later.",
            "console_reason": "Unexpected Reply"
        },
        "Short_Search_String": {
            "sus": "error",
            "catagory": "Incorrect Command Usage!",
            "reason": "Search String Too Short Or No Search String, Please Use a longer Search String as indicated in the command Usage.",
            "console_reason": "Search String Too Short"
        },
        "Incorret_Server_Tag": {
            "sus": "error",
            "catagory": "Incorrect Command Usage!",
            "reason": "Unidentified Server Tag",
            "console_reason": "Unidentified Server Tag"
        },
        "No_Clan": {
            "sus": "error",
            "catagory": "No Clan Found!",
            "reason": "No Matching Clan Has Been Found, Please Try Using another Clan Tag.",
            "console_reason": "No Match found"
        },
        "No_Battles": {
            "sus": "error",
            "catagory": "No Battle record is found for this player!",
            "reason": "This player doesn't have any battles under his record, Please Try Using another IGN.",
            "console_reason": "No Battle Record"
        },
        "No_Player": {
            "sus": "error",
            "catagory": "No Player Found!",
            "reason": "No Matching Player Has Been Found, Please Try Using another IGN.",
            "console_reason": "No Match Found"
        },
        "Embed_Not_Allowed": {
            "sus": "error",
            "catagory": "Permission Setting Error!",
            "reason": "Embed Links is REQUIRED for this command. Please Enable this permission and try again.",
            "console_reason": "Insufficient Permission"
        },
        "Unexpected_Error":{
            "sus": "error",
            "catagory": "Unexpected Error!",
            "reason": "Unexpected Error Occured. I have already Forwarded a full Error Log To Maddox to investigate the issue. \nPlease try the command again.\nHe will eventaually realise the shit he had made if you throw enough error logs at him.",
            "console_reason": "Unexpected Error"
        }
    },
    "ServerIdentifierArray":{
        "SA":{
            "server": "SA",
            "server_fullName": "South-East Asian Server",
            "domain": "http://api.wotblitz.asia",
            "display": "SEA",
            "exception_domain": "asia",
            "lan": "en"
        },
        "EU":{
            "server": "EU",
            "server_fullName": "European Server",
            "domain": "http://api.wotblitz.eu",
            "display": "EU",
            "exception_domain": "eu",
            "lan": "en"
        },
        "NA":{
            "server": "NA",
            "server_fullName": "North America Server",
            "domain": "http://api.wotblitz.com",
            "display": "NA",
            "exception_domain": "com",
            "lan": "en"
        },
        "RU":{
            "server": "RU",
            "server_fullName": "Russian Server",
            "domain": "http://api.wotblitz.ru",
            "display": "RU",
            "exception_domain": "ru",
            "lan": "ru"
        }
    }};