import Ajv from 'ajv';
import { signUpSchema } from './schema';
const addFormats = require('ajv-formats');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(signUpSchema);

export { validate as signUpValidator };
