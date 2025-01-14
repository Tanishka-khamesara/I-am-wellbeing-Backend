const express = require("express");

const router = express.Router();
const Message = require('../models/Message');
const Account = require('../models/AccountDetails');
const Need=require("../models/Needs")

router.post("/message", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
  
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const newMessage = new Message({ name, email, phone, message });
      await newMessage.save();
  
      res.status(201).json({ message: "Message saved successfully", data: req.body });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

router.post("/Account", async (req, res) => {
    try {
        const { AccountDetails } = req.body;
        if (!AccountDetails) {
            return res.status(400).json({ error: "All fields are required" });
          }
    const newAccount = new Account({ AccountDetails });
    await newAccount.save();
    res.status(201).json({ message: "Account details submitted successfully!",AccountDetails });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
})

router.post("/needs",async (req, res) => {
    try {
        const { nameneeds, emailneeds, need } = req.body;
        if (!nameneeds || !emailneeds  || !need) {
            return res.status(400).json({ error: "All fields are required" });
          }
      const newNeed = new Need({ nameneeds, emailneeds, need });
      await newNeed.save();
      res.status(201).json({ message: 'Need saved successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

module.exports = router;

