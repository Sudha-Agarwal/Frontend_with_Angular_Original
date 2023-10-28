// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors')
const webPush = require('web-push');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

const publicVapidKey = "BBRjY2YK8SRdCQf5SEfVaMfPfILshps6fwJnQ7yn5_bI4satXHFzsmM0xT2G-vEDR8p4w2mNSi9oEzVb6VNgdrA";
const privateVapidKey = "059lUD5yXueQVMIQrjKx66lODkOYshI9bxRjt5RreRs";

webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

app.post('/notifications', (req, res) => {
  const subscription = req.body.notification;

  console.log(`Subscription received`);

  res.status(201).json({});

  const payload = JSON.stringify({
    notification: {
      title: 'Notifications are cool',
      body: 'Know how to send notifications!',
      icon: 'https://www.shareicon.net/data/256x256/2015/10/02/110808_blog_512x512.png',
      vibrate: [100, 50, 100],
      data: {
        url: ''
      }
    }
  });

  webPush.sendNotification(subscription, payload)
    .catch(error => console.error(error));
});


app.get('/api/performance-todos', (req, res) => {
  console.log("todo request");

  const todoList = [{
      id: 'task1',
      title: 'Buy Milk',
      description: 'Remember to buy milk'
    },
    {
      id: 'task2',
      title: 'Go to the gym',
      description: 'Remember to work out'
    }
  ];
  return res.json(todoList);
});

app.get('/api/freshness-todos', (req, res) => {
  console.log("fresh todo request");

  const todoList = [{
      id: 'task1',
      title: 'New TODO 1!',
      description: 'Remember to buy milk'
    },
    {
      id: 'task2',
      title: 'New TODO 2!',
      description: 'Remember to work out'
    }
  ];
  return res.json(todoList);
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});