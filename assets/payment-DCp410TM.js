// Compatibility export: saving is free. There is no checkout or payment integration.
import {saveRecord} from '../js/data.js';
export async function c(id, surprise) {
  
  await saveRecord('surprises', id, surprise);
  return {id, draftToken:''};
}
