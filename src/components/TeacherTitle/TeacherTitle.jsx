import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Icon16Verified } from '@vkontakte/icons';
import './style.scss';

const b = bemCl('teacher-title');

const TeacherTitle = ({ teacher }) => (
    <div className={b()}>
        {teacher.firstName} {teacher.patrName} <Icon16Verified fill="var(--accent)" className={b('icon')} />
    </div>
);

TeacherTitle.propTypes = {
    teacher: PropTypes.object.isRequired,
};

export default React.memo(TeacherTitle);
