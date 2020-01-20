function getdata() {
	getuplaybdd()
	getoriginbdd()
	getsteambdd()
}

function getsteambdd() {
	Dexie.exists('GameKey_DB').then(function (exists) {
		if (exists) {
			new Dexie('GameKey_DB').open()
				.then(function (db) {
					db.tables[1].toArray().then(el => {
						store.state.steam = el;
						store.state.steamkey = store.state.steam.filter((el) => {
							el.platform = 'Steam'
							return el.keys !== undefined;
						});
						document.getElementById('main').remove()
						v.$mount('#app')
					});
				}).catch('NoSuchDatabaseError', function (e) {
					// Database with that name did not exist
					console.error("Database not found");
				}).catch(function (e) {
					console.error("Oh uh: " + e);
				});
		}
	})
}

function getuplaybdd() {
	Dexie.exists('GameKey_DB').then(function (exists) {
		if (exists) {
			new Dexie('GameKey_DB').open()
				.then(function (db) {
					db.tables[2].toArray().then(el => {
						store.state.uplay = el;
						store.state.uplaykey = store.state.uplay.filter((el) => {
							el.platform = 'Uplay'
							return el.keys !== undefined;
						});

					});
				}).catch('NoSuchDatabaseError', function (e) {
					// Database with that name did not exist
					console.error("Database not found");
				}).catch(function (e) {
					console.error("Oh uh: " + e);
				});
		}
	})
}

function getoriginbdd() {
	Dexie.exists('GameKey_DB').then(function (exists) {
		if (exists) {
			new Dexie('GameKey_DB').open()
				.then(function (db) {
					db.tables[0].toArray().then(el => {
						store.state.origin = el;
						store.state.originkey = store.state.origin.filter((el) => {
							el.platform = 'Origin'
							return el.keys !== undefined;
						});

					});
				}).catch('NoSuchDatabaseError', function (e) {
					// Database with that name did not exist
					console.error("Database not found");
				}).catch(function (e) {
					console.error("Oh uh: " + e);
				});
		}
	})
}

function addkey(t, id, key) {

	new Dexie('GameKey_DB').open()
		.then(function (db) {
			db.tables[t].where("appid").equals(id).modify(game => {
				if (game.keys == undefined) {
					game.keys = [{
						'key': key
					}];
				} else {
					game.keys.push({
						'key': key
					});
				}
			});

		}).catch('NoSuchDatabaseError', function (e) {
			// Database with that name did not exist
			console.error("Database not found");
		}).catch(function (e) {
			console.error("Oh uh: " + e);
		});

}


function delkey(t, id, key) {

	new Dexie('GameKey_DB').open()
		.then(function (db) {

			db.tables[t].where("appid").equals(id).modify(game => {

				if (game.keys.length > 1) {
					game.keys = game.keys.filter((el) => {
						return el.key !== key;
					});
				} else {
					delete game.keys
				}

			});

		}).catch('NoSuchDatabaseError', function (e) {
			// Database with that name did not exist
			console.error("Database not found");
		}).catch(function (e) {
			console.error("Oh uh: " + e);
		})
}




function delgamekeys(t, id) {

	new Dexie('GameKey_DB').open()
		.then(function (db) {

			db.tables[t].where("appid").equals(id).modify(game => {

				delete game.keys

			}).catch('NoSuchDatabaseError', function (e) {
				// Database with that name did not exist
				console.error("Database not found");
			}).catch(function (e) {
				console.error("Oh uh: " + e);
			})
		})
}


function editkey(t, id, okey, nkey) {

	new Dexie('GameKey_DB').open()
		.then(function (db) {

			db.tables[t].where("appid").equals(id).modify(game => {

				for (var i = 0; i < game.keys.length; i++) {
					if (game.keys[i].key == okey) {
						game.keys[i].key = nkey
						i = game.keys.length
					}

				}

			});

		}).catch('NoSuchDatabaseError', function (e) {
			// Database with that name did not exist
			console.error("Database not found");
		}).catch(function (e) {
			console.error("Oh uh: " + e);
		})
}

function getapp(t, idapp) {
	new Dexie('GameKey_DB').open()
		.then(function (db) {

			db.tables[t].get(idapp).then(game => {

				store.state.temp = game

			}).catch('NoSuchDatabaseError', function (e) {
				// Database with that name did not exist
				console.error("Database not found");
			}).catch(function (e) {
				console.error("Oh uh: " + e);
			})

		})
}