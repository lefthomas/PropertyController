import { gql } from "@apollo/client";

const GET_TRANSFERS = gql`
  query GetTransfers($originLocation: String) {
    getTransfers(originLocation: $originLocation) {
      _id
      additionsDate
      complete
      coordinator
      departureDate
      shipper
    }
  }
`;

const GET_GLANCE_BOX = gql`
  query GetGlanceBox($LWH: String, $BSQ: String) {
    LWH: getGlanceBox(originLocation: $LWH) {
      additionsDate
      coordinator
      shipper
      _id
    }
    BSQ: getGlanceBox(originLocation: $BSQ) {
      additionsDate
      coordinator
      shipper
      _id
    }
  }
`;

const GET_OBJECT = gql`
  query Query($id: ID!) {
    getProperty(ID: $id) {
      requestedProperty {
        artist
        lot
        objectNumber
        saleNumber
        title
      }
    }
  }
`;

const GET_HOLDLIST = gql`
  query GetHoldList($saleCode: String) {
    getHoldList(saleCode: $saleCode) {
      _id
    }
  }
`;

const GET_HOLD_OBJECT = gql`
  query Query($id: ID!) {
    getHoldProperty(ID: $id) {
      requestedProperty {
        artist
        keepLoc
        lot
        markHeld
        newRequest
        objectNumber
        title
        saleNumber
      }
    }
  }
`;

export {
  GET_TRANSFERS,
  GET_GLANCE_BOX,
  GET_OBJECT,
  GET_HOLDLIST,
  GET_HOLD_OBJECT,
};
