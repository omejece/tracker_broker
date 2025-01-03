
const bcrypt = require("bcrypt");
const Model = require('../../models');


async function saveClient(data){
    try{
    }
    catch(err){
        console.log(err);
    }
}




async function loginClient(data){
    try{

        let result = await Device.findOne({where:{imei:data.imei,password: data.password}});
        if(result){
            await Device.update(
                {
                  clientId: data.clientId
                },
                {
                  where:{imei:data.imei,password: data.password}
                }
            )
            return true;
        }
        else{
            throw "invalid username"
        }
    }
    catch(err){
        console.log(err);
        return false
    }
}


async function deleteClient(data){
    try{

    }
    catch(err){
        console.log(err);
    }
}



async function updateClient(data){
    try{

    }
    catch(err){
        console.log(err);
    }
}


module.exports = {
    saveClient,
    deleteClient,
    updateClient,
    loginClient
}




