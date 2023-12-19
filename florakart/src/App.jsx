import Navigation from './components/Navigation';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <br />
      <p>Welcome to <b>Flora-Kart</b>!</p>
      <br />
      <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDA1cnNwMWp3MHdrcGlvbDZhNGg4YTE0Nzh2NWZ5dDcxdjdwNncydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ckAhX7LBZrhst2mG2j/giphy.gif' alt='plant-gif' />
      <p>
        <b>Flora-Kart</b> helps you discover the best plants for your space, delivers them to your door and helps you look after them.
      </p>
    </div>
  )
}

export default App;
