import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'

import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en')
	}

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
			className={classNames(cls.LangSwitcher, {}, [className])}
		>
			{t('Language')}
		</Button>
	)
}
