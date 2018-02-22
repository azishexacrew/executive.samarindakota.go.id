$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

    Highcharts.chart('sensor', {

        chart: {
            type: 'arearange',
            zoomType: 'x'
        },

        title: {
            text: 'Sensor Temperature'
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
            data: data
        }]

    });
});
