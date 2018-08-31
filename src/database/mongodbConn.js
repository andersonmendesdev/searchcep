import mongoose from 'mongoose'
const mongo = process.env.MONGODB || 'mongodb://localhost:27017/api-chatio-react'

mongoose.connect(mongo, {useNewUrlParser: true})
mongoose.Promise = global.Promise


export default mongoose