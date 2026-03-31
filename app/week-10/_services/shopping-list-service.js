import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get all items for a specific user
export async function getItems(userId) {
  const itemsArray = [];

  // Reference to the user's items subcollection
  const itemsRef = collection(db, "users", userId, "items");

  // Get all documents from this subcollection
  const querySnapshot = await getDocs(itemsRef);

  // Add each document's ID and data to the array
  querySnapshot.forEach((doc) => {
    itemsArray.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return itemsArray;
}

// Add a new item for a specific user
export async function addItem(userId, item) {
  // Reference to the user's items subcollection
  const itemsRef = collection(db, "users", userId, "items");

  // Add the item to Firestore
  const docRef = await addDoc(itemsRef, item);

  // Return the new document ID
  return docRef.id;
}
