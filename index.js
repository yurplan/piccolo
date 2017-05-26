const Hapi = require('hapi');

const optimizationRoute = require('./routes/optimization');

const server = new Hapi.Server();

server.connection({
  port: 3000,
  host: 'localhost'
});

server.route(optimizationRoute);

const logOptions = {
  reporters: {
  consoleReporter: [{
    module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    },
    'stdout']
  }
};
server.register({
  register: require('good'),
  logOptions,
}, () => {
  server.start((err) => {
    server.log(['info'], `Piccolo server running at: ${server.info.uri}`);
  });
})

module.exports = server;