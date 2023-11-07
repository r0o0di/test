import episodes from './anime-episodes.js';
import episodesData from './episodes-data.js';

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clearButton = document.querySelector(".clear");
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');
let animationInProgress = false;

// when the icon is clicked, ...
icon.onclick = function open() {
  // if animation is in progress, which means if the search field is opening,..
  if (!animationInProgress) {
    animationInProgress = true;
    setTimeout(function () {
      if (search.classList.contains("active")) {
        searchInput.value = "";
        resultsContainer.innerHTML = "";
        searchInput.blur();
      }

      // add "active" class to expand search field 
      search.classList.toggle("active");
      if (search.classList.contains("active")) {
        setTimeout(function () {
          // if the "active" class is there, focus on the search input to allow user to type immedeatly without having to click search field
          searchInput.focus();
          animationInProgress = false;
        }, 500); // only start focusing after 5000 milliseconds, which is the time it take for the search field to open
      } else {
        // if the "active" class isnt there, blur the search input to remove focus
        searchInput.blur();
        animationInProgress = false;
      }
    }, 0); // 0 is the time needed for the search field to open/close after getting clicked

  }
};

// when clear button is clicked, clear the input or close the search field
clearButton.onclick = function clearInput() {
  if (searchInput.value === '') {
    // if search input is empty, close the search field by removing the "active" class
    search.classList.remove("active");
  } else {
    // if search input is not empty, just delete the search input
    searchInput.value = '';
    resultsContainer.innerHTML = '';
    searchInput.focus();
  }
}

document.addEventListener('click', function (event) {
  // if the click target is not the search bar or its child elements
  if (!search.contains(event.target) && search !== event.target) {
    // close the search field by removing the "active" class
    search.classList.remove("active");
    searchInput.value = '';
    resultsContainer.innerHTML = '';
  }
});


// listen for user input in the search field
searchInput.addEventListener('input', () => {
  let query = searchInput.value.trim().toLowerCase();
  if (query.length === 0) {
    resultsContainer.innerHTML = '';
  } else {
    // filter the episodes to match user's input
    const filteredResults = filterEpisodes(query);
    // display the filtered results.
    displayResults(filteredResults);
  }
});

// filter the episodes to match user's input
function filterEpisodes(query) {
  return episodes.filter(episode =>
    episode.title.toLowerCase().includes(query) ||
    episode.id.toLowerCase().includes(query)
  );
}

// display results
function displayResults(results) {
  resultsContainer.innerHTML = '';
  if (results.length === 0) {
    // if users' input doesn't match results, display an error message
    const noMatch = document.createElement("p");
    noMatch.textContent = "No matching episodes found";
    noMatch.setAttribute('class', 'no-match');
    resultsContainer.appendChild(noMatch);
  } else {
    // Get the total number of results
    const totalResults = results.length;

    // Loop through the results and create elements
    results.forEach((result, index) => {
      const link = document.createElement('a');
      link.href = `#${result.id}`;
      link.textContent = result.title;
      link.addEventListener('click', () => scrollToEpisode(result.id));
      link.classList.add('results');
      resultsContainer.appendChild(link);

      // check if this is not the last result, then add <hr>
      if (index < totalResults - 1) {
        const line = document.createElement("hr");
        resultsContainer.appendChild(line);
      }
    });
  }
}











function captionUpdate() {
  const caption = document.querySelectorAll("caption");
  caption.forEach(caption => {
    const captionClass = caption.classList[0];
    const epId = episodes.find(episode => episode.id === captionClass);

    if (epId) {
      const newTitle = document.createElement("h2");
      newTitle.textContent = epId.title;
      // Clear the content of the caption before adding the h2 element
      caption.innerHTML = "";
      caption.appendChild(newTitle);
    }
  });
}

captionUpdate();










// track the current page
let currentPage = 1;
const totalPages = 4; // Update this as you add more pages

function switchToPage(pageNumber) {
  currentPage = pageNumber;
  showPage(currentPage);
}

