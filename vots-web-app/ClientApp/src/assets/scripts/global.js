function resizeContainer() {
    var windowHeight = parseInt($(window).height());
    var footerHeight = parseInt($("#footerSection").height());
    var headerHeight = parseInt($("#headerDiv").height());
    var headerandfooterHeight = footerHeight + headerHeight;
    var expectedBodyHeight = windowHeight - headerandfooterHeight;
    console.log("Window Height :" + windowHeight);
    console.log("Header Height :" + headerHeight);
    console.log("headerandfooterHeight :" + headerandfooterHeight);
    console.log("expectedBodyHeight :" + expectedBodyHeight);
    $(".sidenavContainer").css("height", expectedBodyHeight - 2 + "px");
   
}
$(window).on('load', resizeContainer)

$(window).resize(resizeContainer);




   