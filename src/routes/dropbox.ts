import express from 'express';
import { responseGet } from '../helpers/main';
import { fileDownloadGetAsync, filePreviewGetAsync, filesListFolderGetAsync, fileTemporaryLinkGetAsync } from '../helpers/dropbox';

const routerDropbox = express.Router();

routerDropbox.post('/filesListFolderGet', async (_req, _res) => {
    let response = responseGet();
    try {
        const { path = '', } = _req?.body;

        response = await filesListFolderGetAsync({
            dropboxFilePath: path,
        });
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Error: ${ex.message}`;
    }
    _res.json(response);
});

routerDropbox.post('/fileTemporaryLinkGet', async (_req, _res) => {
    let response = responseGet();
    try {
        const { path = '', } = _req?.body;

        response = await fileTemporaryLinkGetAsync({
            filePath: path,
        });
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Error: ${ex.message}`;
    }
    _res.json(response);
});

routerDropbox.post('/fileDownloadGet', async (_req, _res) => {
    let response = responseGet();
    try {
        const { path = '', } = _req?.body;

        response = await fileDownloadGetAsync({
            filePath: path,
        });
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Error: ${ex.message}`;
    }
    _res.json(response);
});

routerDropbox.post('/filePreviewGet', async (_req, _res) => {
    let response = responseGet();
    try {
        const { path = '', } = _req?.body;

        response = await filePreviewGetAsync({
            filePath: path,
        });
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Error: ${ex.message}`;
    }
    _res.json(response);
});

export default routerDropbox;