
import type { Meta, StoryObj } from '@storybook/angular';

import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskBoxComponent } from '../task-box/task-box.component';
import * as TaskStories from '../task-box/task-box.stories';


const image = {
    src: '',
    alt: 'my image',
};

const meta: Meta<TaskListComponent> = {
    component: TaskListComponent,
    title: 'Example/TaskList',
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
        }),
    ],
    args: {
        ...TaskStories.ActionsData,
    },
};
export default meta;
type Story = StoryObj<TaskListComponent>;

export const Default: Story = {
    args: {
        tasks: [
            { ...TaskStories.Default.args?.task, id: '1', title: 'Task 1' },
            { ...TaskStories.Default.args?.task, id: '2', title: 'Task 2' },
            { ...TaskStories.Default.args?.task, id: '3', title: 'Task 3' },
            { ...TaskStories.Default.args?.task, id: '4', title: 'Task 4' },
            { ...TaskStories.Default.args?.task, id: '5', title: 'Task 5' },
            { ...TaskStories.Default.args?.task, id: '6', title: 'Task 6' },
        ],
    },
};

export const WithPinnedTasks: Story = {
    args: {
        tasks: [{
            "id": "1",
            "title": "Task 1",
            "state": "TASK_INBOX"
        }, {
            "id": "2",
            "title": "Task 2",
            "state": "TASK_INBOX"
        }, {
            "id": "3",
            "title": "Task 3  (pinned)",
            "state": "TASK_PINNED"
        }, {
            "id": "4",
            "title": "Task 4",
            "state": "TASK_INBOX"
        }, {
            "id": "5",
            "title": "Task 5",
            "state": "TASK_INBOX"
        }, {
            "id": "6",
            "title": "Task 6 (pinned)",
            "state": "TASK_PINNED"
        }],
    },
};

export const Loading: Story = {
    args: {
        tasks: [
            { ...TaskStories.Archived.args?.task, id: '7', title: 'Task 6' },
        ],
        loading: true,
    },
};

export const Empty: Story = {
    args: {
        // Shaping the stories through args composition.
        // Inherited data coming from the Loading story.
        ...Loading.args,
        loading: false,
    },
    // render: () => `<img src={image.src} alt={image.alt} />`,
};
