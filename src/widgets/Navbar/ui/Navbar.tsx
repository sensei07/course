import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(
        () => {
            setIsAuthModal((prev) => !prev);
        },
        [],
    );

    const { t } = useTranslation();

    return (
        <>
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onToggleModal}>
                    {t('Enter')}
                </Button>
            </nav>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
                // eslint-disable-next-line max-len,react/no-children-prop,i18next/no-literal-string
                children={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aperiam, consequuntur debitis dicta ducimus ea fugiat iure labore minima minus nemo provident quia voluptate.\n'}
            />
        </>

    );
};
