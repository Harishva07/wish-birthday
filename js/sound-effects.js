// Tiny synthesized WAV effects replace two missing reference audio files.
export function soundEffect(kind) {
 const rate=22050,length=kind==='pop'?.18:.4,count=Math.floor(rate*length),buffer=new ArrayBuffer(44+count*2),view=new DataView(buffer);
 const text=(offset,value)=>{for(let i=0;i<value.length;i++)view.setUint8(offset+i,value.charCodeAt(i));};
 text(0,'RIFF');view.setUint32(4,36+count*2,true);text(8,'WAVE');text(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,rate,true);view.setUint32(28,rate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);text(36,'data');view.setUint32(40,count*2,true);
 for(let i=0;i<count;i++){const t=i/count,env=Math.pow(1-t,3),sample=kind==='pop'?(Math.random()*2-1)*env:Math.sin(2*Math.PI*(800*i/rate-650*i*i/(2*count*rate)))*env;view.setInt16(44+i*2,sample*12000,true);}
 return URL.createObjectURL(new Blob([buffer],{type:'audio/wav'}));
}
