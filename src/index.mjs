export const hello = async(event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda 123 !'),
    };
    return response;
};
