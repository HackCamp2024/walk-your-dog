// server.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = 5000;

app.get("/fitness-api", async (req, res) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  try {
    const response = await fetch(
      `https://fitness.googleapis.com/fitness/v1/users/me/dataset:aggregate?access_token${accessToken}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: "Failed to fetch from Google API" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
