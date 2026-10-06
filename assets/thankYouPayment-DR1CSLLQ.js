// Compatibility export: save a thank-you with no payment step.
import {saveRecord,loadRecord} from '../js/data.js';
export async function c(id,originalWishId,thankYou,media={}) {
  if(!confirm('Save this thank-you in this project’s public tables? Do not include sensitive information.')) throw new Error('Sharing cancelled.');
  const original=await loadRecord('surprises',originalWishId);
  if(!original) throw new Error('The original surprise could not be found.');
  await saveRecord('thank_yous',id,{...thankYou,id,originalWishId,senderName:original.receiverName,recipientName:original.senderName,voiceMessageUrl:media.voice||'',createdAt:Date.now()});
  return {id,draftToken:''};
}
