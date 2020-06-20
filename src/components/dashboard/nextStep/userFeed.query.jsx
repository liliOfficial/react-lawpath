import { gql } from "apollo-boost";

export const SET_USER_FEED = gql`
  {
    UserFeed(userId: "6677072274098487296") {
      id
      icon
      seq
      persist
      dismissed
      timestamp
      trackEvent
      md
    }
  }
`;
