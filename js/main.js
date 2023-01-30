//variable
let input = document.querySelector("input");
let button = document.querySelector(".get-button");
let showdata = document.querySelector(".show-data");

//action 
button.onclick = function getRepos() {

    if (input.value == '') {
        showdata.innerHTML = `<span>Please write Github Username</span>`
    } else {
        fetch(`https://api.github.com/users/${input.value}/repos`).then(
            (result) => {
                return result.json();
            }
        ).then(
            (data) => {
                //empty the container
                showdata.innerHTML = '';
                //loop to data
                data.forEach((e) => {
                    //create div 
                    let div = document.createElement("div");
                    //create text
                    let text = document.createTextNode(e.name);
                    //add text to div
                    div.appendChild(text);
                    //create url repo
                    let Url = document.createElement("a");
                    //create text of url
                    let UrlText = document.createTextNode("visit");
                    //add urltext to url
                    Url.appendChild(UrlText);
                    //add link to Url
                    Url.href = `https://github.com/${input.value}/${e.name}`;
                    //set attrabute blank
                    Url.setAttribute("target", "_blank");
                    //add Url to div
                    div.appendChild(Url);

                    //create stars count span
                    let stars = document.createElement("span");
                    //create starstext
                    let starsText = document.createTextNode(`Stars ${e.stargazers_count}`);
                    //add starsText to stars span
                    stars.appendChild(starsText);

                    //add stars to div
                    div.appendChild(stars);
                    //add class to main div 
                    div.classList.add("repo-box");
                    //add div to showdata container
                    showdata.appendChild(div);



                });
            }
        )



    }

}