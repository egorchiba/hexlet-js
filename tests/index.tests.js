import { strict as assert } from 'node:assert';
import capitalize from "../index.js";
assert.equal(capitalize('hello'), 'hello');  
assert.equal(capitalize(''), '');