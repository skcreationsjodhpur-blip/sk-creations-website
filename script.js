const phone='919468563332';
document.querySelectorAll('.wa').forEach(a=>{const product=a.dataset.product||'your products';const msg=`Hello S.K. Creations, I am interested in ${product}. Please share the price and details.`;a.href=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;a.target='_blank';a.rel='noopener';});
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
