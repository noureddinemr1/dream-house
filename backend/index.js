import express from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';



dotenv.config()
const app = express();
app.use(cors());
const port = process.env.PORT ||8081;
const uri = process.env.URI ; 

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

const houseSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    title: String,
    category: String,
});

const House = mongoose.model('houses', houseSchema);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('users', userSchema);

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    object: String,
    message: String,
});

const Contact = mongoose.model('contacts', contactSchema);

app.use(bodyParser.json());

app.get('/home', async (req, res) => {
    const houses = await House.find({ category: 'Luxury' });
    res.json(houses);
});

app.get('/houses', async (req, res) => {
    const houses = await House.find();
    res.json(houses);
});

app.get('/users', async (req, res) => {
    const houses = await User.find();
    res.json(houses);
});
app.post('/addhouse',async(req,res)=>{
    try{
    const {name,price,title,category,image} = req.body;
    const house = new House({image,name,price,title,category});
    await house.save();
    res.status(200).json({message:'House added successfully'});
    }catch(e){
        res.status(500).json({message:'Something went wrong'});
    }

})

app.post('/contact', async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, object, message } = req.body;
        const createdContact = new Contact({
            name,
            email,
            object,
            message,
        });
        await createdContact.save();
        res.status(200).json("created");
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const createdUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await createdUser.save();

        res.status(200).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                username: createdUser.username,
                email: createdUser.email,
            },
        });
    } catch (e) {
        res.status(500).send(e.message);
    }
});


app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (e) {
        res.status(500).send(e.message);
    }
});


app.delete('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await User.findByIdAndDelete(userId);
      if (result) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.delete('/houses/:id', async (req, res) => {
    try {
      const houseId = req.params.id;
      const result = await House.findByIdAndDelete(houseId);
      if (result) {
        res.json({ message: 'House deleted successfully' });
      } else {
        res.status(404).json({ message: 'House not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  app.get('/contacts', async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  app.put('/houses/:id', async (req, res) => {
    try {
        const houseId = req.params.id;
        const updatedData = req.body;

        const result = await House.findByIdAndUpdate(houseId, updatedData, { new: true });

        if (result) {
            res.json(result); 
        } else {
            res.status(404).json({ message: 'House not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/addhouse', async (req, res) => {
    try {
        const newHouse = new House(req.body);
        const result = await newHouse.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
