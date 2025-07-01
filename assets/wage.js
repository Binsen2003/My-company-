const scriptURL = 'https://script.google.com/macros/s/AKfycby8BOHyor3C5Y90F2szk7U4Ye1MrK_uNjpYO28weBMzcunlUut9t4d9t5nEQv3HoFkX8Q/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thank you for submit the form...."))
                .catch(error => console.error('Error!', error.message))
            })

