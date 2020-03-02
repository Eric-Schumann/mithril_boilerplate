import m from 'mithril';
import Navigation from './Navigation';

const Layout = {
    view(vnode) {
        return [
            m(Navigation),
            m('.container', vnode.children)
        ];
    }
};

export default Layout;