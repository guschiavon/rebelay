const articlePreview = () => {
  return `  
      <div class="archive-listing--result">        
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