import { Component, input } from "@angular/core";

@Component({
    selector: 'theme',
    templateUrl: './theme.component.html',
    standalone: true
})

export class ThemeComponent {
    theme = input<string>('light');
    constructor() { }
}