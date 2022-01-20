const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Cyber = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');
const END = "Clear chat";
const ARC = "Archive a chat";
const UNARC = "Unarchive a chat"

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Cyber.addCommand({pattern: 'clear', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage('```Chat clearing... 🔄```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```🚮 Chat cleared 👾🤫```');
}));
Cyber.addCommand({pattern: 'archive', fromMe: true, desc: ARC, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage('```Archive Chat!...```');
    await message.client.modifyChat (message.jid, ChatModification.archive);
    await message.sendMessage('```Succesfull Archived```');
}));
Cyber.addCommand({pattern: 'unarchive', fromMe: true, desc: UNARC, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage('```UnArchive Chat!..```');
    await message.client.modifyChat (message.jid, ChatModification.unarchive);
    await message.sendMessage('```Succesfull UnArchived```');
}));
Cyber.addCommand({pattern: 'emergencycrash', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {
    const msg = 
    `
    ▒▒█▒▒▒▄██████████▄▒▒▒▒
    ▒█▐▒▒▒████████████▒▒▒▒
    ▒▌▐▒▒██▄▀██████▀▄██▒▒▒
    ▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
    ▐┼▐▒▒██████████████▒▒▒
    ▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
    ▒▒█████──────────▐███▌
    ▒▒█▀▀██▄█─▄───▐─▄███▀▒
    ▒▒█▒▒███████▄██████▒▒▒
    ▒▒▒▒▒██████████████▒▒▒
    ▒▒▒▒▒██████████████▒▒▒
    ▒▒▒▒▒█████████▐▌██▌▒▒▒
    ▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ `
const c = `
░█████╗░
██╔══██╗
██║░░╚═╝
██║░░██╗
╚█████╔╝
░╚════╝░`
const o = `
░█████╗░
██╔══██╗
██║░░██║
██║░░██║
╚█████╔╝
░╚════╝░`
const b = `
██████╗░
██╔══██╗
██████╦╝
██╔══██╗
██████╦╝
╚═════╝░`
const r = `
██████╗░
██╔══██╗
██████╔╝
██╔══██╗
██║░░██║
╚═╝░░╚═╝`
const a = `
░█████╗░
██╔══██╗
███████║
██╔══██║
██║░░██║
╚═╝░░╚═╝`

    await message.sendMessage('*᳆dripshacker*');
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.sendMessage(msg); 
    await message.sendMessage('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + msg + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + msg + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ✦ Powered By Cobrabot');
    await message.client.toggleDisappearingMessages(message.jid, 0);     
    await message.sendMessage('```❌ Crash Starting ❌```');    
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 0);   
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);      
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 0);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.sendMessage('```❌ Crashing```')
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);         
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);  
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a); 
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 1000);  
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a); 
    await message.sendMessage('```❌ Crash Stop❌```');
    await message.sendMessage('```❌ Crash Stopping❌```');
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 1000);  
    await message.sendMessage('```❌Crash Stopped❌```'); 
    
}));
