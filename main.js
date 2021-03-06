console.log("YAY!");

const students = [
    {
        avatar: "https://robohash.org/inciduntsapientetenetur.png?size=100x100&set=set1",
        firstName: "Marinna",
        lastName: "Olliver",
        catchPhrase: "Optional global adapter"
    },
    {
        avatar: "https://robohash.org/facereinventoreexpedita.png?size=100x100&set=set1",
        firstName: "Shalne",
        lastName: "Roddell",
        catchPhrase: "Vision-oriented optimizing installation"
    },
    {
        avatar: "https://robohash.org/sintquasnam.png?size=100x100&set=set1",
        firstName: "Kamila",
        lastName: "Girardey",
        catchPhrase: "Ergonomic human-resource toolset"
    },
    {
        avatar: "https://robohash.org/autautfugiat.png?size=100x100&set=set1",
        firstName: "Conn",
        lastName: "Bemment",
        catchPhrase: "Mandatory 4th generation model"
    },
    {
        avatar: "https://robohash.org/inciduntameteum.png?size=100x100&set=set1",
        firstName: "Jeanelle",
        lastName: "Inglesent",
        catchPhrase: "Configurable value-added architecture"
    },
    {
        avatar: "https://robohash.org/vitaequiafugiat.png?size=100x100&set=set1",
        firstName: "Xymenes",
        lastName: "Nickols",
        catchPhrase: "Virtual coherent standardization"
    },
    {
        avatar: "https://robohash.org/oditexassumenda.png?size=100x100&set=set1",
        firstName: "Mandel",
        lastName: "Haycox",
        catchPhrase: "Balanced zero tolerance throughput"
    },
    {
        avatar: "https://robohash.org/ipsamnamiusto.png?size=100x100&set=set1",
        firstName: "Salim",
        lastName: "Brunker",
        catchPhrase: "Synergized impactful middleware"
    },
    {
        avatar: "https://robohash.org/quiaofficiaullam.png?size=100x100&set=set1",
        firstName: "Melanie",
        lastName: "Ivain",
        catchPhrase: "Multi-channelled solution-oriented artificial intelligence"
    }
];

const printToDom = (stringToPrint, divID) => {
    const printTo = document.getElementById(divID);
    printTo.innerHTML = stringToPrint;
};

const buildDomString = (studentArray) => {
    let stringToPrint = '';
    studentArray.forEach((student) => {
        stringToPrint += `<div class="card">`;
        stringToPrint +=   `<h1>${student.firstName} ${student.lastName}</h1>`;
        stringToPrint +=   `<h3>${student.catchPhrase}</h3>`;
        stringToPrint +=   `<img src="${student.avatar}" alt="">`;
        stringToPrint +=   `<button class="card-button" type="submit">Brought Pie</button>`;
        stringToPrint += `</div>`;
    });
    printToDom(stringToPrint, "card-holder");
};

buildDomString(students);



const makeCardGreen = (e) => {
    let buttonTarget = e.target.parentNode.firstChild;
    // buttonTarget.className += " green";
    buttonTarget.classList.add("green");
}


const makeButtons = () => {
const allMyButtons = document.getElementsByClassName('card-button');

for(let i = 0; i < allMyButtons.length; i++){
    allMyButtons[i].addEventListener('click', makeCardGreen);
    }
}

const startApplication = () => {
    buildDomString(students);
    makeButtons();
};

startApplication();


