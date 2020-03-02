import m from 'mithril';

const Navigation = {
    view() {
        return m('nav', [
            m(m.route.Link, { href: '/' }, 'Home'),
            m(m.route.Link, { href: '/about' }, 'About')
        ]);
    }
};

export default Navigation;