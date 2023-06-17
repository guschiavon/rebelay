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
export { setActiveImg, setOrientation};