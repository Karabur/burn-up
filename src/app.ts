/// <reference path="../defs/_references.d.ts" />

import {render} from 'react';

import MainApp = require('src/MainApp');

window.addEventListener('load', () => {
	render(MainApp({}), document.getElementById('app'));
}, false);
