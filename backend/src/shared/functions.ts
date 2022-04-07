import logger from 'jet-logger';


/**
 * Print an error object if it's truthy. Useful for testing.
 * 
 * @param err 
 */
export function pErr(err?: Error): void {
    if (!!err) {
        logger.err(err);
    }
};


/**
 * Get a random number between 1 and 1,000,000,000,000
 * 
 * @returns 
 */
export function getRandomInt(): number {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export function initUploader() {
    // multer
    const multer = require('multer')
    // init storage
    const storage = multer.diskStorage({
        destination: function (req: Request, file: File, cb: any) {
            cb(null, './src/public/uploads')
        },
        filename: function (req: Request, file: any, cb: any) {
            const fileFormat = file.mimetype.split('/');
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, `${file.fieldname}-${uniqueSuffix}.${fileFormat[fileFormat.length - 1]}`);
        }
    });

    return multer({ storage });
}