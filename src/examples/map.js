import LayerCake from 'layercake';
import loadData from '../modules/loadData.js';
import SvgMap from '../components/SvgMap.html';

(async function () {
	const geojson = await loadData('./data/us-states.topojson');

	const myCake = new LayerCake({
		data: geojson,
		target: document.getElementById('chart-target-svg-map')
	})
		.svgLayers([
			{ component: SvgMap, opts: {} }
		]);

	myCake.render();
}).call(window);
