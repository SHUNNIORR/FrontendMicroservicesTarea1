import axios from "axios"

export const serviceGetNotifications = async()=>{
    try{
        const response =  await axios.get(
          "http://ec2-3-145-167-71.us-east-2.compute.amazonaws.com:4000/usuarios/notifications/1")
         
          console.log('serviciointerno', response)
          return(response.data)
    }catch (error){
        console.log('error servicio', error)
    }
}
   
      