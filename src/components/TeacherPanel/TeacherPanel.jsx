import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, PanelSpinner } from '@vkontakte/vkui';
import { getPanelHeader } from '../../utils/panels';
import StateRender from '../StateRender/StateRender';
import ErrorRender from '../ErrorRender/ErrorRender';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeacherPanel = ({
    id,
    user,
    favoriteTeachers,
    isFavoriteTeacher,
    addFavorite,
    deleteFavorite,
    teacherId,
    teacher,
    teacherFull,
    isLoading,
    isHasError,
    fetchTeacher,
    resetData,
    ...navigationParams
}) => {
    React.useEffect(() => {
        if (teacherFull == null) {
            fetchTeacher(teacherId);
        }

        return () => {
            resetData();
        };
    }, [teacherId, teacherFull, fetchTeacher, resetData]);

    const handleClickBack = React.useCallback(() => navigationParams.back(), [navigationParams]);
    const handleRefetchData = React.useCallback(() => fetchTeacher(teacherId), [teacherId, fetchTeacher]);

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={handleClickBack} />}>{getPanelHeader(id)}</PanelHeader>

            <StateRender
                isLoading={isLoading}
                isHasError={isHasError}
                loadingComponent={<PanelSpinner size="regular" />}
                errorComponent={<ErrorRender onClick={handleRefetchData} />}
                doneComponent={
                    <TeacherCard
                        teacher={teacherFull != null ? teacherFull : teacher}
                        user={user}
                        isFavoriteTeacher={isFavoriteTeacher}
                        favoriteTeachers={favoriteTeachers}
                        addFavorite={addFavorite}
                        deleteFavorite={deleteFavorite}
                    />
                }
            />
        </Panel>
    );
};

TeacherPanel.propTypes = {
    id: PropTypes.string.isRequired,
    teacherId: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    favoriteTeachers: PropTypes.array.isRequired,
    teacher: PropTypes.object.isRequired,
    teacherFull: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isHasError: PropTypes.bool.isRequired,
    fetchTeacher: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    isFavoriteTeacher: PropTypes.bool.isRequired,
    addFavorite: PropTypes.func.isRequired,
    deleteFavorite: PropTypes.func.isRequired,
};

export default React.memo(TeacherPanel);
