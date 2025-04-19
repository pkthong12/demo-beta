import type { Meta, StoryObj } from '@storybook/angular';
import { ThemeComponent } from './theme.component';


const meta: Meta<ThemeComponent> = {
    title: 'Style System/Theme',
    component: ThemeComponent,
    tags: ['autodocs'],
    parameters: {
        
        
    }
}

export default meta;
type ThemeStory = StoryObj<ThemeComponent>;

export const Light: ThemeStory = {
    args: {
        theme: 'light'
    },
};
export const Dark: ThemeStory = {
    args: {
        theme: 'dark'
    },
};

