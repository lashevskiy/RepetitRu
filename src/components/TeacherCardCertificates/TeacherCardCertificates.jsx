import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Div, Gallery, Group, Header } from '@vkontakte/vkui';
import { ShowImages } from '../../bridge';
import './style.scss';

const b = bemCl('teacher-card-certificates');

const TeacherCardCertificates = ({ certificates }) => {
    const [certificateIndex, setCertificateIndex] = React.useState(0);

    const handleChangeGallery = React.useCallback(
        value => {
            setCertificateIndex(value);
        },
        [setCertificateIndex]
    );

    const images = React.useMemo(
        () => certificates?.map(certificate => `https:${certificate.imageUrl}`),
        [certificates]
    );

    return certificates?.length > 0 ? (
        <Group
            header={
                <Header mode="primary" indicator={certificates?.length}>
                    Дипломы
                </Header>
            }
            description={certificates?.[certificateIndex]?.name}
        >
            <Div>
                <Gallery
                    align="right"
                    slideWidth="100%"
                    className={b().toString()}
                    bullets="dark"
                    onChange={handleChangeGallery}
                >
                    {certificates?.map((certificate, index) => {
                        const handleClick = () => ShowImages(images, index);
                        const style = {
                            backgroundImage: `url(${certificate.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%',
                        };
                        return <div key={certificate.id} style={style} onClick={handleClick} />;
                    })}
                </Gallery>
            </Div>
        </Group>
    ) : null;
};

TeacherCardCertificates.propTypes = {
    certificates: PropTypes.array.isRequired,
};

export default React.memo(TeacherCardCertificates);
