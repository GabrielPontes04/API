# Actualizar Domicilio 

Método para actualizar los datos del domicilio de un cliente.  

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ActualizarDomicilio | RBTPG183 | Global  

> Ejemplo de invocación al método Actualizar Domicilio: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ActualizarDomicilio> 
         <bts:Btinreq> 
           <bts:Requerimiento>1</bts:Requerimiento> 
           <bts:Canal>BTDIGITAL</bts:Canal> 
           <bts:Token>0868626a064A8B5C60A82434</bts:Token> 
           <bts:Usuario>MINSTALADOR</bts:Usuario> 
           <bts:Device>10.12.10.159</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>102</bts:clienteUId> 
         <bts:domicilio> 
            <bts:localidad></bts:localidad> 
            <bts:paisDomicilio></bts:paisDomicilio> 
            <bts:barrioId>10</bts:barrioId> 
            <bts:departamento></bts:departamento> 
            <bts:numeroPuerta>1111</bts:numeroPuerta> 
            <bts:barrio></bts:barrio> 
            <bts:localidadId>10</bts:localidadId> 
            <bts:tipoDeDomicilioId>1</bts:tipoDeDomicilioId> 
            <bts:codigoPostal>1</bts:codigoPostal> 
            <bts:calle>14 de julio</bts:calle> 
            <bts:apartamento>14B</bts:apartamento> 
            <bts:tipoDeDomicilio></bts:tipoDeDomicilio> 
            <bts:departamentoId>10</bts:departamentoId> 
            <bts:paisDomicilioId>845</bts:paisDomicilioId> 
         </bts:domicilio> 
      </bts:BTClientes.ActualizarDomicilio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ActualizarDomicilio=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"clienteUId": "102", 
   "domicilio":  
		{ 
			"localidad": "", 
			"paisDomicilio": "", 
			"barrioId": "10", 
			"departamento": "", 
			"numeroPuerta": "1111", 
			"barrio": "", 
			"localidadId": "10", 
			"tipoDeDomicilioId": "1", 
			"codigoPostal": "1", 
			"calle": "14 de julio", 
			"apartamento": "14B", 
			"tipoDeDomicilio": "", 
			"departamentoId": "10", 
			"paisDomicilioId": "845" 
		}, 
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
      <BTClientes.ActualizarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0868626a064A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>915</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ActualizarDomicilio</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-13</Fecha> 
            <Hora>15:53:20</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ActualizarDomicilioResponse> 
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
        "Numero": 917, 
        "Estado": "OK", 
        "Servicio": "BTClientes.ActualizarDomicilio", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-13", 
        "Hora": "16:07:25", 
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
domicilio | sBTDomicilio1 | Datos del domicilio.  

Los campos del tipo de dato estructurado sBTDomicilio1 son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
paisDomicilioId | Short | Identificador del país. 
paisDomicilio | String | Nombre del pais. 
departamentoId | Int | Identificador del departamento. 
departamento | String | Nombre del departamento. 
localidadId | Int | Identificador de la localidad. 
localidad | String | Nombre de la localidad. 
barrioId | Int | Identificador del barrio. 
barrio | String | Nombre del barrio. 
calle | String | Calle del domicilio. 
numeroPuerta | String | Número de puerta. 
apartamento | String | Número de apartamento. 
codigoPostal | String | Código postal. 
tipoDeDomicilioId | Byte | Identificador del tipo de domicilio. 
tipoDeDomicilio | String | Nombre del tipo de domicilio. 

### Datos de salida 

No aplica. 

### Errores  

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la cuenta. 
30002 | El identificador de la cuenta no es correcto. 
30011 | Código de domicilio no válido. 

 
