// const { getRawData } = require('@twurple/common');
// const { AppTokenAuthProvider } = require('@twurple/auth');
// const { ApiClient } = require('@twurple/api');
// const express = require('express');

// const path = './config.json';
// const fs = require('fs');

// const { clientId, clientSecret, channels } = require('./config.json');

// const authProvider = new AppTokenAuthProvider(clientId, clientSecret);

// const apiClient = new ApiClient({ authProvider });

// let streams = [];

// const updateStreams = async () => {
//   try {
//     streams = (await apiClient.streams.getStreamsByUserNames(channels)).map(getRawData);
//   } catch {
//     console.log('Failed to get streams.');
//   }
// };


// setInterval(updateStreams, 1000 * 60);

// updateStreams();

// const app = express();

// app.get('/streams', async (req, res) => res.json(streams));

// app.listen(4000);



// Accordion
