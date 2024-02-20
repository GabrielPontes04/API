# Crear 

Método para dar de alta una tarjeta de débito para un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.Crear | RBTPG066 | Global 

###Versión V2R3 

> Ejemplo de invocación al método Crear: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.Crear> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>161</bts:clienteUId> 
         <bts:tipoTarjeta>MNO</bts:tipoTarjeta> 
         <bts:nombreTarjeta>AV</bts:nombreTarjeta> 
      </bts:BTTarjetasDeDebito.Crear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?Crear=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9e695134-73f4-1576-72fd-f05ff93d9fba' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "clienteUId": 4, 
   "tipoTarjeta": "MNO", 
   "nombreTarjeta": "Mi tarjeta" 
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
      <BTTarjetasDeDebito.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <tarjetaUId>2000002072</tarjetaUId> 
         <numeroTarjeta>5010730101000001203</numeroTarjeta> 
         <fechaExpiracion>2028-10-31</fechaExpiracion> 
         <estadoTarjeta>INACTIVA</estadoTarjeta> 
         <estadoPlastico>A EMITIR</estadoPlastico> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>967</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.Crear</Servicio> 
            <Fecha>2017-12-22</Fecha> 
            <Requerimiento/> 
            <Hora>12:26:12</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.CrearResponse> 
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
   "tarjetaUId": "2000002073", 
   "numeroTarjeta": "5010730101000001211", 
   "fechaExpiracion": "2028-10-31", 
   "estadoTarjeta": "INACTIVA", 
   "estadoPlastico": "A EMITIR       ", 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "968", 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.Crear", 
      "Fecha": "2017-12-22", 
      "Requerimiento": "", 
      "Hora": "12:34:25", 
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
tipoTarjeta | String | Tipo de tarjeta. 
nombreTarjeta | String | Nombre de tarjeta. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta. 
numeroTarjeta | String | Número de tarjeta. 
fechaExpiracion | Date | Fecha de vencimiento. 
estadoTarjeta | String | Estado de la tarjeta. 
estadoPlastico | String | Estado del plastico. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar el identificador de cuenta. 
40001 | Tipo de tarjeta inexistente TDD015. 
40002 | El titular excede la cantidad máxima de tarjetas activas. 
40003 | El titular no existe en FSD001. 
40004 | Cuenta de costo no pertenece al titular. 
40005 | Cuenta de costo no existe en FSD011. 
40006 | Código de domicilio invalido para el titular. 
40007 | Cuenta a asociar a tarjeta no pertenece al titular. 
40010 | Número de tarjeta no es válido. 
40011 | TD nominada, no se debe informar TDD003TAR. 
40020 | Funcionalidad inexistente en TDD025. 
40021 | Funcionalidad inhabilitada en TDD025. 

###Versión V2R2 

> Ejemplo de invocación al método Crear: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.Crear> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>c7b24221f2F955E77534D3E0</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:operacionUId>1</bts:operacionUId> 
         <bts:tipoTarjeta>N</bts:tipoTarjeta> 
         <bts:nombreTarjeta>prueba</bts:nombreTarjeta> 
         <bts:codigoDomicilio>1</bts:codigoDomicilio> 
      </bts:BTTarjetasDeDebito.Crear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?Crear' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 19f16614-b11e-9eaf-4034-1d7994c6019f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "clienteUId": 1, 
   "tipoTarjeta": "N", 
   "nombreTarjeta": "prueba", 
   "operacionUId": 1, 
   "codigoDomicilio": 1 
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
      <BTTarjetasDeDebito.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>c7b24221f2F955E77534D3E0</Token> 
         </Btinreq> 
         <tarjetaUID>109</tarjetaUID> 
         <tarjetaNumero>4203213220220014240</tarjetaNumero> 
         <fechaVencimiento>2027-06-30</fechaVencimiento> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>462</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.Crear</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-02-25</Fecha> 
            <Hora>17:25:06</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.CrearResponse> 
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
   "tarjetaUID": 110, 
   "tarjetaNumero": "4203213220220014259", 
   "fechaVencimiento": "2027-06-30", 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": 463, 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.Crear", 
      "Requerimiento": "1", 
      "Fecha": "2019-02-25", 
      "Hora": "17:29:49", 
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
operacionUId | Long | Identificador único de operación de la cuenta a la que se asociará la tarjeta. 
tipoTarjeta | String | Tipo de tarjeta. 
nombreTarjeta | String | Nombre de tarjeta. 
codigoDomicilio | Byte | Código de domicilio a donde se asociará la tarjeta. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta. 
tarjetaNumero | String | Número de tarjeta. 
fechaVencimiento | Date | Fecha de vencimiento. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el identificador de cliente:  
30003 | No se recibió el identificador de operación. 
30004 | No se recuperó la operación para el identificador. 

 
