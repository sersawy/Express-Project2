const express = require ('express'), 
    app = express(),
    chalk= require('chalk'),
    debug=require('debug')('app'),
    morgan=require('morgan'),
    path=require('path');
    PORT=process.env.PORT || 3000,
    sessionsRouter=express.Router(),
    sessions=require('./src/data/sessions.json');
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));
app.set('views','./src/views');
app.set('view engine','ejs');

sessionsRouter.route('/')
    .get((req,res)=>{
        res.render("sessions",{
            sessions
        })
    })
sessionsRouter.route('/1')
    .get((req,res)=>{
        res.send("hello single sessions")
    })
app.use('/sessions',sessionsRouter);

app.get('/',(req,res)=>{
    res.render('index',{title:'welcomeeeeeee',data:['a','b','c']});
});


app.listen(PORT,()=>{
     console.log(`listening on port ${chalk.green(PORT)}`);
});
