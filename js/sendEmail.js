// @name "sendEmail"

function sendEmail() {
    const loading = document.querySelector('.loading');

    loading.className = loading.className + ' show';

    const name = document.querySelector('.name').value;
    const assunto = document.querySelector('.subject').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.text-message').value;

    const msg = {
        from: "santanalopes@assessoria.app",
        to: "ricardo.caduh001@gmail.com",
        subject: assunto,
        text: `
            Nome de quem entrou em contato: ${name}
            Email de quem entrou em contato: ${email}

            Mensagem: ${message}
        `
    };

    fetch('https://fiap-sender.herokuapp.com/email/send',
        {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
            body: JSON.stringify(msg),
        }
    )
    .then(data => {
           loading.className = loading.className.replace('show', '');
           alert("E-mail enviado com sucesso");
    }).catch(err => {
        loading.className = loading.className.replace('show', '');
        console.error(`Mensagem de erro ${err}`);
    });
}