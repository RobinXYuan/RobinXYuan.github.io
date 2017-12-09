//$(".red-panel-float")
//
//$(".red-panel-float").hover(function () {
//            $(".red-panel-img").css("transform", "scale(1.05)");
//        });

function mouseOver() {
    var basePanel = document.getElementById("red-panel-img");
    var floatPanel = document.getElementById("red-panel-float");
    
    basePanel.rotate(-90);
    basePanel.scale(1.05);
}