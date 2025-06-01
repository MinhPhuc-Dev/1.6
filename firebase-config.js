// Firebase configuration
const firebaseConfig = {
    // Replace with your Firebase config
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const db = firebase.firestore();

// Function to save quiz results
async function saveQuizResult(result) {
    try {
        await db.collection('quiz-results').add({
            ...result,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Result saved successfully!');
    } catch (error) {
        console.error('Error saving result:', error);
    }
}

// Function to get all results
async function getAllResults() {
    try {
        const snapshot = await db.collection('quiz-results').get();
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error getting results:', error);
        return [];
    }
} 