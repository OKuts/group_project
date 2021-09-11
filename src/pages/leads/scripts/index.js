import '../../../css/style.scss';
import { verifyToken, outFromApp, loadShowUserName } from '../../globalModules';
import {initLeadsPage} from './modules/initLeadsPage';

verifyToken();
outFromApp();
loadShowUserName();

initLeadsPage();
