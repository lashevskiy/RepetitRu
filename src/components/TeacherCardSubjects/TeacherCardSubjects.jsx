import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardScroll, Group, Header, Link } from '@vkontakte/vkui';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { MODALS_ID } from '../../constants/modals';
import TeacherSubject from '../TeacherSubject/TeacherSubject';

const TeacherCardSubjects = ({ teacher, ...navigationParams }) => {
    const { setActiveModal } = navigationParams;

    const handleClick = React.useCallback(() => {
        setActiveModal(MODALS_ID.SUBJECT, {
            subjects: teacher?.teachingSubjects,
            teacher: teacher,
        });
    }, [teacher, setActiveModal]);

    return teacher?.teachingSubjects?.length > 0 ? (
        <Group
            header={
                <Header
                    mode="primary"
                    indicator={teacher?.teachingSubjects?.length}
                    aside={<Link onClick={handleClick}>Показать все</Link>}
                >
                    Предметы
                </Header>
            }
        >
            <CardScroll>
                {teacher?.teachingSubjects?.map(subject => (
                    <Card size="l" key={subject.id}>
                        <TeacherSubject subject={subject} teacher={teacher} />
                    </Card>
                ))}
            </CardScroll>
        </Group>
    ) : null;
};

TeacherCardSubjects.propTypes = {
    teacher: PropTypes.object.isRequired,
};

export default withNavigation(TeacherCardSubjects);
