import {r as React,j as jsx,L as Link,X as useParams} from '../assets/vendor-core-CjvpFyCc.js';
import {Landing3D} from '../assets/Landing3D-Ca8fQAch.js';
import {a as getSurprise,b as getThankYou} from '../assets/storageService-Bwr1h56U.js';
import {c as copyText} from '../assets/clipboard-B4M4coE-.js';
import {NotFound} from '../assets/NotFound-BYcS1-KT.js';
const h=jsx.jsx, hs=jsx.jsxs;
export function SharePage({thankYou=false}) {
  const {id}=useParams();
  const [record,setRecord]=React.useState(null),[loading,setLoading]=React.useState(true),[error,setError]=React.useState(''),[copied,setCopied]=React.useState(false);
  React.useEffect(()=>{let active=true;(thankYou?getThankYou(id):getSurprise(id)).then(data=>{if(active){setRecord(data);if(!data)setError('This link could not be found.');}}).catch(e=>{if(active)setError(e.message);}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[id,thankYou]);
  const path=thankYou?`/thankyou/${id}`:`/view/${id}`;
  const url=new URL((window.__WP_BASE__||'/')+'index.html?route='+encodeURIComponent(path),location.origin).href;
  const copy=async()=>{setCopied(await copyText(url));};
  const textMsg = encodeURIComponent(`I made something special for you ✨`);
  const sendWhatsApp=()=>window.open(`https://wa.me/?text=${textMsg}%20${encodeURIComponent(url)}`,'_blank','noopener,noreferrer');
  const sendTelegram=()=>window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${textMsg}`,'_blank','noopener,noreferrer');
  const sendTwitter=()=>window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${textMsg}`,'_blank','noopener,noreferrer');
  if (error) return h(NotFound, {});
  return hs('div',{className:'wp-share-page',children:[h('div',{className:'wp-share-background',children:h(Landing3D,{})}),hs('main',{className:'wp-share-main',children:[h(Link,{to:'/',children:h('img',{className:'wp-share-logo',src:(window.__WP_BASE__||'/')+'logo.png',alt:'Wishprise home'})}),loading?h('p',{role:'status',children:'Gathering the magic…'}):hs('section',{className:'wp-share-card',children:[h('div',{className:'wp-success',children:'✓'}),h('p',{className:'wp-eyebrow',children:'A LITTLE MAGIC, READY TO SEND'}),hs('h1',{children:['Your ',thankYou?'thank you':'surprise',' is ready!']}),hs('p',{className:'wp-share-description',children:['Something unforgettable is waiting for ',h('strong',{children:record.receiverName||record.recipientName||'your loved one'}),'. All that’s left is to share the magic.']}),hs('div',{className:'wp-link-box',children:[h('label',{htmlFor:'surprise-link',children:'YOUR SPECIAL LINK'}),h('input',{id:'surprise-link',value:url,readOnly:true,onFocus:e=>e.target.select(),'aria-label':'Your shareable link'}),h('button',{type:'button',onClick:copy,className:'wp-primary',children:copied?'✓ Link copied!':'Copy surprise link ↗'})]}),h('div', {className: 'wp-share-buttons'}, [h('button',{type:'button',className:'wp-whatsapp',onClick:sendWhatsApp,children:'WhatsApp'}), h('button',{type:'button',className:'wp-telegram',onClick:sendTelegram,children:'Telegram'}), h('button',{type:'button',className:'wp-twitter',onClick:sendTwitter,children:'X / Twitter'})]),h(Link,{to:path,className:'wp-preview-link',children:'Preview the experience →'}),h('p',{className:'wp-storage-note',children:'Free to create. No payment required. Shared content is stored in this project’s public tables; please do not include sensitive information. Links do not automatically expire.'})]}),h(Link,{to:'/create',className:'wp-preview-link',children:'Create another little moment of joy ✨'})]})]});
}
