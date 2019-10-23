import mongoose from 'mongoose'
import config from 'config'

const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB Connected...')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

export default connectDB
