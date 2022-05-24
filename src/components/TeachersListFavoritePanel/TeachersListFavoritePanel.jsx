import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Panel, PanelHeader, PanelSpinner } from '@vkontakte/vkui';
import { getPanelHeader } from '../../utils/panels';
import StateRender from '../StateRender/StateRender';
import ErrorRender from '../ErrorRender/ErrorRender';
import TeachersList from '../TeachersList/TeachersList';
import TeachersListFavoritePlaceholder from '../TeachersListFavoritePlaceholder/TeachersListFavoritePlaceholder';

const b = bemCl('teachers-list-favorite-panel');

const TeachersListFavoritePanel = ({ id, teachers, isLoading, isHasError, fetchTeachers, setTeacherId }) => (
    <Panel id={id}>
        <PanelHeader>{getPanelHeader(id)}</PanelHeader>
        <StateRender
            isLoading={isLoading}
            isHasError={isHasError}
            loadingComponent={<PanelSpinner size="regular" />}
            errorComponent={<ErrorRender onClick={fetchTeachers} />}
            doneComponent={
                teachers.length === 0 ? (
                    <TeachersListFavoritePlaceholder />
                ) : (
                    <div className={b()}>
                        <TeachersList teachers={teachers} setTeacherId={setTeacherId} />
                    </div>
                )
            }
        />
    </Panel>
);

TeachersListFavoritePanel.propTypes = {
    id: PropTypes.string.isRequired,
    teachers: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isHasError: PropTypes.bool.isRequired,
    fetchTeachers: PropTypes.func.isRequired,
    setTeacherId: PropTypes.func.isRequired,
};

export default React.memo(TeachersListFavoritePanel);
