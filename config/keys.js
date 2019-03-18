// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./keys_prod');
// } else {
//   module.exports = require('./keys_dev');
// }

module.exports = {
  mongoURI:
    'mongodb://Alex-Selariu-32:323232bjj@cluster0-shard-00-00-rgmh2.mongodb.net:27017,cluster0-shard-00-01-rgmh2.mongodb.net:27017,cluster0-shard-00-02-rgmh2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  secretOrKey: 'SECRET'
};
