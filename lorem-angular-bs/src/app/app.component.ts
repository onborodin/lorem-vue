import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $ : any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    ngOnInit() {
        console.log('App mount')
    }
}
