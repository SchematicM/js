// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let users = fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json());
let posts = fetch('http://jsonplaceholder.typicode.com/posts')
    .then(value => value.json());
let comments = fetch('http://jsonplaceholder.typicode.com/comments')
    .then(value => value.json());

let usersDiv = document.createElement('div');
usersDiv.classList.add('users');
Promise.all([users, posts, comments])
    .then(result => {
        for (const user of result[0]) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            let userINFO = document.createElement('div');
            userINFO.classList.add('user-info');
            let h2 = document.createElement('h2');
            h2.innerText = `${user.id} : ${user.name}`;
            let postButton = document.createElement('button');
            postButton.classList.add('show-hide-posts');
            postButton.innerText = 'Show posts'
            userINFO.append(h2, postButton);
            let postsDiv = document.createElement('div');
            postsDiv.classList.add('posts-titles', 'hide');
            let filteredPosts = result[1].filter(post => post.userId === user.id);
            for (const post of filteredPosts) {
                let postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML += `<h4>${post.title}</h4><p>${post.body}</p>`
                let commentsButton = document.createElement('button');
                commentsButton.classList.add('show-hide-comments');
                commentsButton.innerText = 'Show comments';
                postDiv.appendChild(commentsButton);
                postsDiv.appendChild(postDiv);
                let filteredComments = result[2].filter(comment => post.id === comment.postId);
                let commentsDiv = document.createElement('div');
                commentsDiv.classList.add('comments','hide');
                commentsDiv.innerHTML = `<h3>Comments : </h3>`
                for (const comment of filteredComments) {
                    commentsDiv.innerHTML += `<div class = "comment"><h4>${comment.email} : ${comment.name}</h4>
                                              <p>${comment.body}</p></div>`;
                }
                postDiv.appendChild(commentsDiv);
            }
            userDiv.append(userINFO,postsDiv);
            usersDiv.append(userDiv);
        }
        document.body.appendChild(usersDiv);
    }).then(r => {
    let postsButtons = document.getElementsByClassName('show-hide-posts');
    const postsDiv = document.getElementsByClassName('posts-titles');
    for (let i = 0; i < postsButtons.length; i++) {
        const button = postsButtons[i];
        button.addEventListener('click', function () {
            postsDiv[i].classList.toggle('hide');
            if (button.outerText === 'Hide posts') {
                button.innerText = 'Show posts'
            } else {
                button.innerText = 'Hide posts'
            }
        });
    }
    let commentsButtons = document.getElementsByClassName('show-hide-comments');
    const commentsDiv = document.getElementsByClassName('comments');
    for (let i = 0; i < commentsButtons.length; i++) {
        const button = commentsButtons[i];
        button.addEventListener('click', function () {
            commentsDiv[i].classList.toggle('hide');
            if (button.outerText === 'Hide comments') {
                button.innerText = 'Show comments'
            } else {
                button.innerText = 'Hide comments'
            }
        });
    }
});