// show the current page and hide others
function showPage(pageNumber) {
  for (let i = 1; i <= totalPages; i++) {
    const page = document.getElementById('page' + i);
    if (i === pageNumber) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  }
}

// "Next" button
document.getElementById('next').addEventListener('click', function () {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});

//  "Previous" button
document.getElementById('prev').addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

// Initialize by showing the first page
showPage(currentPage);

// Function to extract page number from episode ID
function getPageNumber(episodeId) {
  if (episodeId >= 1 && episodeId < 100) {
    return 1;
  } else if (episodeId >= 100 && episodeId < 200) {
    return 2;
  } else if (episodeId >= 200 && episodeId < 300) {
    return 3;
  } else if (episodeId >= 300 && episodeId < 400) {
    return 4;
  } else if (episodeId >= 400 && episodeId < 500) {
    return 5;
  }
  // Add more conditions for additional pages as needed
}   


// ...

// Event listener for search result clicks
resultsContainer.addEventListener('click', function (event) {
  const clickedElement = event.target;

  // Check if the clicked element is an <a> tag with a result class
  if (clickedElement.tagName === 'A' && clickedElement.classList.contains('results')) {
    // Extract the episode ID from the link's href
    const episodeId = parseInt(clickedElement.getAttribute('href').replace('#', ''));

    // Determine the page number for the clicked episode
    const pageNumber = getPageNumber(episodeId);

    // Switch to the corresponding page
    switchToPage(pageNumber);
  }
});


// Function to handle search input
function handleSearchInput() {
  let query = searchInput.value.trim().toLowerCase();
  if (query.length === 0) {
    resultsContainer.innerHTML = '';
    // When the search input is cleared, return to the first page
    switchToPage(1);
  } else {
    const filteredResults = filterEpisodes(query);
    displayResults(filteredResults);
  }
}

// Update the event listener for search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize by showing the first page
showPage(currentPage);












// lazy load images
function lazyLoad() {
  const images = document.querySelectorAll("img");

  images.forEach(img => {
    img.setAttribute("loading", "lazy");
    document.body.appendChild(img);
  });
}

lazyLoad();



































































function generateEpisodeTable(episodeNumber) {
  const episode = episodesData[episodeNumber];

  if (episode) {
    const table = document.createElement("table");
    table.id = episode.id;
    table.classList.add("lazy-load");

    // Creating table headers
    const tableHeaders = ["Timestamp", "JP Title", "RMJ Title", "EN Title", "OST"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    tableHeaders.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Adding table data
    const tbody = document.createElement("tbody");
    episode.data.forEach(rowData => {
      const row = document.createElement("tr");
      rowData.forEach(cellData => {
        const td = document.createElement("td");
        td.textContent = cellData;
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Create caption and append it to the table
    const caption = document.createElement("caption");
    caption.classList.add(episode.id);
    const epId = episodes.find(ep => ep.id === episode.id);

    if (epId) {
      const newTitle = document.createElement("h2");
      newTitle.textContent = epId.title;
      caption.appendChild(newTitle);
    }

    table.appendChild(caption);

    // Get the page number for the current episode
    const pageNumber = getPageNumber(Number(episode.id));

    // Append the table to the corresponding page
    const tableContainer = document.getElementById(`page${pageNumber}`);
    if (tableContainer) {
      tableContainer.querySelector('.table-container').appendChild(table);
    }
  }
}



function generateAllTables() {
  episodesData.forEach((episode, index) => {
    generateEpisodeTable(index);
  });
}

// Call the function to generate all the episode tables
generateAllTables();



















// Get all elements you want to lazy load
const lazyElements = document.querySelectorAll('.lazy-load');

// Function to check if the element is in the viewport
function lazyLoadContent() {
  lazyElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0 && rect.left < window.innerWidth && rect.right >= 0) {
      // If the element is in the viewport, load its content
      element.classList.add('visible');
    }
  });
}

// Run the lazy load function on page load and scroll
document.addEventListener('DOMContentLoaded', lazyLoadContent);
window.addEventListener('scroll', lazyLoadContent);

