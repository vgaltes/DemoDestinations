module.exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const snsMessage = JSON.parse(event.Records[0].Sns.Message);

    const type = snsMessage.type;
    const message = snsMessage.message;

    if (type === "error"){
        throw new Error("Simulating error");
    }
    
    console.log(`Function not erroring. Dispatching to success destination. Message is ${message}`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message })
    };
};
