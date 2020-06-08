Highcharts.setOptions({lang:{thousandsSep:","}});let chartIdBearBull=document.getElementById("chart-container-bear-bull-history");function drawHighcharts(){Highcharts.chart(chartIdBearBull,{chart:{type:"area",styledMode:!0,spacingBottom:15,spacingRight:100,spacingLeft:5,spacingTop:25},title:{text:null},data:{googleSpreadsheetKey:"1Yk2-nAJ7SDizdN5JbX--fiveipRS-DyVCkzn8rhjhLY"},plotOptions:{series:{lineWidth:1,clip:!1,marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"},overflow:"allow"},tickLength:5,tickAmount:6},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"},max:500,tickAmount:7},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,valueDecimals:1,valueSuffix:"%"},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-6},tooltip:{enabled:!1}}}]}})}setTimeout(function(){if(""===chartIdBearBull.innerHTML){let t=document.getElementsByClassName("chart-area-bear-bull-history");for(var e=0;e<t.length;e++)t[e].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">'}},500),"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiY2hhcnRJZEJlYXJCdWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRyYXdIaWdoY2hhcnRzIiwiY2hhcnQiLCJ0eXBlIiwic3R5bGVkTW9kZSIsInNwYWNpbmdCb3R0b20iLCJzcGFjaW5nUmlnaHQiLCJzcGFjaW5nTGVmdCIsInNwYWNpbmdUb3AiLCJ0aXRsZSIsInRleHQiLCJkYXRhIiwiZ29vZ2xlU3ByZWFkc2hlZXRLZXkiLCJwbG90T3B0aW9ucyIsInNlcmllcyIsImxpbmVXaWR0aCIsImNsaXAiLCJtYXJrZXIiLCJlbmFibGVkIiwic3ltYm9sIiwiZmlsbENvbG9yIiwic3RhdGVzIiwiaG92ZXIiLCJsZWdlbmQiLCJ4QXhpcyIsImxhYmVscyIsInN0eWxlIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93IiwidGlja0xlbmd0aCIsInRpY2tBbW91bnQiLCJ5QXhpcyIsInVzZUhUTUwiLCJtYXgiLCJjcmVkaXRzIiwidG9vbHRpcCIsInNoYWRvdyIsInBhZGRpbmciLCJ2YWx1ZURlY2ltYWxzIiwidmFsdWVTdWZmaXgiLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyIsImFsaWduIiwieCIsInNldFRpbWVvdXQiLCJpbm5lckhUTUwiLCJjaGFydEFyZWEiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImRpc3BsYXkiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBY0FBLFdBQUFDLFdBQUEsQ0FDQUMsS0FBQSxDQUNBQyxhQUFBLE9BSUEsSUFBQUMsZ0JBQUFDLFNBQUFDLGVBQUEscUNBaUJBLFNBQUFDLGlCQUNBUCxXQUFBUSxNQUFBSixnQkFBQSxDQUNBSSxNQUFBLENBQ0FDLEtBQUEsT0FDQUMsWUFBQSxFQUNBQyxjQUFBLEdBQ0FDLGFBQUEsSUFDQUMsWUFBQSxFQUNBQyxXQUFBLElBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLGdEQUdBQyxZQUFBLENBQ0FDLE9BQUEsQ0FDQUMsVUFBQSxFQUNBQyxNQUFBLEVBQ0FDLE9BQUEsQ0FDQUMsU0FBQSxFQUNBQyxPQUFBLFNBQ0FDLFVBQUEsVUFDQUMsT0FBQSxDQUNBQyxNQUFBLENBQ0FGLFVBQUEsZUFNQUcsT0FBQSxDQUNBTCxTQUFBLEdBRUFNLE1BQUEsQ0FDQUMsT0FBQSxDQUNBQyxNQUFBLENBQ0FDLFdBQUEsVUFFQUMsU0FBQSxTQUVBQyxXQUFBLEVBQ0FDLFdBQUEsR0FFQUMsTUFBQSxDQUNBdEIsT0FBQSxFQUNBZ0IsT0FBQSxDQUNBTyxTQUFBLEVBQ0FKLFNBQUEsU0FFQUssSUFBQSxJQUNBSCxXQUFBLEdBRUFJLFFBQUEsQ0FDQWhCLFNBQUEsR0FFQWlCLFFBQUEsQ0FDQUMsUUFBQSxFQUNBQyxRQUFBLEdBQ0FDLGNBQUEsRUFDQUMsWUFBQSxLQUVBQyxXQUFBLENBQ0FDLE1BQUEsQ0FBQSxDQUNBQyxVQUFBLENBQ0FDLFNBQUEsS0FFQUMsYUFBQSxDQUNBMUMsTUFBQSxDQUNBSSxhQUFBLElBRUFpQixPQUFBLENBQ0FzQixNQUFBLE9BQ0FDLEdBQUEsR0FFQVgsUUFBQSxDQUNBakIsU0FBQSxTQTVGQTZCLFdBQUEsV0FDQSxHQUFBLEtBQUFqRCxnQkFBQWtELFVBQUEsQ0FFQSxJQUFBQyxFQUFBbEQsU0FBQW1ELHVCQUFBLGdDQUNBLElBQUEsSUFBQUMsRUFBQSxFQUFBQSxFQUFBRixFQUFBRyxPQUFBRCxJQUNBRixFQUFBRSxHQUFBekIsTUFBQTJCLFFBQUEsT0FHQXRELFNBQUFDLGVBQUEsa0JBQUFnRCxXQUFBLDRJQUlBLEtBd0ZBLGFBQUFqRCxTQUFBdUQsWUFBQSxnQkFBQXZELFNBQUF1RCxXQUNBckQsaUJBRUFGLFNBQUF3RCxpQkFBQSxtQkFBQXREIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhLWJlYXItYnVsbC1oaXN0b3J5XCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XG5cbi8vIGFkZHMgc29jaWFsLXNxdWFyZSBjbGFzcyB0byBnZXQgc3F1YXJlIHNvY2lhbCBjaGFydFxuLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYS1iZWFyLWJ1bGwtaGlzdG9yeVwiKTtcbi8vIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKVxuLy8ge1xuLy8gICAgIGVsZW1lbnRbaV0uY2xhc3NOYW1lICs9IFwiIHNvY2lhbC1zcXVhcmVcIjtcbi8vIH1cblxuSGlnaGNoYXJ0cy5zZXRPcHRpb25zKHtcbiAgICBsYW5nOiB7XG4gICAgICB0aG91c2FuZHNTZXA6ICcsJ1xuICAgIH1cbn0pO1xuXG5sZXQgY2hhcnRJZEJlYXJCdWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1jb250YWluZXItYmVhci1idWxsLWhpc3RvcnlcIik7XG5cbi8vIGNoZWNrcyBmb3IgdGhlIGNoYXJ0IElEIGFuZCBkaXNwbGF5cyBhIGJhY2t1cCBpbWFnZSBpZiB0aGUgYnJvd3NlciBjYW4ndCBmaW5kIGl0XG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGlmKGNoYXJ0SWRCZWFyQnVsbC5pbm5lckhUTUwgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25vSWQnKTtcbiAgICAgICAgbGV0IGNoYXJ0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhLWJlYXItYnVsbC1oaXN0b3J5XCIpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2hhcnRBcmVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGFydEFyZWFbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IFxuICAgICAgICAvLyBpbnNlcnQgY2hhcnQgc2NyZWVuc2hvdCBoZXJlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtZmFsbGJhY2tcIikuaW5uZXJIVE1MICs9ICc8aW1nIHNyYz1cImh0dHBzOi8vZm0tc3RhdGljLmNuYmMuY29tL2F3c21lZGlhL2NoYXJ0LzIwMTkvMTAvMDgvY2hhcnQtZXJyb3Jfd2lkZS4xNTcwNTY5MzMxMjUyLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7bWF4LXdpZHRoOjY2MHB4XCI+JztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygneWVzSWQnKVxuICAgIH1cbn0sNTAwKTtcblxuZnVuY3Rpb24gZHJhd0hpZ2hjaGFydHMoKSB7XG4gICAgSGlnaGNoYXJ0cy5jaGFydChjaGFydElkQmVhckJ1bGwsIHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcmVhJyxcbiAgICAgICAgICAgIHN0eWxlZE1vZGU6IHRydWUsXG4gICAgICAgICAgICBzcGFjaW5nQm90dG9tOiAxNSxcbiAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTAwLFxuICAgICAgICAgICAgc3BhY2luZ0xlZnQ6IDUsXG4gICAgICAgICAgICBzcGFjaW5nVG9wOiAyNVxuICAgICAgICB9LCBcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ29vZ2xlU3ByZWFkc2hlZXRLZXk6ICcxWWsyLW5BSjdTRGl6ZE41SmJYLS1maXZlaXBSUy1EeVZDa3puOHJoamhMWSdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9yIGxpbmUgY2hhcnRzIG9ubHlcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBjbGlwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlja0xlbmd0aDogNSxcbiAgICAgICAgICAgIHRpY2tBbW91bnQ6IDZcbiAgICAgICAgfSxcbiAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXg6IDUwMCxcbiAgICAgICAgICAgIHRpY2tBbW91bnQ6IDdcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgdmFsdWVEZWNpbWFsczogMSxcbiAgICAgICAgICAgIHZhbHVlU3VmZml4OiAnJSdcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgeDogLTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIGRyYXdIaWdoY2hhcnRzKCk7XG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRyYXdIaWdoY2hhcnRzKTtcbn0iXX0=