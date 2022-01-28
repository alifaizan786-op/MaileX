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

    for (let i = 0; i < emailSeeds.length; i++){
        const {_id, sender, recipient} = await Email.create(emailSeeds[i]);
        const Ssender = await User.findOneAndUpdate(
            { email: sender },
            { $addToSet : { sentEmails: _id }}
        )
        const Rrecipient = await User.findOneAndUpdate(
            { email: recipient },
            { $addToSet : { receivedEmails: _id }}
        )
    }

    console.info('================Users Seeded================');

    process.exit(0);
})