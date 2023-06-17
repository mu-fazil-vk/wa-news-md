/*----------------------------------------------------------------------------------/
/ Author and Main Developer: Fazil vk                                               /
/ Github: https://github.com/mu-fazil-vk/wa-news-md                                 /
/ Powered By: Fazil vk                                                              /
/-----------------------------------------------------------------------------------/
/             Meet Fazil vk who holds all rights to this repository:                /
/                                                                                   /
/ Fazil vk - https://github.com/mu-fazil-vk                                         /                                    /
/                                                                                   /
/ ----------------------------------------------------------------------------------/
/                                                                                   /
/      With all of our hard work and defication you can enjoy this awesome bot!     /  
/                                                                                   / 
/----------------------------------------------------------------------------------*/


require("dotenv").config();

// -------------------------------------------------------------- //


global.owner = process.env.OWNER || "NUMBER";
global.mongodb = process.env.MONGODB || "NONE";
global.sessionId = process.env.SESSION_ID || "SESSIONNAME";
global.prefixx = "/";
global.wa_grp_id = process.env.WA_GRP_ID || "ID";
global.packname = process.env.PACKNAME || `Fazil vk`;
global.author = process.env.AUTHOR || "by: Fazil vk";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

