const express = require('express');

const authRouter = require('./auth.route');
const ReportRouter = require('./report.route');
const lostRouter = require('./lost.route');
const foundRouter = require('./found.route');
const profileRouter = require('./profile.route');

const router = express.Router();

router.use('/profile', profileRouter);
router.use('/auth', authRouter);
router.use('/report/form', ReportRouter);
router.use('/lost', lostRouter);
router.use('/found', foundRouter);

module.exports = router;
