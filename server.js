
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import colors from 'colors'
import connectDB from './config/db.js';
import mongoose from 'mongoose';
import authRoute from './routes/auth-routes.js'



// configure 
dotenv.config();

// database config
mongoose.set('strictQuery', true);
connectDB()

// rest obj
const app=express()

// middleware
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth',authRoute)



// port
const PORT=process.env.PORT || 8080;

// listen
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})