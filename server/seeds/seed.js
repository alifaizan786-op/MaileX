const connection = require('../config/connection')
const { Email, User } = require('../models')
const userSeeds =  require('./userSeeds.json')
const emailSeeds = require('./emailSeeds.json')

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected');
    try{
    await User.deleteMany({})

    console.log('================Collections Emptied================');

    await User.insertMany(userSeeds);

    console.table(userSeeds);

    console.info('================Users Seeded================');

    await Email.deleteMany({})

    for (let i = 0; i < emailSeeds.length; i++){
        // const {_id, sender, recipient} = await Email.create(emailSeeds[i]);
        ({_id : this._Ssender} = await User.findOne({ email: emailSeeds[i].sender }));
        const senderId = this._Ssender;

        ({_id : this._Rrecipient} = await User.findOne({ email: emailSeeds[i].recipient }));
        const recipientId = this._Rrecipient;

        const mail = {
            sender: senderId,
            recipient: recipientId,
            subject: emailSeeds[i].subject,
            emailbody : emailSeeds[i].emailbody
        };

        console.log(mail);

        let emailCreation = await Email.create(mail);
        
    }
    

    console.info('================Users Seeded================');
} catch (err) {
    console.error(err);
    process.exit(1);
  }

    process.exit(0);
})