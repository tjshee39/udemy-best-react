### 📌 1. install dependencies<br>

```bash
$ 01-starting-project 20> npm install
```

### 📌 2. create root/.env<br>

```env
REACT_APP_FIREBASE_API_KEY            = YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN        = YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_URL                = YOUR_DATABASE_URL
REACT_APP_FIREBASE_PROJECT_ID         = YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET     = YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID= YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID             = YOUR_APP_ID
REACT_APP_FIREBASE_MEASUREMENT_ID     = YOUR_FIREBASE_MEASUREMENT_ID
```

### 📌 3. create root/firebase.js

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
```

### 📌 4. run frontend<br>

```bash
$ 01-starting-project 20> npm run start
```
