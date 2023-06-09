const parseEventDescription = (description) => {
    try {
      const { url, organizer, summary } = JSON.parse(description);
      return { url, organizer, summary };
    } catch (error) {
      console.error('Error parsing event description:', error);
      return { url: '', organizer: '', summary: '' };
    }
  }


const fetchEventsFromGoogleCalendars = async function (calendarIds, key) {
    try {
      const events = [];

      for (const calendarId of calendarIds) {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${key}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch events from Google Calendar: ${calendarId}`);
        }

        const data = await response.json();
        const calendarEvents = data.items.map((event) => {
          const { url, organizer, summary } = parseEventDescription(
            event.description || ''
          );

          const eventInfo = {
            id: event.id,
            createdAt: event.created,
            addToCal: event.htmlLink,
            startDate: new Date(event.start.dateTime),
            endDate: new Date(event.end.dateTime),
            type: event.organizer.displayName,
            title: event.summary,
            summary: summary || 'No information provided',
            url: url || event.htmlLink,
            location: event.location,
            organizer: organizer || event.organizer.displayName,
          };

          return { ...event, ...eventInfo };
        });

        events.push(...calendarEvents);
      }

      return events;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  export default fetchEventsFromGoogleCalendars;