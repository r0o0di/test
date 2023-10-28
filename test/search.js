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
        setTimeout( function () {
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
    }, 500);
        
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

document.addEventListener('click', function(event) {
    // if the click target is not the search bar or its child elements
    if (!search.contains(event.target) && search !== event.target) {
        // close the search field by removing the "active" class
        search.classList.remove("active");
        searchInput.value = '';
        resultsContainer.innerHTML = '';
    }
});

const episodes = [
    { id: '1', title: 'Episode 1: The Adventure Begins and the murder case' },
    { id: '2', title: 'Episode 2: The Journey continues' },
];

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
        // if users input doesnt match results, display error message
        const noMatch = document.createElement("p");
        noMatch.textContent = "No matching episodes found";
        noMatch.setAttribute('class', 'no-match');
        resultsContainer.appendChild(noMatch);
    } else {
        // display each mathcing result as following:
        results.forEach(result => {
            const link = document.createElement('a');
            link.href = `#${result.id}`;
            link.textContent = result.title;
            link.addEventListener('click', () => scrollToEpisode(result.id));
            link.classList.add('results');
            resultsContainer.appendChild(link);

            // create <hr> to seperate each result
            const line = document.createElement("hr");
            resultsContainer.appendChild(line);
        });
    }
}













