const randomUser = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => showUsers(data.results))
}
const showUsers = (data) => {
    console.log(data)
    const userContainer = document.getElementById('users-container');
    for(const user of data){
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML =`
        <h2>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <p>Email: ${user.email}</p>
        <p>location:${user.location.city} ${user.location.country}</p>
        `
        userContainer.appendChild(userDiv)
    }
}
randomUser()