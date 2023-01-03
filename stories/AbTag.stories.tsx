import React from "react"
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbTag, AbTagProps } from '../src/components/AbTag'

export default {
    title: 'components/AbTag',
    component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (props) => <AbTag {...props} />

export const Primario = Template.bind({})

Primario.props = {
    texto: 'texto 123'
} as AbTagProps
