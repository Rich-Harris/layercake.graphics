import LayerCake from 'layercake';
import points from '../data/points.js';

import Scatter from '../components/Scatter.html';
import AxisX from '../components/AxisX.html';
import AxisY from '../components/AxisY.html';

const myCake = new LayerCake({
	padding: { top: 0, right: 0, bottom: 20, left: 25 },
	x: 'myX',
	y: d => d['myY'],
	yDomain: [0, null],
	data: points,
	target: document.getElementById('chart-target-scatter-canvas')
})
	.svgLayers([
		{ component: AxisX, opts: {} },
		{ component: AxisY, opts: {} }
	])
	.canvasLayers([
		{ component: Scatter, opts: {a: 'hey'} }
	]);

// console.log(myCake.get());

myCake.render();
