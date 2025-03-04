# Changelog

<!-- You should *NOT* be adding new change log entries to this file.
     You should create a file in the news directory instead.
     For helpful instructions, please see:
     https://6.docs.plone.org/volto/developer-guidelines/contributing.html#create-a-pull-request
-->

<!-- towncrier release notes start -->

## 2.1.0 (2025-02-26)

### Feature

- Move toast error messages to isValidUrl.js file so that if you want to shadow the `isValidUrl` function you can change the error message as well [@jnptk] [#8](https://github.com/kitconcept/volto-iframe-block/issue/8)
- Changed the `height` field to use a `text` input field for pixel and percentage value support (e.g. 100px, 50%) [@jnptk] [#8](https://github.com/kitconcept/volto-iframe-block/issue/8)

### Bugfix

- We now only show the whole `figure` if a url is set & valid [@jnptk] [#8](https://github.com/kitconcept/volto-iframe-block/issue/8)
- Moved the `width` to the `figure` element to ensure that title, description etc. are the same width as the `iframe` [@jnptk] [#8](https://github.com/kitconcept/volto-iframe-block/issue/8)

### Internal

- Add `backend-docker-detached-start` make command to start backend in daemon mode [@jnptk] [#8](https://github.com/kitconcept/volto-iframe-block/issue/8)

## 2.0.0 (2025-02-19)

### Breaking

- Move isValidUrl to helper function so it can be shadowed. [@jnptk]
  Add description and credit fields. [@jnptk]
  Clear all fields including the input when the reset button is clicked. [@jnptk]
  Show title, description, and credit in the View component. [@jnptk] [#7](https://github.com/kitconcept/volto-iframe-block/issue/7)

## 1.0.0 (2025-02-10)

### Internal

- Update to latest Volto. @sneridagh [#5](https://github.com/kitconcept/volto-iframe-block/issue/5)

## 1.0.0-alpha.2 (2024-07-05)

## 1.0.0-alpha.1 (2024-07-05)

### Breaking

- Update to new setup with volto 18 @jonaspiterek [#1](https://github.com/kitconcept/volto-iframe-block/issue/1)
- Update boilerplate @jonaspiterek [#3](https://github.com/kitconcept/volto-iframe-block/issue/3)
