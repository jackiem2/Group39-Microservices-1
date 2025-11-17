# Microservice #1 : Search Microserivce
## Overview
This microservice lets users search for items in the app using keywords or filters.

**User Story**

> As a user browsing the app
> I want to seach by using keywords or filters
> So that I can find what I need

## 1. How to Programmatically REQUEST Data

###  HTTP Method and Endpoint

- **Method:** `GET`  
- **Base URL (local development):**

```text
http://localhost:5001
```
## 2. How to Programmatically RECEIVE Data

When another program sends a valid request to the Search Microservice, the service responds with a JSON object.  
This JSON structure allows users to easily display results, check number of pages, and detect when no results exist.

### Example JSON object

```json
{
  "keyword": "gardening gloves",
  "category": "tools",
  "location": "Texas",
  "sort": "relevance",
  "page": 1,
  "pageSize": 10,
  "totalResults": 24,
  "hasMore": true,
  "items": [
    {
      "id": "item-001",
      "title": "Gardening Gloves",
      "category": "tools",
      "location": "Texas",
      "description": "Gardening gloves for gardening.",
      "lastUpdated": "2025-11-13T10:15:00Z"
    }
  ]
}
```