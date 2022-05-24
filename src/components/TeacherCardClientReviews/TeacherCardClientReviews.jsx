import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Card, CardScroll, Group, Header, Link } from '@vkontakte/vkui';
import TeacherReview from '../TeacherReview/TeacherReview';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { MODALS_ID } from '../../constants/modals';
import './style.scss';

const b = bemCl('teacher-card-client-reviews');

const TeacherCardClientReviews = ({ teacher, ...navigationParams }) => {
    const { setActiveModal } = navigationParams;

    const reviewList = React.useMemo(() => teacher?.clientReviews?.reverse().slice(0, 10) || [], [teacher]);

    const handleClick = React.useCallback(() => {
        setActiveModal(MODALS_ID.REVIEW, { reviews: teacher?.clientReviews });
    }, [teacher, setActiveModal]);

    return reviewList.length > 0 ? (
        <Group
            header={
                <Header
                    mode="primary"
                    indicator={teacher.reviewCount}
                    aside={<Link onClick={handleClick}>Показать все</Link>}
                >
                    Отзывы
                </Header>
            }
            className={b().toString()}
        >
            <CardScroll>
                {reviewList.map(review => (
                    <Card size="m" key={review.id} className={b('review').toString()}>
                        <TeacherReview review={review} />
                    </Card>
                ))}
            </CardScroll>
        </Group>
    ) : null;
};

TeacherCardClientReviews.propTypes = {
    teacher: PropTypes.object.isRequired,
};

export default withNavigation(TeacherCardClientReviews);
