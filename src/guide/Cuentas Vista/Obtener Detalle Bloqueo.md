# Obtener Detalle Bloqueo 

Método para obtener el detalle de un bloqueo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ObtenerDetalleBloqueo | RBTPG140 | Global 

> Ejemplo de invocación al método Obtener Detalle Bloqueo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerDetalleBloqueo> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:idBloqueo>23</bts:idBloqueo> 
      </bts:BTCuentasVista.ObtenerDetalleBloqueo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerDetalleBloqueo=' \ 
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
    "idBloqueo": 23 
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
      <BTCuentasVista.ObtenerDetalleBloqueoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b1848faff14A8B5C60A82434</Token> 
         </Btinreq> 
         <operacionUId>3</operacionUId> 
         <clienteUId>61</clienteUId> 
         <importe>10.0</importe> 
         <fechaVencimiento>2018-05-14</fechaVencimiento> 
         <motivo>Motivo Bloqueo 01</motivo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>222</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerDetalleBloqueo</Servicio> 
            <Requerimiento>3</Requerimiento> 
            <Fecha>2018-05-08</Fecha> 
            <Hora>16:05:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerDetalleBloqueoResponse> 
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
    "operacionUId": "3", 
    "clienteUId": "61", 
    "importe": "10.0", 
    "fechaVencimiento": "2018-05-14", 
    "motivo": "Motivo Bloqueo 01", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "225", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerDetalleBloqueo", 
        "Requerimiento": "2", 
        "Fecha": "2018-05-08", 
        "Hora": "16:10:37", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
idBloqueo | Long | Identificador de bloqueo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
clienteUId | Long | Identificador único de cliente. 
importe | Long | Importe bloqueado. 
fechaVencimiento | Date | Fecha vencimiento de bloqueo. 
motivo | String | Motivo del bloqueo. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador del bloqueo. 
40001 | No se pudo encontrar el registro correspondiente al Id de Bloqueo. 

 
