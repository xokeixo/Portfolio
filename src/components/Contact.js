import React from "react"
import emailjs from "emailjs-com"

import { Button, Form, Input, Container, TextArea } from "semantic-ui-react"

export default function ContactUs() {
  function sendEmail(event) {
    event.preventDefault()

    emailjs
      .sendForm(
        "contact-me",
        "template_7tqernc",
        event.target,
        "user_pbF5YtfJWb0kcFjz7xJ07"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
   <Container>
      <Grid centered>
        <Grid.Column computer={8} mobile={16}>
          <Form onSubmit={sendEmail}>
            <Form.Field
              control={Input}
              label="Email"
              name="email"
              placeholder="Write your Email..."
              type="email"
              required
            />
            <Form.Field
              control={Input}
              label="Subject"
              name="subject"
              placeholder="Write your Subject..."
              required
            />
            <Form.Field
              control={TextArea}
              label="Message"
              name="message"
              placeholder="Write your Message..."
              required
            />
            <Button primary type="submit" size="large" fluid>
              Send
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>

// const serviceID = 'default_service';
// const templateID = 'template_7tqernc';