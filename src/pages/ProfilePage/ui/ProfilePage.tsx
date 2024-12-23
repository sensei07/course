import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('Profile not found')} />;
    }

    return (
        <Page className={classNames('', {}, [])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>

        </Page>
    );
};

export default ProfilePage;
