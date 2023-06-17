  const setActiveImg = (t,i,s,l,c) => {
    let imgSrc = t.src;      
    i.setAttribute('src', imgSrc);
    s.setAttribute('srcset', t.dataset.srcset);
    l.innerText = t.dataset.title || '';
    c.innerHTML = t.dataset.caption; 
  }
  const setOrientation = (t,i) => {
    if (t.naturalHeight > t.naturalWidth) {
      i.classList.remove('object-cover');
      i.classList.add('object-contain');
    } else if (t.naturalHeight < t.naturalWidth) {
      i.classList.add('object-cover');
      i.classList.remove('object-contain');
    }
  }

  const setMarkdownImage = (img) => {
    img.setAttribute('loading', 'lazy');
    let parent = img.parentNode;    
    let wrapper = document.createElement('div');
    wrapper.classList.add('article-content--image');
    // set the wrapper as child (instead of the element)
    parent.replaceChild(wrapper, img);
    // set element as child of wrapper
    wrapper.appendChild(img);
    // conditional for photostory
    if (!img.classList.contains('photostory')){
      let caption = document.createElement('caption');
      caption.innerText = img.getAttribute('alt');
      wrapper.appendChild(caption);    
    }
  }
export { setActiveImg, setOrientation, setMarkdownImage};