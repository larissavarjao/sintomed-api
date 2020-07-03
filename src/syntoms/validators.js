import { haveUserWithId } from '../utils/user';

export const isNewSyntomValid = (newSyntom) => {
  if (!newSyntom.happenedAt) {
    return false;
  }

  if (!newSyntom.userId || !haveUserWithId(newSyntom.userId)) {
    return false;
  }

  if (!newSyntom.syntomGenericId && !newSyntom.syntomUserId) {
    return false;
  }

  return true;
};
