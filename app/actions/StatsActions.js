/**
 * Created by nguyenlinh on 8/18/15.
 */
import alt from '../alt';

class StatsActions {
	constructor () {
		this.generateActions(
			'getStatsSuccess',
			'getStatsFail'
		)
	}

	getStats () {
		$.ajax({ url: '/api/stats' })
			.done((data) => {
				console.log(data);
				this.actions.getStatsSuccess(data);
			})
			.fail((jqXhr) => {
				this.actions.getStatsFail(jqXhr);
			});
	}
}

export default alt.createActions(StatsActions);