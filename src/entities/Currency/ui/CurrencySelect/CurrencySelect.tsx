import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select';
import { classNames } from 'shared/lib/classNames/classNames';
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

        // const props = {
        //     className,
        //     value,
        //     defaultValue: t('Specify currency'),
        //     label: t('Specify currency'),
        //     items: options,
        //     onChange: onChangeHandler,
        //     readonly,
        //     direction: 'top right' as const,
        // };

        return (
            <Select
                className={classNames('', {}, [className])}
                label={t('Currency')}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    },
);
