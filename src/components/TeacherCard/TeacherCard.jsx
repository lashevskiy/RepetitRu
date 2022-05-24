import React from 'react';
import PropTypes from 'prop-types';
import FixedLayoutContent from '../FixedLayoutContent/FixedLayoutContent';
import TeacherCardEducations from '../TeacherCardEducations/TeacherCardEducations';
import TeacherCardCertificates from '../TeacherCardCertificates/TeacherCardCertificates';
import TeacherCardSubjects from '../TeacherCardSubjects/TeacherCardSubjects';
import TeacherCardActions from '../TeacherCardActions/TeacherCardActions';
import TeacherCardClientReviews from '../TeacherCardClientReviews/TeacherCardClientReviews';
import TeacherCardPlaces from '../TeacherCardPlaces/TeacherCardPlaces';
import TeacherCardCommonInfo from '../TeacherCardCommonInfo/TeacherCardCommonInfo';
import TeacherCardVideo from '../TeacherCardVideo/TeacherCardVideo';
import TeacherCardCall from '../TeacherCardCall/TeacherCardCall';

const TeacherCard = ({ teacher, favoriteTeachers, addFavorite, deleteFavorite }) => (
    <FixedLayoutContent>
        <TeacherCardCommonInfo teacher={teacher} />

        <TeacherCardActions
            teacher={teacher}
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
            favoriteTeachers={favoriteTeachers}
        />

        <TeacherCardSubjects teacher={teacher} />

        <TeacherCardEducations educations={teacher?.educations} />

        <TeacherCardCertificates certificates={teacher?.certificates} />

        <TeacherCardVideo teacher={teacher} />

        <TeacherCardPlaces teacher={teacher} />

        <TeacherCardClientReviews teacher={teacher} />

        <TeacherCardCall teacher={teacher} />
    </FixedLayoutContent>
);

TeacherCard.propTypes = {
    teacher: PropTypes.object.isRequired,
    isFavoriteTeacher: PropTypes.bool.isRequired,
    addFavorite: PropTypes.func.isRequired,
    deleteFavorite: PropTypes.func.isRequired,
};

export default React.memo(TeacherCard);
