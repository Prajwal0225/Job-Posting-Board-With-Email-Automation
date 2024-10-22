# Job Posting Board With Email Automation

## Project Overview

The **Job Posting Board With Email Automation** is a web application that allows companies to create job postings and send them to multiple candidates via email with a single click. The project integrates Twilio for phone number verification and uses Nodemailer for OTP email authentication and job distribution. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and focuses on simplifying the hiring process for companies.

## Features

- **Company Registration:** Companies can sign up after phone number verification using Twilio and email OTP authentication.
  ![p1](https://github.com/user-attachments/assets/732e3dbc-f0f9-46e1-be7f-af23caca86a8)

- **OTP Verification:** Secure email verification using OTP sent via Nodemailer.
  ![p3](https://github.com/user-attachments/assets/669c47ff-ea8f-4045-b27b-48a063438f92)
  ![p2](https://github.com/user-attachments/assets/9aa769b4-d33e-4755-8421-807fb069fc85)
  And you get mobile otp on mobile number.

  After clicking on Verify it verifies your email and mobile number and once it verifies the button text change into verified.
  ![p4](https://github.com/user-attachments/assets/c42613f4-b0f1-4b6e-abe7-3d3c5620178a)

  
  After Signup you go to the dashboard page:
  ![p5](https://github.com/user-attachments/assets/9a512ce1-0e2d-4178-9aec-672687326f9c)

- **Email Automation:** Nodemailer is used to automate sending job postings via email.
- **Job Posting:** Companies can create job postings and send them to candidates via email in bulk.
  ![p6](https://github.com/user-attachments/assets/60e7f31a-99fa-4f7c-87ed-cd2d47f6474d)
  ![p9](https://github.com/user-attachments/assets/2b7bef08-b40f-4a27-8ca4-3db6dd0e31ce)
  ![p10](https://github.com/user-attachments/assets/9154a553-d00d-49d7-b6d9-64145f43afcb)
  

## Tech Stack

- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Twilio for phone verification, Nodemailer for email OTP


## Installation & Setup

### Prerequisites

Before setting up, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- [Twilio Account](https://www.twilio.com/)
- [Nodemailer](https://nodemailer.com/about/)

### Steps to Set Up Locally

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Job-Posting-Board-With-Email-Automation.git
    ```

2. **Navigate to the backend folder:**

    ```bash
    cd Backend_JobPostingBoard
    ```

3. **Install dependencies for the backend:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `Backend_JobPostingBoard` directory and add your configuration details:

    ```bash
    JWT_SECRET= your-jwt-Secrate
    ACCOUNT_SID=your-twilio-account-sid
    AUTH_TOKEN=your-twilio-auth-token
    DB_URL=your-mongodb-uri
    ```

5. **Start the backend server:**

    ```bash
    npm start
    ```

6. **Navigate to the frontend folder:**

    ```bash
    cd ../Frontend_JobPostingBoard
    ```

7. **Install dependencies for the frontend:**

    ```bash
    npm install
    ```

8. **Run the frontend:**

    ```bash
    npm start
    ```

