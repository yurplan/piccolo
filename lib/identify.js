const gm = require('gm');

module.exports = imageBuffer => new Promise((resolve, reject) => {
  gm(imageBuffer).identify((err, info) => {
    if (err) {
      return reject(err);
    }
    if (['PNG', 'JPEG'].indexOf(info.format) <= -1) {
      return reject('INVALID_FORMAT');
    }
    return resolve(info);
  });
});
