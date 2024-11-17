import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onShowModal = useCallback(
        () => {
            setIsAuthModal(true);
        },
        [],
    );

    const onCloseModal = useCallback(
        () => {
            setIsAuthModal(false);
        },
        [],
    );

    const onLogout = useCallback(
        () => {
            dispatch(userActions.logout());
        },
        [dispatch],
    );

    if (authData) {
        return (
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Sensei')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Create an articles')}
                </AppLink>
                <Dropdown
                    className={cls.Dropdown}
                    items={[
                        {
                            content: t('Profile'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Log out'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                    direction="bottom left"
                />
            </nav>
        );
    }

    return (
        <>
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onShowModal}>
                    {t('Enter')}
                </Button>
            </nav>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </>

    );
});
