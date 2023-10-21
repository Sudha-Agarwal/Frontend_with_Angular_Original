const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const NodeRSA = require('node-rsa');
const fs = require('fs');

const app = express();
const secretKey = '1234';
const port = 3000; // You can change this to any port you prefer

// Enable CORS for all routes (adjust the options as needed for your environment)
app.use(cors());

app.use(bodyParser.json()); // Parse JSON request bodies


/* RSA key pair generation using node-rsa  */


// Generate an RSA key pair
const key = new NodeRSA({ b: 2048 });

// Save the private key to a file (keep it secure)
fs.writeFileSync('private.pem', key.exportKey('private'));

// Save the public key to a file (can be shared)
fs.writeFileSync('public.pem', key.exportKey('public'));
// Sample data for products
const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' ,category:"mobile"},
  { id: 2, name: 'Product 2', description: 'Description 2' ,category:"mobile"},
  { id: 3, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
  { id: 4, name: 'Product 4', description: 'Description 3',category: 'furniture' },
  { id: 4, name: 'Product 1', description: 'Description 1' ,category:"mobile"},
  { id: 6, name: 'Product 2', description: 'Description 2' ,category:"mobile"},
  { id: 7, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
  { id: 8, name: 'Product 4', description: 'Description 3',category: 'furniture' },
  { id: 9, name: 'Product 1', description: 'Description 1' ,category:"laptop"},
  { id: 10, name: 'Product 2', description: 'Description 2' ,category:"laptop"},
  { id: 11, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
  { id: 12, name: 'Product 4', description: 'Description 3',category: 'laptop' },
  { id: 13, name: 'Product 1', description: 'Description 1' ,category:"laptop"},
  { id: 14, name: 'Product 2', description: 'Description 2' ,category:"laptop"},
  { id: 15, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
  { id: 16, name: 'Product 4', description: 'Description 3',category: 'laptop' },
  { id: 17, name: 'Product 4', description: 'Description 3',category: 'laptop' },
];

class User{
  firstName;
  lastName;
  email;
  password;

  constructor(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

const users = [];


app.post('/createUser', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Create a new user with the provided data
  //const user = user.find((user) => user.username === username && user.password === password);
  const newUser = new User(firstName,lastName,email,password);
  users.push(newUser);
  res.status(200).json({ message: 'User registered successfully' });
 });


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user with the provided credentials
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    // Create a payload object with user data
    const payload = {
      email: user.email // Include user-specific data as needed
     
    };
    const token = jwt.sign(payload, secretKey);    
    res.status(200).json({ message: 'Login successful', token:token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/loginWithRSA', (req, res) => {
  const { email, password } = req.body;

  // Find the user with the provided credentials
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    // Create a payload object with user data
    const privateKey = fs.readFileSync('private.pem', 'utf8');
      const payload = {
        email: user.email,
        iat: Math.floor(Date.now() / 1000),
        role: 'user',
    };
    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
    res.status(200).json({ message: 'Login successful', token:token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware for authentication
app.use((req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);
  const publicKey = fs.readFileSync('public.pem', 'utf8');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {

    const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256']});
    req.user = decoded;
    console.log("decoded" + decoded);
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
});

// Route to get products by category
app.get('/products', (req, res) => {
  console.log('get');
  const category = req.query.category;
  const filteredProducts = products.filter(product => product.category === category);
  //res.json(filteredProducts);

  //or
  if (filteredProducts.length === 0) {
    // If there are no matching products, respond with a 404 Not Found status code
    res.status(404).json({ message: 'No products found for the given category' });
  } else {
    // If there are matching products, respond with a 200 OK status code
    res.status(200).json(filteredProducts);
  }
});

app.get('/products/pagination', (req, res) => {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const category = req.query.category;
  const filteredProducts = products.filter(product => product.category === category);
  

  const paginatedItems = filteredProducts.slice(startIndex, endIndex);
  res.json(paginatedItems);
});

app.get('/products/pagination/items', (req, res) => {
  
  const category = req.query.category;
  const filteredProducts = products.filter(product => product.category === category);
  
  const totalItems = filteredProducts.length;

  console.log(filteredProducts.length);
  res.json({totalItems});
});

app.put('/products', (req, res) => {

  const productId = parseInt(req.body.id, 10); // Convert the product ID to an integer

  console.log(productId);
  // Find the product to update by its ID (in-memory database)
  const productToUpdate = products.find((product) => product.id === productId);

  if (!productToUpdate) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Update the product with data from the request body
  if (req.body.name) {
    productToUpdate.name = req.body.name;
  }
  if (req.body.description) {
    productToUpdate.description = req.body.description;
  }
  

  return res.json({ message: 'Product updated successfully', product: productToUpdate });

  
});

// Route to add a new product using POST
app.post('/products', (req, res) => {
  const newProduct = req.body; // Assuming request body contains product data

  // Add the new product to the in-memory database
  products.push(newProduct);
  return res.status(201).json(newProduct); // Respond with the added product
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


