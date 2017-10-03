
const Lab = require('lab');

const lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Lab.assertions.expect;

const identify = require('../lib/identify');

describe('Identification', () => {
  it('returns error if no file', (done) => {
    identify({}).catch((err) => {
      expect(err.message.indexOf('Request did not return an image.') > -1).to.equal(true);
      done();
    });
  });
});

exports.lab = lab;
