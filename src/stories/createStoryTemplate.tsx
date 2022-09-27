import {ComponentProps, ElementType} from "react";
import {ComponentStory} from "@storybook/react";

type Template<C extends ElementType> =
    ComponentStory<C>
    & { createStory: (args: ComponentProps<C>, name? : string) => ComponentStory<C> };

export function createStoryTemplate<C extends ElementType>(Component: C): Template<C> {
    const Template: Template<C> = args => <Component {...args}/>
    Template.createStory = (args : ComponentProps<C>, name? : string) => {
        const Story = Template.bind({});
        Story.args = args;

        if(name) Story.storyName = name;

        return Story;
    }
    return Template;
}