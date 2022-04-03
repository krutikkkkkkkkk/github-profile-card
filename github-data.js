const githubUser = document.getElementById("github-card")
const githubUsername = githubUser.getAttribute("data-github-username")
const cardColor = githubUser.getAttribute("data-card-color")
console.log(cardColor)
let info = ""
const gcardstyle = `
<style>
body{
    height: 100vh;
    display: grid;
    place-items: center;
}
.gcard{
    height: fit-content;
    width: 225px;
    background-color: #000;
    border: 10px solid ${cardColor};
    border-radius: 20px;
    position: relative;
    color: #fff;
    font-family: sans-serif;
    padding-bottom: 1rem;
    
}
.gcard > *> * {
    margin: 0px;
}
.gpfp{
    position: absolute;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 5px solid ${cardColor};
    right: 5%;
    top: 20%;
}
.gcontent{
    padding: 10px;
    padding-top: 0px;
}
.gname{
    color: #fff;
    font-family: sans-serif;
    margin-left: 10px;
}
.grepos{
    margin-left: 10px;
    margin-top: -25px;
}
.gcolor{
    color: ${cardColor};
}
.grepon{
    font-size: 60px;
    font-weight: bolder;
}
.grepository{
    margin-top: -1rem;
}
.gfollows{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: -1rem;
}
.ggit{
    margin-left: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
}
.gbio{
    font-size: 14px;
}
.gcard > *>*>a{
    color: #fff;
}
.gcard > *>*>a:visited{
    color: #fff;
}
.gweb{
    margin-top: 10px;
}

</style>`

let githubAPI  = `https://api.github.com/users/${githubUsername}`

fetch(githubAPI)
.then(response => response.json())
.then(data=> {
console.log(data)

let pfp = data.avatar_url;
let gname = data.name;
let gfollowers = data.followers;
let gfollowings = data.following;
let gbio = data.bio;
let grepos = data.public_repos;
let gwebsite = data.blog



info = `
<img src="${pfp}" alt="" class="gpfp">
<div class="gcontent">
    <div class="ggit">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2438 10.2562 29.2313C11.0062 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8063 6.225 23.9625C6.05625 23.5313 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8688 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6563 10.4813 24.0188 11.3438 23.625C11.475 22.65 11.8687 21.9938 12.3 21.6188C8.9625 21.2438 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6563 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2438 17.7563 21.6188C18.3 22.0875 18.7688 22.9875 18.7688 24.3938C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0313 29.3813 19.7813 29.2313C22.7592 28.2262 25.3469 26.3125 27.18 23.7595C29.0132 21.2066 29.9995 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="white"/>
        </svg>
        <h4 class="gname">${gname}</h4>
        </div>
     <div class="grepos">
        <h1 class="grepon">${grepos}</h1>
        <h5 class="gcolor grepository">Public Repository</h5>

     </div>
     <hr>
     <div class="gfollows">
         <h5 class="gfollowers"><span class="gcolor">Followers:</span> ${gfollowers}</h5>
         <h5 class="gfollowings"><span class="gcolor">Followings:</span> ${gfollowings}</h5>
     </div>
     <h6><span class="gcolor gbio">Bio:</span>${gbio}</h6>
     <h6 class="gweb"><span class="gcolor gbio">Website:</span><a  href="${gwebsite}">${gwebsite}</a></h6>
</div>

            `
            displayCard()
     

})
.catch(err => console.log(err))


function displayCard(){
    document.querySelector(".gcard").innerHTML = info + gcardstyle;
}