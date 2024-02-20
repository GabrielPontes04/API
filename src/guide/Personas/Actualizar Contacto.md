# Actualizar Contacto 

Método para actualizar un contacto jurídico de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ActualizarContacto | RBTPG309 | Global 

> Ejemplo de invocación al método Actualizar Contacto: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarContacto> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>ccbe8f2e60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
         <bts:sdtContacto> 
            <bts:vinculoId>3</bts:vinculoId> 
            <bts:domicilio3></bts:domicilio3> 
            <bts:domicilio2></bts:domicilio2> 
            <bts:domicilio1>18 de Julio 1234</bts:domicilio1> 
            <bts:correlativo>3</bts:correlativo> 
            <bts:telefono>1234 5678</bts:telefono> 
            <bts:nombre>Rodolfo Rias</bts:nombre> 
            <bts:vinculo></bts:vinculo> 
         </bts:sdtContacto> 
      </bts:BTPersonas.ActualizarContacto> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarContacto' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"personaUId":"21", 
	"sdtContacto": { 
		"vinculoId": "3", 
		"domicilio3": "", 
		"domicilio2": "", 
		"domicilio1": "18 de Julio 1234", 
		"correlativo": "3", 
		"telefono": "1234 5678", 
		"nombre": "Rodolfo Rías", 
		"vinculo": "" 
	} 
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
      <BTPersonas.ActualizarContactoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ccbe8f2e60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8529</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ActualizarContacto</Servicio> 
            <Fecha>2019-05-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>13:42:53</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarContactoResponse> 
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
    "Erroresnegocio": { 
		"BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
		"Numero": 8396, 
		"Estado": "OK", 
  	    "Servicio": "BTPersonas.ActualizarContacto", 
		"Requerimiento": "1", 
		"Fecha": "2019-05-07", 
		"Hora": "15:54:44", 
		"Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
sdtContacto | sBTContactoJuridico | Datos del contacto jurídico. 

Los campos del tipo de dato estructurado sBTContactoJuridico son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
correlativo	| Short | Correlativo. 
nombre | String | Nombre completo de la referencia. 
domicilio1 | String | Domicilio 1. 
domicilio2 | String | Domicilio 2. 
domicilio3 | String | Domicilio 3. 
telefono	| String   | Número de teléfono. 
vinculoId | Short | Identificador de vínculo. 
vinculo | String | Vínculo. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Identificador de persona requerido. 
30002 | No existe persona con el identificador ingresado. 
40001 | Correlativo no puede ser vacio. 
40002 | Correlativo no existe. 
40003 | Vinculo Codigo no puede ser vacio. 
40004 | Vinculo Codigo Incorrecto. 
40005 | Nombre no puede ser vacio. 
40006 | Domicilio1 no puede ser vacio 
40007 | Telefono no puede ser vacio. 

 
