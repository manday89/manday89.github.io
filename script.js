/*const postButton = document.getElementById('post-button');*/
const postContent = document.getElementById('post-content');
const postList = document.getElementById('post-list');

postButton.addEventListener('click', () => {
    const content = postContent.value;

    const newTweet = document.createElement('div');
    newTweet.classList.add('tweet');
    newTweet.textContent = postContent;

    const tweetList = document.querySelector('.tweets');
    tweetList.appendChild(newTweet);

    postList.value = '';

    /*if (content.trim() !== '') {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = content;
        postList.appendChild(post);
        postContent.value = '';
    }*/
});
