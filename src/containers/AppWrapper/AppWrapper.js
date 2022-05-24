import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import App from '../App/App';

const SCHEME = {
    client_light: {
        status: 'light',
        color: '#5181b8',
    },
    client_dark: {
        status: 'light',
        color: '#2c2d2e',
    },
    bright_light: {
        status: 'dark',
        color: '#ffffff',
    },
    space_gray: {
        status: 'light',
        color: '#19191a',
    },
    vkcom_light: {
        status: 'light',
        color: '#5181b8',
    },
    vkcom_dark: {
        status: 'dark',
        color: '#2c2d2e',
    },
};

const AppWrapper = () => {
    const [scheme, setScheme] = React.useState('client_light');

    React.useEffect(() => {
        bridge.subscribe(({ detail: { type, data } }) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
                setScheme(data.scheme);
                setColors(data.scheme);
            }
        });
    }, []);

    const setColors = color => {
        bridge.send('VKWebAppSetViewSettings', {
            status_bar_style: SCHEME[color].status,
            action_bar_color: SCHEME[color].color,
        });
    };

    return <App scheme={scheme} />;
};

export default AppWrapper;
