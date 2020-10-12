const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');

const graphqlSchema = require('../graphql/schema');
const graphqlResolver = require('../graphql/resolvers');
const auth = require('./auth');

const init = async (expressApp) => {
  expressApp.use(bodyParser.json());
  expressApp.use(bodyParser.urlencoded({
     extended: false
  }));

  expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  expressApp.use(auth);
  expressApp.use(
    '/graphql',
    graphqlHTTP({
      schema: graphqlSchema,
      rootValue: graphqlResolver,
      graphiql: false,
      formatError(err) {
        if (!err.originalError) {
          return err;
        }
        const data = err.originalError.data;
        const message = err.message || 'An error occurred.';
        const code = err.originalError.code || 500;
        return { message: message, status: code, data: data };
      }
    })
  );

  expressApp.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message;
    const data = err.data;
    res.status(status).json({ message: message, data: data });
  });
  
};

module.exports = init;
