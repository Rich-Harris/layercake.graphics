import LayerCake from 'layercake';
import points from '../data/points.js';

import Line from '../components/Line.html';
import Area from '../components/Area.html';
import AxisX from '../components/AxisX.html';
import AxisY from '../components/AxisY.html';

const myCake = new LayerCake({
	padding: { top: 0, right: 0, bottom: 20, left: 25 },
	x: 'myX',
	y: d => d['myY'],
	yDomain: [0, null],
	data: points,
	target: document.getElementById('chart-target')
})
	.svgLayers([
		{ component: AxisX, opts: {} },
		{ component: AxisY, opts: {} },
		{ component: Line, opts: {} },
		{ component: Area, opts: {} }
	]);

console.log(myCake.get());

myCake.render();
