# Alta Automática Contrato 

Método para dar de alta contrato para el cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCASHManagement.AltaAutomaticaContrato | RBTPGC30 | Global 

> Ejemplo de invocación al método Alta Automática Contrato: 

<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?AltaAutomaticaContrato' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: e985ea19-7527-41bc-bc60-fe431d9352b0,dbbd8038-2208-48fc-9395-1dfa11f1a0b1' \ 
  -H 'User-Agent: PostmanRuntime/7.16.3' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"clienteUId":2, 
	"servicioId":10 
}' 
``` 
</code-block> 

<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.AltaAutomaticaContrato> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>291020191816270000330911</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>2</bts:clienteUId> 
         <bts:servicioId>10</bts:servicioId> 
      </bts:BTCASHManagement.AltaAutomaticaContrato> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
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
	"contratoId":0, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "4438", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.AltaAutomaticaContrato", 
        "Fecha": "2018-12-14", 
        "Requerimiento": "", 
        "Hora": "17:00:28", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 

<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.AltaAutomaticaContratoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>291020191816270000330911</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <contratoId>14</contratoId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.AltaAutomaticaContrato</Servicio> 
            <Fecha>2019-10-29</Fecha> 
            <Hora>18:19:32</Hora> 
            <Requerimiento/> 
            <Numero>565</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.AltaAutomaticaContratoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador de la Cuenta Cliente. 
servicioId | Short | Codigo de Servicio CASH. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
contratoId | Int | Identificador del Contrato CASH del Cliente. 

### Errores 

Código | Descripción 
----------- | ----------- 
1030701 | El Servicio no existe. 
1030709 | Se requiere identificacion de cuenta cliente. 
1030760 | No se pudo dar de alta el contrato. 

 
