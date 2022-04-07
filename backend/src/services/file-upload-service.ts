import { IFile } from '../models/file-model';
import fileRepo from '../repos/file-repo';


/**
 * Get all file.
 * 
 * @returns 
 */
function getAll(): Promise<IFile[]> {
    return fileRepo.getAll();
}

/**
 * Get all file.
 * 
 * @returns 
 */
 function getByUser(email: string): Promise<IFile[]|null> {
    return fileRepo.getOne(email);
}

/**
 * Add one file.
 * 
 * @param file
 * @returns 
 */
function addOne(file: IFile): Promise<void> {
    return fileRepo.add(file);
}


// Export default
export default {
    getAll,
    getByUser,
    addOne,
} as const;
