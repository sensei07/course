import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            {t('Page not found')}
        </div>
    );
};
