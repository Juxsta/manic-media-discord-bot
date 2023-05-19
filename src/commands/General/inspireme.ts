import { Client } from 'discordx'
import { Category } from '@discordx/utilities'
import { CommandInteraction, EmbedBuilder } from 'discord.js'

import { Discord, Slash } from '@decorators'
import { Guard } from '@guards'
import { getRandomColor, replyToInteraction} from "@utils/functions"
import axios from "axios"

@Discord()
@Category('General')
export default class InspiremeCommand {

	@Slash({
		name: 'inspireme',
		description: 'Feeling down? Get inspired!'
	})
	@Guard()
	async inspireme(
		interaction: CommandInteraction,
		client: Client,
		{ localize }: InteractionData
	) {
		const res = await axios.get<string>('https://inspirobot.me/api?generate=true')
		const embed = new EmbedBuilder()
			.setTitle("Be Inspired")
			.setColor(getRandomColor())
			.setImage(res.data)
		replyToInteraction(interaction, { embeds: [embed] })
	}
}