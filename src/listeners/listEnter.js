import {createListHandler} from '../handlers/create-list.js';

document.getElementById('list-name-input')
.addEventListener('keyup', createListHandler);