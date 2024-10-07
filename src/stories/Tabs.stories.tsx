import {Tabs} from '../components/Tabs';
import {Meta, StoryObj} from "@storybook/react";
import {Tab} from "../components/Tabs/Tab";
import {useTabs} from "../hooks/useTabs";
import {Button} from "../components/Button";

const meta = {
    title: 'Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Tabs",
    render: (props) => (
        <Tabs tab='tab2' style={{width: "700px"}} {...props}>
            <Tab id='tab1'>Вкладка 1</Tab>
            <Tab id='tab2'>Длинная вкладка 2</Tab>
            <Tab id='tab3'>Вкладка 3</Tab>
        </Tabs>
    )
}

export const UseTabs: StoryObj = {
    name: "Хук useTabs",
    render: () => {

        const initialValue = "tab1";

        const [tabs, setTab] = useTabs(initialValue);

        return (
            <div style={{padding: "2em"}}>
                <Tabs {...tabs}>
                    <Tab id='tab1'>Вкладка 1</Tab>
                    <Tab id='tab2'>Вкладка 2</Tab>
                    <Tab id='tab3'>Вкладка 3</Tab>
                </Tabs>
                {tabs.tab === 'tab1' && <div>Содержимое 1</div>}
                {tabs.tab === 'tab2' && <div>Содержимое 2</div>}
                {tabs.tab === 'tab3' && <div>Содержимое 3</div>}
                <Button onClick={() => setTab('tab1')}>Сброс</Button>
            </div>
        );
    }
}