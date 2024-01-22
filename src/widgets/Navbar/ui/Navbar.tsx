import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
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
                <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onLogout}>
                    {t('Log out')}
                </Button>
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
