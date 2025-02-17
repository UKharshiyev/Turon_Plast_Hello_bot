require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", msg => {
    if (msg.new_chat_members) {
        msg.new_chat_members.forEach(user => {
            const chatId = msg.chat.id;
            const username = user.username
                ? `@${user.username}`
                : user.first_name;

            bot.sendMessage(
                chatId,
                `Assalomu alaykum ${username}
❇️ Turon Sam Plast MCHJ endi telegramda. 

📖 Turon Sam Plast MCHJ:
✅ Plyonkalarimiz eniga 3.m dan 16.m gacha
✅ Polietilen trubalar
✅ Layflat kapelniy sistemalar

♻️ Ishlab chiqarish va yetkazib berish xizmati

🌐 Bizning manzil: Samarqand viloyati , Kattaqurg'on tumani Mullako'rpa MFY

🚚 Yetkazib berish 100.km radiusgacha ✅ BEPUL.

1⃣ Buyurtma berish uchun bizning 🤖Bot manzilimizga muroojat qiling:    
👉 @turonplastclientbot

⚠️ yoki

2⃣ Muroojat uchun telefonlar: 

☎️  +998332253333
☎️ +998942253333
☎️ +998948343333
☎️ +998948353333

❗️Muroojat qilish vaqti: 08:00 dan 20:00 gacha.`
            );
        });
    }
});
