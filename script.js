
document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch live scores from OpenFootball API
    function fetchLiveScores() {
        const apiKey = 'your_api_key'; // Replace 'your_api_key' with your actual API key
        const apiUrl = `https://v3.football.api-sports.io/fixtures?live=all`;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            displayLiveScores(data.response);
        })
        .catch(error => console.error('Error fetching live scores:', error));
    }

    // Function to display live scores
    function displayLiveScores(scores) {
        const liveScoresContainer = document.getElementById('live-scores-container');
        liveScoresContainer.innerHTML = '';
        scores.forEach(score => {
            const scoreElement = document.createElement('div');
            scoreElement.classList.add('score');
            scoreElement.innerHTML = `
                <p>${score.teams.home.name} vs ${score.teams.away.name}</p>
                <p>${score.score.fulltime}</p>
                <p>${score.fixture.status.short}</p>
            `;
            liveScoresContainer.appendChild(scoreElement);
        });
    }

    // Call function to fetch live scores
    fetchLiveScores();
});
