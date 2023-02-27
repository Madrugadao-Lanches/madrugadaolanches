const get = element => document.querySelector(element);

const sendMessage = () => {

    let name = get('#name').value;

    let phone = get('#phone').value;

    let subject = get('#subject').value;

    let message = get('#message').value;

    let completMessage = `Nome: ${name}, Telefone: ${phone}, Assunto: ${subject}, Mensagem:
        ${message}
    `;

    window.open(`https://api.whatsapp.com/send?phone=5584999719251&text=${completMessage}`, '_blank');
}

let links = document.querySelectorAll('.offcanvas a').forEach((link) => {
    link.addEventListener('click', () => {
        get('.offcanvas.show:not(.hiding)').removeProperty('transform');
    });

})

// .offcanvas.show:not(.hiding), .offcanvas.showing {
//     transform: none;
// }