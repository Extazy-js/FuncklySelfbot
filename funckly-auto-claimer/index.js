const Discord = require("discord.js");
const axios = require('axios').default;
const clc = require('cli-color')
const client = new Discord.Client();
const title = require('node-bash-title')
title(`Nitro Sniper [ON]`)
const {
    token
} = require("./config.json");



client.on('ready', () => {
    console.log(clc.redBright`Nous ne sommes en aucun cas responsable d'un ban ou autre!`)
    console.log(clc.green,`Nitro Sniper [ON]`);
});

client.on('message', message => {
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {

        var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/

        var args = Nitro.exec(message.content);
        var NitroCode = args[0].split('/')[1];

        console.log(clc.green,`Nitro found in ${message.guild.name}`);
        
        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`, 
            headers: 
            {
            'Authorization': client.account_token 
            }
        }).then(
            () => console.log(clc.green,`Successfull redeemed on ${message.guild.name}`)
        ).catch(ex => console.log(clc.red,`Error | Failed to claim Nitro`))
    }
})

client.login(token)