const express = require('express');
const logger = require('./utils/logger');
const PORT = process.env.APP_PORT || 3000; 
const connection=require('./plugins/db')
const cors=require('cors')
const app = express();

const authRoutes=require('./routes/auth-route')
connection()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    headers: req.headers
  });
  next();
});
app.use('/api/auth',authRoutes)

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
