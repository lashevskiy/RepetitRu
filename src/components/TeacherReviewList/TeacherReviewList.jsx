import React from 'react';
import PropTypes from 'prop-types';
import { Group } from '@vkontakte/vkui';
import TeacherReview from '../TeacherReview/TeacherReview';

const TeacherReviewList = ({ reviews }) => (
    <Group separator="hide">
        {reviews?.map((review, index) => (
            <Group key={review.id} separator={index === reviews.length - 1 ? 'hide' : 'show'}>
                <TeacherReview review={review} full={true} />
            </Group>
        ))}
    </Group>
);

TeacherReviewList.propTypes = {
    reviews: PropTypes.array,
};

TeacherReviewList.defaultProps = {
    reviews: [],
};

export default React.memo(TeacherReviewList);
