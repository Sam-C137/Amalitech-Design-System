import { Meta } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { renderIcons } from '../docked-utility-bar/utils';

export default {
  title: 'Components/Docked Utility Bar/Body',
  tags: ['autodocs'],
  component: 'amalitech-docked-utility-body',
  decorators: [withActions],
} as Meta;

const Template = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('amalitech-docked-utility-item').forEach((item: any) => {
      item.style.display = 'flex';
      item.style.aligItems = 'center';
      item.style.justifyContent = 'space-between';
      item.style.gap = '10px';
      item.style.marginTop = '10px';
    });
    document.querySelectorAll('amalitech-docked-utility-body').forEach((item: any) => {
      item.style.setProperty('--docked-utility-body-width', '90.3vw');
      item.style.height = '200px';
    });
  });

  return `
        <div style="height: 600px; width: 700px;">
            <amalitech-docked-utility-bar>
                <amalitech-docked-utility-item content="fight-club"> ${renderIcons('call')} Call </amalitech-docked-utility-item>
            </amalitech-docked-utility-bar>
            <amalitech-docked-utility-body name="fight-club">
                <div slot="logo" style="display: flex; align-items: center; justify-content: space-between; gap: 5px;"> ${renderIcons('call')} Call</div>
                <div slot="content">
                  Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here.
                  Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
                </div>
            </amalitech-docked-utility-body>
         </div>
            `;
};

export const Default = Template.bind({});
