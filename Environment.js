const path = require("path")

if (process.env.PACKAGED_PATH) {
    basePath = process.env.PACKAGED_PATH
} else {
    basePath = __dirname
}

const projectPluginMap = require(path.join(basePath, './Plugins/project-plugin-map.json'))

exports.newEnvironment = function () {

    let thisObject = {
        DEMO_MODE: false,
        DEMO_MODE_HOST: "super-super-uzzdd68dwm9w-22a320db4ede63aa.elb.us-east-2.amazonaws.com",
        BASE_PATH: basePath,
        WEB_SERVER_URL: 'localhost',
        PLATFORM_WEB_SOCKETS_INTERFACE_PORT: 18041,
        NETWORK_WEB_SOCKETS_INTERFACE_PORT: 17041,
        DESKTOP_WEB_SOCKETS_INTERFACE_PORT: 16041,
        DESKTOP_WEB_SOCKETS_INTERFACE_HOST: 'localhost',
        PLATFORM_HTTP_INTERFACE_PORT: 34248,
        DESKTOP_HTTP_INTERFACE_PORT: 33248,
        NETWORK_HTTP_INTERFACE_PORT: 31248,
        PATH_TO_DATA_STORAGE: path.join(basePath, './Platform/My-Data-Storage'),
        PATH_TO_PROJECTS: path.join(basePath, './Projects'),
        PATH_TO_PLUGINS: path.join(basePath, './Plugins'),
        PROJECT_PLUGIN_MAP: projectPluginMap,
        PATH_TO_LOG_FILES: path.join(basePath, './Platform/My-Log-Files'),
        PATH_TO_PROJECTS_REQUIRED: path.join(basePath, './Projects'),
        PATH_TO_PROJECT_SCHEMA: path.join(basePath, './Projects/ProjectsSchema.json'),
        PATH_TO_PLATFORM: path.join(basePath, './Platform'),
        PATH_TO_DESKTOP: './Desktop',
        PATH_TO_DEFAULT_WORKSPACE: path.join(basePath, './Plugins/Foundations/Workspaces'),
        PATH_TO_MY_WORKSPACES: path.join(basePath, './Platform/My-Workspaces'),
        PATH_TO_SECRETS: path.join(basePath, './My-Secrets'),
        PATH_TO_FONTS: path.join(basePath, './Platform/WebServer/Fonts'),
        DESKTOP_APP_SIGNING_ACCOUNT: 'Social-Trading-Desktop-App-1',
        DESKTOP_APP_MAX_OUTGOING_PEERS: 1,
        DESKTOP_APP_MAX_OUTGOING_START_PEERS: 0,
        TASK_SERVER_APP_MAX_OUTGOING_PEERS: 1,
        TASK_SERVER_APP_MAX_OUTGOING_START_PEERS: 1,
        MOBILE_APP_SIGNING_ACCOUNT: 'Social-Trading-Mobile-App-1',
        SERVER_APP_SIGNING_ACCOUNT: 'Social-Trading-Server-App-1',
        PLATFORM_APP_SIGNING_ACCOUNT: 'Algo-Traders-Platform-1',
        P2P_NETWORK_NODE_SIGNING_ACCOUNT: 'P2P-Network-Node-1',
        P2P_NETWORK_NODE_MAX_INCOMING_CLIENTS: 2,
        P2P_NETWORK_NODE_MAX_INCOMING_PEERS: 0,
        P2P_NETWORK_NODE_MAX_OUTGOING_PEERS: 0,
        DESKTOP_TARGET_NETWORK_TYPE: 'P2P Network',
        DESKTOP_TARGET_NETWORK_CODENAME: 'Testnet',
        TASK_SERVER_TARGET_NETWORK_TYPE: 'P2P Network',
        TASK_SERVER_TARGET_NETWORK_CODENAME: 'Testnet',
        DESKTOP_DEFAULT_SOCIAL_PERSONA: 'Social-Persona-1',
        DESKTOP_DEFAULT_SOCIAL_TRADING_BOT: 'Social-Trading-Bot-1',
        NPM_NEEDED_VERSION: '5',
        NODE_NEEDED_VERSION: '12',
        GIT_NEEDED_VERSION: '2'
    }

    if (process.env.DATA_PATH) {
        thisObject.PATH_TO_DATA_STORAGE = path.join(process.env.DATA_PATH, '/Superalgos_Data/My-Data-Storage')
        thisObject.PATH_TO_LOG_FILES = path.join(process.env.DATA_PATH, '/Superalgos_Data/My-Log-Files')
        thisObject.PATH_TO_MY_WORKSPACES = path.join(process.env.DATA_PATH, '/Superalgos_Data/My-Workspaces')
    }

    for (const envVariable in thisObject) {
        if (thisObject[envVariable] === undefined) {
            throw new Error(`Environment variable ${envVariable} is not defined`)
        }
    }

    return thisObject
}
