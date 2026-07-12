// Import Firebase database
import { db } from "./firebase.js";


// Import Firestore functions
import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Get booking form
const bookingForm = document.getElementById("bookingForm");


// Check if booking form exists
if (bookingForm) {


    bookingForm.addEventListener("submit", async (event) => {


        event.preventDefault();



        // Collect booking information

        const booking = {


            hotel: "Tokuma Hotel",


            name: document.getElementById("name").value,


            phone: document.getElementById("phone").value,


            room: document.getElementById("room").value,


            checkin: document.getElementById("checkin").value,


            checkout: document.getElementById("checkout").value,


            payment: document.getElementById("payment").value,


            status: "Pending",


            createdAt: new Date()



        };



        try {



            // Save booking to Firebase Firestore

            await addDoc(

                collection(db, "bookings"),

                booking

            );



            alert(
                "Booking sent successfully! Tokuma Hotel will contact you soon."
            );



            // Clear form

            bookingForm.reset();



        } catch(error) {



            console.log(error);



            alert(
                "Booking failed. Please try again."
            );


        }



    });


}
