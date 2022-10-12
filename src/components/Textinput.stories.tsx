import {Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { Textinput, TextInputRootProps } from './Textinput'

export default {
    title: 'Components/Textinput',
    component: Textinput.Root,
    args:{
        children: [
                <Textinput.Icon>
                    <Envelope/>
                </Textinput.Icon>,
                <Textinput.input placeholder='Type your e-mail address'/>
        ]
    },
    argTypes: {
        children:{
            table:{
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const WhithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: 
        <Textinput.input placeholder='Type your e-mail address'/>
    }
}

