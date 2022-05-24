export const parseQueryString = string => {
    return string
        .slice(1)
        .split('&')
        .map(queryParam => {
            let kvp = queryParam.split('=');
            return { key: kvp[0], value: kvp[1] };
        })
        .reduce((query, kvp) => {
            query[kvp.key] = kvp.value;
            return query;
        }, {});
};

export const isDesktop = () => {
    const params = parseQueryString(window.location.search);
    return params.vk_platform === 'desktop_web';
};

export const isMVK = () => {
    const params = parseQueryString(window.location.search);
    return params.vk_platform === 'mobile_web';
};

export const isApp = () => {
    const params = parseQueryString(window.location.search);
    return params?.expo_app === 'true';
};
