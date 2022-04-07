import userRepo from '@repos/user-repo';
import { IUser } from '@models/user-model';
import { UserNotFoundError } from '@shared/errors';



/**
 * Get all users.
 * 
 * @returns 
 */
function getAll(): Promise<IUser[]> {
    return userRepo.getAll();
}


/**
 * Add one user.
 * 
 * @param user 
 * @returns 
 */
function addOne(user: IUser): Promise<void> {
    return userRepo.add(user);
}


/**
 * Update one user.
 * 
 * @param user 
 * @returns 
 */
async function updateOne(user: IUser): Promise<void> {
    const persists = await userRepo.persists(user.id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return userRepo.update(user);
}


/**
 * Delete a user by their id.
 * 
 * @param id 
 * @returns 
 */
async function deleteOne(id: number): Promise<void> {
    const persists = await userRepo.persists(id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return userRepo.delete(id);
}

/**
 * get 1 user by random index
 */
async function getOneRand(): Promise<IUser> {
    return await userRepo.getOneRand();
}

// Export default
export default {
    getAll,
    getOneRand,
    addOne,
    updateOne,
    delete: deleteOne,
} as const;
