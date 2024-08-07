import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { renderIcons } from "./utils";

export default {
  title: "Components/Docked Utility Bar",
  tags: ["autodocs"],
  component: "amalitech-docked-utility-bar",
  decorators: [withActions],
} as Meta;

const Template = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll("amalitech-docked-utility-item")
      .forEach((item: any) => {
        item.style.display = "flex";
        item.style.aligItems = "center";
        item.style.justifyContent = "space-between";
        item.style.gap = "10px";
        item.style.marginTop = "10px";
      });
    document
      .querySelectorAll("amalitech-docked-utility-body")
      .forEach((item: any) => {
        item.style.setProperty("--docked-utility-body-width", " 965px");
        item.style.height = "200px";
      });
  });

  return `
        <div style="height: 600px; width: 700px;">
            <amalitech-docked-utility-bar>
                <amalitech-docked-utility-item content="fight-club"> ${renderIcons(
                  "call"
                )} Call </amalitech-docked-utility-item>
                <amalitech-docked-utility-item content="the-matrix"> ${renderIcons(
                  "history"
                )} History </amalitech-docked-utility-item>
                <amalitech-docked-utility-item content="pulp-fiction"> ${renderIcons(
                  "notes"
                )} Notes </amalitech-docked-utility-item>
                <amalitech-docked-utility-item content="inception"> ${renderIcons(
                  "channel"
                )} Online Channel </amalitech-docked-utility-item>
                <amalitech-docked-utility-item content="blade-runner"> ${renderIcons(
                  "extras"
                )} Extras </amalitech-docked-utility-item>
            </amalitech-docked-utility-bar>
            <amalitech-docked-utility-body name="fight-club">
                <div slot="logo" style="display: flex; align-items: center; justify-content: space-between; gap: 5px;">${renderIcons(
                  "call"
                )} Call</div>
                <div slot="content">
                  Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here.
                  Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
                </div>
            </amalitech-docked-utility-body>
            <amalitech-docked-utility-body name="the-matrix">
                <div slot="logo" style="display: flex; align-items: center; justify-content: space-between; gap: 5px;">${renderIcons(
                  "history"
                )} History</div>
                <div slot="content">
                  You have to understand, most of these people are not ready to be unplugged. And many of them are so inured, so hopelessly dependent on the system, that they will fight to
                  protect it. Were you listening to me, Neo? Or were you looking.
                </div>
            </amalitech-docked-utility-body>
            <amalitech-docked-utility-body name="pulp-fiction">
                <div slot="logo" style="display: flex; align-items: center; justify-content: space-between; gap: 5px;">${renderIcons(
                  "notes"
                )} Notes</div>
                <div slot="content">
                  The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will,
                  shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance
                  and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee.
                </div>
            </amalitech-docked-utility-body>
            <amalitech-docked-utility-body name="inception">
                <div slot="logo" style="display: flex; align-items: center; justify-content: space-between; gap: 5px;">${renderIcons(
                  "channel"
                )} Online Channel</div>
                <div slot="content">
                  Dreams feel real while we’re in them. It’s only when we wake up that we realize something was actually strange.
                </div>
            </amalitech-docked-utility-body>
            <amalitech-docked-utility-body name="blade-runner">
                <div slot="logo" style="display: flex; align-items: center; justify-content: space-between; gap: 5px;">${renderIcons(
                  "extras"
                )} Extras</div>
                <div slot="content">
                  <p>Dreadfully distinct.</p>
                  <p>A blood black nothingness began to spin.</p>
                  <p>Let's move on to system. System.</p>
                  <p>Feel that in your body. The system.</p>
                  <p>What does it feel like to be part of the system. System.</p>
                  <p>What is it like when someone gives you the silent treatment. Dark.</p>
                  <p>Why are these things happening? Against the dark.</p>
                  <p>Do you dream about being interlinked?</p>
                  <p>Have they left a place for you where you can dream? Interlinked.</p>
                  <p>Is that a metaphor? White Fountain.</p>
                  <p>Do you like fire, earth, air or water. A Tall White Fountain.</p>
                  <p>Do you like skipping around in the water? A Tall White Fountain.</p>
                  <p>A blood black nothingness. A system of cells. Within cells interlinked. Within one stem. And dreadfully distinct. Against the dark. A tall white fountain played.</p>
                </div>
            </amalitech-docked-utility-body>
        </div>
        `;
};

export const Default = Template.bind({});
