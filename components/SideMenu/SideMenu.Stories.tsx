import React from "react";
import SideMenu from './SideMenu';

const sideMenuConfig = {
    children: '',
    title: 'Component/SideMenu',
    component: SideMenu,
};

export default sideMenuConfig;

const Template = (args: any) => {
    return (
        <SideMenu {...args} />
    )
};

const props = {
    defaultProps: () => ({
    }),
};

export const SideMenuStory: any = Template.bind({});
const defaultProps = props.defaultProps();
SideMenuStory.storyName = 'SideMenu';
SideMenuStory.args = {
    ...defaultProps,
};