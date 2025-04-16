import { Meta, StoryObj } from '@storybook/angular';
import { TaskBoxComponent } from './task-box.component';
import { fn } from '@storybook/test';


export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
};

const meta: Meta<TaskBoxComponent> = {
    title: 'Example/TaskBoxComponent',
    component: TaskBoxComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args: {
        ...ActionsData,
    },
};

export default meta;
type TaskBox = StoryObj<TaskBoxComponent>;



export const Default: TaskBox = {
    args: {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
      },
    },
  };
  
  export const Pinned: TaskBox = {
    args: {
      task: {
        ...Default.args?.task,
        state: 'TASK_PINNED',
      },
    },
  };
  
  export const Archived: TaskBox = {
    args: {
      task: {
        ...Default.args?.task,
        state: 'TASK_ARCHIVED',
      },
    },
  };