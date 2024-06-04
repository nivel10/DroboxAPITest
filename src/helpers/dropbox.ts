import { Dropbox } from 'dropbox';
import { responseGet, settings } from './main';

const dbx = new Dropbox({
    accessToken: settings?.dropbox?.token,
});

export const fileGetAsync = async ({ dropboxFilePath = '', }) => {
    const currentMethod = 'fileGetAsync';
    let response = responseGet();
    try {
        //const result = await dbx.filesGetTemporaryLink({ path: dropboxFilePath, });
        //const fileUrl = result.result.link;
        const result = await dbx.filesListFolder({ path: dropboxFilePath });
        //const fileUrl = result.result;
        const fileUrl = result;

        response.result = fileUrl;
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Method: ${currentMethod}<br/>`;
        response.msgText += `Error: ${ex.message}`
    }
    return response;
}

export const fileUrlDownloadGetAsync = async ({ filePath = '', }) => {
    const currentMethod = 'fileUrlDownloadGetAsync';
    let response = responseGet();
    try {
        // const result = await dbx.filesGetTemporaryLink({ path: filePath, });
        // const fileUrl = result;

        // const result = await dbx.filesDownload({ path: filePath });
        // const fileUrl = result;

       //const result = await dbx.filesGetPreview({ path: filePath, rev: rev });
       const result = await dbx.filesGetPreview({ path: filePath,});
        const fileUrl = result;

        response.result = fileUrl;
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Method: ${currentMethod}<br/>`;
        response.msgText += `Error: ${ex?.error}<br/>`;
        response.msgText += `Message: ${ex.message}`
    }
    return response;
}