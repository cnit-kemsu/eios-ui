import {ComponentProps, ElementType} from "react";
import {ComponentStory} from "@storybook/react";

type Template<C extends ElementType> =
    ComponentStory<C>
    & { createStory: (args: ComponentProps<C>) => ComponentStory<C> };

export function createStoryTemplate<C extends ElementType>(Component: C): Template<C> {
    const Template: Template<C> = args => <Component {...args}/>
    Template.createStory = (args : ComponentProps<C>) => {
        const Story = Template.bind({});
        Story.args = args;
        return Story;
    }
    return Template;
}