import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Div, Group, Header, InfoRow, SimpleCell } from '@vkontakte/vkui';
import { Map, Placemark } from 'react-yandex-maps';
import DotName from '../DotName/DotName';
import './style.scss';

const b = bemCl('teacher-card-places');

const TeacherCardPlaces = ({ teacher }) => {
    const renderPlaces = React.useMemo(() => {
        const dots = [];

        teacher.teachingPlaces.forEach(place => {
            place.stationsInRange.forEach(({ station }) => {
                dots.push({
                    name: station.name,
                    color: station.metroLineColor,
                });
            });
        });

        return (
            <span>
                {dots.map((dot, index) => {
                    return dot.color ? (
                        <DotName key={index} color={dot.color} name={dot.name} />
                    ) : (
                        <span key={index}>{dot.name}</span>
                    );
                })}
            </span>
        );
    }, [teacher]);

    const places = React.useMemo(
        () => teacher?.teachingPlaces?.filter(el => el.latitude !== null && el.longitude !== null),
        [teacher]
    );

    const defaultState = {
        center: places ? [places[0]?.latitude, places[0]?.longitude] : null,
        zoom: 13,
        controls: ['zoomControl'],
    };

    return (
        <Group header={<Header mode="primary">Проведение занятий</Header>}>
            <div>
                {places?.length > 0 && (
                    <Div>
                        <Map
                            instanceRef={ref => {
                                ref && ref.behaviors.disable('scrollZoom');
                            }}
                            mode="release"
                            className={b().toString()}
                            width={'100%'}
                            defaultState={defaultState}
                            modules={['control.ZoomControl']}
                        >
                            {places?.map(place => (
                                <Placemark key={place.id} defaultGeometry={[place.latitude, place.longitude]} />
                            ))}
                        </Map>
                    </Div>
                )}
                {teacher?.teachingPlaces.length > 0 ? (
                    <SimpleCell multiline disabled>
                        {renderPlaces}
                    </SimpleCell>
                ) : null}
                <SimpleCell multiline disabled>
                    <InfoRow header="Занятия у себя">
                        {teacher.isHomeLessons
                            ? 'Репетитор проводит занятия у себя'
                            : 'Репетитор не проводит занятия у себя'}
                    </InfoRow>
                    <div>
                        {teacher?.teachingPlaces
                            ?.filter(el => el.isLessonsConducted === true)
                            .map(place => (
                                <div key={place.id}>
                                    {place.metro.name} - {place.address}
                                </div>
                            ))}
                    </div>
                </SimpleCell>
                <SimpleCell multiline disabled>
                    <InfoRow header="Занятия на выезде">
                        {teacher.isExternalLessons
                            ? 'Репетитор проводит занятия на выезде'
                            : 'Репетитор не проводит занятия на выезде'}
                    </InfoRow>
                </SimpleCell>
                <SimpleCell multiline disabled>
                    <InfoRow header="Занятия удаленно">
                        {teacher.isRemoteLessons
                            ? 'Репетитор проводит занятия удаленно'
                            : 'Репетитор не проводит занятия удаленно'}
                    </InfoRow>
                </SimpleCell>
            </div>
        </Group>
    );
};

TeacherCardPlaces.propTypes = {
    teacher: PropTypes.object.isRequired,
};

export default React.memo(TeacherCardPlaces);
