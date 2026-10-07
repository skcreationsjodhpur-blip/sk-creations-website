const phone='919468563332';

document.querySelectorAll('.wa').forEach(a=>{
  const product=a.dataset.product||'your products';
  const msg=`Hello S.K. Creations, I am interested in ${product}. Please share the price and details.`;
  a.href=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  a.target='_blank';
  a.rel='noopener';
});

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const menu=document.querySelector('.menu');
const nav=document.querySelector('.header nav');
if(menu && nav){
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}

// Product gallery: clicking any thumbnail replaces the main product image.
document.querySelectorAll('.thumb[data-gallery][data-src]').forEach(thumb=>{
  thumb.addEventListener('click',()=>{
    const mainImage=document.getElementById(thumb.dataset.gallery);
    if(!mainImage) return;

    mainImage.src=thumb.dataset.src;
    const thumbImage=thumb.querySelector('img');
    if(thumbImage && thumbImage.alt) mainImage.alt=thumbImage.alt;

    const gallery=thumb.closest('.product-gallery');
    if(gallery){
      gallery.querySelectorAll('.thumb').forEach(t=>t.classList.remove('active'));
    }
    thumb.classList.add('active');
  });
});
