import { callMethod } from '@konecty/utils/methods';
import { getAuthTokenIdFromReq } from '@konecty/utils/session';

const init = app => {
	// Converted to method
	app.get('/rest/comment/:document/:dataId', async (req, res) => {
		const result = await callMethod('comments:find', {
			authTokenId: getAuthTokenIdFromReq(req),
			document: req.params.document,
			dataId: req.params.dataId,
		});
		res.send(result);
	});

	// Converted to method
	app.post('/rest/comment/:document/:dataId', async (req, res) => {
		const result = await callMethod('comments:create', {
			authTokenId: getAuthTokenIdFromReq(req),
			document: req.params.document,
			text: req.body.text,
			dataId: req.params.dataId,
		});
		res.send(result);
	});
};

export { init };