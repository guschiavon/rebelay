const eventListing = (type,url,title,startDate,endDate,location,summary,addToCal) => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `
        <div class="flex flex-col gap-1 ${type.toLowerCase().split(' ').join('-')}">                                                        
      <div class="flex flex-col gap-1">
        <span class="event-instance--category">${type}</span>
        <a href=${url} target="_blank" arial-label="link opens new tab for event named ${title}"><h3 class="event-instance--title">${title}</h3></a>
      </div>
      <div class="flex flex-col md:flex-row items-start md:items-center justify-start gap-1 md:gap-2">
        <div class="flex gap-1">
          <img src="/assets/graphics/date_range_FILL0_wght400_GRAD0_opsz48.svg" width="18" height="18" />
          <span class="event-instance--details">${startDate.getDate()}/${months[startDate.getMonth()]}/${startDate.getFullYear()} to ${endDate.getDate()}/${months[endDate.getMonth()]}/${endDate.getFullYear()}</span>                    
        </div>
        <div class="flex gap-1">
          <img src="assets/graphics/explore_FILL0_wght400_GRAD0_opsz48.svg" width="18" height="18" />
          <span class="event-instance--details">${location}</span>
        </div>
      </div>
      <p class="event-instance--summary">${summary}</p>
      <a href=${url} class="font-display inline-block text-tiny uppercase tracking-wider bg-yellow-400 px-2 py-1 text-gray-700 border-2 border-yellow-400" target="_blank" arial-label="link opens new tab for event named ${title}">Learn More</a>
      <a href="${addToCal}" class="inline-block font-display text-tiny font-light uppercase tracking-wider border-2 px-2 py-1" target="_blank">Add to calendar</a>
      </div>
    </div>
  `;  
}

export default eventListing;