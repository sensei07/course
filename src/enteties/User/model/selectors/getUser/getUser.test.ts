import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUser } from './getUser';

describe('getUser.test', () => {
    test('should return user', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { id: 1, username: 'andrii' } },
        };
        expect(getUser(state as StateSchema)).toEqual({
            authData: { id: 1, username: 'andrii' },
        });
    });
});
