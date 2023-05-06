import React from "react";
import { Card } from "../src/index";

export default {
  title: "kiwi/Components/Card",
  parameters: {
    component: Card,
    tags: ['Card', 'kiwi', 'react'],
    docs: {
      page: '### base button',
    },
  }
}

export const WithLinks = () => (
  <Card>
    <Card.Header>Header</Card.Header>
    <Card.Content>
    This is the content area of card. This card is default card with
        transparent background and link in the footer.
    </Card.Content>
    <Card.Footer>
      <a href="/">Link One</a>
      <a href="/">Link Two</a>
    </Card.Footer>
  </Card>
)