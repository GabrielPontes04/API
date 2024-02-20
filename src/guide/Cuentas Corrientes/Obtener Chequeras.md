# Obtener Chequeras 

Método para obtener una lista de las chequeras activas de una cuenta corriente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.ObtenerChequeras | RBTPG010 | Global 

> Ejemplo de invocación al método Obtener Chequeras: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerChequeras> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>81</bts:operacionUId> 
      </bts:BTCuentasCorrientes.ObtenerChequeras> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerChequeras=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6ac0ee72-d095-6a5a-e735-c5fe1a6935af' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 81 
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
      <BTCuentasCorrientes.ObtenerChequerasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>407fce50864A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtChequeras> 
            <chequera></chequera> 
            <productoUId>81</productoUId> 
            <cantidad>0</cantidad> 
         </sdtChequeras> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>992</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerChequeras</Servicio> 
            <Fecha>2017-12-26</Fecha> 
            <Requerimiento/> 
            <Hora>11:16:17</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerChequerasResponse> 
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
    "sdtChequeras": { 
        "chequera": { 
            "sBTChequera": [] 
        }, 
        "productoUId": "81", 
        "cantidad": "0" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "993", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerChequeras", 
        "Fecha": "2017-12-26", 
        "Requerimiento": "", 
        "Hora": "11:19:27", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtChequeras | sBTChequerasCC | Listado de chequeras. 

Los campos del tipo de dato estructurado sBTChequerasCC son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
cantidad | Int | Cantidad de chequeras. 
chequera | sBTChequera | Datos de Chequera. 

Los campos del tipo de dato estructurado sBTChequerasCC son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
chequeInicial | Int | Número de cheque en el cual inicia la chequera. 
cantidadCheques | Short | Cantidad de cheques. 
fechaAlta | Date | Fecha de alta. 
chequesDisponibles | Short | Cantidad de cheques disponibles. 
tipo | String | tipo de chequera. 
estado | String | estado de chequera. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de Operación. 
30002 | No se recuperó la operación para el identificador. 

 
