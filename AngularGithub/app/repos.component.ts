﻿import { Component,OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'repos',
    templateUrl: './repos.component.html'
})
export class ReposComponent implements OnInit {
    constructor() {
        
    }

    @Input() RepoList: any;
    @Output() sayMyName = new EventEmitter();
    ngOnInit() {

    }

    public triggerEvent(message: string) {
        this.sayMyName.emit(message);
    }
    
}
