const loadQuates = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(quates => showQuates(quates))
}
// loadQuates();
const showQuates =data => {
    const quates = document.getElementById('quate');
    quates.innerText = data?.quote;
}
