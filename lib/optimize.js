const gm = require('gm');

module.exports = (imageBuffer, params) => new Promise((resolve, reject) => {
  const image = gm(imageBuffer);
  switch (params.mode) {
    case 'aggressive':
      image
        .noProfile()
        .colors(50)
        .dither(true);
      break;
    case 'shy':
      image
        .colors(255)
        .dither(true);
      break;
    default:
      image
        .colors(160)
        .dither(true);
  }
  image.toBuffer((err, optimizedImage) => {
    if (err) {
      return reject(err);
    }
    return resolve(optimizedImage);
  });
});
