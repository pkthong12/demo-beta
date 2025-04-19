import type { Meta, StoryObj } from '@storybook/angular';
import { ColorComponent } from './color.component';

const meta: Meta<ColorComponent> = {
    title: 'Style System/Color',
    component: ColorComponent,
    tags: ['autodocs'],
    argTypes:{
        color:{
            control: false
        }
    },
    parameters: {
        docs: {
            source: {
                excludeDecorators: false, // Loại bỏ các properties không cần
            },
            controls: {
                exclude: ['color'],
            },
        },
    },
}

export default meta;
type ColorStory = StoryObj<ColorComponent>;

export const Light: ColorStory = {
    args: {
        color: 'var(--light)'
    },
};
export const Dark: ColorStory = {
    args: {
        color: 'var(--dark)'
    },
};

