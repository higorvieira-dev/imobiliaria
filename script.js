// MODAL
const openButton = document.querySelector("[data-open-modal]")
const closeButton = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

openButton.addEventListener("click", () =>{
    modal.showModal()
})
closeButton.addEventListener("click", () =>{
    modal.close()
})
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');

    newsletterForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;

        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                alert('Inscrição bem-sucedida!');
            } else {
                alert('Erro ao se inscrever na newsletter.');
            }
        } catch (error) {
            console.error(error);
        }
    });
});

