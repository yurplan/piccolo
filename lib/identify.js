// eslint-disable-next-line prefer-const
let gm = require('gm');

module.exports = imageBuffer => new Promise((resolve, reject) => {
  try {
    const gmObject = gm(imageBuffer);
    if (!gmObject) {
      reject('UNKNOWN_ERROR');
      return;
    }
    gmObject.identify((err, info) => {
      if (err) {
        return reject(err);
      }
      if (['PNG', 'JPEG'].indexOf(info.format) <= -1) {
        return reject('INVALID_FORMAT');
      }
      return resolve(info);
    });
  } catch (err) {
    reject(err);
  }
});
