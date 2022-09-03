const comments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayCommens(data))
}

const displayCommens = (data) =>{
    const commentContainer = document.getElementById('comment-container');
    const comment = data.forEach(comment => {
        // console.log(comment)
        const commentDiv = document.createElement('div');
        
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
        <h2>Name:${comment.name}</h2>
        <p>email:${comment.email}</p>
        <p>email:${comment.body}</p>
        `
        // commentContainer.appendChild(commentDiv)
    })

}
const comment = document.getElementsByClassName('comment');
console.log(comment)
comments();

const users = () => {
    fetch(`https://randomuser.me/api/?results=500`)
    .then(res => res.json())
    .then(data => displayUsers(data.results))
    .catch(error => console.log(error))
} 

const displayUsers = (data) =>{
    const userContainer = document.getElementById('user-container');
    const user = data.forEach(user => {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('col');
        userDiv.innerHTML =`
        <div class="card h-100">
                <img src="${user.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name: ${user.name.first} ${user.name.first}</h5>
                  <p class="card-text">Location: ${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                </div>
              </div>
        `
        userContainer.appendChild(userDiv)
    })
}
users();
/* country
: 
"Mexico"
postcode
: 
22753
state
: 
"Baja California Sur" */