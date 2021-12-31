// functions/Api.js
// tutorial here
// https://kentcdodds.com/blog/super-simple-start-to-netlify-functions
exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: `Hello ${subject}!`,
    }
}