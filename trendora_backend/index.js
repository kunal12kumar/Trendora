import express from "express";



import cors from "cors";
import 'dotenv/config';
import bodyParser from 'body-parser';
import dbconnect from "./lib/dbconnect.js";
import signuprouter from "./routes/Rsignupuser.js";
import verifycoderouter from "./routes/Rverifycode.js";
import signinrouter from "./routes/Rsigninuser.js";
import contactusrouter from "./routes/Rcontactus.js";
import favoritesrouter from "./routes/RFavourite.js";
import addtocartrouter from "./routes/RAddtocart.js";






// Initialize the server
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Enable CORS and JSON parsing
server.use(cors());
server.use(express.json());

const database=  dbconnect();
console.log(database);



// Define routes
server.get('/', (req, res) => {
    res.send('Server is ready');
});

// now inroducing the middleware in between 


// here connecting the frontend with the backend with auth0


  // here we are defining middleware where it get used to restrict the acces by using check jwt (where we want to restrict)

  


server.use('/api/Rsignupuser',signuprouter);
server.use('/api/Rverifycode',verifycoderouter);
server.use('/api/Rsigninuser',signinrouter);
server.use('/api/Rcontactus',contactusrouter);
server.use('/api/RFavourite',favoritesrouter);
server.use('/api/RAddtocart',addtocartrouter);

// Use a different port if 8000 is unavailable
const port = process.env.PORT || 3000; // Default to port 3000 if 8000 is unavailable
// Start the server
server.listen(port, () => {
    console.log(`server connected successufly at http://localhost:${port}`);
  });
  
