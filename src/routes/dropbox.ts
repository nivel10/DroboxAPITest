import express from 'express';
import { responseGet } from '../helpers/main';
import { fileGetAsync, fileUrlDownloadGetAsync } from '../helpers/dropbox';

const routerDropbox = express.Router();

routerDropbox.get('/', async (_req, _res) => {
    console?.log('dropbox get');
    _res.send('api dropbox (get)');
});

routerDropbox.post('/filesGet', async (_req, _res) => {
    let response = responseGet();
    try {
        const folderPaths = {
            chej: '/SF - CHEJ Consultor, C.A. - Oficina/CHEJ Consultor, C.A',
            office: '/SF - CHEJ Consultor, C.A. - Oficina',
            serviceOrders: '/SF - CHEJ Consultor, C.A. - Oficina/CHEJ Consultor, C.A/Ord. de Servicio (Digitalizadas)',
            yecary: '/SF - CHEJ Consultor, C.A. - Oficina/chej consultor, c.a/Ord. de Servicio (Digitalizadas)/Etiquetas Yecary, C.A',
        };

        response = await fileGetAsync({ dropboxFilePath: folderPaths?.yecary, });
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Error: ${ex.message}`;
    }
    _res.json(response);
});

routerDropbox.post('/fileGet', async (_req, _res) => {
    let response = responseGet();
    try {
        const filePaths = {
            yec651: {
                id: 'id:kwwpYfd6NIAAAAAAAAAO7A',
                name: '/SER-YEC651.pdf',
                path: '/sf - chej consultor, c.a. - oficina/chej consultor, c.a/ord. de servicio (digitalizadas)/etiquetas yecary, c.a/ser-yec651.pdf',
                rev: '17b63ee851f4',
            }
        };

        response = await fileUrlDownloadGetAsync({
            //filePath: filePaths?.yec651.path,
            filePath: filePaths?.yec651.path,
            //rev: undefined,
        });
    } catch (ex: any) {
        response.isSuccess = false;
        response.msgType = -1;
        response.msgText = `Error: ${ex.message}`;
    }
    _res.json(response);
});

export default routerDropbox;