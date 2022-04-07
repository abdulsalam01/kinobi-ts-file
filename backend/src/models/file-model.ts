import { IUser } from './user-model';

// File schema
export interface IFile {
    id: number;
    path: string;
    user: IUser;
}


/**
 * Get a new File object.
 * 
 * @returns 
 */
function getNew(path: string, email: string): IFile {
    return {        
        id: -1,
        path: path,
        user: {
            id: -1,
            email,
            name: email,
        }
    };
}

// Export default
export default {
    new: getNew
}
