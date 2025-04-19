import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { EnumFormBaseControlType, IFnNameValidator } from '../../enum/enum-interfaces';
import { CoreFormComponent } from './core-form.component';
import { fn } from '@storybook/test';
import { CoreControlService } from '../core-control/core-control.service';
import { Validators } from '@angular/forms';


export class ICoreFormSectionE {
    text!: string
    constructor(text: string) {
        this.text = text;
    }
}

const meta: Meta<CoreFormComponent> = {
    title: 'Components/CoreForm',
    component: CoreFormComponent,
    decorators: [
        moduleMetadata({
            imports: [],
            providers: [CoreControlService]
        })
    ],
    argTypes: {
        inputSections: {
            control: 'object',
            table: {
                category: 'inputs',
                type: { summary: 'ICoreFormSection[]' },
            },
            // description: 'Array of form sections',
        },
        flexDirection:{
            options: ['row', 'column'],
            control: { type: 'radio' },
            table: {
                category: 'inputs',
                type: { summary: 'string' },
            },
        }
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            source: {
                excludeDecorators: false, // Loại bỏ các properties không cần
            },
            controls: {
                exclude: ['form'],
            },
        },
        backgrounds: {
            values: [
              { name: 'red', value: '#f00' },
              { name: 'green', value: '#0f0' },
              { name: 'blue', value: '#00f' },
            ],
          },
    },
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
                ],
                [
                    {
                        controlType: EnumFormBaseControlType.TEXTBOX,
                        field: 'textbox3',
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
                        field: 'textbox5',
                        label: 'Control 1 ',
                        value: '',
                        type: 'text',
                        flexSize: 4,
                        readonly: false,
                        hidden: false
                    }
                ]
            ]
        }],
        iCoreFormSectionE: {
            text: 'xxxxss',
        }
    },
};

export const defaultSForm: CoreFormStory = {
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
                ],
                [
                    {
                        controlType: EnumFormBaseControlType.TEXTBOX,
                        field: 'textbox3',
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
                        field: 'textbox5',
                        label: 'Control 1 ',
                        value: '',
                        type: 'text',
                        flexSize: 4,
                        readonly: false,
                        hidden: false
                    }
                ]
            ]
        }],
        iCoreFormSectionE: {
            text: 'xxxxss',
        }
    },
};