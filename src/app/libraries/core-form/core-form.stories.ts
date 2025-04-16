import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { EnumFormBaseControlType, IFnNameValidator } from '../../enum/enum-interfaces';
import { CoreFormComponent } from './core-form.component';
import { fn } from '@storybook/test';
import { CoreControlService } from '../core-control/core-control.service';
import { Validators } from '@angular/forms';

const meta: Meta<CoreFormComponent> = {
    title: 'Components/CoreForm',
    component: CoreFormComponent,
    decorators: [
        moduleMetadata({
            providers: [CoreControlService]
        })
    ],
    tags: ['autodocs'],
    args: { buttonClick: fn() },
}

export default meta;
type CoreFormStory = StoryObj<CoreFormComponent>;

export const defaultForm: CoreFormStory = {
    args: {
        formName: 'formName',
        inputSections: [{
            caption: 'caption 1',
            rows: [
                [
                    {
                        controlType: EnumFormBaseControlType.TEXTBOX,
                        field: 'textbox',
                        label: 'Control 1 ',
                        value: '',
                        type: 'text',
                        flexSize: 4,
                        readonly: false,
                        hidden: false,
                        validators: [
                            {
                                name: IFnNameValidator.required,
                                validator: Validators.required,
                                errorMessage: 'This field is required'
                            }
                        ]
                    },
                    {
                        controlType: EnumFormBaseControlType.TEXTBOX,
                        field: 'textbox1',
                        label: 'Control 1 ',
                        value: '',
                        type: 'text',
                        flexSize: 4,
                        readonly: false,
                        hidden: false
                    }
                ]
            ]
        }]
    },
};