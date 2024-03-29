module.exports = {
    "stories": ["../src/stories/*.stories.mdx", "../src/stories/*.stories.@(js|jsx|ts|tsx)"],
    "addons": ["@storybook/addon-docs", "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    "framework": {
        name: "@storybook/react-vite",
        options: {}
    },
    docs: {
        autodocs: true
    },
    core: {
        builder: '@storybook/builder-vite'
    }
};