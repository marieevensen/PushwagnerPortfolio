const pictures = [
    {
        src: 'assets/sitting-down.jpg',
        name: 'SITTING DOWN',
        year: '2010',
        alt: 'Kunstverket Sitting down av Pushwagner'
    },

    {
        src: 'assets/life.jpg',
        name: 'LIFE',
        year: '2009',
        alt: 'Kunstverket Life av Pushwagner'
    },

    {
        src: 'assets/kings-cross.jpg',
        name: 'KINGS CROSS',
        year: '2014',
        alt: 'Kunstverket Kings cross av Pushwagner'
    },

    {
        src: 'assets/thirteen.jpg',
        name: 'THIRTEEN',
        year: '2013',
        alt: 'Kunstverket Thirteen av Pushwagner'
    },

    {
        src: 'assets/lasergun-love.jpg',
        name: 'LASERGUN LOVE',
        year: '2010',
        alt: 'Kunstverket Lasergun love av Pushwagner'
    }

]

/*
    Lagd array for galleri slik at man enkelt kan legge til et nytt bilde i galleriet
*/

function addPic() {
    pictures.forEach(picture => {
        const container = document.querySelector('.gallery')

        const img = document.createElement('img');
        const title = document.createElement('h2');
        const year = document.createElement('p');

        img.src = picture.src;
        img.alt = picture.alt;

        title.innerText = picture.name;
        year.innerText = picture.year;

        img.className = 'gallery__image'

        container.appendChild(img)
        container.appendChild(title)
        container.appendChild(year)
    })
}

addPic();

/*
    1 Lager en funksjon addPic
    2 For hvert picture i listen picture
    3 Elementene skal bli laget under elementet med classname: container
    4 Lager elementene som trengs og gir de en variabel
    5 Gir elementene verdier
    6 Appendchild for å velge hvilke elementer som er under elementet
    7 Så kjøres funksjonen
*/