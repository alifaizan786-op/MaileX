const connection = require('../config/connection')
const { Email, User } = require('../models')
const userSeeds =  require('./userSeeds.json')

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected');

    await User.deleteMany({})

    console.log('================Collections Emptied================');

    await User.insertMany(userSeeds);

    console.table(userSeeds);

    console.info('================Users Seeded================');

    await Email.deleteMany({})

    process.exit(0);
})