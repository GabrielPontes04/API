# Cargar Servicios Disponibles 

Método para obtener los servicios disponibles para el cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCASHManagement.CargarServiciosDisponibles | RBTPGC07 | Global 

> Ejemplo de invocación al método Cargar Servicios Disponibles: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.CargarServiciosDisponibles> 
        <bts:Btinreq> 
            <bts:Device>001</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
      </bts:BTCASHManagement.CargarServiciosDisponibles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 

  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?CargarServiciosDisponibles=' \ 
  -H 'Cache-Control: no-cache' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: bf6451e8-330a-48c4-a537-af3b936653dd,c3f7702b-a97d-46c4-972f-b9b37d2a8027' \ 

  -d '{     
       "Btinreq": {            
			"Device": "001",            
			"Usuario": "MINSTALADOR",            
			"Requerimiento": "1",            
			"Canal": "BTDIGITAL", 
            "Token": "1e39d33c824A8B5C60A82434" 
        }, 
        "clienteUId": "1" 
    }' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.CargarServiciosDisponiblesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>001</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1e39d33c824A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtServicios> 
            <sBTConvServicioCASH> 
               <descServicio>Pagos por Planilla</descServicio> 
               <tipoServicio>P</tipoServicio> 
               <servicio>1</servicio> 
               <idContrato>1</idContrato> 
            </sBTConvServicioCASH> 
         </sdtServicios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>7161</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCASHManagement.CargarServiciosDisponibles</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-04-23</Fecha> 
            <Hora>18:32:37</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.CargarServiciosDisponiblesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{     
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtServicios": {                   
        "sBTConvServicioCASH": [ 
			{ 
				"descServicio": "Pagos por Planilla",  
				"tipoServicio": "P",  
				"servicio": 1,  
				"idContrato": 1 
			} 
		] 
	}, 
	"Erroresnegocio": { 
		"BTErrorNegocio": []    
    }, 

	"Btoutreq": { 

	  "Numero": 7168, 
	  "Estado": "OK", 
	  "Servicio": "BTCASHManagement.CargarServiciosDisponibles", 
	  "Requerimiento": "1", 
	  "Fecha": "2019-04-24", 
	  "Hora": "12:43:25", 
	  "Canal": "BTDIGITAL" 
	 } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtServicios | sBTConvServicioCASH | Lista de servicios del contrato. 

Los campos del tipo de dato estructurado sBTConvServicioCASH son los siguientes: 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
idContrato | Long | Identificador del contrato CASH. 
servicio | Short | Servicio CASH. 
descServicio | String | Descripcion de servicios. 
tipoServicio | String | Tipo de servicio. 

### Errores 

Código | Descripción 
--------- | ----------- 
1030705 | Cuenta cliente sin contrato vinculado. 
1030709 | Se requiere identificacion de cuenta cliente. 


 
