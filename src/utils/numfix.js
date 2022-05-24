export const YEARS = ['год', 'года', 'лет'];
export const REVIEW = ['отзыв', 'отзыва', 'отзывов'];
export const MARK = ['оценка', 'оценки', 'оценок'];
export const FOLLOWERS = ['подписчик', 'подписчика', 'подписчиков'];
export const REPETITORS = ['репетитор', 'репетитора', 'репетиторов'];

export const numfix = (n, t) =>
    `${n} ${t[((n %= 100), 20 > n && n > 4) ? 2 : [2, 0, 1, 1, 1, 2][((n %= 10), n < 5) ? n : 5]]}`;

export const numfixValue = (n, t) =>
    t[((n %= 100), 20 > n && n > 4) ? 2 : [2, 0, 1, 1, 1, 2][((n %= 10), n < 5) ? n : 5]];
