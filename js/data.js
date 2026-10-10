import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKZMLR7dvBfIng1BTsqGdbZrcSNMkV84A",
  authDomain: "birthday-web-9c089.firebaseapp.com",
  projectId: "birthday-web-9c089",
  storageBucket: "birthday-web-9c089.firebasestorage.app",
  messagingSenderId: "775305163822",
  appId: "1:775305163822:web:f482893c5b14db2e421bbf",
  measurementId: "G-VSPB4LJB2G"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const DB_URL = "https://birthday-web-9c089-default-rtdb.asia-southeast1.firebasedatabase.app";

const allowedTypes = ['image/jpeg','image/png','image/webp','audio/mpeg','audio/mp4','audio/wav','audio/ogg','audio/webm','audio/aac','audio/flac'];

export function mediaType(file) {
  const mime = file.type.split(';')[0].toLowerCase();
  const aliases = {'audio/mp3':'audio/mpeg','audio/x-wav':'audio/wav','audio/x-m4a':'audio/mp4'};
  const normalized = aliases[mime] || mime;
  if (allowedTypes.includes(normalized)) return normalized;
  const ext = file.name?.split('.').pop().toLowerCase();
  return {mp3:'audio/mpeg',m4a:'audio/mp4',wav:'audio/wav',ogg:'audio/ogg',webm:'audio/webm',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp'}[ext];
}

export async function saveRecord(table, id, payload) {
  console.log("saveRecord called", table, id);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);
  try {
    console.log("saveRecord fetching...");
    const res = await fetch(`${DB_URL}/${table}/${id}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    console.log("saveRecord fetched", res.ok);
    if (!res.ok) throw new Error('Save failed.');
    return { id, draftToken: '' };
  } catch(e) {
    console.log("saveRecord catch:", e.message);
    throw e;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function loadRecord(table, id) {
  const res = await fetch(`${DB_URL}/${table}/${id}.json`);
  if (!res.ok) return null;
  return await res.json();
}

export async function uploadMedia(file) {
  if (file.size > 50 * 1024 * 1024) throw new Error('Please choose a file smaller than 50 MB.');
  
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'lvctxgrj');

  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/gdcongrc/auto/upload', {
      method: 'POST',
      body: formData
    });
    if (!res.ok) {
      const errBody = await res.text();
      throw new Error('Cloudinary upload failed: ' + res.status + ' ' + errBody);
    }
    const data = await res.json();
    return data.secure_url;
  } catch (err) {
    console.error("Cloudinary Error:", err);
    throw new Error("Upload failed: " + err.message);
  }
}

export async function resolveMedia(value) {
  return value;
}

export async function hydrateMedia(record) {
  return record;
}

