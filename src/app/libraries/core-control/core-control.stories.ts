import { Meta, StoryObj } from '@storybook/angular';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { CoreControlComponent } from './core-control.component';
import { action } from '@storybook/addon-actions';
import { EnumFormBaseControlType, IFnNameValidator, IFormBaseControl } from '../../enum/enum-interfaces';
import { userEvent, within } from '@storybook/test';

// Factory function để tạo FormGroup
const fb = new FormBuilder();
const createForm = (value: string, validators?: any) => {
    return fb.group({
        textbox: [value, validators],
    });
};

// Mock model IFormBaseControl
const baseControl: IFormBaseControl = {
    field: 'textbox',
    controlType: EnumFormBaseControlType.TEXTBOX,
    label: 'Field',
    value: '',
    type: 'text',
    flexSize: 12,
    readonly: false,
    hidden: false,
    focus$: new BehaviorSubject<any>(false),
    blur$: new BehaviorSubject<any>(false),

};

const meta: Meta<CoreControlComponent> = {
    title: 'Components/CoreControl',
    component: CoreControlComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `A reusable form control component for Angular Reactive Forms, supporting textbox and checkbox controls.
                <br>
                <img src="/test.jpg" alt="Textbox Example" style="width: 300px; height: auto; border: 1px solid #ccc;"/>`,
            },
        },
        canvas: { disabled: false },
    },
    argTypes: {
        control: {
            control: 'object',
            sort: 'alpha',
            table: {
                type: { summary: 'IFormBaseControl' },
            },
            description: `A reusable form control component for Angular Reactive Forms, supporting textbox and checkbox controls. 
                <img src="/test.jpg" alt="Textbox Example" style="width: 300px; height: auto; border: 1px solid #ccc;"/>`,
        },
        form: { control: false, description: 'Reactive FormGroup' },
        checkError$: { control: false, description: 'BehaviorSubject to trigger error checking' },
    },
};

export default meta;
// type CoreControlStory = StoryObj<CoreControlComponent>;

// // Story: Textbox cơ bản
// export const TextboxDefault: CoreControlStory = {
//     args: {
//         control: {
//             ...baseControl,
//             controlType: EnumFormBaseControlType.TEXTBOX,
//         },
//         form: createForm(''),
//         checkError$: new BehaviorSubject<boolean>(false),
//     },
//     parameters: {
//         excludeFromSidebar: true, // Ẩn khỏi sidebar
//         canvas: { disabled: true }, // Không hiển thị trong Canvas
//         docs: { include: true }, // Đảm bảo Docs hiển thị
//     },
// };

// // Story: Textbox với lỗi validation
// export const TextboxWithError: CoreControlStory = {
//     args: {
//         control: {
//             ...baseControl,
//             controlType: EnumFormBaseControlType.TEXTBOX,
//             label: 'Required Field',
//             value: '',
//             validators: [
//                 {
//                     name: IFnNameValidator.required,
//                     validator: Validators.required,
//                     errorMessage: 'This field is required'
//                 }
//             ]
//         },
//         form: createForm('', Validators.required),
//         checkError$: new BehaviorSubject<boolean>(true),
//     },
//     play: async ({ canvasElement }) => {
//         const canvas = within(canvasElement);
//         const input = await canvas.findByRole('textbox');
//         await userEvent.click(input); // Trigger focus
//         await userEvent.tab(); // Trigger blur
//     },
// };

// // Story: Checkbox
// export const CheckboxDefault: CoreControlStory = {
//     args: {
//         control: {
//             ...baseControl,
//             controlType: EnumFormBaseControlType.CHECKBOX,
//             label: 'Checkbox Field',
//             value: true,
//             type: 'checkbox',
//         },
//         form: fb.group({
//             textbox: [false],
//         }),
//         checkError$: new BehaviorSubject<boolean>(false),
//     },
// };

// // Story: Readonly Textbox
// export const TextboxReadonly: CoreControlStory = {
//     args: {
//         control: {
//             ...baseControl,
//             controlType: EnumFormBaseControlType.TEXTBOX,
//             label: 'Readonly Field',
//             value: 'Readonly Value',
//             readonly: true,
//         },
//         form: createForm('Readonly Value'),
//         checkError$: new BehaviorSubject<boolean>(false),
//     },
// };