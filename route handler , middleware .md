app.use => handling different methods (get,post,options etc..)
next() => function calls ,after that if any route handler doesn't handle it it may cause error 

app.use(req,res,next)=>{RH1 , RH2 , [RH3,RH4],RH5}