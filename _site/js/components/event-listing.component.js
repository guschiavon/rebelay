const eventListing = (type,url,title,startDate,endDate,location,summary,addToCal,logo) => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `
    <div class="flex flex-col gap-1 ${type.toLowerCase().split(' ').join('-')}">                                                              
      <div class="flex flex-col gap-1">
      <span class="event-instance--category">${type}</span>
      <div class="w-28 h-28">
        <img src="${logo}" class="object-contain w-full h-full"/>
      </div>
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
      <div class="flex gap-x-1">
        <a href=${url} class="event-instance--btn bg-yellow-400 px-2 py-1 text-gray-700 border-2 border-yellow-400" target="_blank" arial-label="link opens new tab for event named ${title}">Info/Register</a>
        <a href="${addToCal}" class="event-instance--btn border-2 px-2 py-1" target="_blank">Add to calendar</a>
      </div>
    </div>
  `;  
}

export default eventListing;