# Obtener Saldo Disponible 

Método para obtener el total de saldo disponible de una cuenta vista. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ObtenerSaldoDisponible | RBTPG245 | Global 

> Ejemplo de invocación al método Obtener Saldo Disponible: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerSaldoDisponible> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>f778078d128D513B0C396F0B</bts:Token> 
            <bts:Usuario>LARROSAC</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>WB</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>1</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerSaldoDisponible> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerSaldoDisponible \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"operacionUId": "1" 
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
      <BTCuentasVista.ObtenerSaldoDisponibleResponse> 
         <Btinreq> 
            <Device>WB</Device> 
            <Usuario>LARROSAC</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f778078d128D513B0C396F0B</Token> 
         </Btinreq> 
         <estado>0</estado> 
         <saldoDisponible>166992.5</saldoDisponible> 
         <moneda>$</moneda> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>221306</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerSaldoDisponible</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-07-26</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>14:52:21</Hora> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerSaldoDisponibleResponse> 
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
	"estado": "0", 
	"saldoDisponible": "166992.5", 
	"moneda": "$", 
	"Btoutreq": { 
	  "Numero": "221306", 
	  "Estado": "OK", 
	  "Servicio": "BTCuentasVista.ObtenerSaldoDisponible", 
	  "Requerimiento": "1", 
	  "Fecha": "2019-07-26", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "14:52:21" 
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
estado | Byte | Estado de la operación. 
saldoDisponible | Double | Saldo disponible de la operación. 
moneda | String | Signo de la moneda de la operación. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la operación. 
30002 | La operación ingresada no corresponde a una cuenta vista. 
30101 | No se recupero la operación para el identificador recibido. 

 
