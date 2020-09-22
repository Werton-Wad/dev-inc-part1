const workers = [
    { name: 'Aida Bugg', position: 'UI Designer', description: 'vcxfsfefweffffffffffffffewfwfwef fewfwef' },
    { name: 'Al Rayhan', position: 'UX Designer', description: 'Lorem Ipsum is not simply is an action designer random text. It has roots in a piece.' },
    { name: 'Allie Grater', position: 'Senior JS developer', description: 'dadadad eofj iofrioef mirof iofrefjio fr' },
    { name: 'Maureen Biologist', position: 'Owner', description: 'my company and my workers live very good' },
    { name: 'Paddy O\'Furniture', position: 'Lawyer', description: 'bla bla lba bla'},
    { name: 'Teri Dactyl', position: 'Middle js developer', description: 'ye yey ye ye ye'},
];

(function (workers) {
    const $speechBubblesTitles = document.querySelectorAll('.speech-bubble__title');
    const $speechBubblesTexts = document.querySelectorAll('.speech-bubble__text');
    return workers.map((worker, i) => {
        $speechBubblesTitles[i].innerHTML = `<h5>${worker.name.toUpperCase()} <span>/ ${worker.position}</span></h5>`;
        $speechBubblesTexts[i].innerHTML = `<p>${worker.description}<p>`;
    })
}(workers));