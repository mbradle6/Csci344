import {getAccessToken} from './utilities.js';
const rootURL = 'https://photo-app-secured.herokuapp.com';

const showStories = async (token) => {
    const endpoint = `${rootURL}/api/stories`;
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();
    const HTMLChunk = data.map(storiesToHTML).join('');
    document.querySelector('.accounts').innerHTML = HTMLChunk;
}

const showPosts = async (token) => {
    const endpoint = `${rootURL}/api/post`;
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();
    const HTMLSnippit = data.map(postsToHTML).join('');
    document.querySelector('.feed').innerHTML = HTMLSnippit;
}
const postsToHTML = post =>{
    return ` <div class="posttitle">
    <p>${post.user.username}</p>
    <p>...</p>
 </div>
 <img src="${post.user.image_url}" width="100%"/>`
}

const storiesToHTML = story =>{
return  `<div class="story">
    <img class="profilepictures" src="${story.user.thumb_url}" width="50"/>
    <p>${story.user.username}</P>
</div>`

}
const initPage = async () => {
    // first log in (we will build on this after Spring Break):
    const token = await getAccessToken(rootURL, 'webdev', 'password');
    console.log(token);
    // then use the access token provided to access data on the user's behalf
    showStories(token);
    showPosts(token);

    //query for users profile and suggested people
}
// Kicks off the website
initPage();
