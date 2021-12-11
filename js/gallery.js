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
først har jeg lagd en array,
med kilde, navn og årstall.
lagde deretter en funksjon addPic,
i listen pictures, for hvert bilde,
velg i dokumentet (gallery.html) elementet med classname container,
lager elementer,
bruker listen til å legge inn kilde og tekst,
gir bildene classname: container__image,
appendchild sier hvilke som kommer under hverandre
*/

function addPic() {
    pictures.forEach(picture => {
        const container = document.querySelector('.container')

        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        img.src = picture.src;
        img.alt = picture.alt;
        h2.innerText = picture.name;
        p.innerText = picture.year;

        img.className = 'container__image'

        container.appendChild(img)
        container.appendChild(h2)
        container.appendChild(p)

    })
}

addPic();