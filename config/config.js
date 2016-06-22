
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    db: 'mongodb://localhost/hourglass',
    root: rootPath,
    tokenConfPath:path.join(rootPath+'/config/dev_jwt.properties'),
    messagesConfPath:path.join(rootPath+'/config/messages.properties'),
    stormPath:{
      apiKeyId:'4TBTJGKK1RSEYOKZ3RNNIUAQ2',
      apiSecretId:'/cKWIveXuUfonhrng4hYsjs9/5FrYzKs1XmHTX1NxJU',
      applicationHref:'https://api.stormpath.com/v1/applications/246Oqj8UWz38q7Wt5Gdj4S'
    },
    noAccessPath: "/login"
   },
  test: {

  },
  production: {

  }
};
