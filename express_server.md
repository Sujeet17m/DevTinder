need to install nodemon by writing npm i -g nodemon , if you don't want to restart the server after evry minor change and -g here is referring to global

if you use (app.use - api calls then it would work in every api calls like get, post , options , delete etcc..)
so, we need to specify api calls like (app.get , app.post ,app.options , app.delete , app.head)