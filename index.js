const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('The Bot Is connected to uptimerobot.com'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

/*--------------------------------------------------------------------------------*/

const Discord = require("discord.js");

const client = new Discord.Client();

const PREFIX ='?';


//////////////////////////////////////////////////////////////////////
client.on("ready", () =>{
  console.log(`Logged in! And Working...`);

client.user.setActivity('⏳ still waiting for N30N to upload something ⏳');
});

client.on('message', message => {
   console.log(message.content);
});

//////////////////////////////////////////////////////////////////////

client.on('message', async message => {

let BrawlStar = [PREFIX +'Brawl'] 
let foundInText = false;
for (var i in BrawlStar) {
  if (message.content.toLowerCase().includes(BrawlStar[i].toLowerCase())) foundInText = true;
}
if (foundInText) {
  number = 5;
  imageNumber = Math.floor (Math.random() * number) + 1;
  message.channel.send ({files: ["./BrawlStar/" + imageNumber + ".jpg"]})
}
});
/////////////////////////////////////////////////////////////////////

client.on('message', async message => {

let Test = [PREFIX + 'Test'] 
let foundInText = false;
for (var i in Test) {
  if (message.content.toLowerCase().includes(Test[i].toLowerCase())) foundInText = true;
}
if (foundInText) {
  message.channel.send ("Test...")
}
});
//////////////////////////////////////////////////////////////////////

client.on('message', async message => {

let Random = [PREFIX + 'Random'] 
let foundInText = false;
for (var i in Random) {
  if (message.content.toLowerCase().includes(Random[i].toLowerCase())) foundInText = true;
}
if (foundInText) {
  message.channel.send ("Ok Here")
 number = 6;
  imageNumber = Math.floor (Math.random() * number) + 1;
  message.channel.send ({files: ["./Random/" + imageNumber + ".jpg"]})
}
});

//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
client.login(process.env.TOKEN)