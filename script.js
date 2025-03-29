    // JavaScript for Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

 /*   // Search box toggle
    const searchIcon = document.querySelector('.search-box i');
    const searchBox = document.querySelector('.search-box');
    
    searchIcon.addEventListener('click', function() {
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchBox.querySelector('input').focus();
        }
    });
*/

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Slider controls
    const sliderControls = document.querySelectorAll('.slider-control');
    
    sliderControls.forEach(control => {
        control.addEventListener('click', function() {
            const direction = this.classList.contains('left') ? -1 : 1;
            const row = this.parentElement.querySelector('.movie-row');
            const scrollAmount = row.offsetWidth * 0.7 * direction;
            row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });

    // Movie modal
    const movieTiles = document.querySelectorAll('.movie-tile');
    const movieModal = document.getElementById('movieModal');
    const closeModal = document.querySelector('.close-modal');
    const moreInfoBtn = document.querySelector('.btn-more-info');
    
    function openModal() {
        movieModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModalFunc() {
        movieModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    movieTiles.forEach(tile => {
        tile.addEventListener('click', openModal);
    });
    
    moreInfoBtn.addEventListener('click', openModal);
    
    closeModal.addEventListener('click', closeModalFunc);
    
    window.addEventListener('click', function(event) {
        if (event.target == movieModal) {
            closeModalFunc();
        }
    });

    // Prevent movie tile clicks from triggering when clicking buttons inside overlay
    const tileButtons = document.querySelectorAll('.tile-buttons button');
    tileButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    // Search Functionality
const searchBox = document.querySelector('.search-box');
const searchIcon = searchBox.querySelector('i');
const searchInput = searchBox.querySelector('input');
const searchResults = document.createElement('div');
searchResults.classList.add('search-results');
searchBox.appendChild(searchResults);

// List of Movies that appear in search function
const movies = [
    { title: 'Ghostbusters : Afterlife', id: 'ghostbusters', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#b0t1V2I0c0pObkhIZ3k5YVBFMWVwNXVqM3RmcERObGUyQzR0emFzR1hjRnB0WVdBUTdZSUtaYnFjY1dJRW5RM2ZxdHJPT3BiZ3drPQ' },
    { title: 'Dr. Strange in The Multiverse of Madness', id : 'drstrange', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#TEkwWGsvNjhkcTBEWDZCZzQzbHF1SnR6TlpRcWJmMDhGOTVHRzhQcjVCbkdGVHRyeWlvRTFKNWtGbUdja1lSNzl2ZS9QUjlSTFRNPQ' },
    { title: 'Interstellar', id: 'interstellar', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#eEVOR3h2MHVodEdnbytkbUY1R0FYSTdZczNvOGdmUERRZG1IRkJTUkh6NDNPRS9WZC9DdlJtWUZuTk90REtXUE1Jcz0' },
    { title: 'Sherlock Holmes', id: 'sherlockholmes', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#ems1ZUFnTHAyT0hWZDNLTTJzVjFna01mNEVMWTEvcmNrelVVbWlzOHhzcURUeW9hUmh3bVlYVk94Um92WFJZNHpVZz0' },
    { title: 'The Avengers', id: 'theavengers', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#a09LTFJ2dXdITk43NVFCNVdhMW85U3NJU1BPMkcrK1VYZkF2ZVNLTDVRb1NpZnJvTWpEdkZvQUdEWlVBVHcxcTNDZz0' },
    { title: 'Red One', id: 'redone', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#Sno1eWMzbUo5YTc5SnlSYUpYY1ZyOHc0R1dsdXNsOVRyM0xQTld3Mk5WWmw1Rm1vNmlES0VCc0xSK21sbFZKL0k0anVHWDNIQVlzPQ' },
    { title: 'Mufasa : The Lion King', id: 'thelionking', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#M040eUVoNGlDV3BJWCtZK1hOdFFCNENZbnh5clNQSG9CR25kUzM0QW9tQ1dURVpZSk83eGQzd3lNaUgwMFA0SHdpRmRKZnduRm5rPQ' },
    { title: 'Avatar', id: 'avatar', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#aDJpZjY3L3hkQVBsdVNaV0J5N0VWWDZPRWhLWkJJUEUzMkE2MU51T2RSak1WdTh4cko2QW0zcjMyeVdpZThtRmtNaz0' },
    { title: 'High School Musical', id: 'highschoolmusical', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#dHlZektmcjZ0ak9qYUhkVndUU1F2SWJ2SnZtZ2ZLWnlzb3cvR2VrQUdxM3NVd2RvU2JCWEJCdmxhaUZOdzFNT0wrVT0' },
    { title: 'Apocalypse Z: The Beginning of the End', id: 'apocalypsez', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#Wno3UWh3ZGtCZEF0ZWJTYkxTVmQzYm85c242VFhHckUyQ3NVMlkvTk1aeGNWSG1vWTJod0V3aHQ4SDRFQjRIVUVyY29QMnMrY2h3PQ' },
    { title: 'Max', id: 'max', externalUrl: 'https://mcloud.vvid30c.site/watch/?v11#dmM2NTR6ZWNvTndxd3ZoRnQwa3Vrdkd5NWI1SXIvcUhoeklWc1B5QnhlV2dPUXQ3UTV4eXhtSnMvelMydnNSeG5RWT0' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' },
    { title: '', id: '', externalUrl: '' }
];

searchIcon.addEventListener('click', function () {
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
        searchInput.focus();
    }
});

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query === '') {
        searchResults.style.display = 'none';
        return;
    }

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

    if (filteredMovies.length > 0) {
        searchResults.style.display = 'block';
        filteredMovies.forEach(movie => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');

            // Create a clickable hyperlink
            const link = document.createElement('a');
            link.textContent = movie.title;
            link.style.textDecoration = 'none'; // Optional: Remove underline
            link.style.color = 'inherit'; // Optional: Keep default text color

            // Check if the movie has an external URL or an internal page
            if (movie.externalUrl) {
                link.href = movie.externalUrl; // External website
                link.target = '_self'; // Open in a new tab
                link.rel = 'noopener noreferrer';
            } else {
                link.href = `movie-detail.html?id=${movie.id}`; // Internal page
            }

            resultItem.appendChild(link);
            searchResults.appendChild(resultItem);
        });
    } else {
        searchResults.style.display = 'none';
    }
});

// Close search when clicking outside
document.addEventListener('click', function (event) {
    if (!searchBox.contains(event.target)) {
        searchBox.classList.remove('active');
        searchResults.style.display = 'none';
    }
});