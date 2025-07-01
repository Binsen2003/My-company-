const scriptURL = 'https://script.google.com/macros/s/AKfycbzlmLGxr-oOuvAI76vLMH7tXD9M9lcz-jvED88Eg419vSMY2jXq5mthbgnn0phMhpJRuw/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thank you for submit the form...."))
                .catch(error => console.error('Error!', error.message))
            })

