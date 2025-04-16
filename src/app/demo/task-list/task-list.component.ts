import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, TaskBoxComponent } from '../task-box/task-box.component';

@Component({
    selector: 'task-list',
    standalone: true,
    templateUrl: 'task-list.component.html',
    imports:[TaskBoxComponent]
})

export class TaskListComponent {
    /** The list of tasks */
    @Input() tasks: Task[] = [];

    /** Checks if it's in loading state */
    @Input() loading = false;

    /** Event to change the task to pinned */
    // tslint:disable-next-line: no-output-on-prefix
    @Output()
    onPinTask = new EventEmitter<Event>();

    /** Event to change the task to archived */
    // tslint:disable-next-line: no-output-on-prefix
    @Output()
    onArchiveTask = new EventEmitter<Event>();
}