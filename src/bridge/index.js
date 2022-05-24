import { APP_LINK } from '../constants';
import bridge from '@vkontakte/vk-bridge';

export const ShowImages = (images, start_index) =>
    bridge.send('VKWebAppShowImages', {
        images: images,
        start_index: start_index,
    });

export const StorageGet = key => bridge.send('VKWebAppStorageGet', { keys: [key || 'favoriteRepetitors'] });

export const StorageSet = (value, key) => {
    bridge.send('VKWebAppTapticNotificationOccurred', { type: 'success' });

    return bridge.send('VKWebAppStorageSet', { key: key || 'favoriteRepetitors', value: value });
};

export const ShareRepetitor = repetitorId => {
    repetitorId
        ? bridge.send('VKWebAppShare', { link: `${APP_LINK}#repetitor=${repetitorId}` })
        : bridge.send('VKWebAppShare', { link: APP_LINK });
};

export const ShowStoryBox = (repetitorId, stickers) =>
    bridge
        .send('VKWebAppShowStoryBox', {
            background_type: 'none',
            stickers: stickers ? stickers : null,
            attachment: {
                text: 'open',
                type: 'url',
                url: repetitorId ? `${APP_LINK}#repetitor=${repetitorId}` : APP_LINK,
            },
        })
        .then(data => {
            bridge.send('VKWebAppTapticNotificationOccurred', { type: 'success' });
        })
        .catch(error => {});

export const ShowWallPostBox = ({ message, attachments }, success = null, error = null) => {
    bridge
        .send('VKWebAppShowWallPostBox', {
            message: message,
            attachments: attachments,
        })
        .then(data => {
            if (success) {
                success(data);
            }
        })
        .catch(er => {
            if (error) {
                error(er);
            }
        });
};
