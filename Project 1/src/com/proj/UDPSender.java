package com.proj;
import java.io.*;
import java.net.*;

import javax.xml.bind.annotation.XmlRootElement;
 
@XmlRootElement
public class UDPSender
{
	static String temp=" ";
	public UDPSender(String temp)
	{
		this.temp=temp;
	}
	public static void main(String... s)
	{
	}
	public void send(String Ext)
	{
		try
		{
			byte[] data= new byte[1024];
			byte[] datas= new byte[1024];
			//InetAddress ia= InetAddress.getLocalHost();
			InetAddress ia= InetAddress.getByName("10.249.35.103");
			InetAddress ib= InetAddress.getByName("10.249.35.124");
		//BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			DatagramSocket ds= new DatagramSocket(1095);
			DatagramPacket dp= null;
			DatagramPacket dm= null;
			System.out.println("Data:--");
			
				data=temp.getBytes();
				
				dm= new DatagramPacket(data,data.length,ib,1098);
				ds.send(dm);
				dp= new DatagramPacket(data,data.length,ia,1096);
				ds.send(dp);
				System.out.println(dp +" Data Sent ");
				System.out.println(dm +" Data Sent ");
				datas=Ext.getBytes();
				dp= new DatagramPacket(datas,datas.length,ia,1096);
				ds.send(dp);
				dm= new DatagramPacket(datas,datas.length,ib,1098);
				ds.send(dm);
			
			ds.close();
		
			
		}
		catch(Exception e) 
		{
			System.out.println(e);
		}
	}
}