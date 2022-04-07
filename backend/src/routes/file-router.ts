import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import fileService from '../services/file-upload-service';
import { ParamMissingError } from '../shared/errors';
import { initUploader } from '../shared/functions';
import { IFile } from '@models/file-model';

// init uploader
const upload = initUploader();
// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    getById: '/:email',
    get: '/',
    add: '/',
} as const;



/**
 * Get all users.
 */
router.get(p.get, async (_: Request, res: Response) => {
    const files = await fileService.getAll();
    return res.status(OK).json({ files });
});


/**
 * get file by user.
 */
router.get(p.getById, async (req: Request, res: Response) => {
    const { email } = req.params;
    // Check param
    if (!email) {
        throw new ParamMissingError();
    }
    // Fetch data
    const file = await fileService.getByUser(email);
    return res.status(OK).json({ file });
});

router.post(p.add, upload.single('data'), async (req: any, res: Response) => {
    const file = req.file.filename;
    const { user } = req.body;

    if (!file) {
        throw new ParamMissingError();
    }
    if (!user) {
        throw new ParamMissingError();
    }

    const fileBody: IFile = {
        id: -1,
        path: `/uploads/${file}`,
        user: {
            id: -1,
            email: user,
            name: user
        }
    }

    await fileService.addOne(fileBody);
    return res.status(OK).end();
});

// Export default
export default router;
