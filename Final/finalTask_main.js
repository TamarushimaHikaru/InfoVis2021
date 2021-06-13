d3.csv("https://TamarushimaHikaru.github.io/InfoVis2021/Final/data.csv")
    .then(data => {
        data.forEach(d => {
            d.p = +d.p;
            d.k = +d.k;
        });

        

        var config = {
            parent: '#drawing_region',
            width: 256,
            height: 256,
            margin: { top: 10, right: 10, bottom: 50, left: 70 },
            title: 'Iris Flower Data',
            xlabel: 'Population',
            ylabel: 'Number of infected people'
        };

        const scatter_plot = new ScatterPlot(config, data);
        scatter_plot.update();
    })
    .catch(error => {
        console.log(error);
    });
