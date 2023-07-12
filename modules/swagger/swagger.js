const userPaths = require('../user/userSwagger');

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'GetBanquet',
        version: '0.0.1',
        description: 'Внешний API для GetBanquet'
    },
    servers: [
        {
            url: 'http://localhost:7777',
            description: 'Локальный сервер'
        },
        // {
        //     url: 'http://94.26.226.9/',
        //     description: 'Тестовый сервер'
        // },
        // {
        //     url: 'http://neuro-ad.com',
        //     description: 'Сервер NeuroAdmin'
        // },
    ],
    paths: {
        ...userPaths,
        // ...devicesPaths
    }
}