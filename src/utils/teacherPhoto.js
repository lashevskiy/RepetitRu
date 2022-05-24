export const getTeacherPhoto = teacher => {
    if (teacher.hasSquarePhoto) {
        return teacher.photoPathSquareLarge || teacher.photoPathSquare;
    }
    if (teacher.hasLargePhoto) {
        return teacher.photoPathLarge;
    }
    if (teacher.hasPhoto) {
        return teacher.photoPath;
    }

    return teacher.photoPath;
};

export const getTeacherPhotoStyle = teacher => ({
    background: `url(${teacher.photoPathLarge || teacher.photoPath})`,
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
});
