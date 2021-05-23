d3.csv("https://TamarushimaHikaru.github.io/InfoVis2021/W10/w10_task1.csv")
    .then(data => {
        data.forEach(d => { d.value = +d.value; });

        var config = {
            parent: '#drawing_region',
            width: 512,
            height: 256,
            margin: { top: 25, right: 10, bottom: 50, left: 100 },
            title: 'World population ',
            xlabel: 'Value',
            ylabel: 'Label'
        };

        const bar_chart = new BarChart(config, data);
        bar_chart.update();


        d3.select('#reverse')
            .on('click', d => {
                data.reverse();
                bar_chart.update();
            });
    })
    .catch(error => {
        console.log(error);
    });

