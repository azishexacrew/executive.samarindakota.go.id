Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jumlah Penduduk Kota Samarinda'
    },
    subtitle: {
        text: 'Sumber: Dinas Kependudukan dan Catatan Sipil Kota Samarinda'
    },
    xAxis: {
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Jumlah (Orang)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} orang</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Palaran',
        data: [49.9]

    }, {
        name: 'Samarinda Seberang',
        data: [83.6]

    }, {
        name: 'Samarinda Ulu',
        data: [48.9]

    }, {
        name: 'Samarinda Ilir',
        data: [42.4]

    }, {
        name: 'Samarinda Utara',
        data: [42.4]

    }, {
        name: 'Sungai Kunjang',
        data: [51.1]

    }, {
        name: 'Sambutan',
        data: [51.1]

    }, {
        name: 'Sungai Pinang',
        data: [51.1]

    }, {
        name: 'Samarinda Kota',
        data: [42.4]

    }, {
        name: 'Loa Janan Ilir',
        data: [33.21]

    }]
});