d3.csv("https://TamarushimaHikaru.github.io/InfoVis2021/Final/data.csv")
    .then(data => {
        data.forEach(d => {
            d.p = +d.p;
            d.k = +d.k;
            d.r = +d.r;
            d.r2 = +d.r2;
        });

        

        var config = {
            parent: '#drawing_region',
            width: 256,
            height: 256,
            margin: { top: 10, right: 10, bottom: 50, left: 70 },
            title: 'Corona Data',
            xlabel: 'Population',
            ylabel: 'Number of infected people'
        };

        var config2 = {
            parent: '#drawing_region',
            width: 256,
            height: 256,
            margin: { top: 10, right: 10, bottom: 50, left: 70 },
            title: 'Corona Data',
            xlabel: 'Population',
            ylabel: 'Number of infected people'
        };

        

        const scatter_plot2 = new ScatterPlot2(config2, data);
        scatter_plot2.update();
    })
    .catch(error => {
        console.log(error);
    });
