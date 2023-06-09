import fetchEventsFromGoogleCalendars from '/js/fetchEvents.js';  
  import createEventInstance from '/js/components/event-instance.component.js';
  // Usage example
  const calendarIds = ['fc427b23f3a37346f0c88019e57abc1ece390381480bbd6a976b6392c0383805@group.calendar.google.com', 'f32a825d1e896ae19a0478fed6ab8483b1906bfd6ec30a8364f6a311fee61148@group.calendar.google.com'];
  const apiKey = 'AIzaSyB99XNLOAsQIHFwo4wFZ0H0jgGxEDSsr1A';

  fetchEventsFromGoogleCalendars(calendarIds, apiKey)
    .then((events) => {
      events.forEach((event) => {      
        createEventInstance(event);  
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });