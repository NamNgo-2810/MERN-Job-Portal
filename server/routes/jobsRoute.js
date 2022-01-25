const express = require("express");
const Job = require("../models/jobModel");
const User = require("../models/userModel");
const router = express.Router();
const moment = require("moment");

router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/postjob", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.send("Job Posted Successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editjob", async (req, res) => {
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.send(updatedJob);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/applyjob", async (req, res) => {
  const { user, job } = req.body;
  try {
    const jobInfo = await Job.findOne({ _id: job._id });
    const appliedCandidate = {
      userid: user._id,
      appliedDate: moment().format("DD MMM yyyy"),
    };

    jobInfo.appliedCandidatesIds.push(appliedCandidate);
    await jobInfo.save();

    const userInfo = await User.findOne({ _id: user._id });
    const appliedJob = {
      jobid: job._id,
      appliedDate: moment().format("DD MMM yyyy"),
    };

    userInfo.appliedJobs.push(appliedJob);
    await userInfo.save();

    res.send("Job Applied Successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
