/**
 * Created by nguyenlinh on 8/13/15.
 */
import alt from '../alt';

class FooterActions {
	constructor () {
		this.generateActions (
			'getTopCharactersSuccess',
			'getTopCharactersFail'
		);
	}

	getTopCharacters () {
		$.ajax({ url: '/api/characters/top' })
			.done((data) => {
				this.actions.getTopCharactersSuccess(data);
			})
			.fail((error) => {
				this.actions.getTopCharactersFail(error);
			})
	}
}

export default alt.createActions(FooterActions);