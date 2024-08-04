const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js Application</title>
      <style>
        body {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        header {
          background-color: #808080;
          padding: 20px;
          color: white;
          font-size: 24px;
          font-weight: bold;
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        footer {
          background-color: #808080;
          padding: 20px;
          color: white;
          font-size: 20px;
          font-weight: bold;
        }
        h1 {
          margin: 0;
          font-size: 36px;
        }
        p {
          font-size: 18px;
        }
        a {
          color: #007bff;
          text-decoration: none;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <header>This is the Node.js application</header>
      <main>
        <h1>Welcome to Hypersage Technologies</h1>
        <p><a href="https://www.hypersagetech.com" target="_blank">Visit Hypersage Technologies</a></p>
      </main>
      <footer>
        <h1>Welcome to Hypersage Technologies</h1>
        <p>&copy; 2024 Hypersage Technologies. All rights reserved.</p>
      </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




