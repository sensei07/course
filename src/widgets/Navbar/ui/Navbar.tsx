import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <nav className={classNames(cls.Navbar, {}, [className])}>
        Navbar
    </nav>
);
