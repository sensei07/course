import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({
        className, value, onChange, readonly,
    }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <ListBox
                className={className}
                value={value}
                defaultValue={t('Currency')}
                items={options}
                onChange={onChangeHandler}
                readonly={readonly}
                direction="top right"
            />
        );

        // return (
        //     <Select
        //         className={classNames('', {}, [className])}
        //         label={t('Currency')}
        //         options={options}
        //         value={value}
        //         onChange={onChangeHandler}
        //         readonly={readonly}
        //     />
        // );
    },
);
