import eventListing from "../js/components/event-listing.component.js";
const createEventInstance = (event, container) => {  
  let {
    startDate,
    endDate,
    type,
    title,
    summary,
    url,
    location,
    addToCal,
    logo
  } = event;                               
  let eventInstance = document.createElement('div');
  eventInstance.setAttribute('id', event.id);
  eventInstance.classList.add('event-instance');
  eventInstance.classList.add('bg-gray-100');
  eventInstance.innerHTML = eventListing(type,url,title,startDate,endDate,location,summary,addToCal,logo)
  container.appendChild(eventInstance);
}

export default createEventInstance;