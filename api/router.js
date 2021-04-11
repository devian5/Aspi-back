const router = require('express').Router();

const userRouter = require('./routes/user.router');
const feelingRouter = require('./routes/feeling.router');
const myFeelingRouter = require('./routes/myFeeling.router');

router.use('/user',userRouter);
router.use('/feeling,',feelingRouter);
router.use('/my-feeling',myFeelingRouter);

module.exports = router;
