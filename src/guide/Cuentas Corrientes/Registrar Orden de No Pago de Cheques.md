# Registrar Orden de No Pago de Cheques 

Método para registrar orden de no pago de cheques. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques | RBTPG143 | Global 

> Ejemplo de invocación al método Registrar Orden de No Pago de Cheques: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1820366692F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10176</bts:operacionUId> 
         <bts:chequeraId>21</bts:chequeraId> 
         <bts:tipoDenunciante>A</bts:tipoDenunciante> 
         <bts:tipoDenuncia>E</bts:tipoDenuncia> 
         <bts:motivoDenuncia>P</bts:motivoDenuncia> 
         <bts:sdtCheques> 
            <bts:SdtsBTCheque> 
               <bts:numero>1327</bts:numero> 
               <bts:estado>1</bts:estado> 
               <bts:descripcion>Prueba</bts:descripcion> 
            </bts:SdtsBTCheque> 
         </bts:sdtCheques> 
      </bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?RegistrarOrdenDeNoPagoCheques' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"operacionUId": "10176", 
	"chequeraId": "21", 
	"tipoDenunciante": "A", 
	"tipoDenuncia": "E", 
	"motivoDenuncia": "P", 
	"sdtCheques": { 
	  "SdtsBTCheque": { 
		"numero": "1327", 
		"estado": "1", 
		"descripcion": "Prueba" 
	  } 
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
      <BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1820366692F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <numeroDenuncia>2</numeroDenuncia> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques</Servicio> 
            <Fecha>2020-11-13</Fecha> 
            <Hora>11:47:13</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7899</Numero> 
            <Estado>NEG_ERROR</Estado> 
         </Btoutreq> 
      </BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"numeroDenuncia": "2", 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTCuentasCorrientes.RegistrarOrdenDeNoPagoCheques", 
	  "Fecha": "2020-11-13", 
	  "Hora": "11:47:13", 
	  "Requerimiento": "1", 
	  "Numero": "7899", 
	  "Estado": "NEG_ERROR" 
	} 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación de subcuenta. 
chequeraId | Long | Identificador de solicitud de chequera. 
tipoDenunciante | String | Tipo de denunciante. 
tipoDenuncia | String | Tipo de denuncia. 
motivoDenuncia | String | Motivo de la denuncia. 
sdtCheques | sBTCheque | Listado de cheques. 

Los campos del tipo de dato estructurado sBTCheque son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
numero | Int | Número de cheque. 
estado | Short | Estado del cheque. 
descripcion | String | Descripción. 

### Datos de salida 

 Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
numeroDenuncia | Long | Identificador de la denuncia. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de operación. 
30002 | No se recibió identificador de chequera. 
30003 | Debe ingresar el numero del cheque. 
30011	| No se recupero la operación para el identificador recibido. 
40001 | No existe la chequera ingresada. 
40002 | No existe la operación indicada. 
40003 | La chequera no pertenece a la operación. 
40004 | La cuenta no esta habilitada. 
40005 | La chequera no se encuentra activa. 
40006 | Cuenta Cerrada, solo se permite consultas. 
40008 | Los siguientes cheques no pertenecen a la chequera: [Números de cheques]. 
40013 | El cheque [Número de cheque] ya está pago. 
40014 | El cheque [Número de cheque] ya tiene O.N.P. 
40015 | El cheque [Número de cheque] está rechazado. 
40016 | El cheque [Número de cheque] esta certificado. 

 
