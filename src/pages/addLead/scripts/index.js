import '../../../css/style.scss';

import {initPage} from './modules';
import { outFromApp, verifyToken, loadShowUserName } from '../../globalModules';

verifyToken();
outFromApp();
loadShowUserName();

initPage(localStorage.getItem('token'));
