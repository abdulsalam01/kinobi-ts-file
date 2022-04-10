import orm from './mock-orm';
import { IFile } from '../models/file-model';
import userRepo from './user-repo';
import { getRandomInt } from '@shared/functions';

/**
 * Get one file.
 * 
 * @param email 
 * @returns 
 */
async function getOne(email: string): Promise<IFile[] | null> {
    const db = await orm.openDb();
    const user = await userRepo.getOne(email);
    const files = [];

    for (const file of db.files.slice(0, 10)) {
        if (file.user === user?.id) {
            files.push({ ...file, user });
        }
    }

    return files;
}


/**
 * Get all files.
 * 
 * @returns 
 */
async function getAll(): Promise<IFile[]> {
    const db = await orm.openDb();
    return db.files;
}


/**
 * Add one user.
 * 
 * @param user 
 * @returns 
 */
async function add(file: any): Promise<void> {
    const db = await orm.openDb();
    const user = await userRepo.getOne(file.user.email);

    file.id = getRandomInt();
    file.user = user?.id;

    db.files.push(file);

    return orm.saveDb(db);
}


// Export default
export default {
    getOne,
    getAll,
    add,
} as const;
