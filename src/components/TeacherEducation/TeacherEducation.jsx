import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { MiniInfoCell, Header, Group } from '@vkontakte/vkui';
import { Icon20EducationOutline, Icon20CommentOutline } from '@vkontakte/icons';
import { capitalizeFirstLetter } from '../../utils/text';
import './style.scss';

const b = bemCl('teacher-education');

const TeacherEducation = ({ education }) => {
    const info = [education?.faculty?.name, education?.speciality, education?.graduationYear]
        .filter(el => el !== undefined && el !== '')
        .join(', ');

    return (
        <Group className={b().toString()}>
            <Header mode="primary" className={b('university').toString()}>
                {education?.faculty?.college?.name || education?.collegeName}
            </Header>

            <MiniInfoCell before={<Icon20EducationOutline />} textWrap="full">
                {capitalizeFirstLetter(info)}
            </MiniInfoCell>

            {education?.comments ? (
                <MiniInfoCell before={<Icon20CommentOutline />} textWrap="full">
                    {capitalizeFirstLetter(education?.comments)}
                </MiniInfoCell>
            ) : null}
        </Group>
    );
};

TeacherEducation.propTypes = {
    education: PropTypes.object.isRequired,
};

export default React.memo(TeacherEducation);
