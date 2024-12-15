// fetch('navbar.html')
//     .then(response =>
//         response.text())
//             .then(navbarHtml => {
//                 document.body.innerHTML += navbarHtml;
//             })
    
   
fetch('navbar.html')
    .then(response => response.text())
    .then(navbarHtml => {
        document.body.insertAdjacentHTML('afterbegin', navbarHtml); // Inserts the navbar at the very beginning of <body>
    })
    .catch(error => console.error('Error loading navbar:', error));


   
 fetch('footer.html')
    .then(response =>
        response.text())
            .then(navbarHtml => {
                document.body.innerHTML += navbarHtml;
            })