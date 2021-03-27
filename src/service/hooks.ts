import { useQuery } from 'react-query';

import { searchUsers } from './api';

export const useListUsers = (login: string) => useQuery(['list_users', login], () => searchUsers(login), {enabled: false});
