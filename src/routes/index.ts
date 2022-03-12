import { useRoutes } from 'react-router-dom';
import appRoutes from './appRoutes';

const Router = () => {
    return useRoutes(appRoutes);
}

export default Router;