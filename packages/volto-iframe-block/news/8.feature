add `backend-docker-detached-start` make command to start backend in daemon mode [@jnptk]
move toast error messages to isValidUrl.js file so that if you want to shadow the `isValidUrl` function you can change the error message as well [@jnptk]
we now only show the whole `figure` if a url is set & valid [@jnptk]
moved the `width` to the `figure` element to ensure that title, description etc. are the same width as the `iframe` [@jnptk]
changed the `height` field to use a `text` input field for pixel and percentage value support (e.g. 100px, 50%) [@jnptk]
