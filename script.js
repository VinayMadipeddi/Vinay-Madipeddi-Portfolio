const cursor=document.querySelector('.cursor');
if(cursor && matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{
    cursor.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id==='#') return;
    const el=document.querySelector(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
  });
});
document.querySelectorAll('[data-placeholder]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    alert('Add your '+a.dataset.placeholder+' profile URL here in index.html.');
  });
});
