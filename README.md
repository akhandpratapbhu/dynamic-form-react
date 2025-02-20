# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
inside client .env file-
VITE_BACKEND_BASE_URL = http://localhost:8000/api/v1
VITE_SECRET_KEY = 7747116a99a43eec8bde0ec1d01234c63e61d347b1f2b6051d29332afaab2285487a0aaee740aa638a73490793e5750a918e173b9afe3ba0589bc065702bbe84

VITE_GOOGLE_CLIENT_ID = 
VITE_GOOGLE_CLIENT_SECRET = 

inside server .env file is-
NODE_ENV = development
PORT = 8000

DATABASE = "mongodb+srv://akhand:1996@cluster0.xyhkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

ACCESS_TOKEN_SECRET = a716191be3a7944034be548d56bcaf816fd6f6a8ae6702bdcfc83e64f7d6714923ae653a50e999e228589cc4385928c1c221e828893cd99ed3671deee96701a2
REFRESH_TOKEN_SECRET = 31f37c3d81e307efb6812fd7a2b245e89927324170bcd4ac7e2d29ffca3b5a23d3511ef6f968e95c78d19708adab10e00ae7a142ac8bdf41a4cfdbe5a009a528

SMTP_HOST = 
SMTP_PORT =
SMTP_USERNAME = 
SMTP_PASSWORD = 

GOOGLE_CLIENT_ID = 
GOOGLE_CLIENT_SECRET = 


# Form Builder
A Full Stack MERN app for building dynamic forms with drag and drop interface &amp; to track and view the responses received in the created form.

https://easyformbuilder.netlify.app/

(Profile picture upload only works in local development as costs money in deployed server.)

## Installation
You need to install nodejs.

```bash
npm install -g npm
```

Clone the project

```bash
git clone -
```

then navigate into the project

```
cd form-builder
```

Now, Install the packages

```bash
npm i
```

Also, create .env file with the help of .env.example file for both client and server. You can use [Brevo](https://www.brevo.com/) for free SMTP server and [MongoDB Atlas](https://www.mongodb.com/atlas/database) for database.

Run the project with command

```bash
npm dev
```

<h2> Built with </h2>
<ul>
  <li>Frontend: <b> React, TypeScript, Tailwind, React Hook Form, Zod, ShadcnUI, React Router, DND Kit, Tanstack Query, Tanstack Table, Tiptap, React Dropzone, React Easy Crop, Zustand </b></li>
  <li>Backend:  <b> Node, Express, TypeScript, Nodemailer, Multer, JWT </b> </li>
  <li>Database: <b> MongoDB, Mongoose </b> </li>
</ul>

<h2> Features </h2>
<ul>
  <li> JWT Authentication along with Protected Routes, Refresh Tokens, reuse detection and rotation. </li>
  <li> Logout, Change password and delete account functionalities. </li>
  <li> Email sending functionality after signup and while resetting password using Nodemailer. </li>
  <li> Profile picture upload with drag n drop and crop functionality. </li>
  <li> Implemented error logging mechanisms for easier troubleshooting and maintenance. </li>
  <li> Implemented proper error handling and user feedback mechanisms. </li>
  <li> Dynamic forms can be created using different form elements by dragging and dropping. </li>
  <li> CRUD operations and search functionality on the form. </li>
  <li> Functionality to submit the form and view the responses on the form. </li>
  <li> Included various form elements like WYSIWYG editor, Calendar, Date Range Picker etc. </li>
</ul>

<h2> API </h2>

<h4> Auth </h4>
<ul>
  <li> <b>POST</b> /api/v1/auth/signup </li>
  <li> <b>POST</b> /api/v1/auth/login </li>
  <li> <b>GET</b> /api/v1/auth/refresh </li>
  <li> <b>GET</b> /api/v1/auth/logout </li>
  <li> <b>POST</b> /api/v1/auth/forgot-password </li>
  <li> <b>PATCH</b> /api/v1/auth/reset-password/:token </li>
</ul>

<h4> User </h4>
<ul>
  <li> <b>PATCH</b> /api/v1/user/change-password </li>
  <li> <b>PATCH</b> /api/v1/user/profile </li>
  <li> <b>GET</b> /api/v1/user/profile </li>
  <li> <b>DELETE</b> /api/v1/user/delete-account </li>
</ul>

<h4> Form </h4>
<ul>
  <li> <b>GET</b> /api/v1/forms?page=0&pageSize=10&sort=-name&search=form </li>
  <li> <b>GET</b> /api/v1/forms/:id </li>
  <li> <b>POST</b> /api/v1/forms </li>
  <li> <b>PATCH</b> /api/v1/forms/:id </li>
  <li> <b>PATCH</b> /api/v1/forms/bulk-delete </li>
  <li> <b>DELETE</b> /api/v1/forms/:id </li>
</ul>

<h4> Form Response </h4>
<ul>
  <li> <b>GET</b> /api/v1/forms/:id/responses </li>
  <li> <b>POST</b> /api/v1/forms/:id/responses </li>
</ul>
 update readme file