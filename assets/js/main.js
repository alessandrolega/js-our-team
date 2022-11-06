// // Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede


const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

for ( let i=0; i < team.length; i++) {
    let currentElement = team[i];
    console.log(team[i]);
    document.getElementById('cards').innerHTML += `
    <div class="col-4 d-flex align-items-center justify-content-center">
        <div class="card align-items-center" style="width: 18rem;">
            <img src= assets/img/${currentElement.image} class="card-img-top" alt="...">
                <div class="card-body p-2">
                    <h5 class="card-title">${currentElement.name}</h5>
                    <p class="card-text">${currentElement.role}</p>
                </div>
        </div>
    </div>`


}