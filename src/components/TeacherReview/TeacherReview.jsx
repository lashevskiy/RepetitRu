import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { SimpleCell, Div, Text } from '@vkontakte/vkui';
import StarRatings from 'react-star-ratings';
import { format, parse } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import './style.scss';

const b = bemCl('teacher-review');

const TeacherReview = ({ review, full }) => (
    <div>
        <SimpleCell
            disabled={true}
            after={
                <StarRatings
                    rating={review.grade}
                    starRatedColor="red"
                    starDimension="16px"
                    starSpacing="1px"
                    numberOfStars={5}
                    name="rating"
                />
            }
            description={format(parse(review.date, 'dd.MM.yyyy', new Date()), 'dd MMMM yyyy', { locale: ruLocale })}
        >
            {review.clientName}
        </SimpleCell>
        <Div>
            <Text weight="regular" className={full ? b('full').toString() : b('short').toString()}>
                {review.review}
            </Text>
        </Div>
    </div>
);

TeacherReview.propTypes = {
    review: PropTypes.object.isRequired,
    full: PropTypes.bool,
};

TeacherReview.dafault = {
    full: false,
};

export default React.memo(TeacherReview);
