const express = require ('express'), 
    app = express(),
    chalk= require('chalk'),
    debug=require('debug')('app'),
    morgan=require('morgan'),
    path=require('path');
    PORT=process.env.PORT || 3000,
    sessionsRouter=express.Router();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));
app.set('views','./src/views');
app.set('view engine','ejs');

sessionsRouter.route('/')
    .get((req,res)=>{
        res.render("sessions",{
            sessions:[
                {title: 'Session 1', description:'this is session 1'},
                {title: 'Session 2', description:'this is session 2'},
                {title: 'Session 3', description:'this is session 3'},
                {title: 'Session 4', description:'this is session 4'},
            ]
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
