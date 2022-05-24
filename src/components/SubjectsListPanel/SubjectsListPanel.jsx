import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, PanelSpinner, Search } from '@vkontakte/vkui';
import StateRender from '../StateRender/StateRender';
import ErrorRender from '../ErrorRender/ErrorRender';
import SubjectsList from '../SubjectsList/SubjectsList';
import EmptyResult from '../EmptyResult/EmptyResult';
import { getFilteredList } from '../../utils/filter';
import { getPanelHeader } from '../../utils/panels';

const SubjectsListPanel = ({ id, data, isLoading, isHasError, fetchData, setLesson, ...navigationParams }) => {
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        if (data.length === 0) {
            fetchData(search);
        }
    }, [data, search, fetchData]);

    const onChange = React.useCallback(
        e => {
            setSearch(e.target.value);
            fetchData(e.target.value);
        },
        [fetchData, setSearch]
    );

    const subjectsList = React.useMemo(() => getFilteredList(data, search), [search, data]);

    const handleClickBack = React.useCallback(() => navigationParams.back(), [navigationParams]);

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={handleClickBack} />}>{getPanelHeader(id)}</PanelHeader>

            <Search value={search} onChange={onChange} placeholder={'Начните вводить'} />
            <StateRender
                isLoading={isLoading}
                isHasError={isHasError}
                loadingComponent={<PanelSpinner size="regular" />}
                errorComponent={<ErrorRender onClick={fetchData} />}
                doneComponent={
                    <div>
                        {!isLoading && subjectsList.length === 0 ? (
                            <EmptyResult text="нет предмета" />
                        ) : (
                            <SubjectsList subjects={subjectsList} setLesson={setLesson} back={handleClickBack} />
                        )}
                    </div>
                }
            />
        </Panel>
    );
};

SubjectsListPanel.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isHasError: PropTypes.bool.isRequired,
    fetchData: PropTypes.func.isRequired,
    setLesson: PropTypes.func.isRequired,
};

export default React.memo(SubjectsListPanel);
