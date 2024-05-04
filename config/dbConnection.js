const { MongoClient } = require("mongodb")

const mongoUrl = process.env.MONGO_URL
let db = null

const dbConnection = new Promise((resolve, reject) => {
    if (!db) {
        MongoClient.connect(mongoUrl)
            .then(client => {
                db = client.db('practiceDb')
                console.log("Connected to db")
                resolve(db)
            })
            .catch(err => { reject(err) })
    } else {
        resolve(db)
    }
})

module.exports = { dbConnection }