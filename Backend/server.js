const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Enable CORS for all routes (adjust the options as needed for your environment)
app.use(cors());

app.use(bodyParser.json()); // Parse JSON request bodies

// Sample data for products
const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' ,category:"mobile"},
  { id: 2, name: 'Product 2', description: 'Description 2' ,category:"mobile"},
  { id: 3, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
  { id: 4, name: 'Product 4', description: 'Description 3',category: 'furniture' },
];

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
