import Routing from './routing/routing';
import { routerProvider } from './routing/router-provider';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="content">
        <Routing />
      </div>
    </MainLayout>
  );
};

export default routerProvider(App);