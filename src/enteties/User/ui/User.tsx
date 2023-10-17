import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'shared/ui/Button/Button.module.scss';

interface UserProps {
    className?: string
}

export const User = ({ className }: UserProps) => (
    <div className={classNames(cls.User, { }, [className])}>
        1
    </div>
);
