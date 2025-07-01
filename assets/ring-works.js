const scriptURL = 'https://script.google.com/macros/s/AKfycbx3npbVk_vhZsOIwY3rniTcbEe_84jyrZnXsy5x8qXZt0decAsN5eZOVpEA51oeoQmP8w/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thank you for submit the form...."))
                .catch(error => console.error('Error!', error.message))
            })


