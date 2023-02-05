import { Navigate, Route, Routes } from 'react-router-dom';
import { appRoutes } from 'shared/helpers/routes';
import Layout from '../components/Layout';

const App = (): JSX.Element => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {appRoutes.map(({ path, Component }) => (
            path === '/' ? <Route index element={<Component />} key={path} />
              : <Route path={path} element={<Component />} key={path} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
