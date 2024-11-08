document.getElementById("jokeButton").addEventListener("click", getJoke);

function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("jokeDisplay").innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            document.getElementById("jokeDisplay").innerText = "Oops! Something went wrong.";
            console.error("Error fetching joke:", error);
        });
}

