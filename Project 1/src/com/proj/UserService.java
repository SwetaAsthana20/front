package com.proj;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path; 
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;


@Path("/UDPService") 
public class UserService {  
	
	
   @POST
   @Path("/udpsen") 
   //@Consumes(MediaType.APPLICATION_JSON)
 //  @Produces("text/html")
  @Produces(MediaType.APPLICATION_JSON)
//   @QueryParam("temp")	
   public void getXML( @QueryParam("temp")String x, String y){
	   UDPSender us= new UDPSender(x);
	   System.out.println(x+" "+y);
	   us.send(y);
	}
  
   
}