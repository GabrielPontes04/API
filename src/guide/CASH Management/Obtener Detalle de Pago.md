# Obtener Detalle de Pago 

Método para obtener la información de líneas de detalle de pago. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCASHManagement.ObtenerDetallePago | RBTPGC22 | Global 

> Ejemplo de invocación al método Obtener Detalle de Pago 

<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/odwsbt_BTCASHManagement_v1?ObtenerDetallePago' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"archivoId":104 
}' 
``` 
</code-block> 

<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.ObtenerDetallePago> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>311020191114150000216393</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:archivoId>104</bts:archivoId> 
      </bts:BTCASHManagement.ObtenerDetallePago> 
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
	"cuentaDebito":1, 
	"cantidadLineas":5, 
	"moneda":101, 
	"importe":50, 
	"referencia" : "", 
	"fechaPago" : "0000-00-00", 
	"estado" : "P",	 
	"detallePagos": { 
		"sBTDetallePago": [ 
		   { 
			  "nombre": "RAMON PEREIRA", 
			  "beneficiarioId": [], 
			  "beneficiarioCuenta": "4466885511", 
			  "beneficiarioBanco": [], 
			  "fechaPago": "2019-05-30", 
			  "moneda": "101", 
			  "importe": "11.00", 
			  "estado": "V", 
			  "mensajesError": [] 
		   }, 
		   { 
			  "nombre": [], 
			  "beneficiarioId": [], 
			  "beneficiarioCuenta": "020000010100001", 
			  "beneficiarioBanco": [], 
			  "fechaPago": "2019-05-30", 
			  "moneda": "101", 
			  "importe": "12.00", 
			  "estado": "M", 
			  "mensajesError": { 
				 "item": "PCSM237-Moneda de orden no puede ser distinta de moneda de cuenta destino" 
			  } 
		   }, 
		   { 
			  "nombre": "DANIEL COHEN", 
			  "beneficiarioId": [], 
			  "beneficiarioCuenta": "369354899", 
			  "beneficiarioBanco": [], 
			  "fechaPago": "2019-05-30", 
			  "moneda": "101", 
			  "importe": "13.00", 
			  "estado": "V", 
			  "mensajesError": [] 
		   }, 
		   { 
			  "nombre": "VICTOR SARRIAS", 
			  "beneficiarioId": [], 
			  "beneficiarioCuenta": "44556677", 
			  "beneficiarioBanco": [], 
			  "fechaPago": "2019-05-30", 
			  "moneda": "101", 
			  "importe": "14.00", 
			  "estado": "V", 
			  "mensajesError": [] 
		   } 
		] 
	}, 
	"Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "790", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.ObtenerDetallePago", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "16:48:12", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 

<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.ObtenerDetallePagoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>311020191114150000216393</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <cuentaDebito>1</cuentaDebito> 
         <cantidadLineas>5</cantidadLineas> 
         <moneda>101</moneda> 
         <importe>50</importe> 
         <referencia></referencia> 
         <fechaPago>2019-05-30</fechaPago> 
         <estado>P</estado> 
         <detallePagos> 
            <sBTDetallePago> 
               <nombre>RAMON PEREIRA</nombre> 
               <beneficiarioId/> 
               <beneficiarioCuenta>4466885511</beneficiarioCuenta> 
               <beneficiarioBanco/> 
               <fechaPago>2019-05-30</fechaPago> 
               <moneda>101</moneda> 
               <importe>11.00</importe> 
               <estado>V</estado> 
               <mensajesError></mensajesError> 
            </sBTDetallePago> 
            <sBTDetallePago> 
               <nombre/> 
               <beneficiarioId/> 
               <beneficiarioCuenta>020000010100001</beneficiarioCuenta> 
               <beneficiarioBanco/> 
               <fechaPago>2019-05-30</fechaPago> 
               <moneda>101</moneda> 
               <importe>12.00</importe> 
               <estado>M</estado> 
               <mensajesError> 
                  <item>PCSM237-Moneda de orden no puede ser distinta de moneda de cuenta destino</item> 
               </mensajesError> 
            </sBTDetallePago> 
            <sBTDetallePago> 
               <nombre>DANIEL COHEN</nombre> 
               <beneficiarioId/> 
               <beneficiarioCuenta>369354899</beneficiarioCuenta> 
               <beneficiarioBanco/> 
               <fechaPago>2019-05-30</fechaPago> 
               <moneda>101</moneda> 
               <importe>13.00</importe> 
               <estado>V</estado> 
               <mensajesError></mensajesError> 
            </sBTDetallePago> 
            <sBTDetallePago> 
               <nombre>VICTOR SARRIAS</nombre> 
               <beneficiarioId/> 
               <beneficiarioCuenta>44556677</beneficiarioCuenta> 
               <beneficiarioBanco/> 
               <fechaPago>2019-05-30</fechaPago> 
               <moneda>101</moneda> 
               <importe>14.00</importe> 
               <estado>V</estado> 
               <mensajesError></mensajesError> 
            </sBTDetallePago> 
         </detallePagos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.ObtenerDetallePago</Servicio> 
            <Fecha>2019-10-31</Fecha> 
            <Hora>12:13:22</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>652</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.ObtenerDetallePagoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
archivoId | Long | Identificador de archivo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
cuentaDebito | Long | Operación de débito. 
cantidadLineas | Int | Cantidad de líneas del archivo. 
moneda | Short | Moneda. 
importe | Double | Importe total. 
referencia | String | Referencia del pago o cobro. 
fechaPago | Date | Fecha de pago o cobro. 
estado | String | Estado del archivo. 
erroresPago | String | Lista de mensajes del cabezal de pago. 
detallePagos | sBTDetallePago | Lista de información del archivo con su estado y mensaje. 

Los campos del tipo de dato estructurado sBTDetallePago son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
nombre | String | Nombre del Beneficiario de Pago. 
beneficiarioId | String | Identificador de Beneficiario. 
beneficiarioCuenta | String | Cuenta del Beneficiario. 
beneficiarioBanco | String | Banco del Beneficiario. 
fechaPago | Date | Fecha de Pago o Cobro. 
moneda | Short | Moneda. 
importe | Double | Importe. 
estado | String | Estado de la línea. 
mensajesError | String | Lista de mensajes de la línea. 

### Errores 

Código | Descripción 
----------- | ----------- 
1030711 | No se recuperó informacion para el identificador de archivo recibido. 

 
