const router = require('express').Router();

const userRouter = require('./routes/user.router');
const feelingRouter = require('./routes/feeling.router');
const myFeelingRouter = require('./routes/myFeeling.router');
const doubleMeaningRouter = require('./routes/doubleMeaning.router');

router.use('/user',userRouter);
router.use('/feeling',feelingRouter);
router.use('/my-feeling',myFeelingRouter);
router.use('/double-meaning',doubleMeaningRouter);

module.exports = router;
