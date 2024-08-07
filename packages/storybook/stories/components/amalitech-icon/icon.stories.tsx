export default {
  title: "Beta Components/Icons",
  component: "amalitech-icon-*",
  argTypes: {
    width: {
      control: { type: "text" },
      description: "controls the width of the icon",
      type: "text",
      table: {
        defaultValue: {
          summary: "24px",
        },
      },
    },
    height: {
      control: { type: "text" },
      type: "text",
      description: "controls the height of the icon",
      table: {
        defaultValue: {
          summary: "24px",
        },
      },
    },
    iconColor: {
      control: { type: "color" },
      type: "text",
      description: "changes the color of the icon",
      table: {
        defaultValue: {
          summary: "#000000",
        },
      },
    },
  },
  render: () => {
    return ``;
  },
};

export const Normal = {};
