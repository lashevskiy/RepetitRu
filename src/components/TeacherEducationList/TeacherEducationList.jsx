import React from 'react';
import PropTypes from 'prop-types';
import { Group } from '@vkontakte/vkui';
import TeacherEducation from '../TeacherEducation/TeacherEducation';

const TeacherEducationList = ({ educations }) => (
    <Group separator="hide">
        {educations?.map(education => (
            <Group key={education.id} separator="auto">
                <TeacherEducation key={education.id} education={education} />
            </Group>
        ))}
    </Group>
);

TeacherEducationList.propTypes = {
    educations: PropTypes.array.isRequired,
};

export default React.memo(TeacherEducationList);
