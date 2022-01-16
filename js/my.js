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

    $("#my-footer")
        .load("./html/footer.html");

    function buildHandler(listing) {
        return () => {
            $('#image').attr("src", listing.src);
            // $(this).unwrap();
        };
    }

    $.getJSON('config.json', function(config){
        var listings = config.listings;
        $.get("html/listing.html", function(data) {
            for (let i = 0; i < listings.length; i++) {
                var listing = listings[i];
                $(data)
                    .find("#image").attr("src","images/"+listing.src).attr("alt",listing.alt).parent()
                    .find("#name").text(listing.name).parent()
                    .find("#checkout-button").attr("data-url",listing.link).attr("href",listing.link)
                    .text("Buy: "+listing.price).parent().parent().parent()
                    .appendTo("#listings");
            }
        });
    });

    
    
    
});