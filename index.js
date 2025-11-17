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
