const j2s = require('joi-to-swagger');

const {
    addUserDto
} = require('./users.dto');

module.exports = {
    "/user": {
        get: {
            summary: "Добавить пользователя",
            description: "Данные необходимые для добавления нового пользователя",
            requestBody: {
                          content: {
                              "application/json": {
                                  schema: j2s(addUserDto.body).swagger
                              }
                          }
                      },
            responses: {
                "200": {
                    description: "Данные пользователя добавлены",
                    content: {
                        "application.json":{
                            schema: {
                                type: "object",
                                properties: {}
                            }
                        }
                    }
                },
            }
        }
    },
    // "/devices/schedule/{deviceId}": {
    //     get: {
    //         summary: "",
    //         description: "",
    //         parameters: [
    //             {
    //                 in: "path",
    //                 name: "deviceId",
    //                 schema: j2s(device).swagger,
    //                 description: "ID устройства"
    //             }
    //         ],
    //         tags: [
    //             "device",
    //             "schedule"
    //         ],
    //         responses: {
    //             "200": {
    //                 description: "",
    //                 content: {
    //                     "application.json":{}
    //                 }
    //             },
    //         }
    //     }
    // },
    // "/devices/config/{deviceId}": {
    //     get: {
    //         summary: "",
    //         description: "",
    //         parameters: [
    //             {
    //                 in: "path",
    //                 name: "deviceId",
    //                 schema: j2s(device).swagger,
    //                 description: "ID устройства"
    //             }
    //         ],
    //         tags: [
    //             "device",
    //             "config"
    //         ],
    //         responses: {
    //             "200": {
    //                 description: "",
    //                 content: {
    //                     "application.json":{}
    //                 }
    //             },
    //         }
    //     }
    // },
    // "/devices/list": {
    //     get: {
    //         summary: "",
    //         description: "",
    //         parameters: [
    //             {
    //                 in: "query",
    //                 name: "place",
    //                 schema: j2s(place).swagger,
    //                 description: "ID площадки"
    //             },
    //             {
    //                 name: "group",
    //                 in: "query",
    //                 type: "array",
    //                 schema: j2s(groups).swagger,
    //                 collectionFormat: "multi",
    //                 description: "ID группы устройств"
    //             }
    //         ],
    //         tags: [
    //             "device",
    //             "config"
    //         ],
    //         responses: {
    //             "200": {
    //                 description: "",
    //                 content: {
    //                     "application.json":{}
    //                 }
    //             },
    //         }
    //     }
    // },
    // "/devices/stat/{deviceId}": {
    //     post: {
    //         summary: "",
    //         description: "",
    //         parameters: [
    //             {
    //                 in: "path",
    //                 name: "deviceId",
    //                 schema: j2s(device).swagger,
    //                 description: "ID устройства"
    //             }
    //         ],
    //         requestBody: {
    //             content: {
    //                 "application/json": {
    //                     schema: j2s(addStatsDto.body).swagger
    //                 }
    //             }
    //         },
    //         tags: [
    //             "device"
    //         ],
    //         responses: {
    //             "200": {
    //                 description: "",
    //                 content: {
    //                     "application.json":{}
    //                 }
    //             },
    //         }
    //     }
    // },
    // "/devices/log/{deviceId}": {
    //     post: {
    //         summary: "",
    //         description: "",
    //         parameters: [
    //             {
    //                 in: "path",
    //                 name: "deviceId",
    //                 schema: j2s(device).swagger,
    //                 description: "ID устройства"
    //             }
    //         ],
    //         requestBody: {
    //             content: {
    //                 "application/json": {
    //                     schema: j2s(addLogsDto.body).swagger
    //                 }
    //             }
    //         },
    //         tags: [
    //             "device"
    //         ],
    //         responses: {
    //             "200": {
    //                 description: "",
    //                 content: {
    //                     "application.json":{}
    //                 }
    //             },
    //         }
    //     }
    // },
    // "/devices/monitor/{deviceId}": {
    //     post: {
    //         summary: "",
    //         description: "",
    //         parameters: [
    //             {
    //                 in: "path",
    //                 name: "deviceId",
    //                 schema: j2s(device).swagger,
    //                 description: "ID устройства"
    //             }
    //         ],
    //         requestBody: {
    //             content: {
    //                 "application/json": {
    //                     schema: j2s(addMonitorDto.body).swagger
    //                 }
    //             }
    //         },
    //         tags: [
    //             "device"
    //         ],
    //         responses: {
    //             "200": {
    //                 description: "",
    //                 content: {
    //                     "application.json":{}
    //                 }
    //             },
    //         }
    //     }
    // },
    // "/devices/voicestat": {
    //     post: {
    //         summary: "",
    //         description: "",
    //         requestBody: {
    //             content: {
    //                 "application/json": {
    //                     schema: j2s(addVoiceStatDto.body).swagger
    //                 }
    //             }
    //         },
    //         tags: [
    //             "device"
    //         ],
    //         responses: {
    //             "200": {
    //                 description: "",
    //                 content: {
    //                     "application.json":{}
    //                 }
    //             },
    //         }
    //     }
    // },
    // "/devices/excel": {
    //     get: {
    //         summary: "",
    //         description: "",
    //         parameters: [
    //             {
    //                 in: "query",
    //                 name: "group",
    //                 schema: j2s(excelGroup).swagger,
    //                 description: "ID групп устройств, разделённые запятыми"
    //             },
    //             {
    //                 in: "query",
    //                 name: "devices",
    //                 schema: j2s(excelDevices).swagger,
    //                 description: "ID устройств, разделённые запятыми"
    //             }
    //         ],
    //         tags: [
    //             "device",
    //             "excel"
    //         ],
    //         responses: {
    //             "200": {
    //                 description: "",
    //                 content: {
    //                     "application.json":{}
    //                 }
    //             },
    //         }
    //     }
    // },
}
