import {Checkbox} from '../components/Checkbox'
import {ComponentMeta} from "@storybook/react";
import {createStoryTemplate} from "./createStoryTemplate";

export default {
    title: "Компоненты/Checkbox",
    component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template  = createStoryTemplate(Checkbox)

export const Default = Template.createStory({
});
