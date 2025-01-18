const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const mealRoutes = require('./routes/mealRoutes');
const mealReminderRoutes = require('./routes/mealreminderRoutes');
const fitnessChallengeRoutes = require('./routes/fitnesschallengeRoutes');
const userChallengeRoutes = require('./routes/userchallengeRoutes');
// const dietPlansRoutes = require('./routes/dietplanRoutes');
const dietPlanRoutes = require('./routes/dietplanRoutes');
const sleepTrackerRoutes = require('./routes/sleeptrackerRoutes');
const stepTrackerRoutes = require('./routes/steptrackerRoutes');
const mealSelectorRoutes = require('./routes/mealRoutes');
// const calorieTrackerRoutes = require('./routes/calorieTrackerRoutes');
const calorieTrackerRoutes = require('./routes/calorieTrackerRoutes');
const waterTrackerRoutes = require('./routes/waterTrackerRoutes');
const bmiRoutes = require('./routes/bmiRoutes');
const progressRoutes = require('./routes/progressRoutes');
const app = express();
// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

app.use(session({
    secret: 'game_have_secret',  // Secret key for signing the session ID
    resave: false,              // Don't save session if unmodified
    saveUninitialized: false,   // Don't create a session until something is stored
    cookie: { secure: false }   // Set 'secure' to true in production (HTTPS only)
}));

// Set EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
app.use('/auth', authRoutes);
// Use the meals routes
app.use('/api/meals', mealRoutes);
app.use(mealReminderRoutes);
app.use(fitnessChallengeRoutes);
app.use(userChallengeRoutes);
// app.use('/diet-plans', dietPlansRoutes);
app.use(dietPlanRoutes);
app.use(calorieTrackerRoutes);
app.use(sleepTrackerRoutes);
app.use(stepTrackerRoutes);
app.use(mealSelectorRoutes);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(waterTrackerRoutes);
app.use(bmiRoutes);
app.use(progressRoutes);
// app.use('/api/calorie-tracker', calorieTrackerRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
