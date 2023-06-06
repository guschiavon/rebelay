const articlePreview = () => {
  return `  
      <div class="archive-listing--result w-full flex gap-1 items-center justify-center border-2 border-gray-200">
        <a href="{url}" class="archive-listing--img block overflow-hidden h-32">
          <img src="{image}" class="object-cover w-full h-full">
        </a>
        <div class="flex flex-col gap-1 p-2">      
          <div class="post-category">
            <span>{category}</span>
            <span class="divide-dot">•</span>
            <span>{date}</span>
          </div>
          <a href="{url}">
            <h3 class="article-card--title text-gray-600">{displayTitle}</h3>
          </a>
          <a href="{url}">
            <p class="article-card--description">{description}</p>
          </a>          
          <span class="article-card--author">By {author}</span>  
        </div>
      </div>
  `
}
export default articlePreview;