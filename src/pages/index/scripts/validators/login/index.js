import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import { loginSchema } from './schema';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validate = ajv.compile(loginSchema);

export { validate as loginValidator };
