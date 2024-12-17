// fetch('navbar.html')
//     .then(response =>
//         response.text())
//             .then(navbarHtml => {
//                 document.body.innerHTML += navbarHtml;
//             })



// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('toggleBtn');
//     const div = document.getElementById('toggle_div');

//     if (button && div) {
//         button.addEventListener('click', () => {
//             div.classList.toggle('hidden');
//         });
//     } else {
//         console.error('Button or div not found in the DOM');
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleBtn');
    const div = document.getElementById('toggle_div');

    if (button && div) {
        button.addEventListener('click', () => {
            div.classList.toggle('hidden');
        });
    } else {
        console.error('Button or div not found');
    }
});


   
// fetch('navbar.html')
//     .then(response => response.text())
//     .then(navbarHtml => {
//         document.body.insertAdjacentHTML('afterbegin', navbarHtml); // Inserts the navbar at the very beginning of <body>
//     })
//     .catch(error => console.error('Error loading navbar:', error));


   
 fetch('footer.html')
    .then(response =>
        response.text())
            .then(navbarHtml => {
                document.body.innerHTML += navbarHtml;
            })




///
const toggleBtn = document.getElementById('toggleBtn');
// const toggleDiv = document.getElementById('toggle_div');

// toggleBtn.addEventListener('click', () => {
//   toggleDiv.classList.toggle('hidden');
// });

toggleBtn.addEventListener('click', () => {
    alert('toggle clicked')
})

