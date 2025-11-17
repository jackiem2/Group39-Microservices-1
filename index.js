// express server setup
const express = require("express");
const app = express();
const PORT = 5001;

// sample data from Assignment 6: Sprint 2 Plan 
const SAMPLE_ITEMS = [
  {
    id: "item-001",
    title: "Gardening Gloves",
    category: "tools",
    location: "Texas",
    description: "Gardening gloves for gardening.",
    lastUpdated: "2025-11-13T10:15:00Z"
  }
];

// GET Request route for search
app.get("/", (req, res) => {
  res.send("Search Microservice is running. Use /search to make a request.");
});

app.get("/search", (req, res) => {

  // Pull values from the query (keyword, filters, etc.)
  const {
    keyword,
    category = null,
    location = null,
    sort = "relevance",
    page = "1",
    pageSize = "10"
  } = req.query;

  // If no keyword is given, show error msg
  if (!keyword) {
    return res.status(400).json({
      error: "Missing required query parameter 'keyword'"
    });
  }
   // This allows filters for a refined search
   let results = SAMPLE_ITEMS.filter((item) => {
    const matchKeyword = item.title.toLowerCase().includes(keyword.toLowerCase());
    const matchCategory = !category || item.category === category;
    const matchLocation = !location || item.location === location;
    return matchKeyword && matchCategory && matchLocation;
  });

  // Sorts search results by date
  if (sort === "recent") {
    results = results.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
  }

  // Displays pages and page number
  const p = parseInt(page, 10);
  const size = parseInt(pageSize, 10);
  const start = (p - 1) * size;

// Shows search response
  const response = {
    keyword,
    category,
    location,
    sort,
    page: p,
    pageSize: size,
    totalResults: results.length,
    hasMore: start + size < results.length,
    items: results.slice(start, start + size)
  };

  res.json(response);

});

app.listen(PORT, () => {
  console.log(`Search Microservice running on http://localhost:${PORT}`);
});