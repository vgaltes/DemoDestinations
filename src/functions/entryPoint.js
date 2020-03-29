const AWS = require("aws-sdk");
const SNS = new AWS.SNS();

module.exports.handler = async (event) => {
    console.log(JSON.stringify(event));

    const body = JSON.parse(event.body);
    const type = body.type;
    const message = body.message;
    const data = {
        type,message
    }

    const params = {
        Message: JSON.stringify(data),
        TopicArn: process.env.snsTopic
      };
    
      await SNS.publish(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message })
    };
};
