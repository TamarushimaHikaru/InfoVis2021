d3.csv("https://TamarushimaHikaru.github.io/InfoVis2021/W04/w04_task2.csv")
    .then(data => {
        data.forEach(d => { d.x = +d.x; d.y = + d.y; });

        var config = {
            parent: '#drawing_region',
            width: 256,
            height: 128,
            margin: { top: 10, right: 10, bottom: 20, left: 20 }
        };

        const scatter_plot = new LineChart(config, data);
        scatter_plot.update();
    })
    .catch(error => {
        console.log(error);
    });


class LineChart {
    constructor(config, data) {
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
            margin: config.margin || { top: 10, right: 10, bottom: 10, left: 10 }
        }
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

        self.xscale = d3.scaleLinear()
            .range([0, self.inner_width]);

        self.yscale = d3.scaleLinear()
            .range([0, self.inner_height]);

        self.xaxis = d3.axisBottom(self.xscale)
            .ticks(5)
            .tickSizeOuter(0);
        self.yaxis = d3.axisLeft(self.yscale)
            .ticks(5)
            .tickSizeOuter(0);

        self.xaxis_group = self.chart.append('g')
            .attr('transform', `translate(0, ${self.inner_height})`);

        self.yaxis_group = self.chart.append('g');



    }

    update() {
        let self = this;
        const space = 10;
        const xmin = d3.min(self.data, d => d.x) - space;
        const xmax = d3.max(self.data, d => d.x) + space;
        self.xscale.domain([xmin, xmax]);

        const ymin = d3.min(self.data, d => d.y) - space;
        const ymax = d3.max(self.data, d => d.y) + space;
        self.yscale.domain([ymax, ymin]);

        self.render();
    }

    render() {
        let self = this;

        self.xaxis_group
            .call(self.xaxis);

        self.yaxis_group
            .call(self.yaxis);

        const line = d3.line()
            .x(self.data, d => d.x)
            .y(self.data, d => d.y);

        self.chart.selectAll("path").data(self.data).enter()
            .append("path")
            .attr('d', line(data))
            .attr('stroke', 'black')
            .attr('fill', 'none');

    }
}