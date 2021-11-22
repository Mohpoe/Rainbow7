/**
 Template Name: Hexzy - Bootstrap 4 Admin Dashboard
 Dashboard
 */


!function ($) {
    "use strict";

    var Dashboard = function () {
    };

    //creates plot graph
    Dashboard.prototype.createPlotGraph = function(selector, data1, data2, labels, colors, borderColor, bgColor) {
        //shows tooltip
        function showTooltip(x, y, contents) {
          $('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css( {
            position: 'absolute',
            top: y + 5,
            left: x + 5
          }).appendTo("body").fadeIn(200);
        }
  
        $.plot($(selector),
            [ { data: data1,
              label: labels[0],
              color: colors[0]
            }
          ],
          {
              series: {
                 lines: {
                show: true,
                fill: true,
                lineWidth: 1,
                fillColor: {
                  colors: [ { opacity: 0.5 },
                            { opacity: 0.5 }
                          ]
                }
              },
              points: {
                show: true
              },
              shadowSize: 0
              },
              legend: {
              position: 'nw'
            },
            grid: {
              hoverable: true,
              clickable: true,
              borderColor: borderColor,
              borderWidth: 1,
              labelMargin: 10,
              backgroundColor: bgColor
            },
            yaxis: {
              min: 0,
              max: 15,
              color: 'rgba(0,0,0,0.1)'
            },
            xaxis: {
              color: 'rgba(0,0,0,0.1)'
            },
            tooltip: true,
            tooltipOpts: {
                content: '%s: Value of %x is %y',
                shifts: {
                    x: -60,
                    y: 25
                },
                defaultTheme: false
            }
          });
      },
      //end plot graph

    
              //creates Combine Chart
              Dashboard.prototype.createCombineGraph = function(selector, ticks, labels, datas) {
                  
                var data = [{
                    label: labels[0],
                    data: datas[0],
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                }, {
                    label: labels[1],
                    data: datas[1],
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                }, {
                    label: labels[2],
                    data: datas[2],
                    bars: {
                        show: true
                    }
                }];
                var options = {
                    xaxis: {
                        ticks: ticks
                    },
                    series: {
                        shadowSize: 0
                    },
                    grid: {
                        hoverable: true,
                        clickable: true,
                        tickColor: "#f9f9f9",
                        borderWidth: 1,
                        borderColor: "#eeeeee"
                    },
                    colors: ["#bb96ea", "#61d7c7", "#fd8442"],
                    tooltip: true,
                    tooltipOpts: {
                        defaultTheme: false
                    },
                    legend: {
                      position: 'nw'
                    },
                };

                $.plot($(selector), data, options);
            },


              //creates Pie Chart
              Dashboard.prototype.createPieGraph = function(selector, labels, datas, colors) {
                var data = [{
                    label: labels[0],
                    data: datas[0]
                }, { 
                    label: labels[1],
                    data: datas[1]
                }];
                var options = {
                    series: {
                        pie: {
                            show: true
                        }
                    },
                    legend : {
                show : false
              },
              grid : {
                hoverable : true,
                clickable : true
              },
              colors : colors,
              tooltip : true,
              tooltipOpts : {
                content : "%s, %p.0%"
              }
                };

                $.plot($(selector), data, options);
            },

        Dashboard.prototype.init = function () {


                   //plot graph data
          var uploads = [[0, 7], [1, 6], [2, 3], [3, 6], [4, 4], [5, 10], [6, 8]];
          var downloads = [[0, 5], [1, 12], [2,4], [3, 3], [4, 12], [5, 8], [6, 4]];
          var plabels = ["Service One"];
          var pcolors = ['#fd8442'];
          var borderColor = '#efefef';
          var bgColor = '#fff';
          this.createPlotGraph("#website-stats", uploads, downloads, plabels, pcolors, borderColor, bgColor);

          //Combine graph data
          var data24Hours = [
            [0, 201],
            [1, 520],
            [2, 337],
            [3, 261],
            [4, 157],
            [5, 95],
            [6, 200],
            [7, 250],
            [8, 320],
            [9, 500],
            [10, 152],
            [11, 214],
            [12, 364],
            [13, 449],
            [14, 558],
            [15, 282],
            [16, 379],
            [17, 429],
            [18, 518],
            [19, 470],
            [20, 330],
            [21, 245],
            [22, 358],
            [23, 74]
        ];
        var data48Hours = [
            [0, 245],
            [1, 492],
            [2, 538],
            [3, 332],
            [4, 234],
            [5, 143],
            [6, 147],
            [7, 63],
            [8, 64],
            [9, 43],
            [10, 486],
            [11, 201],
            [12, 315],
            [13, 397],
            [14, 612],
            [15, 281],
            [16, 370],
            [17, 279],
            [18, 425],
            [19, 53],
            [20, 122],
            [21, 355],
            [22, 340],
            [23, 801]
        ];
        var dataDifference = [
            [23, 727],
            [22, 128],
            [21, 110],
            [20, 92],
            [19, 172],
            [18, 63],
            [17, 150],
            [16, 592],
            [15, 12],
            [14, 246],
            [13, 52],
            [12, 149],
            [11, 123],
            [10, 2],
            [9, 325],
            [8, 10],
            [7, 15],
            [6, 89],
            [5, 65],
            [4, 77],
            [3, 600],
            [2, 200],
            [1, 385],
            [0, 200]
        ];
        var ticks = [
            [0, "22h"],
            [1, ""],
            [2, "00h"],
            [3, ""],
            [4, "02h"],
            [5, ""],
            [6, "04h"],
            [7, ""],
            [8, "06h"],
            [9, ""],
            [10, "08h"],
            [11, ""],
            [12, "10h"],
            [13, ""],
            [14, "12h"],
            [15, ""],
            [16, "14h"],
            [17, ""],
            [18, "16h"],
            [19, ""],
            [20, "18h"],
            [21, ""],
            [22, "20h"],
            [23, ""]
        ];
          var combinelabels = ["Last 24 Hours","Last 48 Hours","Difference"];
          var combinedatas = [data24Hours,data48Hours,dataDifference];

          this.createCombineGraph("#combine-chart-container", ticks, combinelabels , combinedatas);

           //Pie graph data
           var pielabels = ["Series 1","Series 2","Series 3"];
           var datas = [7,15];
           var colors = ["#bb96ea ", "#fd8442"];
           this.createPieGraph("#pie-chart-container", pielabels , datas, colors);

    
        },
        //init
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing
    function ($) {
        "use strict";
        $.Dashboard.init();
    }(window.jQuery);


    $(function() {
        $(".knob").knob();
    });


  