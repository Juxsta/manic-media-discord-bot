import { ColorResolvable } from "discord.js"

import { colorsConfig } from "@configs"

/**
 * Get a color from the config
 * @param colorResolver The color to resolve
 * @returns 
 */
export const getColor = (colorResolver: keyof typeof colorsConfig) => {

    return colorsConfig[colorResolver] as ColorResolvable
}

export const getRandomColor = () => {
    const pastelColors = {
        "Pastel Pink": 0xdea5a4,
        "Peach": 0xffdab9,
        "Baby Blue": 0xa2d8d8,
        "Lavender": 0xe6e6fa,
        "Mint Green": 0x98ff98,
        "Cornflower Blue": 0xb0c4de,
        "Light Yellow": 0xffffe0,
        "Light Gray": 0xd3d3d3,
        "Light Green": 0x90ee90,
        "Pale Goldenrod": 0xeee8aa,
        "Periwinkle": 0xc9c9ff,
        "Pale Turquoise": 0xafeeee
    }
    // choose a random color from the list
    const randomColor = Math.floor(Math.random() * Object.keys(pastelColors).length)
    return Object.values(pastelColors)[randomColor]
}