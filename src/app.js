import express from 'express';

const app = express();

app.get('*', (req, res) => res.send('hi8'));

export default app;