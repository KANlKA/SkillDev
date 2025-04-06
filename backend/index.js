import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
const app = express();

dotenv.config();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['POST', 'GET', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));
// Essential middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ctf-platform')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// User Model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  xp: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  badges: [{ type: String }],
  interests: [String],
  enrolledCourses: [String],
  courseProgress: { type: Map, of: Number },
  watchedVideos: { type: Map, of: [String] }
});
const User = mongoose.model("User", userSchema);

// Challenge Model
const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true, enum: ["Easy", "Medium", "Hard"] },
  xp: { type: Number, default: 0 },
  submissions: { type: Number, default: 0 },
  timeLeft: { type: String, default: "N/A" },
}, { timestamps: true });
const Challenge = mongoose.model("Challenge", challengeSchema);

// Leaderboard Model
const leaderboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  username: String,
  xp: { type: Number, default: 0 },
}, { timestamps: true });
const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

// Hackathon Model
const hackathonSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const Hackathon = mongoose.model("Hackathon", hackathonSchema);

// Certificate Model
const certificateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: String,
  issuedAt: { type: Date, default: Date.now },
  certificateId: { type: String, unique: true, required: true },
});
const Certificate = mongoose.model("Certificate", certificateSchema);

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: String,
  level: String,
  instructor: String,
  tags: [String],
  roadmap: [{
    title: String,
    duration: String,
    videoUrl: String,
    type: { type: String, enum: ['youtube', 'mp4'], default: 'mp4' }
  }]
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

// MIDDLEWARE
const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ message: "No authorization token provided" });
    }
  
    const token = authHeader.split(' ')[1];
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error('JWT verification error:', err);
        return res.status(403).json({ message: "Invalid or expired token" });
      }
      req.user = decoded;
      next();
    });
  };
  

// Auth Routes
app.post("/api/auth/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      
      // Validation
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Check for existing user
      const existingUser = await User.findOne({ email }).collation({
        locale: 'en',
        strength: 2
      }).exec();
      
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }
  
      // Hash password and create user
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.create({ 
        name, 
        email, 
        password: hashedPassword 
      });
  
      // Generate JWT
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      // Secure response - don't send password back
      const userResponse = {
        _id: user._id,
        name: user.name,
        email: user.email,
        xp: user.xp,
        streak: user.streak
      };
  
      res.status(201).json({ token, user: userResponse });
      
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ 
        message: "Registration failed",
        error: error.message 
      });
    }
  });
  
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { 
        expiresIn: "1h" 
      });
  
      res.json({ 
        token, 
        user: { 
          _id: user._id, 
          name: user.name, 
          email: user.email 
        } 
      });
    } catch (error) {
      res.status(500).json({ message: "Login failed", error: error.message });
    }
});
// Backend index.js - add this route

app.get('/api/auth/verify', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ valid: false });
    
    // In a real app, you would verify the JWT properly
    res.json({ valid: true });
  });

app.get("/api/user/:userId", protect, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
});

app.put("/api/user/update-xp", protect, async (req, res) => {
  const { userId, xp } = req.body;
  if (!userId || typeof xp !== "number" || xp < 0) {
    return res.status(400).json({ message: "Invalid XP value or userId" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.xp += xp;
    await user.save();
    res.json({ message: "XP Updated", xp: user.xp });
  } catch (error) {
    res.status(500).json({ message: "Error updating XP", error: error.message });
  }
});

app.delete("/api/user/:userId", protect, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting account", error: error.message });
  }
});

// Challenge Routes
app.get("/api/challenges", async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch challenges", error: error.message });
  }
});

app.post("/api/challenges", protect, async (req, res) => {
  try {
    const challenge = await Challenge.create(req.body);
    res.status(201).json(challenge);
  } catch (error) {
    res.status(400).json({ message: "Failed to create challenge", error: error.message });
  }
});

// Leaderboard Routes
app.get("/api/leaderboard", async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ xp: -1 }).limit(10);
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard", error: error.message });
  }
});

app.post("/api/leaderboard/update-xp", protect, async (req, res) => {
  const { userId, xp } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.xp += xp;
    await user.save();

    let leaderboardEntry = await Leaderboard.findOne({ userId });
    if (leaderboardEntry) {
      leaderboardEntry.xp += xp;
      await leaderboardEntry.save();
    } else {
      await Leaderboard.create({ userId, username: user.name, xp: user.xp });
    }

    res.json({ message: "XP Updated", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating XP", error: error.message });
  }
});

// Hackathon Routes
app.get("/api/hackathons", async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.json(hackathons);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hackathons", error: error.message });
  }
});

app.post("/api/hackathons/register", protect, async (req, res) => {
  const { hackathonId, userId } = req.body;
  try {
    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) return res.status(404).json({ message: "Hackathon not found" });

    if (!hackathon.participants.includes(userId)) {
      hackathon.participants.push(userId);
      await hackathon.save();
    }
    res.json({ message: "Registered for Hackathon", hackathon });
  } catch (error) {
    res.status(500).json({ message: "Error registering", error: error.message });
  }
});

app.post("/api/hackathons/create", protect, async (req, res) => {
  const { title, description, startDate, endDate } = req.body;
  try {
    const hackathon = await Hackathon.create({
      title,
      description,
      startDate,
      endDate,
      participants: []
    });
    res.status(201).json({ message: "Hackathon created", hackathon });
  } catch (error) {
    res.status(500).json({ message: "Error creating hackathon", error: error.message });
  }
});

// Certificate Routes
app.post("/api/certificates", protect, async (req, res) => {
  const { userId, title } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const certificate = await Certificate.create({
      userId,
      title,
      certificateId: uuidv4(),
    });
    res.json({ message: "Certificate Issued", certificate });
  } catch (error) {
    res.status(500).json({ message: "Error issuing certificate", error: error.message });
  }
});

app.get("/api/certificates/:userId", protect, async (req, res) => {
  try {
    const certificates = await Certificate.find({ userId: req.params.userId });
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching certificates", error: error.message });
  }
});
// Add to your existing backend routes
// COURSE ROUTES
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// In your backend index.js
app.post('/api/courses/enroll', protect, async (req, res) => {
  try {
    const { courseId } = req.body;
    const user = await User.findById(req.user.id);
    
    if (!user.enrolledCourses.includes(courseId)) {
      user.enrolledCourses.push(courseId);
      user.courseProgress = user.courseProgress || {};
      user.courseProgress[courseId] = 0;
      await user.save();
    }
    
    res.json({ success: true, user });
  } catch (err) {
    console.error('Enrollment error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/courses/progress', protect, async (req, res) => {
  try {
    const { courseId, progress } = req.body;
    const user = await User.findById(req.user.id);
    
    user.courseProgress.set(courseId, progress);
    await user.save();
    
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/courses/watched', protect, async (req, res) => {
  try {
    const { courseId, videoId } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.watchedVideos = user.watchedVideos || {};
    if (!user.watchedVideos[courseId]) {
      user.watchedVideos[courseId] = [];
    }

    if (!user.watchedVideos[courseId].includes(videoId)) {
      user.watchedVideos[courseId].push(videoId);
      await user.save();
    }

    res.json({ message: "Video marked as watched" });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark video", error: error.message });
  }
});
// Get single course
app.get('/api/courses/:id', protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch course", error: error.message });
  }
});

// Get current user
app.get('/api/user/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error: error.message });
  }
});

// Update user interests
app.put('/api/user/interests', protect, async (req, res) => {
  try {
    const { interests } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { interests },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to update interests", error: error.message });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));