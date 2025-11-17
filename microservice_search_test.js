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

// SEND the request using fetch() 
fetch(url)
  // The response comes back here
  .then((response) => {
    console.log("HTTP status:", response.status);

    return response.json();
  })

  // JSON data 
  .then((data) => {
    console.log("\nFull JSON Response:");
    console.log(JSON.stringify(data, null, 2));

    console.log("\nItem Titles:");
    data.items.forEach((item) => console.log("- " + item.title));

    if (data.items.length === 0) {
      console.log("No results found.");
    }
  })

  // Prints error msg if request
  .catch((error) => {
    console.error("Error calling Search Microservice:", error);
  });