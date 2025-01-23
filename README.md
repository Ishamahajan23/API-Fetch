# API-Fetch
# OMDB Movie Search Application

## Overview
This is a simple web application that allows users to search for movies using the OMDB API. The application fetches movie data based on user input and displays the results, including movie titles, release years, and posters. Users can also navigate between pages of results using next and previous buttons.

## Features
- Search for movies by title.
- View movie details including:
  - Title
  - Release year
  - Poster
- Pagination to navigate through multiple pages of search results.
- Error handling for missing data or invalid responses.

## Setup

### Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- A text editor (e.g., VS Code).
- API key for OMDB (included in the code: `aa93e333`).

### Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/omdb-movie-search.git
   ```

2. Navigate to the project folder:
   ```bash
   cd omdb-movie-search
   ```

3. Open the project in your favorite code editor.

4. Open the `index.html` file in your browser to run the application.

## Usage

1. Enter a movie title in the search bar and click the "Search" button.
2. The application will fetch and display movies matching the search query.
3. Use the "Next" and "Previous" buttons to navigate through the results.

## Code Explanation

### Key Functions

#### 1. `changePage(direction)`
Handles pagination by incrementing or decrementing the `pageNum` variable and fetching movie data for the specified page.

#### 2. `displayMovie(data)`
Takes an array of movie data and dynamically creates and displays movie cards in the `.details` container.

#### 3. `searchBar(value, pageNum)`
Fetches movies based on the user's search input and the current page number.

### Event Listeners

- A click event listener is added to the search button (`#Sbutton`) to trigger the `searchBar` function with the user's input.

### API
The application uses the OMDB API to fetch movie data. The base URL and API key are:
```javascript
let APIkey = "aa93e333";
let url = `http://www.omdbapi.com/?apikey=${APIkey}`;
```

### Error Handling
- Displays a message or logs errors when the API response is invalid or when no data is found.

## File Structure
```
project-folder/
|-- index.html        // Main HTML file
|-- styles.css        // CSS styles (if applicable)
|-- script.js         // JavaScript logic
```

## Example Output
- Movie title: "Inception"
- Year: "2010"
- Poster: [Poster image]

## Improvements
Future enhancements could include:
- Adding a loading spinner while fetching data.
- Improving error messages for better user feedback.
- Supporting advanced search features (e.g., filtering by year or type).

## License
This project is licensed under the MIT License. Feel free to use and modify the code as needed.
