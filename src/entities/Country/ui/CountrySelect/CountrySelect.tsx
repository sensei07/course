import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

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

        return (
            <ListBox
                className={className}
                value={value}
                defaultValue={t('Country')}
                items={options}
                label={t('Country')}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );

        // return (
        //     <Select
        //         className={classNames('', {}, [className])}
        //         label={t('Country')}
        //         options={options}
        //         value={value}
        //         onChange={onChangeHandler}
        //         readonly={readonly}
        //     />
        // );
    },
);
