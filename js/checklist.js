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
        commentContainer.appendChild(commentDiv)
    })

}
const comment = document.getElementsByClassName('comment');
console.log(comment)
comments();