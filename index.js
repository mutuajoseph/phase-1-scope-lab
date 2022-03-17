// Write your solution in this file!
let customerName = 'bob'
let leastFavoriteCustomer = 'some initial value'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()

  //notice that there is no return statement
  //if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable!
}

function setBestCustomer() {
  let bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  let bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy'
}