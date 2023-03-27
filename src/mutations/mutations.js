import { gql } from "@apollo/client";

const CREATE_TRANSFER = gql`
  mutation Mutation(
    $shipper: String
    $coordinator: String
    $departureDate: Date
    $additionsDate: Date
    $complete: Boolean
    $originLocation: String
  ) {
    createTransfer(
      shipper: $shipper
      coordinator: $coordinator
      departureDate: $departureDate
      additionsDate: $additionsDate
      complete: $complete
      originLocation: $originLocation
    ) {
      additionsDate
      complete
      coordinator
      departureDate
      originLocation
      shipper
    }
  }
`;

const ADD_WORKS_TO_TRANSFER = gql`
  mutation Mutation($id: ID!, $transferInput: TransferInput) {
    addWorkToTransfer(ID: $id, transferInput: $transferInput)
  }
`;

const ADD_WORKS_TO_HOLD = gql`
  mutation Mutation($id: ID!, $holdInput: HoldInput) {
    addWorkToHold(ID: $id, holdInput: $holdInput)
  }
`;

const CANCEL_TRANSFER = gql`
  mutation Mutation($id: ID) {
    deleteTransfer(ID: $id)
  }
`;

const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      email
      username
      token
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      email
      username
      token
    }
  }
`;

export {
  CREATE_TRANSFER,
  ADD_WORKS_TO_TRANSFER,
  ADD_WORKS_TO_HOLD,
  CANCEL_TRANSFER,
  REGISTER_USER,
  LOGIN_USER,
};
