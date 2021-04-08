const router = require('express').Router();

const userRouter = require('./routes/user.router');

router.use('/user',userRouter);

module.exports = router;
