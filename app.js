// Show Toast Notification
function showToast(message) {

    const toast = document.createElement("div");

    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";

    toast.style.backgroundColor = "#071952";
    toast.style.color = "white";

    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "8px";

    toast.style.zIndex = "2000";
    toast.style.fontWeight = "bold";

    document.body.appendChild(toast);


    // Remove toast after 3 seconds
    setTimeout(function () {

        toast.remove();

    }, 3000);
}



// Smooth Scrolling for Book Buttons
const bookButtons = document.querySelectorAll(
    'a[href="#book-ticket"]'
);


bookButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        // Prevent normal link behaviour
        event.preventDefault();


        // Find booking section
        const bookingSection =
            document.getElementById("book-ticket");


        // Smoothly scroll to booking section
        bookingSection.scrollIntoView({
            behavior: "smooth"
        });


        // Display confirmation toast
        showToast("Booking section opened!");

    });

});


// Wait until the HTML document has completely loaded
document.addEventListener(
    "DOMContentLoaded",
    function () {


        // Access the paragraph using its ID
        const demo =
            document.getElementById("demo");


        // Dynamically display IPL match information
        demo.textContent =
            "IPL 2026 features exciting cricket matches " +
            "between top teams. Fans can enjoy live matches " +
            "and experience the excitement of IPL cricket " +
            "at the stadium.";

    }
);
