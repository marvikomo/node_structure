const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const RequestHandler = require('../utils/RequestHandler');

const Logger = require('../utils/logger');

const BaseController = require('../controllers/BaseController');

const logger = new Logger();

const requestHandler = new RequestHandler(logger);

require('dotenv').config();

class AuthController extends BaseController{
    static async login(req,res){
      try{

      const {secretPhrase} = req.body;
     
      let _response = await super.get({
        requestType:'getAccountId',
        secretPhrase
      })

      return requestHandler.sendSuccess(res, 'user data')( _response.data );
     
     


    }catch(err)
    {
      return requestHandler.sendError(req, res, error);
    }
      

    }



}

module.exports = AuthController