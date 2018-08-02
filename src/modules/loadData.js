import * as d3 from 'd3-fetch';
import * as topojson from 'topojson';

export default async function loadData (filePath) {
	return d3.json(filePath).then(json => {
		return topojson.feature(json, json.objects.collection);
	})
		.catch(err => {
			console.error(err);
		});
}
