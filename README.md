### Blog  Web Application Using React.js, Node.js, MongoDB, Express.js

# description

1. This is a full client (frontend) and server (backend) side code for a Blog web application for MSMG, as an assignment. It's built using the MERN stack.

I have added Google Auth and file storage using Firebase.

2. For state management, I am using Redux.

3. I have implemented an admin dashboard where authenticated users can be designated as admins. Admins have the ability to create, post, delete, comment, and like posts, as well as edit and delete comments.

4. Dashboard accessible only Admin User

5. All users, posts, and comments are accessible in the admin dashboard.

6. In the admin dashboard, creating posts and updating posts are private actions. Only authenticated admin  users can perform these actions. Additionally, admins can update the isAdmin field in the database to grant admin privileges. Initially, isAdmin is set to false, but admins can change it to true in the database.

7. Regular users have access to view posts and comments, update their own comments, delete their own comments, and read full articles.

8. Admin users can create posts, update posts, and view all users and comments.





### Installation guid


# Install Dependencies

**For Dev** - `npm i && npm run dev`


## Env Variables

Make Sure to Create a .env file in root directory and add appropriate variables in order to use the app.

**Essential Variables**  For client side folder 

Firebase Variable

VITE_FIREBASE_KEY= `from firebase`

VITE_AUTH_DOMAIN= `from firebase`

VITE_PROJECT_ID=`from firebase`

VITE_STORAGE_BUCKET=`from firebase`

VITE_MESSAGING_SENDER_ID=`from firebase`

VITE_APP_ID=`from firebase`

## and I am Using Storage and  Google Authentication  

1 Enable firbase Google Authentication in firebase 
2 set storage configuration 


### For backend 

## In Root Directory  

npm install for backend server(make sure You are in main folder directrory  directory not server directory).

ENV varible 

MONGO_URI=`from mongoDB atlas`   OR  Locally 

JWT_SECRET=`Put difficult secret for secuirity porpus`



