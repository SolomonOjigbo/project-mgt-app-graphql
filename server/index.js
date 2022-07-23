const express = require('express');

const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');

const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP ({

    graphiql: process.env.NODE_ENV === 'development'

}))

app.listen(port, console.log(`Server running on port ${port}`));
