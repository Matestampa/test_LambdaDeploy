const {v1}=require("uuid");

exports.handler=async (event)=>{

    let rand_id=v1();

    let response = {
        statusCode: 200,
        body: JSON.stringify(`Rand id ${rand_id}`),
    };

    return response;
}