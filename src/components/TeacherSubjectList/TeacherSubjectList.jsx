import React from 'react';
import PropTypes from 'prop-types';
import { Group } from '@vkontakte/vkui';
import TeacherSubject from '../TeacherSubject/TeacherSubject';
import { withNavigation } from '../../containers/HOC/withNavigation';

const TeacherSubjectList = ({ subjects, teacher }) => (
    <Group separator="hide">
        {subjects?.map(subject => (
            <Group separator="auto" key={subject.id}>
                <TeacherSubject subject={subject} teacher={teacher} />
            </Group>
        ))}
    </Group>
);

TeacherSubjectList.propTypes = {
    subjects: PropTypes.array.isRequired,
    teacher: PropTypes.object.isRequired,
};

export default withNavigation(TeacherSubjectList);
