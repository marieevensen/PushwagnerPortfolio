const pictures = [
    {
        src: 'assets/sitting-down.jpg',
        name: 'SITTING DOWN',
        year: '2010'
    },

    {
        src: 'assets/life.jpg',
        name: 'LIFE',
        year: '2009'
    },

    {
        src: 'assets/kings-cross.jpg',
        name: 'KINGS CROSS',
        year: '2014'
    },

    {
        src: 'assets/thirteen.jpg',
        name: 'THIRTEEN',
        year: '2013'
    },

    {
        src: 'assets/lasergun-love.jpg',
        name: 'LASERGUN LOVE',
        year: '2010'
    }

]

function addPic() {
    pictures.forEach(picture => {
        const container = document.querySelector('.container')

        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        img.src = picture.src;
        h4.innerText = picture.name;
        p.innerText = picture.year;

        img.className = 'container__image'

        container.appendChild(img)
        container.appendChild(h4)
        container.appendChild(p)

    })
}

addPic();