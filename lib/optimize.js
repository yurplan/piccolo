const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

module.exports = (imageBuffer, params) => {
  const jpegtranOpts = {};
  const pngquantOpts = {};
  switch (params.mode) {
    case 'aggressive':
      pngquantOpts.floyd = 0.1;
      pngquantOpts.nofs = true;
      pngquantOpts.quality = '5-15';
      pngquantOpts.posterize = 4;
      jpegtranOpts.progressive = true;
      jpegtranOpts.arithmetic = true;
      break;
    case 'shy':
      pngquantOpts.floyd = 1;
      pngquantOpts.nofs = false;
      pngquantOpts.quality = '80-85';
      jpegtranOpts.progressive = false;
      jpegtranOpts.arithmetic = false;
      break;
    default:
      pngquantOpts.floyd = 0.5;
      pngquantOpts.nofs = false;
      pngquantOpts.quality = '45-65';
      jpegtranOpts.progressive = false;
      jpegtranOpts.arithmetic = true;

  }
  return imagemin.buffer(imageBuffer, {
    plugins: [
      imageminJpegtran(jpegtranOpts),
      imageminPngquant(pngquantOpts),
    ],
  });
};
