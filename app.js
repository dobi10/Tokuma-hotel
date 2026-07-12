const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
        "Your booking request was sent to Tokuma Hotel. We will contact you soon."
        );

    });

}
