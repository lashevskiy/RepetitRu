import { all, fork, put, select, takeLatest } from 'redux-saga/effects';
import * as API from '../../api/teachersList';
import * as filterPanelSelectors from '../../containers/FilterPanel/selectors';
import * as teachersListPanelSelectors from '../../containers/TeachersListPanel/selectors';
import * as actions from './actions';

function* init() {
    yield put(actions.fetchTeachers());
}

function* getTeachers(type = 'short') {
    const ids = yield select(teachersListPanelSelectors.getTeacherIds);
    const offset = yield select(teachersListPanelSelectors.getOffset);
    const limit = yield select(teachersListPanelSelectors.getLimit);

    return yield API.getTeachersList(ids.slice(offset, offset + limit), type);
}

function* getTeacherIds(param) {
    const filter = yield select(filterPanelSelectors.getFilter);

    let params = {
        closestStationId: null,
        isPhotoOnly: null,
        isVerified: null,
        lessonPlace: 0,
        searchSubjectId: null,
        sex: null,
        teacherStatusIds: '',
        withReviews: null,
        minAge: null,
        maxAge: null,
        minExperience: null,
        maxExperience: null,
        minPricePerHour: null,
        maxPricePerHour: null,
    };

    params.lessonPlace = filter.lessonPlace;
    params.minPricePerHour = filter.minPricePerHour;
    params.maxPricePerHour = filter.maxPricePerHour;

    const {
        teacherStatusIds1,
        teacherStatusIds2,
        teacherStatusIds3,
        teacherStatusIds4,
        teacherStatusIds5,
        teacherStatusIds7,
    } = filter;

    let ids = [];
    if (teacherStatusIds1 === true) {
        ids.push(1);
    }
    if (teacherStatusIds2 === true) {
        ids.push(2);
    }
    if (teacherStatusIds3 === true) {
        ids.push(3);
    }
    if (teacherStatusIds4 === true) {
        ids.push(4);
    }
    if (teacherStatusIds5 === true) {
        ids.push(5);
    }
    if (teacherStatusIds7 === true) {
        ids.push(7);
    }

    let idsRes = ids.reduce((acc, item, index) => {
        return [...acc, `teacherStatusIds[${index}]=${item}`];
    }, []);

    let teacherStatusIds = idsRes.join('&');
    if (teacherStatusIds !== '') {
        params.teacherStatusIds = teacherStatusIds;
    }

    if (filter.isPhotoOnly) {
        params.isPhotoOnly = true;
    }
    if (filter.isVerified) {
        params.isVerified = true;
    }
    if (filter.withReviews) {
        params.withReviews = true;
    }

    if (filter.sex.male === true && filter.sex.female === true) {
        params.sex = null;
    }
    if (filter.sex.male === true && filter.sex.female === false) {
        params.sex = 1;
    }
    if (filter.sex.male === false && filter.sex.female === true) {
        params.sex = 2;
    }

    const ages = [];
    const { age30, age50, age100 } = filter;
    if (age30 === true) {
        ages.push(0);
        ages.push(30);
    }
    if (age50 === true) {
        ages.push(30);
        ages.push(50);
    }
    if (age100 === true) {
        ages.push(50);
        ages.push(100);
    }

    if (ages.length > 0) {
        params.minAge = ages[0];
        params.maxAge = ages.pop();
    }

    const experience = [];
    const { experience1, experience5, experience10, experience100 } = filter;
    if (experience1 === true) {
        experience.push(0);
        experience.push(1);
    }
    if (experience5 === true) {
        experience.push(1);
        experience.push(5);
    }
    if (experience10 === true) {
        experience.push(5);
        experience.push(10);
    }
    if (experience100 === true) {
        experience.push(10);
        experience.push(100);
    }

    if (experience.length > 0) {
        params.minExperience = experience[0];
        params.maxExperience = experience.pop();
    }

    if (filter.city) {
        params.areaId = filter.city.id;
    }
    if (filter.district) {
        params.districtId = filter.district.id;
    }
    if (filter.lesson) {
        params.searchSubjectId = filter.lesson.id;
    }

    yield put(actions.fetchTeachersIds());
    const teacherIds = yield API.getTeachersIds(params);
    yield put(actions.fetchTeachersIdsSuccess(teacherIds));
}

function* fetch(action) {
    try {
        yield getTeacherIds(action.data);

        const response = yield getTeachers();
        yield put(actions.fetchTeachersSuccess(response));

        yield fetchFull();
    } catch (e) {
        yield put(actions.fetchTeachersFailure({ message: e.statusText }));
    }
}

function* fetchFull() {
    try {
        const response = yield getTeachers('full');
        yield put(actions.fetchTeachersFullSuccess(response));
    } catch (e) {
        yield put(actions.fetchTeachersFullFailure({ message: e.statusText }));
    }
}

function* changePage(action) {
    try {
        const response = yield getTeachers();
        yield put(actions.fetchTeachersSuccess(response));

        yield fetchFull();
    } catch (e) {
        yield put(actions.fetchTeachersFailure({ message: e.statusText }));
    }
}

export default function* TeachersListSaga() {
    yield all([
        yield fork(init),
        takeLatest(actions.TYPES.FETCH_TEACHERS, fetch),
        takeLatest(actions.TYPES.FETCH_TEACHERS_FULL, fetchFull),
        takeLatest(actions.TYPES.CHANGE_PAGE, changePage),
    ]);
}
