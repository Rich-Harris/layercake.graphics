/* --------------------------------------------
 *
 * Svg map example defining the projection and geoPath on the store
 * Use this in case you want these values to be available across components
 *
 * --------------------------------------------
 */
import LayerCake from 'layercake';
import * as geo from 'd3-geo';
import loadData from '../modules/loadData.js';
import SvgMap from '../components/SvgMapStoreValues.html';

(async function () {
	const geojson = await loadData('./data/us-states.topojson');

	const myCake = new LayerCake({
		data: geojson,
		target: document.getElementById('chart-target-svg-map-alternate')
	})
		.svgLayers([
			{ component: SvgMap, opts: {} }
		]);

	myCake.compute('projection', ['width', 'height', 'data'], (width, height, data) => {
		return geo.geoAlbersUsa()
			.fitSize([width, height], data);
	});

	myCake.compute('geoPath', ['projection'], (projection) => {
		return geo.geoPath(projection);
	});

	myCake.render();
}).call(window);
