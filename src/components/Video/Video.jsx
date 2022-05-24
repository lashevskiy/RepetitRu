import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { IOS, usePlatform } from '@vkontakte/vkui';
import './style.scss';

const b = bemCl('video-container');

const Video = ({ videoId }) => {
    const platform = usePlatform();

    return (
        <div className={b()}>
            <iframe
                title="video"
                src={`https://www.youtube.com/embed/${videoId}`}
                className={b('video')}
                allowFullScreen={platform === IOS}
            />
        </div>
    );
};

Video.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default React.memo(Video);
