// Runtime: Node.js 18.x

exports.handler = async (event, context) => {
  const testEnvVar = process.env.TEST_VALUE;

  console.log(`Env var: ${testEnvVar}`);
  console.log(event);

  const response = {
    msg: 'Hello, world!',
  };

  console.log(response);
  return response;
};
