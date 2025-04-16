import type { Meta, StoryObj } from '@storybook/angular';
import { CoreCheckBoxComponent } from "./core-check-box.component";

const meta: Meta<CoreCheckBoxComponent> = {
    title: 'Components/CoreControl/CoreCheckBox',
    component: CoreCheckBoxComponent,
    tags: ['autodocs'],
}

export default meta;
type CoreCheckBoxStory = StoryObj<CoreCheckBoxComponent>;


export const primary: CoreCheckBoxStory = {
  args: {
    disabled:true,
    inputValue:true,
    text: 'Checkbox',
    onClick: () => {},
  },
};