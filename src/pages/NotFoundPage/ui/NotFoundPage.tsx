import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Page } from 'shared/ui/Page/Page';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [])}>
            {t('Page not found')}
        </Page>
    );
};
