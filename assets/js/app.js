// Open SideBar
$(".nav-toggle-btn").click(function(){
    $(".sidebar__container").addClass("active")
})

// Close sidebar
$(".close-menu").click(function(){
    $(".sidebar__container").removeClass("active")
})

// Search bar
$('.searchbox').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
       $('.search_result_box').fadeIn(100);
    } else {
       $('.search_result_box').fadeOut(100);
    }
 });