$(document).ready(function(){
    // Load modular navbar
    $("#my-navbar").load("./html/nav.html",  // Navbar URL
        function() { // insert any functions that use the Navbar below
            $(".navbar-burger").click(function() {

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");
            });
        });
    
    $("#my-footer").load("./html/footer.html");
});