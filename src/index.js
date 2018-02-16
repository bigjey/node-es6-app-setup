import app from './app';

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log(`app is running at port ${PORT}`));