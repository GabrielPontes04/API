# Obtener Cuenta Vista de CBU 

Método para obtener el identificador de operación de una cuenta corriente o cuenta de ahorro a partir del CBU. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ObtenerCuentaVistaDeCBU | RBTPAR01 | Argentina 

> Ejemplo de invocación al método Obtener Cuenta Vista de CBU: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerCuentaVistaDeCBU> 
		<Btinreq> 
			<Device>AV</Device> 
			<Usuario>MINSTALADOR</Usuario> 
			<Requerimiento></Requerimiento> 
			<Canal>BTDIGITAL</Canal> 
			<Token>268b6d23eb4A8B5C60A82434</Token> 
		</Btinreq> 
		<CBU>3220001800000831740016</CBU> 
      </bts:BTCuentasVista.ObtenerCuentaVistaDeCBU> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerCuentaVistaDeCBU=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "CBU": "3220001800000831740016" 
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
      <BTCuentasVista.ObtenerCuentaVistaDeCBUResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
			<Device>AV</Device> 
			<Usuario>MINSTALADOR</Usuario> 
			<Requerimiento></Requerimiento> 
			<Canal>BTDIGITAL</Canal> 
			<Token>268b6d23eb4A8B5C60A82434</Token> 
		</Btinreq> 
		<operacionUId>281</operacionUId> 
		<Erroresnegocio></Erroresnegocio> 
		<Btoutreq> 
			<Numero>868</Numero> 
			<Estado>OK</Estado> 
			<Servicio>BTCuentasVista.ObtenerCuentaVistaDeCBU</Servicio> 
			<Requerimiento></Requerimiento> 
			<Fecha>2017-12-18</Fecha> 
			<Hora>17:15:28</Hora> 
			<Canal>BTDIGITAL</Canal> 
		</Btoutreq> 
      </BTCuentasVista.ObtenerCuentaVistaDeCBUResponse> 
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
    "operacionUId": 281, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "868", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerCuentaVistaDeCBU", 
        "Requerimiento": "", 
        "Fecha": "2017-12-18", 
        "Hora": "17:15:28", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
CBU | String | Clave Bancaria Uniforme. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId |long | Identificador único de operación CC o CA. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió CBU. 
40001 | No se encontro operacion correspondiente al CBU. 

 
