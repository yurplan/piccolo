const rewire = require('rewire');
const Lab = require('lab');

const lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Lab.assertions.expect;

const identify = rewire('../lib/identify');

describe('Identification', () => {
  it('returns error if no file', (done) => {
    identify({}).catch((err) => {
      expect(err.message.indexOf('Request did not return an image.') > -1).to.equal(true);
      done();
    });
  });
  it('returns error if gm failed', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    identify.__set__('gm', () => false);
    identify({}).catch((err) => {
      expect(err).to.equal('UNKNOWN_ERROR');
      done();
    });
  });
  it('returns error if invalid format', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    identify.__set__('gm', () => ({
      identify: (cb) => {
        cb(false, {
          format: 'GIF',
        });
      },
    }));
    identify({}).catch((err) => {
      expect(err).to.equal('INVALID_FORMAT');
      done();
    });
  });
  it('returns error if failed to start gm', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    identify.__set__('gm', () => {
      throw new Error('Testing');
    });
    identify({}).catch((err) => {
      expect(err.message).to.equal('Testing');
      done();
    });
  });
  it('returns no error if success', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    identify.__set__('gm', () => ({
      identify: (cb) => {
        cb(false, {
          format: 'PNG',
        });
      },
    }));
    identify({}).then((info) => {
      expect(info.format).to.equal('PNG');
      done();
    });
  });
});

exports.lab = lab;
