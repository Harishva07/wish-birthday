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

async function testUpload() {
    try {
        console.log('Testing upload...');
        const dummyBlob = new Blob(['hello'], { type: 'text/plain' });
        const storageRef = ref(storage, 'test-file.txt');
        await uploadBytes(storageRef, dummyBlob, { contentType: 'text/plain' });
        const url = await getDownloadURL(storageRef);
        console.log('Upload success:', url);
    } catch (err) {
        console.error('Upload failed:', err);
    }
}
testUpload();
