import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Task {
    id?: string;
    title?: string;
    state?: string;
}

@Component({
    selector: 'task-box',
    standalone: true,
    templateUrl: './task-box.component.html',
    styleUrl: './task-box.component.scss',
})

export class TaskBoxComponent {
    /**
   * The shape of the task object
  */
    @Input() task?: Task;

    // tslint:disable-next-line: no-output-on-prefix
    @Output()
    onPinTask = new EventEmitter<Event>();

    // tslint:disable-next-line: no-output-on-prefix
    @Output()
    onArchiveTask = new EventEmitter<Event>();

    /**
     * @ignore
     * Component method to trigger the onPin event
     * @param id string
     */
    onPin(id: any) {
        this.onPinTask.emit(id);
    }
    /**
     * @ignore
     * Component method to trigger the onArchive event
     * @param id string
     */
    onArchive(id: any) {
        this.onArchiveTask.emit(id);
    }
}