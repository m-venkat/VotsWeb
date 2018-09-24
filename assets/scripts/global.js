function resizeContainer() {
    var windowHeight = parseInt($(window).height());
    var footerHeight = parseInt($("#footerSection").height());
    var headerHeight = parseInt($("#headerDiv").height());
    var toolbarHeight = parseInt($("#toolBar").children(0).height());
    var headerandfooterHeight = footerHeight + headerHeight;
    var expectedBodyHeight = windowHeight - headerandfooterHeight;
    var expectedMainPanelHeight = windowHeight - (headerandfooterHeight + toolbarHeight);
    console.log("Window Height :" + windowHeight);
    console.log("Header Height :" + headerHeight);
    console.log("headerandfooterHeight :" + headerandfooterHeight);
    console.log("expectedBodyHeight :" + expectedBodyHeight);
    $(".sidenavContainer").css("height", expectedBodyHeight - 2 + "px");
    $("#mainContentPanel").css("height", expectedMainPanelHeight - 10 + "px");
    console.log(expectedMainPanelHeight + "|" + windowHeight + " |" + toolbarHeight + " | " + footerHeight + "| "+ headerHeight);
    
}
$(window).on('load', resizeContainer);

$(window).resize(resizeContainer);
