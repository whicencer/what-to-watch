import Routing from './routing/routing';
import { routerProvider } from './routing/router-provider';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <Routing />
    </MainLayout>
  );
};

export default routerProvider(App);