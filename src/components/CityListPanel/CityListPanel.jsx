import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, PanelSpinner, Search } from '@vkontakte/vkui';
import { getPanelHeader } from '../../utils/panels';
import StateRender from '../StateRender/StateRender';
import ErrorRender from '../ErrorRender/ErrorRender';
import CityList from '../CityList/CityList';
import EmptyResult from '../EmptyResult/EmptyResult';
import { getFilteredList } from '../../utils/filter';

const CityListPanel = ({ id, data, isLoading, isHasError, fetchData, setCity, ...navigationParams }) => {
    const [search, setSearch] = React.useState('');

    const handleClickBack = React.useCallback(() => navigationParams.back(), [navigationParams]);

    const onChange = React.useCallback(e => setSearch(e.target.value), []);

    const cityList = React.useMemo(() => getFilteredList(data, search), [search, data]);

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={handleClickBack} />}>{getPanelHeader(id)}</PanelHeader>

            <StateRender
                isLoading={isLoading}
                isHasError={isHasError}
                loadingComponent={<PanelSpinner size="regular" />}
                errorComponent={<ErrorRender onClick={fetchData} />}
                doneComponent={
                    <div>
                        <Search value={search} onChange={onChange} placeholder={'Начните вводить'} />
                        {!isLoading && cityList.length === 0 ? (
                            <EmptyResult text="нет города" />
                        ) : (
                            <CityList cityList={cityList} setCity={setCity} back={handleClickBack} />
                        )}
                    </div>
                }
            />
        </Panel>
    );
};

CityListPanel.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isHasError: PropTypes.bool.isRequired,
    fetchData: PropTypes.func.isRequired,
    setCity: PropTypes.func.isRequired,
};

export default React.memo(CityListPanel);
