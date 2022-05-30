const noteEl = document.querySelector('.notes')
const editBtn = document.querySelector('.edit');
const trashBtn = document.querySelector('.trash');
const main = noteEl.querySelector('.main');
const textArea = noteEl.querySelector('textarea');


// editBtn.addEventListener('click', () => {
//     main.classList.toggle('hidden');
//     textArea.classList.toggle('hidden');
// })

// textArea.addEventListener('input', (e) => {
//     const { value } = e.target;

//     main.innerHTML = marked(value);
// })

// trashBtn.addEventListener('click', () => {
//     const prova = document.getElementById('maina')
//     console.log(prova)
//     prova.innerHTML = "";
// })