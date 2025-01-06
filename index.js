const aedes = require("aedes")();
const http = require('http');
const net = require("net");
const ClientControl = require("./features/clients/ClientController");
const DeviceController = require("./features/devices/Controller");
const { rejects } = require("assert");
const WebSocket = require('ws')

const devicePort = 4200;
const wsPort = 8080;




const tcpServer = net.createServer((socket) => {
    console.log('TCP client connected');
    aedes.handle(socket);
});

const httpServer = http.createServer();



const wss = new WebSocket.Server({server: httpServer });

wsServer.on('connection', (ws) => {
    console.log('WebSocket client connected');
    const stream = WebSocket.createWebSocketStream(ws);
    aedes.handle(stream);
});





// when a new client connects
aedes.on("client",async function(client){
     await ClientControl.saveClient(client);
     console.log(`Client connected: ${client.id}`);
});

aedes.on("subscribe",async function(subscription,client){
    console.log(subscription);
    console.log(`Client ${client.id} subscribed to topics: ${subscription.map(s => s.topic).join(', ')}`);
});


aedes.on('subscribe', (subscriptions, client) => {
    subscriptions.forEach((subscription) => {
      console.log(
        `Client ${client ? client.id : 'Unknown'} subscribed to topic: ${
          subscription.topic
        } with QoS: ${subscription.qos}`
      );
    });
});

function messageClient({topic,data}){
   return new Promise((resolve,rejects)=>{
        try{
            aedes.publish({
                topic: specificTopic,
                payload: data,
            });
            resolve(true);
        }
        catch(err){
            reject(err);
        }
   });
}

aedes.on("publish",async function(packet,client){
    if (client) {
        console.log(`Client ${client.id} published to topic ${packet.topic}: ${packet.payload.toString()}`);
        try{
            var deviceData = JSON.parse(packet.payload.toString());
            if(deviceData.action == "confirmTrackOnDemand"){
                 DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'trackOnDemand'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetGprsInterval"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetGprsInterval'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetAuthPhone"){
                 DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetAuthPhone'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetOverSpeedLimit"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetOverSpeedLimit'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetMovementAlarmRadius"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetMovementAlarmRadius'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetGeofenceAlarm"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetGeofenceAlarm'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmInitialization"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmInitialization'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetSleepMode"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetSleepMode'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmOutputControl"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmOutputControl'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmArmDisarm"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmArmDisarm'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetGprsIntervalOnStop"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetGprsIntervalOnStop'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetTimeZone"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetTimeZone'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetInitOrdometer"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetInitOrdometer'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmRebootDevice"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmRebootDevice'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetHeartBeat"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetHeartBeat'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmClearDataLogger"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmClearDataLogger'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmGetFirmwareVersion"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmGetFirmwareVersion'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmReadGprsInterval"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmReadGprsInterval'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmReadAuthPhone"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmReadAuthPhone'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "positionReport"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'positionReport'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "deviceAlarm"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'deviceAlarm'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "heartBeatPacket"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'heartBeatPacket'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "positionPacket"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'positionPacket'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmSetAuthorizationTag"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmSetAuthorizationTag'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "confirmReadAuthorizationTag"){
                DeviceController.handleDeviceRespose(deviceData).then(()=>{
                    var outData = {...deviceData,action:'confirmReadAuthorizationTag'};
                    messageClient({
                       topic:`user/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }

            // front end sends data

            else if(deviceData.action == "trackOnDemand"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'trackOnDemand'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setGprsInterval"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setGprsInterval'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setAuthPhone"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setAuthPhone'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setOverSpeedLimit"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setOverSpeedLimit'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setMovementAlarmRadius"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setMovementAlarmRadius'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setGeofenceAlarm"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setGeofenceAlarm'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "initialize"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'initialize'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setSleepMode"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setSleepMode'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "outputControl"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'outputControl'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "armDisarm"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'armDisarm'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setGprsIntervalOnStop"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setGprsIntervalOnStop'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setTimeZone"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setTimeZone'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setInitOrdometer"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setInitOrdometer'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "rebootDevice"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'rebootDevice'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setHeartBeat"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setHeartBeat'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "clearDataLogger"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'clearDataLogger'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "getFirmwareVersion"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'getFirmwareVersion'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "readGprsInterval"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'readGprsInterval'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "readAuthPhone"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'readAuthPhone'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "setAuthorizationTag"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'setAuthorizationTag'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }
            else if(deviceData.action == "readAuthorizationTag"){
                DeviceController.handleUserRequest(deviceData).then(()=>{
                    var outData = {...deviceData,action:'readAuthorizationTag'};
                    messageClient({
                       topic:`device/${deviceData.imei}`,
                       data: outData
                    }).then((resp)=>{
                        console.log("successfull");
                    }).catch(err=>{
                        console.log(err);
                    });
                 }).catch(err=>{
                    console.log(err);
                 });
            }

        }
        catch(err){
           console.log(err);
        }
    }
});

aedes.on('clientDisconnect', async function (client) {
    console.log(`Client disconnected: ${client.id}`);
    await ClientControl.deleteClient(client);
});


// Override the default authenticate method to capture login parameters
aedes.authenticate = async function (client, imei, password, callback) {
    console.log(`Client attempting to connect: ${client.id}`);
    console.log(`imei: ${imei}`);
    
    // Password is a Buffer, so convert it to string
    const passwordStr = password ? password.toString() : null;
    console.log(`Password: ${passwordStr}`);

    const loginStatus = ClientControl.loginClient({username: imei,password: password,clientId: client.id});
    callback(null, true);
  
    // Example authentication logic (always accept the connection)
    if (loginStatus) {
      callback(null, true);  // Authentication successful
    } else {
      callback(null, false); // Authentication failed
    }
};


tcpServer.listen({
    host: "199.192.25.155",
    port: devicePort
},function(){
     console.log("server listening at port 4200");
});

httpServer.listen({
    host: "199.192.25.155",
    port: wsPort
},function(){
     console.log("server listening at port "+ wsPort);
});