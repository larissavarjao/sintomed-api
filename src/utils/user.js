import { get } from '../user/model';

export const haveUserWithId = (id) => {
    const user = get(id);
    return !!user;
}