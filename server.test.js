import assert from 'node:assert/strict';
import { test } from 'node:test';
import { handler } from './server.js';

test('answers with ok', () => {
  let body = '';
  const res = { writeHead() {}, end(b) { body = b; } };
  handler({ url: '/' }, res);
  assert.equal(JSON.parse(body).ok, true);
});
