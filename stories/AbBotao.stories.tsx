import React from "react"
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbBotao, AbBotaoProps } from '../src'

export default {
    title: 'Components/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args: AbBotaoProps) => <AbBotao {...args} />

export const Primario = Template.bind({})

Primario.args = {
    texto: 'AbBotao Primário',
    tipo: 'primario'
} as AbBotaoProps

export const Secundario = Template.bind({})

Secundario.args = {
    texto: 'AbBotao Secundário',
    tipo: 'secundario'
} as AbBotaoProps
