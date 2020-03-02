import m from 'mithril';
import Layout from './shared/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';

m.route.prefix = '';

const routes = {
    '/': {
        render() {
            return m(Layout, m(Home));
        }
    },
    '/about': {
        render() {
            return m(Layout, m(About));
        }
    }
};

m.route(document.querySelector('#app'), '/', routes);