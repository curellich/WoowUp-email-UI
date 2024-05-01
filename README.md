# WoowUp Email Server Test (Challenge)

This project is an interface designed to test an email server with fault tolerance. It provides a simple and intuitive way to send test emails and observe the behavior of the server under different conditions.

## Description

The application provides fields for the user to input the recipient's email address, the subject of the email, and the message content. It uses two different email providers to send these test emails.

The first provider only allows sending emails to already registered recipients. If you wish to register a recipient, please contact curellich@gmail.com.

The second provider allows sending emails to any recipient, but the sender must be registered. In this case, the registered sender is curellich@gmail.com.

## Environment Variables

The application uses the following environment variables:

- `NODE_ENV`: This variable sets the environment in which the Node.js application will run. In this case, it is set to `production`.
- `NEXT_URL_BASE`: This variable holds the base URL for the Next.js application. It is currently set to `192.168.1.209`.
- `SERVER_PORT`: This variable sets the port on which the server will run. It is currently set to `3000`.

## Usage

To use the application, simply fill in the 'To', 'Subject', and 'Message' fields and click 'Send'. The application will then send an email using one of the two providers, depending on the recipient's registration status.

## Contact

For any further queries or to register a recipient with the first email provider, please contact curellich@gmail.com.