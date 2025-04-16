import type { Meta, StoryObj } from '@storybook/angular';
import { CoreTextBoxComponent } from './core-text-box.component';
import { EnumFormBaseControlType } from '../../enum/enum-interfaces';

const meta: Meta<CoreTextBoxComponent> = {
    title: 'Components/CoreControl/CoreTextBox',
    component: CoreTextBoxComponent,
    tags: ['autodocs'],
}

export default meta;
type CoreTextBoxStory = StoryObj<CoreTextBoxComponent>;

export const defaultTextbox: CoreTextBoxStory = {
  args: {
    control : {
        controlType: EnumFormBaseControlType.TEXTBOX,
        field: 'textbox',
        label: 'field',
        value: 'TEXTBOX',
        type: 'text',
        flexSize: 12,
        readonly: false,
        hidden: true
    },
    inputValue: 'TEXTBOX'
  },
};

export const DateBox: CoreTextBoxStory = {
    args: {
      control : {
          controlType: EnumFormBaseControlType.DATEPICKER,
          field: 'textbox',
          label: 'field',
          value: '22-03-2003',
          type: 'date',
          flexSize: 12,
          readonly: false,
          hidden: true
      },
      inputValue: '22-03-2003'
    },
  };