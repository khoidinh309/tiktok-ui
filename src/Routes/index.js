import Home from '~/pages/home';
import Following from '~/pages/following';
import Upload from '../pages/upload';
import { HeaderOnly } from '../Components/Layout';
import Search from '../pages/search';
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [];
