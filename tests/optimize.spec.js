const rewire = require('rewire');
const Lab = require('lab');

const lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Lab.assertions.expect;

const optimize = rewire('../lib/optimize');

describe('Optimization', () => {
  it('aggressive mode', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    optimize.__set__('imagemin', {
      buffer: () => Promise.resolve(true),
    });
    optimize({}, { mode: 'aggressive' }).then((result) => {
      expect(result).to.equal(true);
      done();
    });
  });
  it('shy mode', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    optimize.__set__('imagemin', {
      buffer: () => Promise.resolve(true),
    });
    optimize({}, { mode: 'shy' }).then((result) => {
      expect(result).to.equal(true);
      done();
    });
  });
  it('default mode', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    optimize.__set__('imagemin', {
      buffer: () => Promise.resolve(true),
    });
    optimize({}, { mode: 'default' }).then((result) => {
      expect(result).to.equal(true);
      done();
    });
  });
  it('properly failed with a unknown error', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    optimize.__set__('imagemin', {
      buffer: () => Promise.reject('UNKNOWN_ERROR'),
    });
    optimize({}, { mode: 'default' }).catch((err) => {
      expect(err).to.equal('UNKNOWN_ERROR');
      done();
    });
  });
  it('properly failed if known error', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    optimize.__set__('imagemin', {
      buffer: () => Promise.reject({
        cmd: 'Testing pngquant-bin/vendor/pngquant testing...',
      }),
    });
    optimize({}, { mode: 'default' }).catch((err) => {
      expect(err).to.equal('MAX_OPTIMIZE_REACHED');
      done();
    });
  });
});

exports.lab = lab;
