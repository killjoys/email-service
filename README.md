# Email Service
a service which allows user to send an email and view history of delivery

### Front-end: VueJS
There are 3 popular frameworks for front-end
1. Angular - I also have some experience with Angular since it was Angular1.0
2. React -  I attended a session of React and have some idea about it
3. Vue - Just heard but never saw it before so I decided to give it a try.

## Technical Specs
### Back-end: NodeJS
- Since VueJS is a new thing for me and I have some basic knowledge in NodeJS when I was in the university. So, I decided to use Node to reduce learning time for this test

### Database: SQL
The purpose to use database is to keep history of email delivery and it's a structured data so SQL would be fit in this case 
- id
- datatime
- recipient
- subject
- content
- result

### Email service providers
SendGrid and Sparkpost as their doc are easily to understand.

### Design
![Alt text](https://www.img.in.th/images/c6cf67495583847da4266a1f0d355f3e.png? "Class diagram")
- Provider is an interface that provides abstraction of email service provider and have 2 extended classes which are Sparkpost and Sendgrid

### Future implementation
- Handle error properly, should show pop-up when exception is throwed e.g., error during connection with database. 
- Add more tests (unit, integration, end to end), to mock response from DB, server side
- Get credential from DB or encode it instead of hard coding.
- Apply eslint in server part (front-end is already applied)
- Dockerize the app.
- Use log4js that provides log level to better logging the app.

### Demo
```
https://email-service-node.herokuapp.com/#/
```
