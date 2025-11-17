// Base URL 
const baseUrl = "http://localhost:5001/search";

// search parameters
const params = new URLSearchParams({
  keyword: "gardening gloves",
  category: "tools",
  location: "Texas",
  sort: "relevance",
  page: "1",
  pageSize: "10"
});

// Builds the full request 
const url = baseUrl + "?" + params.toString();