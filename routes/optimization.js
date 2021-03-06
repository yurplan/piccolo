const Joi = require('joi');
const Boom = require('boom');

const optimize = require('../lib/optimize');
const identify = require('../lib/identify');

const optimizationRoute = {
  method: 'POST',
  path: '/optimization',
  handler: (request, reply) => {
    let imageFormat = null;
    identify(request.payload.image)
      .then((info) => {
        imageFormat = info.format;
        return optimize(request.payload.image, {
          mode: request.payload.mode,
          info,
        });
      }).catch((err) => {
        if (err === 'INVALID_FORMAT') {
          return reply(Boom.badRequest('Invalid image format'));
        }
        if (err === 'MAX_OPTIMIZE_REACHED') {
          return Promise.resolve(request.payload.image);
        }
        return reply(Boom.badImplementation('Optimizing image error'));
      }).then((optimizedImage) => {
        const replying = reply(optimizedImage)
          .header('Content-Disposition', 'inline');
        switch (imageFormat) {
          case 'JPEG':
            replying.header('Content-type', 'image/jpeg');
            break;
          default:
            replying.header('Content-type', 'image/png');
        }
        return replying;
      });
  },
  config: {
    validate: {
      payload: {
        mode: Joi.string().allow(['aggressive', 'mid', 'shy']).default('mid'),
        image: Joi.binary().max(50000000).required(),
      },
    },
  },
};

module.exports = optimizationRoute;
