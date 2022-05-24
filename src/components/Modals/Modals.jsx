import React from 'react';
import bemCl from 'bem-cl';
import { ANDROID, IOS, ModalCard, ModalPage, ModalPageHeader, ModalRoot, usePlatform } from '@vkontakte/vkui';
import { Icon24Cancel } from '@vkontakte/icons/dist/24/cancel';
import Video from '../Video/Video';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import TeacherReviewList from '../TeacherReviewList/TeacherReviewList';
import TeacherSubjectList from '../TeacherSubjectList/TeacherSubjectList';
import TeacherEducationList from '../TeacherEducationList/TeacherEducationList';
import TeacherCallOrder from '../TeacherCallOrder/TeacherCallOrder';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { MODALS, MODALS_ID } from '../../constants/modals';
import './style.scss';

const b = bemCl('modals');

const ButtonLeft = ({ setActiveModal }) => {
    const platform = usePlatform();

    const handleClose = React.useCallback(() => setActiveModal(null), [setActiveModal]);

    return (
        <>
            {platform === ANDROID ? (
                <PanelHeaderButton onClick={handleClose}>
                    <Icon24Cancel />
                </PanelHeaderButton>
            ) : null}
        </>
    );
};

const ButtonRight = ({ setActiveModal }) => {
    const platform = usePlatform();

    const handleClose = React.useCallback(() => setActiveModal(null), [setActiveModal]);

    return <>{platform === IOS ? <PanelHeaderButton onClick={handleClose}>Готово</PanelHeaderButton> : null}</>;
};

const Modals = ({ user, ...navigationParams }) => {
    const platform = usePlatform();
    const { activeModal, setActiveModal, activeModalParams } = navigationParams;

    const handleClose = React.useCallback(() => setActiveModal(null), [setActiveModal]);

    const actionsVideo = [
        {
            title: 'Закрыть',
            type: 'primary',
            action: handleClose,
        },
    ];

    return (
        <ModalRoot activeModal={activeModal}>
            <ModalCard
                id={MODALS_ID.VIDEO}
                onClose={handleClose}
                header={MODALS[MODALS_ID.VIDEO].header}
                caption={MODALS[MODALS_ID.VIDEO].caption}
                actions={actionsVideo}
            >
                <div className={b()}>
                    <Video videoId={activeModalParams.videoId} />
                </div>
            </ModalCard>
            <ModalPage
                id={MODALS_ID.REVIEW}
                onClose={handleClose}
                header={
                    <ModalPageHeader
                        left={<ButtonLeft setActiveModal={setActiveModal} />}
                        right={
                            <React.Fragment>
                                {platform === IOS && (
                                    <PanelHeaderButton onClick={handleClose}>Готово</PanelHeaderButton>
                                )}
                            </React.Fragment>
                        }
                    >
                        {MODALS[MODALS_ID.REVIEW].header}
                    </ModalPageHeader>
                }
            >
                <div className={b()}>
                    <TeacherReviewList reviews={activeModalParams.reviews} />
                </div>
            </ModalPage>
            <ModalPage
                id={MODALS_ID.SUBJECT}
                onClose={handleClose}
                header={
                    <ModalPageHeader
                        left={<ButtonLeft setActiveModal={setActiveModal} />}
                        right={<ButtonRight setActiveModal={setActiveModal} />}
                    >
                        {MODALS[MODALS_ID.SUBJECT].header}
                    </ModalPageHeader>
                }
            >
                <div className={b()}>
                    <TeacherSubjectList subjects={activeModalParams.subjects} teacher={activeModalParams.teacher} />
                </div>
            </ModalPage>
            <ModalPage
                id={MODALS_ID.EDUCATION}
                onClose={handleClose}
                header={
                    <ModalPageHeader
                        left={<ButtonLeft setActiveModal={setActiveModal} />}
                        right={<ButtonRight setActiveModal={setActiveModal} />}
                    >
                        {MODALS[MODALS_ID.EDUCATION].header}
                    </ModalPageHeader>
                }
            >
                <div className={b()}>
                    <TeacherEducationList educations={activeModalParams.educations} />
                </div>
            </ModalPage>
            <ModalPage
                dynamicContentHeight
                id={MODALS_ID.ORDER}
                onClose={handleClose}
                header={
                    <ModalPageHeader
                        left={<ButtonLeft setActiveModal={setActiveModal} />}
                        right={<ButtonRight setActiveModal={setActiveModal} />}
                    >
                        {MODALS[MODALS_ID.ORDER].header}
                    </ModalPageHeader>
                }
            >
                <TeacherCallOrder user={user} />
            </ModalPage>
        </ModalRoot>
    );
};

export default withNavigation(Modals);
