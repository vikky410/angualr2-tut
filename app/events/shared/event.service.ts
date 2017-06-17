import {Injectable} from '@angular/core';

@Injectable()
export class EventService {
    getEvents() {
        return EVENTS;
    }
}

const EVENTS = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2018',
        time: '10:00 AM',
        price: '599.90',
        imageUrl: '/app/assets/images/angularconnect.shield.png',
        location: {
            address: '1505',
            city: 'Gurugram',
            country: 'India'
        }
    };