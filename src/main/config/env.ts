export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/developers-registration',
  port: process.env.PORT ?? 3000
}
