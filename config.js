const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,|| "s0JXGBJK#Sf7rjZp4oSQe3STtOPTDa1ozKWMiPwxivowVjp8jIOg"
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/rpmxu9.jpg"
    ALIVE_MSG: process.env.ALIVE_MSG ||  "Hello, iam alive" 
};
