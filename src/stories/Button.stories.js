import Button from "../components/Button";

export default {
    title: "Компоненты/Button",
    component: Button
}

const Template = args => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
    children: "Нажми меня"
}

export const ButtonWithLink = Template.bind({})
ButtonWithLink.args = {
    elementType: 'a',
    href: '/',
    children: "Я ссылка"
}