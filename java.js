// Mai Variables
let theInput = document.querySelector('input');
let getButton = document.querySelector('.get-button')
let reposData  = document.querySelector('.show-data')


getButton.onclick = function () {
    getRepos();
}

// Get Repos function
function getRepos() {
    if (theInput.value === ''){
        alert('Please Write Github Username');

        // reposData.innerHTML = '<span> Please Write Github Username </span>'
    }else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`).then((response) => response.json())
        .then((repositories) => {

            // Empty the container
            reposData.innerHTML = '';

            repositories.forEach(repo => {
                // Create div to Repos Name
                let mainDiv = document.createElement('div');
                //Append text to Div
                mainDiv.appendChild(document.createTextNode(repo.name));

                // Create Url Repo
                let theUrl = document.createElement('a');
                //Append text to url
                theUrl.appendChild(document.createTextNode('Visit'));

                // add href link to repo
                theUrl.href = `${repo.html_url}`;  // theUrl.href = `https://github.com/${theInput.value}/${repo.name}`; 
                // Open in new page
                theUrl.target = '_blank';
                
                // Add the url to div
                mainDiv.appendChild(theUrl);

                // Create the Stars Count span 
                let starsSpan = document.createElement('span');
                // Append Stars Count Text  To Stars Span
                starsSpan.appendChild(document.createTextNode(`${repo.stargazers_count}`));
                
                // Add the Stars Span to div
                mainDiv.appendChild(starsSpan);

                // Add Class To Div
                mainDiv.className = 'repo-box';
                // Add the div to repoData
                reposData.appendChild(mainDiv);
            });

        })
    }
}
