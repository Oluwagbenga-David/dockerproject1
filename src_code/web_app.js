const express = require('express');
const app = express();

// Define the HTML content with CSS styling
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Engineer Home</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .message {
            text-align: center;
            color: #2c3e50;
            font-size: 24px;
            padding: 20px;
            border-radius: 10px;
            background-color: #ecf0f1;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="message">
        Welcome to the home of a DevOps Engineer!
    </div>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(htmlContent); 
});

app.listen(9900, () => {
    console.log("app listening on port 9900");
});
