import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1vyB3NfaifnQfyY3ftBvD1uZtkXtRLAw",
    authDomain: "reactjs-learning-4e3e0.firebaseapp.com",
    projectId: "reactjs-learning-4e3e0",
    storageBucket: "reactjs-learning-4e3e0.appspot.com",
    messagingSenderId: "428629002476",
    appId: "1:428629002476:web:e7765b123e92900150bdc9",
    measurementId: "G-P4P8627RLW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        const query = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
        if (query.docs.length === 0) {
            await db.collection("users").add({
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};