import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

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

    const { t } = useTranslation();

    return (
        <>
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onShowModal}>
                    {t('Enter')}
                </Button>
            </nav>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </>

    );
};
