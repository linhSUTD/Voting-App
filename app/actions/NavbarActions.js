/**
 * Created by nguyenlinh on 8/13/15.
 */

import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {

	constructor () {
		this.generateActions (
			'updateOnlineUsers',
			'updateSearchQuery',
			'getCharacterCountSuccess',
			'getCharacterCountFail',
			'findCharacterSuccess',
			'findCharacterFail'
		);
	}

	findCharacter(payload) {
		$.ajax({
			url: '/api/characters/search',
			data: { name: payload.searchQuery }
		}).done((data) => {
			assign(payload, data);
			this.actions.findCharacterSuccess(payload);
		}).fail((error) => {
			this.actions.findCharacterFail(payload);
		})
	}

	getCharacterCount () {
		$.ajax({ url: '/api/characters/count' })
			.done((total) => {
				this.actions.getCharacterCountSuccess(total);
			})
			.fail((error) => {
				this.actions.getCharacterCountFail(error);
			})
	}
}

export default alt.createActions(NavbarActions);