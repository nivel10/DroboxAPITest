import { Dropbox } from 'dropbox';
import { responseGet, settings } from './main';

const dbx = new Dropbox({
    accessToken: settings?.dropbox?.token,
});

export const filesListFolderGetAsync = async ({ dropboxFilePath = '', }) => {
    const currentMethod = 'filesListFolderGetAsync';
    let response = responseGet();
    try {
        const result = await dbx.filesListFolder({ path: dropboxFilePath });
        response.result = result;
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Method: ${currentMethod}<br/>`;
        response.msgText += `Error: ${ex.message}`
    }
    return response;
}

export const fileTemporaryLinkGetAsync = async ({ filePath = '', }) => {
    const currentMethod = 'fileTemporaryLinkGetAsync';
    let response = responseGet();
    try {
        if (filePath === undefined || filePath === '') {
            response.isWarning = true;
            response.msgType = 1;
            response.msgText = `Method: ${currentMethod}<br/>`;
            response.msgText += `Message: filePath is required.`;
            return response;
        }

        const result = await dbx.filesGetTemporaryLink({ path: filePath });
        response.result = result;
    } catch (ex: any) {
        response.msgText = `Method: ${currentMethod}<br/>`;
        const errorTag = ex?.error?.error?.path?.[".tag"] || '';
        switch (errorTag) {
            case settings?.dropbox?.errors?.not_file:
                response.isWarning = true;
                response.msgType = 1;
                response.msgText += `Error: ${ex?.error?.error?.path?.[".tag"]}<br/>`;
                response.msgText += `Sumary: ${ex?.error?.error_summary || ''}<br/>`;
                break;
            default:
                response.isSuccess = false;
                response.msgType = -1;
                break;
        }
        response.msgText += `Message: ${ex.message}`
    }
    return response;
}

export const fileDownloadGetAsync = async ({ filePath = '', }) => {
    const currentMethod = 'fileDownloadGetAsync';
    let response = responseGet();
    try {
        if (filePath === undefined || filePath === '') {
            response.isWarning = true;
            response.msgType = 1;
            response.msgText = `Method: ${currentMethod}<br/>`;
            response.msgText += `Message: filePath is required.`;
            return response;
        }

        const result = await dbx.filesDownload({ path: filePath });
        response.result = result;
    } catch (ex: any) {
        response.msgText = `Method: ${currentMethod}<br/>`;
        const errorTag = ex?.error?.error?.path?.[".tag"] || '';
        switch (errorTag) {
            case settings?.dropbox?.errors?.not_file:
                response.isWarning = true;
                response.msgType = 1;
                response.msgText += `Error: ${ex?.error?.error?.path?.[".tag"]}<br/>`;
                response.msgText += `Sumary: ${ex?.error?.error_summary || ''}<br/>`;
                break;
            default:
                response.isSuccess = false;
                response.msgType = -1;
                break;
        }
        response.msgText += `Message: ${ex.message}`
    }
    return response;
}

export const filePreviewGetAsync = async ({ filePath = '', }) => {
    const currentMethod = 'fileTemporaryLinkGetAsync';
    let response = responseGet();
    try {
        const result = await dbx.filesGetPreview({ path: filePath, });
        //response.result = result;
        response.result = result?.result;
    } catch (ex: any) {
        response.msgText = `Method: ${currentMethod}<br/>`;
        const errorTag = ex?.error?.error?.path?.[".tag"] || '';
        switch (errorTag) {
            case settings?.dropbox?.errors?.not_file:
                response.isWarning = true;
                response.msgType = 1;
                response.msgText += `Error: ${ex?.error?.error?.path?.[".tag"]}<br/>`;
                response.msgText += `Sumary: ${ex?.error?.error_summary || ''}<br/>`;
                break;
            default:
                response.isSuccess = false;
                response.msgType = -1;
                break;
        }
        response.msgText += `Message: ${ex.message}`
    }
    return response;
}