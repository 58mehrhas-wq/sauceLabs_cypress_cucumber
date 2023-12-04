Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

  // Cypress.on('uncaught:exception', (err, runnable, promise) => {
  //   // when the exception originated from an unhandled promise
  //   // rejection, the promise is provided as a third argument
  //   // you can turn off failing the test in this case
  //   if (promise) {
  //     return false
  //   }
  //   // we still want to ensure there are no other unexpected
  //   // errors, so we let them fail the test
  // });