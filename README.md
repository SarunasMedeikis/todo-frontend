# Todo app

 [Backend of this app](https://github.com/SarunasMedeikis/todo-backend).

## What was used

I used MERNN stack to create this simple todo, with authentication using JWT, where JWT is stored in http only cookie, however, i stored it in local storage(which is not advisable for real life projects, due to security concerns.).
I then used Axios intercepters, toadjust token to every request also.
user's passwords are encrypted using bcrypt.



For back end, I used MongoDB with Mongoose, to easily manage the backend.In addition, I used dotenv, and cors,cookie parser and body parser.

To not overcomplicate project, I did not use protected routes by ReactRouterDom.

### Images

![Todo page](https://i.imgur.com/qhwFKIF.png)

![Login](https://i.imgur.com/BozOCXy.png)
