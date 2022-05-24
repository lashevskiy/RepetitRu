import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@vkontakte/vkui';
import SubjectItem from '../../components/SubjectItem/SubjectItem';

const SubjectsList = ({ subjects, setLesson, back }) => (
    <List>
        {subjects.map(subject => (
            <SubjectItem key={subject.id} setLesson={setLesson} subject={subject} back={back} />
        ))}
    </List>
);

SubjectsList.propTypes = {
    subjects: PropTypes.array.isRequired,
    setLesson: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired,
};

export default React.memo(SubjectsList);
