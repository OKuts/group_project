import '../../../css/style.scss';
import {verifyToken} from '../../globalModules/ferifyToken';
import {outFromApp} from '../../globalModules/outFromApp';
import {loadShowUserName} from '../../globalModules/loadShowUserName';

verifyToken();
outFromApp();
loadShowUserName();