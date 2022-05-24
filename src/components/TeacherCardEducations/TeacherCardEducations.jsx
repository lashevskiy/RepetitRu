import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardScroll, Group, Header, Link } from '@vkontakte/vkui';
import { withNavigation } from '../../containers/HOC/withNavigation';
import TeacherEducation from '../TeacherEducation/TeacherEducation';
import { MODALS_ID } from '../../constants/modals';

const TeacherCardEducations = ({ educations, ...navigationParams }) => {
    const { setActiveModal } = navigationParams;

    const handleClick = React.useCallback(() => {
        setActiveModal(MODALS_ID.EDUCATION, { educations });
    }, [educations, setActiveModal]);

    return educations?.length > 0 ? (
        <Group
            header={
                <Header
                    mode="primary"
                    indicator={educations?.length}
                    aside={<Link onClick={handleClick}>Показать все</Link>}
                >
                    Образование
                </Header>
            }
        >
            <CardScroll>
                {educations?.map(education => (
                    <Card size="l" key={education.id}>
                        <TeacherEducation education={education} />
                    </Card>
                ))}
            </CardScroll>
        </Group>
    ) : null;
};

TeacherCardEducations.propTypes = {
    educations: PropTypes.array.isRequired,
};

export default withNavigation(TeacherCardEducations);
