let port;
process.env.HOST_PORT && process.env.HOST_PORT !== '' ? port = process.env.HOST_PORT : port = 3000;

module.exports.port = port;
