import React from 'react';
import PropTypes from 'prop-types';
import { Div, Group, Header } from '@vkontakte/vkui';
import Video from '../../components/Video/Video';

const TeacherCardVideo = ({ teacher }) => {
    return teacher?.presentationVideoYoutubeId ? (
        <Group header={<Header mode="primary">Видеопрезентация</Header>}>
            <Div>
                <Video videoId={teacher.presentationVideoYoutubeId} />
            </Div>
        </Group>
    ) : null;
};

TeacherCardVideo.propTypes = {
    teacher: PropTypes.object.isRequired,
};

export default React.memo(TeacherCardVideo);
