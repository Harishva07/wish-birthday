import {loadRecord, hydrateMedia, uploadMedia, mediaType} from '../js/data.js';
const demo = {id:'demo-123',senderName:'Alex',receiverName:'Sarah',introMessage:"Happy Birthday, Sarah! 🎂 I wanted to send you something a little more magical this year because you're simply the best.",personalNote:"Remember that trip to the mountains? This surprise is just a tiny piece of the joy we shared. You've been my rock this year, and I'm so grateful for our friendship. Let's make this year unforgettable!",finalMessage:"I hope your day is as wonderful and bright as you are. Can't wait to celebrate together properly! Love, Alex ❤️",cakeFlavor:'chocolate',cakeStyle:'classic',candleCount:5,songUrl:'',wheelOptions:['A Million Hugs','A Surprise Dinner','100 Chocolate Cakes','A Beach Trip','A Heartfelt Letter','A Lifetime of Joy'],recipientGender:'female',flowerType:'rose',flowerColor:'#ff3388'};
async function getSurprise(id) {
  if(id==='demo-123') return {...demo, createdAt:Date.now()};
  return hydrateMedia(await loadRecord('surprises', id));
}
async function getThankYou(id) {
  if(id==='demo-123') return {id,originalWishId:id,senderName:'Jamie',recipientName:'Alex',message:'You made my whole birthday magical. Thank you for making me feel so loved. 💖',candleWish:'I wish Alex always feels as loved as they made me feel today. 💜',createdAt:Date.now()};
  return hydrateMedia(await loadRecord('thank_yous',id));
}
const newId = () => crypto.randomUUID();
export {getSurprise as a,getThankYou as b,newId as g,mediaType as m,uploadMedia as u};
