const { gql } = require("@apollo/client");

const SignUp = gql`
mutation Mutation(
    $name: String!, 
    $username: String!, 
    $password: String!, 
    $address: String!, 
    $phone: String!, 
    $age: Float!, 
    $role: Float!) {
    signUp(
        name: $name, 
        username: $username, 
        password: $password, 
        address: $address, 
        phone: $phone, 
        age: $age, 
        role: $role)
  }
  
`

export { SignUp }