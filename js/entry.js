// Restore optional query-based entry points before the original router starts.
const base=new URL('../',import.meta.url).pathname;
window.__WP_BASE__=base;
const route=new URLSearchParams(location.search).get('route');
if(route?.startsWith('/')&&!route.startsWith('//')) history.replaceState(null,'',base+route.slice(1));
else if(location.pathname===base+'index.html') history.replaceState(null,'',base+location.search+location.hash);
const nativeFetch=window.fetch.bind(window);
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json'}});
// Compatibility for public review widgets and maintenance flags only.
// This is a browser adapter, NOT a server or an authorization mechanism.
window.fetch=async(input,options={})=>{
  const url=new URL(typeof input==='string'?input:input.url,location.origin);
  if(url.origin!==location.origin||!url.pathname.startsWith('/api/'))return nativeFetch(input,options);
  if(url.pathname==='/api/payments/detect-price')return json({maintenance:false});
  if(url.pathname==='/api/payments/create-order')return json({ draftId: "mock-123" });
  try{
    if(url.pathname==='/api/feedback'&&options.method==='POST'){
      const body=JSON.parse(options.body||'{}');
      const response=await nativeFetch(base+'tables/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:crypto.randomUUID(),name:String(body.name||body.senderName||'Guest').slice(0,80),rating:Math.min(5,Math.max(1,Number(body.rating)||5)),message:String(body.message||body.comment||body.feedback||'').slice(0,2000),role:String(body.role||'recipient')})});
      if(!response.ok)throw new Error('Could not save your feedback. Please try again.');
      return json(await response.json());
    }
    if(url.pathname.startsWith('/api/feedback/')){
      const page=Math.max(0,Number(url.searchParams.get('page'))||0);
      const limit=Math.min(100,Number(url.searchParams.get('pageSize')||url.searchParams.get('limit'))||100);
      const response=await nativeFetch(`${base}tables/feedback?page=${page+1}&limit=${limit}&sort=-created_at`);
      if(!response.ok)throw new Error('Reviews are temporarily unavailable.');
      const result=await response.json();
      const reviews=(result.data||[]).map(row=>({...row,comment:row.message,feedback:row.message,createdAt:row.created_at}));
      if(url.pathname.endsWith('/latest'))return json(reviews);
      if(url.pathname.endsWith('/reviews'))return json({reviews,totalCount:result.total||0,hasMore:(page+1)*limit<(result.total||0)});
      if(url.pathname.endsWith('/stats'))return json({average:reviews.length?Math.round(reviews.reduce((sum,x)=>sum+x.rating,0)/reviews.length*10)/10:0,count:result.total||0});
    }
    return json({error:'This original-site server feature is not connected in this version.'},501);
  }catch(error){return json({error:error.message},503);}
};
try{await import('../assets/index-DBifMb9v.js');}catch(error){console.error('Application could not start:',error);const root=document.getElementById('root');root.replaceChildren();const panel=document.createElement('main');panel.style.cssText='min-height:100vh;background:#020617;color:white;padding:10vh 8vw;font:18px Inter,sans-serif';const heading=document.createElement('h1');heading.textContent='The magic could not load';const text=document.createElement('p');text.textContent='Please check your connection and refresh the page.';panel.append(heading,text);root.append(panel);}
