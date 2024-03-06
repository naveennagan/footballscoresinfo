document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch live scores from Football Data API
    function fetchLiveScores() {
        const apiKey = 'a4a974d4c4f94e1bb6e800d40076c3ae'; // Your API key
        const apiUrl = `https://api.football-data.org/v2/matches?status=LIVE`;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Auth-Token': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            displayLiveScores(data.matches);
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
                <p>${score.homeTeam.name} vs ${score.awayTeam.name}</p>
                <p>${score.score.fullTime.homeTeam} - ${score.score.fullTime.awayTeam}</p>
               
