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
const DB_URL = "https://birthday-web-9c089-default-rtdb.asia-southeast1.firebasedatabase.app";

async function saveRecord(table, id, payload) {
  const res = await fetch(`${DB_URL}/${table}/${id}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Save failed.');
  return { id, draftToken: '' };
}

async function run() {
    try {
        console.log("Saving small record...");
        await saveRecord("test", "small", { data: "test" });
        console.log("Small record saved.");
        
        console.log("Saving large record (3MB)...");
        const largeStr = "a".repeat(3 * 1024 * 1024);
        await saveRecord("test", "large", { data: largeStr });
        console.log("Large record saved.");
        
    } catch (e) {
        console.error(e);
    }
}
run();
