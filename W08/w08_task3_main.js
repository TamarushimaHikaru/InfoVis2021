d3.csv("https://TamarushimaHikaru.github.io/InfoVis2021/W04/w04_task2.csv")
    .then(data => {
        data.forEach(d => { d.label = +d.label; d.value = + d.value; });
        data.forEach(function (value) {
            console.log(value);
        });
        var config = {
            parent: '#drawing_region',
            width: 256,
            height: 256,
            radius: Math.min(width, height) / 2,
            margin: { top: 10, right: 10, bottom: 20, left: 20 }
        };

        const scatter_plot = new PieChart(config, data);
        scatter_plot.update();
    })
    .catch(error => {
        console.log(error);
    });


class PieChart {
    constructor(config, data) {
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
            redius: config.radius || Math.min(config.width, config.height) / 2,
            margin: config.margin || { top: 10, right: 10, bottom: 10, left: 10 }
        };
        this.data = data;
        this.init();
    }

    init() {
        let self = this;

        self.svg = d3.select(self.config.parent)
            .attr('width', self.config.width)
            .attr('height', self.config.height);

        self.chart = self.svg.append('g')
            .attr('transform', `translate(${self.config.margin.left},${self.config.margin.top})`);

        self.inner_width = self.config.width - self.config.margin.left - self.config.margin.right;
        self.inner_height = self.config.height - self.config.margin.top - self.config.margin.bottom;

        




    }

    update() {
        let self = this;

        const pie = d3.pie()
            .value(d => d.value);

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(self.config.radius);
    }

    render() {
        let self = this;

        self.chart.selectAll("pie").data(pie(self.data)).enter()
            .append("path")
            .attr("d", arc)
            .attr('fill', 'black')
            .attr('stroke', 'white')
            .style('stroke-width', '2px');
    }
}