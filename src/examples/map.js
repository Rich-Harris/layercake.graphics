/* --------------------------------------------
 *
 * Example creating an svg map, computing projection values inside the component
 * passing in the name of the projection
 *
 * --------------------------------------------
 */

import LayerCake from 'layercake';
import loadData from '../modules/loadData.js';
import SvgMap from '../components/SvgMap.html';

(async function () {
	const geojson = await loadData('./data/us-states.topojson');

	const myCake = new LayerCake({
		data: geojson,
		target: document.getElementById('chart-target-svg-map'),
		custom: {
			projection: 'geoAlbersUsa' // define the d3.geo projection name here to make our SvgMap component more reusable
		}
	})
		.svgLayers([
			{ component: SvgMap, opts: {} }
		]);

	myCake.render();
}).call(window);
