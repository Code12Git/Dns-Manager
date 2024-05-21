const {authManager,responseManager}=require('../services')

const signup = async (request, response) => {
  try {
    const result = await authManager.signup(request.body);
    return responseManager.sendSuccessResponse(response, result, 'Registration Successful.');
  } catch (err) {
    return responseManager.sendErrorResponse(response, err);
  }
};


const signin = async (request, response) => {
  try{
    const result = await authManager.signin(request.body);
    return responseManager.sendSuccessResponse(response, result, 'Login Successful.');
  } catch (err) {
    return responseManager.sendErrorResponse(response, err);
  }
};


module.exports = {signup,signin}