/**
 * Created by nguyenlinh on 8/17/15.
 */
import alt from '../alt';

class CharacterActions {
	constructor () {
		this.generateActions (
			'getCharacterSuccess',
			'getCharacterFail',
			'reportSuccess',
			'reportFail'
		)
	}


	getCharacter (characterId) {
		$.ajax({ url: '/api/characters/' + characterId })
			.done((character) => {
				this.actions.getCharacterSuccess(character);
			})
			.fail((jqXhr) => {
				this.actions.getCharacterFail(jqXhr);
			});
	}

	report (characterId) {
		$.ajax({ type: 'POST', url: '/api/report', data: {characterId: characterId}})
			.done((data) => {
				this.actions.reportSuccess(data.message);
			})
			.fail((jqXhr) => {
				this.actions.reportFail(jqXhr);
			});
	}
}

export default alt.createActions(CharacterActions);