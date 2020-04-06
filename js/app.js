
const projectDiv = document.getElementsByClassName('project');
const popUp = document.createElement("div");
popUp.classList.add("pop-up");

const popUpHeading = document.createElement('h3');
popUpHeading.classList.add("site");

const anchor = document.createElement('a');
anchor.classList.add('anchor');
popUpHeading.appendChild(anchor);

const popUpHeading2 = document.createElement('h3');
popUpHeading2.classList.add("site");

const anchor2 = document.createElement('a');
anchor2.classList.add('anchor');
popUpHeading2.appendChild(anchor2);

popUp.appendChild(popUpHeading);
popUp.appendChild(popUpHeading2);



for (let i = 0; i < projectDiv.length; i++ ) {
    projectDiv[i].addEventListener('mouseover', () => {

        if (projectDiv[i] === projectDiv[0]) {

            anchor.setAttribute('href', 'https://OcToCaTDaNcE.github.io/fLashEsOfLightIntime/');
            anchor.setAttribute('target', '_blank');
            anchor.textContent = `
                Website
            `;

            anchor2.setAttribute('href', 'https://github.com/OcToCaTDaNcE/fLashEsOfLightIntime');
            anchor2.setAttribute('target', '_blank');
            //anchor.setAttribute('class', 'fillIntheHoleInMyHeart');
            anchor2.textContent = "Computer code";

            projectDiv[i].appendChild(popUp);
        }

        if (projectDiv[i] === projectDiv[1]) {

            anchor.setAttribute('href', 'https://OcToCaTDaNcE.github.io/sTranGEfutURiCY/');
            anchor.setAttribute('target', '_blank');
            anchor.textContent = `
                Website
            `;

            anchor2.setAttribute('href', 'https://github.com/OcToCaTDaNcE/sTranGEfutURiCY');
            anchor2.setAttribute('target', '_blank');
            anchor2.textContent = "Computer Code";

            projectDiv[i].appendChild(popUp);
        }

        if (projectDiv[i] === projectDiv[2]) {

            anchor.setAttribute('href', 'https://OcToCaTDaNcE.github.io/TheyreAREstillAliens/');
            anchor.setAttribute('target', '_blank');
            anchor.textContent = `
                Website
            `;

            anchor2.setAttribute('href', 'https://github.com/OcToCaTDaNcE/TheyreAREstillAliens');
            anchor2.setAttribute('target', '_blank');
            anchor2.textContent = "Computer Code";

            projectDiv[i].appendChild(popUp);
        }

        if (projectDiv[i] === projectDiv[3]) {

            anchor.setAttribute('href', 'https://OcToCaTDaNcE.github.io/legendary-umbrella/');
            anchor.setAttribute('target', '_blank');
            anchor.textContent = `
                Website
            `;

            anchor2.setAttribute('href', 'https://github.com/OcToCaTDaNcE/legendary-umbrella');
            anchor2.setAttribute('target', '_blank');
            anchor2.textContent = "Computer Code";

            projectDiv[i].appendChild(popUp);
        }
    });
}
        

        
    

// for (let i = 0; i < projectDiv.length; i++ ) {
//     projectDiv[i].addEventListener('onscroll', () => {

//         if (projectDiv[i] === projectDiv[0]) {

//             anchor.setAttribute('href', 'https://teakhawksford.github.io/Tech-Degree-Project-5/')
//             anchor.setAttribute('target', '_blank')
//             anchor.textContent = `
//                 Website
//             `;

//             anchor2.setAttribute('href', 'https://github.com/TeakHawksford/Tech-Degree-Project-5')
//             anchor2.setAttribute('target', '_blank')
//             anchor2.textContent = "Computer Code"

//             projectDiv[i].appendChild(popUp)
//         }

//         if (projectDiv[i] === projectDiv[1]) {

//             anchor.setAttribute('href', 'https://teakhawksford.github.io/Tech-Degree-Project-6/')
//             anchor.setAttribute('target', '_blank')
//             anchor.textContent = `
//                 Website
//             `;

//             anchor2.setAttribute('href', 'https://github.com/TeakHawksford/Tech-Degree-Project-6')
//             anchor2.setAttribute('target', '_blank')
//             anchor2.textContent = "Computer Code"

//             projectDiv[i].appendChild(popUp)
//         }

//         if (projectDiv[i] === projectDiv[2]) {

//             anchor.setAttribute('href', 'https://teakhawksford.github.io/Tech-Degree-Project-7/')
//             anchor.setAttribute('target', '_blank')
//             anchor.textContent = `
//                 Website
//             `;

//             anchor2.setAttribute('href', 'https://github.com/TeakHawksford/Tech-Degree-Project-7')
//             anchor2.setAttribute('target', '_blank')
//             anchor2.textContent = "Computer Code"

//             projectDiv[i].appendChild(popUp)
//         }

//         if (projectDiv[i] === projectDiv[3]) {

//             anchor.setAttribute('href', 'https://teakhawksford.github.io/Tech-Degree-Project-8/')
//             anchor.setAttribute('target', '_blank')
//             anchor.textContent = `
//                 Website
//             `;

//             anchor2.setAttribute('href', 'https://github.com/TeakHawksford/Tech-Degree-Project-8')
//             anchor2.setAttribute('target', '_blank')
//             anchor2.textContent = "Computer Code"

//             projectDiv[i].appendChild(popUp)
//         }
//     })
// }
        

        
    
