import fetchEventsFromGoogleCalendars from '/js/fetchEvents.js';  
import createEventInstance from '/js/event-instance.js';
const eventsEl = document.getElementById('events');    
  // Usage example
  const calendarIds = ['fc427b23f3a37346f0c88019e57abc1ece390381480bbd6a976b6392c0383805@group.calendar.google.com', 'f32a825d1e896ae19a0478fed6ab8483b1906bfd6ec30a8364f6a311fee61148@group.calendar.google.com'];
  const apiKey = 'AIzaSyB99XNLOAsQIHFwo4wFZ0H0jgGxEDSsr1A';
  const now = new Date().valueOf();      

  fetchEventsFromGoogleCalendars(calendarIds, apiKey)
    .then((events) => {    
      
      events.sort(function(a,b) {
        let aStart = new Date(a.start.dateTime).valueOf();
        let bStart = new Date(b.start.dateTime).valueOf();
        return aStart - bStart;
      });
      eventsEl.innerHTML = '';
      events.forEach((event) => {        
        let eventStart = new Date(event.end.dateTime).valueOf();
        if (eventStart > now) {          
          createEventInstance(event, eventsEl);
        }
      })
    })    
    .catch((error) => {
      console.error('Error:', error);
    });