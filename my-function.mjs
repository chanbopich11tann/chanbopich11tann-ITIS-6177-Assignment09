export const handler = async (event) => {
  try {
    const keyword = event.queryStringParameters.keyword;
    const responseMessage = `TANN says ${keyword}`;
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: responseMessage }),
    };
    
    return response;
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
