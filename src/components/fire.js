import firebase from "firebase";
import "firebase/firestore";
import config from "../config/config";

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
