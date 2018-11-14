


        <div id="9182ca81-e84c-478b-8430-81ac18d42658" style="width: 100%; height: 100%;" class="plotly-graph-div"></div>
        <script type="text/javascript">
            (function(){
                window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

                var gd = document.getElementById('9182ca81-e84c-478b-8430-81ac18d42658')
                var resizeDebounce = null;

                function resizePlot() {
                    var bb = gd.getBoundingClientRect();
                    Plotly.relayout(gd, {
                        width: bb.width,
                        height: bb.height
                    });
                }


                window.addEventListener('resize', function() {
                    if (resizeDebounce) {
                        window.clearTimeout(resizeDebounce);
                    }
                    resizeDebounce = window.setTimeout(resizePlot, 100);
                });



                Plotly.plot(gd, {
                    data: [{"name": "Bach", "ysrc": "m.miller10:2:dd0b69", "xsrc": "m.miller10:2:5643f8", "mode": "lines", "y": [9.89, 12.86, 11.8, 10.5, 11.55, 8.18, 8.06, 7.05, 10.29, 11.05, 11.11, 10.78], "x": ["2004-01", "2004-02", "2004-03", "2004-04", "2004-05", "2004-06", "2004-07", "2004-08", "2004-09", "2004-10", "2004-11", "2004-12"], "type": "scatter"}, {"name": "Beethoven", "ysrc": "m.miller10:3:f8d391", "xsrc": "m.miller10:3:f97277", "stackgroup": null, "mode": "lines", "y": ["popularity", "11.95", "13.63", "14.83", "12.61", "12.01", "7.67", "7.72", "7.33", "9.98", "11.29", "12.71", "13.34"], "x": ["month", "2004-01", "2004-02", "2004-03", "2004-04", "2004-05", "2004-06", "2004-07", "2004-08", "2004-09", "2004-10", "2004-11", "2004-12"], "line": {"color": "rgb(238, 48, 48)"}, "type": "scatter"}, {"name": "Mozart", "ysrc": "m.miller10:4:8e3b3e", "xsrc": "m.miller10:4:b8fd25", "stackgroup": null, "mode": "lines", "y": ["popularity", "13.42", "15.13", "14.09", "14.73", "11.86", "8.55", "8.17", "8.41", "10.52", "12.41", "13.22", "11.81"], "x": ["month", "2004-01", "2004-02", "2004-03", "2004-04", "2004-05", "2004-06", "2004-07", "2004-08", "2004-09", "2004-10", "2004-11", "2004-12"], "line": {"color": "rgb(249, 185, 19)"}, "type": "scatter"}],
                    layout: {"autosize": true, "title": "Bach, Beethoven and Mozart Search Trends 2004", "xaxis": {"range": ["2004-01-01", "2004-12-01"], "type": "date", "autorange": true, "title": "Month"}, "yaxis": {"range": [6.601111111111111, 15.57888888888889], "type": "linear", "autorange": true, "title": "Indexed Popularity"}},
                    frames: [],
                    config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A", "linkText": "Export to plot.ly", "showLink": true}
                });

           }());
</script>