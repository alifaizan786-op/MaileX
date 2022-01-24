const connection = require('../config/connection')
const { Email, User } = require('../models')
const userSeeds =  require('./userSeeds.json')
const emailSeeds = require('./emailSeeds.json')

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected');

    await User.deleteMany({})

    console.log('================Collections Emptied================');

    await User.insertMany(userSeeds);

    console.table(userSeeds);

    console.info('================Users Seeded================');

    await Email.deleteMany({})

    console.log('================Collections Emptied================');

    await Email.insertMany(emailSeeds);

    console.table(emailSeeds);

    console.info('================Emails Seeded================');

    process.exit(0);
})