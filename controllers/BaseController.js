const axios = require('axios')

const querystring = require('querystring');



require('dotenv').config();

let baseurl = process.env.BASE_URL

class BaseController{
 
   

//    constructor()
//    {
//        this.baseurl = process.env.BASE_URL
//    }

  

    static  async get(params)
    {
        
      
       let response = await axios.get(`${baseurl}`,{
            params
        })

        return response
        
       
    }

    static async post(data)
    {
        let queryString = querystring.stringify(data);
        
       
        return await axios.post(`${baseurl}?${queryString}`);
        
    }

    static async height()
    {
        let params = {
            requestType:'getBlockchainStatus'
    
          }

        let response = await axios.get(`${baseurl}`,{
            params
        })
        

        return response.data.numberOfBlocks


    }
    




}


module.exports = BaseController;