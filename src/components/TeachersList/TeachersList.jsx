import React from 'react';
import PropTypes from 'prop-types';
import { CardGrid, Group } from '@vkontakte/vkui';
import TeacherCardItem from '../../containers/TeacherCardItem/TeacherCardItem';

const TeachersList = ({ teachers, setTeacherId }) => (
    <Group separator="hide">
        <CardGrid>
            {teachers.map(teacher => (
                <TeacherCardItem key={teacher.id} teacher={teacher} setTeacherId={setTeacherId} />
            ))}
        </CardGrid>
    </Group>
);

TeachersList.propTypes = {
    teachers: PropTypes.array.isRequired,
    setTeacherId: PropTypes.func.isRequired,
};

export default React.memo(TeachersList);
