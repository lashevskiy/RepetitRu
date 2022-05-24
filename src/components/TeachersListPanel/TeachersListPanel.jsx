import React from 'react';
import PropTypes from 'prop-types';
import {
    IOS,
    Panel,
    PanelHeader,
    PanelHeaderButton,
    PanelHeaderContent,
    PanelSpinner,
    usePlatform,
} from '@vkontakte/vkui';
import { Icon24Filter } from '@vkontakte/icons';
import { getPanelHeader } from '../../utils/panels';
import StateRender from '../StateRender/StateRender';
import ErrorRender from '../ErrorRender/ErrorRender';
import TeachersList from '../TeachersList/TeachersList';
import TeachersListPagination from '../../containers/TeachersListPanel/TeachersListPagination';
import TeachersListPlaceholder from '../TeachersListPlaceholder/TeachersListPlaceholder';
import { PANELS_ID } from '../../constants/panels';
import * as Numfix from '../../utils/numfix';

const TeachersListPanel = ({
    id,
    teacherIds,
    teachers,
    isLoading,
    isHasError,
    fetchTeachers,
    resetData,
    setTeacherId,
    ...navigationParams
}) => {
    const platform = usePlatform();

    const handleClick = React.useCallback(() => navigationParams.goToPage(PANELS_ID.FilterPanel), [navigationParams]);

    return (
        <Panel id={id}>
            <PanelHeader
                left={
                    <PanelHeaderButton onClick={handleClick}>
                        {platform === IOS ? <Icon24Filter width={28} height={28} /> : <Icon24Filter />}
                    </PanelHeaderButton>
                }
            >
                <PanelHeaderContent
                    status={isLoading ? 'Загружаю...' : Numfix.numfix(teacherIds.length, Numfix.REPETITORS)}
                >
                    {getPanelHeader(id)}
                </PanelHeaderContent>
            </PanelHeader>

            <StateRender
                isLoading={isLoading}
                isHasError={isHasError}
                loadingComponent={<PanelSpinner size="regular" />}
                errorComponent={<ErrorRender onClick={fetchTeachers} />}
                doneComponent={
                    teachers.length === 0 ? (
                        <TeachersListPlaceholder />
                    ) : (
                        <div>
                            <TeachersList teachers={teachers} setTeacherId={setTeacherId} />
                            <TeachersListPagination />
                        </div>
                    )
                }
            />
        </Panel>
    );
};

TeachersListPanel.propTypes = {
    id: PropTypes.string.isRequired,
    teachers: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isHasError: PropTypes.bool.isRequired,
    fetchTeachers: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    setTeacherId: PropTypes.func.isRequired,
};

export default React.memo(TeachersListPanel);
