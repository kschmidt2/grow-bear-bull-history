// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area-bear-bull-history");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// adds social-square class to get square social chart
// let element = document.getElementsByClassName("chart-area-bear-bull-history");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social-square";
// }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartIdBearBull = document.getElementById("chart-container-bear-bull-history");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdBearBull.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area-bear-bull-history");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdBearBull, {
        chart: {
            type: 'area',
            styledMode: true,
            spacingBottom: 15,
            spacingRight: 100,
            spacingLeft: 5,
            spacingTop: 25
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Yk2-nAJ7SDizdN5JbX--fiveipRS-DyVCkzn8rhjhLY'
        },
        // for line charts only
        plotOptions: {
            series: {
                lineWidth: 1,
                clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
                overflow: 'allow'
            },
            tickLength: 5,
            tickAmount: 6
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 500,
            tickAmount: 7
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 1,
            valueSuffix: '%'
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -6
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}