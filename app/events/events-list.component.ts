import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <h1> Upcoming Angular 2 events </h1>
    <hr>
    <event-thumbnail #thumbnail [event]="event1" (eventClick)="handleClickedEvent($event)" ></event-thumbnail>
    ` 
})
export class EventsListComponent implements OnInit{
    event1:any;

    constructor(private eventService: EventService, private toastr: ToastrService) {}

    ngOnInit() {
        this.event1 = this.eventService.getEvents();

    }

    handleClickedEvent(event) {
        console.log("Receivde:" + event);
        this.toastr.success(event);
    }
}