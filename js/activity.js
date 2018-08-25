var showHide = function(event){
    var button = $(event.target);
    

    var progressAnimation = $(button.next());
    progressAnimation.toggle();

   

    

}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 
function myFunctiontwo() {
    var x = document.getElementById("my2DIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 

$(function()
{
    $('.container5').appendTo('.oneDiv');
})

$(function()
{
    $('.container6').appendTo('.twoDiv');
})


window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: [{
            text: "100%" ,
            fontSize: "50px" ,
            verticalAlign: "center",
            horizontalAlign: "center",
            
        }],
        
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
          
            
            color: "#006260",
            lineColor: "#001111",
           
            interactivityEnabled: false,
            animationEnabled: true,
            animationDuration: 2000,
            backgroundColor : "#80FF0000",
            
            dataPoints: [
                { y: 360,  },
               
            ]
        }]
    });
    chart.render();
    
    }

    

var canvastest = d3.select("testcircle")
                    .append("svg")
                    .attr("width", 150)
                    .attr("height", 150);

var circle = canvastest.append("circle")
                        .attr("cx", 75)
                        .attr("cy", 75)
                        .attr("r", 30)
                        .attr("fill", "red");

