function add_active_page() {
    for (var page in document.getElementsByClassName(".nav_bar")){
        if (page.href == window.location.href) {
            page.addClass('active_page'); 
        }
        console.log();
    }
    console.log("done with add_active_page");
}