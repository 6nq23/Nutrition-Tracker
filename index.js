const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('./cronJobs/emailReminderJob');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const searchRoutes = require('./routes/searchRoutes');
const mealRoutes = require('./routes/mealRoutes');
const mealReminderRoutes = require('./routes/mealreminderRoutes');
const fitnessChallengeRoutes = require('./routes/fitnesschallengeRoutes');
const userChallengeRoutes = require('./routes/userchallengeRoutes');
const dietPlanRoutes = require('./routes/dietplanRoutes');
const sleepTrackerRoutes = require('./routes/sleeptrackerRoutes');
const stepTrackerRoutes = require('./routes/steptrackerRoutes');
const mealSelectorRoutes = require('./routes/mealRoutes');
const calorieTrackerRoutes = require('./routes/calorieTrackerRoutes');
const waterTrackerRoutes = require('./routes/waterTrackerRoutes');
const bmiRoutes = require('./routes/bmiRoutes');
const progressRoutes = require('./routes/progressRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const emailReminderRoutes = require('./routes/emailReminderRoutes');
const path = require('path');
const favicon = require("serve-favicon");
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'image_logo.png')));

// Routes
app.use('/dashboard',dashboardRoutes);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
app.use('/auth', authRoutes);
app.use('/api/meals', mealRoutes);
app.use(mealReminderRoutes);
app.use(fitnessChallengeRoutes);
app.use(userChallengeRoutes);
app.use(dietPlanRoutes);
app.use(calorieTrackerRoutes);
app.use(sleepTrackerRoutes);
app.use(stepTrackerRoutes);
app.use(mealSelectorRoutes);
app.use(feedbackRoutes);
app.use(searchRoutes);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(waterTrackerRoutes);
app.use(bmiRoutes);
app.use(progressRoutes);
app.use(emailReminderRoutes);


// Start server
const PORT = 3003;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
