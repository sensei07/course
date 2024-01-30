import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
// import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
// import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Country } from '../../model/types/country';
// import { ToggleFeatures } from '@/shared/lib/features';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({
        className, value, onChange, readonly,
    }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        // const props = {
        //     className,
        //     value,
        //     defaultValue: t('Укажите страну'),
        //     label: t('Укажите страну'),
        //     items: options,
        //     onChange: onChangeHandler,
        //     readonly,
        //     direction: 'top right' as const,
        // };

        return (
            <Select
                className={classNames('', {}, [className])}
                label={t('Country')}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
            // <ToggleFeatures
            //     feature="isAppRedesigned"
            //     on={<ListBox {...props} />}
            //     off={<ListBoxDeprecated {...props} />}
            // /
        );
    },
);
