import { AlertProvider } from './context/AlertContext';
import Alert from './components/Alert/Alert';
import Header from './components/Header/Header';
import AppContainer from './components/AppContainer/AppContainer';

function App() {
  return (
    <div className="wrapper">
      <AlertProvider>
        <Header />
        <AppContainer />
        <Alert />
      </AlertProvider>
    </div>
  );
}

export default App;
