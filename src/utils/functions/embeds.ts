import { ColorResolvable, CommandInteraction, EmbedBuilder } from "discord.js"

import { replyToInteraction } from "@utils/functions"
/**
 * Send a simple success embed
 * @param interaction - discord interaction
 * @param message - message to log
 */
export const simpleSuccessEmbed = (interaction: CommandInteraction, message: string) => {

    const embed = new EmbedBuilder()
        .setColor(0x57f287) // GREEN // see: https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/util/Colors.js
        .setTitle(`✅ ${message}`)

    replyToInteraction(interaction, { embeds: [embed] })
}

export const simpleInfoEmbed = (interaction: CommandInteraction, message?:string, title?:string, image?:string, color?:ColorResolvable) => {
    const embed = new EmbedBuilder()
        .setTitle(title || null)
        .setImage(image || null)
        .setDescription(message || null)
        .setColor(color || null) // GREEN // see:
}

/**
 * Send a simple error embed
 * @param interaction - discord interaction
 * @param message - message to log
 */
export const simpleErrorEmbed = (interaction: CommandInteraction, message: string) => {

    const embed = new EmbedBuilder()
        .setColor(0xed4245) // RED // see: https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/util/Colors.js
        .setTitle(`❌ ${message}`)

    replyToInteraction(interaction, { embeds: [embed] })
}