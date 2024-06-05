import {Ripple} from '../components/Ripple';
import {Meta, StoryObj} from "@storybook/react";
import {RippleProps} from "../components/Ripple/RippleProps.ts";

const meta = {
    title: 'Ripple',
    component: Ripple,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Ripple>;

export default meta;
type Story = StoryObj<typeof meta>;

const divStyle = {
    textAlign: 'center' as "center",
    background: 'gray',
    color: 'white',
    width: '100px',
    height: '100px'
}

const titleStyle = {
    marginTop: '40%',
    display: 'inline-block'
}

export const Example : Story = {
    name:"Ripple",
    render:  (props : RippleProps) => {
        return (
            <div style={{position: 'relative', ...divStyle}}>
                <Ripple {...props} />
                <span style={titleStyle}>Кликни меня!</span>
            </div>
        )
    }
}