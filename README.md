# dazn-movie

### 1. Install the dependancies by

- npm i

### 2. run the server by

- npm start

### 3. add .env file to root of the folder

#### .env contents

    PORT=3001

### ROUTES

#### Create A moview

    POST http://localhost:3001/api/movies
    Content-Type: application/json

    {
    "title":"new movie2",
    "genre":"Drama",
    "rating":1,
    "link":"link.com"
    }

#### Get All Movies

    GET http://localhost:3001/api/movies

### Get A Single Movie

    GET http://localhost:3001/api/movies/652697634f566b34506230d4

### Search A Movie

    GET http://localhost:3001/api/movies/search?q="{title:Sholey}"

### Update A Moview

    PATCH http://localhost:3001/api/movies/652697634f566b34506230d4
    Content-Type: application/json

    {
    "title":"updated title"
    }

### Delete A Moview

    DELETE http://localhost:3001/api/movies/652697634f566b34506230d4
