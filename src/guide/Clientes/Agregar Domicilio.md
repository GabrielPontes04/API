# Agregar Domicilio 

Método para agregar un domicilio a un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.AgregarDomicilio | RBTPG239 | Global 

> Ejemplo de invocación al método Agregar Domicilio: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.AgregarDomicilio> 
		<bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>da17de64124A834</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
		</bts:Btinreq> 
		<bts:clienteUId>21</bts:clienteUId> 
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
      </bts:BTClientes.AgregarDomicilio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarDomicilio' \ 
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
	"clienteUId":"21", 
	"domicilio": { 
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
      <BTClientes.AgregarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>da17de64124A834</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8439</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.AgregarDomicilio</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>18:31:48</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.AgregarDomicilioResponse> 
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
        "Servicio": "BTClientes.AgregarDomicilio", 
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
30006 | No existe registro con el identificador indicado. 
40001 | Código de domicilio no válido. 

 
