const execute = (bot, msg, args) => {
    let str = `**============ LISTA DE COMANDOS ============**\n`;
    bot.commands.forEach(command => {
        if (command.help) {
            str += `--------------------------------------------------------------------\n**${process.env.PREFIX + command.name}**: ${command.help}\n**Argumentos**: ${command.args}\n**Exemplo**: ${command.example}`
        }
    })
    return msg.channel.send(str);
}

module.exports = {
    name: "help",
    help: "Exibe uma lista com todos os comandos disponíveis.",
    args: "",
    example: "!help",
    execute
}