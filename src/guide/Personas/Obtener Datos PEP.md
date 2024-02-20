# Obtener Datos PEP 

Método para obtener los datos de una persona expuesta políticamente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerDatosPEP | RBTPG229 | Global 

> Ejemplo de invocación al servicio Obtener Datos PEP (V2R2): 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDatosPEP> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>110220211247090000683511</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>1</bts:personaUId> 
      </bts:BTPersonas.ObtenerDatosPEP> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDatosPEP=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
  	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "2081397563CD285A89A23FBE" 
	}, 
	"personaUId": 1 
  } 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPersonas.ObtenerDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>110220211247090000683511</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <esPEP>S</esPEP> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerDatosPEP</Servicio> 
            <Fecha>2021-02-11</Fecha> 
            <Hora>12:48:16</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10595</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerDatosPEPResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "110220211247090000683511", 
	  "Device": "GP" 
	}, 
	"esPEP": "S", 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPersonas.ObtenerDatosPEP", 
	  "Fecha": "2021-02-11", 
	  "Hora": "12:48:16", 
	  "Requerimiento": "1", 
	  "Numero": "10595", 
	  "Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 

> Ejemplo de invocación al servicio Obtener Datos PEP (V2R3): 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDatosPEP> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>970772007CD285A89A23FBEE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUID>12</bts:personaUID> 
      </bts:BTPersonas.ObtenerDatosPEP> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerDatosPEP=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
  	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "2081397563CD285A89A23FBE" 
	}, 
	"personaUId": 12 
  } 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPersonas.ObtenerDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>970772007CD285A89A23FBEE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <esPEP>S</esPEP> 
         <sdtDatosPEP> 
            <entidad>Bantotal</entidad> 
            <cargoRelacion>Político</cargoRelacion> 
            <observacion>No corresponde</observacion> 
            <fechaInicio>2012-12-12</fechaInicio> 
            <fechaSalida>0000-00-00</fechaSalida> 
         </sdtDatosPEP> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerDatosPEP</Servicio> 
            <Fecha>2021-02-11</Fecha> 
            <Hora>16:36:46</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>80313</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerDatosPEPResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "970772007CD285A89A23FBEE", 
	  "Device": "1" 
	}, 
	"esPEP": "S", 
	"sdtDatosPEP": { 
	  "entidad": "Bantotal", 
	  "cargoRelacion": "Político", 
	  "observacion": "No corresponde", 
	  "fechaInicio": "2012-12-12", 
	  "fechaSalida": "0000-00-00" 
	}, 
	"Erroresnegocio": {}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPersonas.ObtenerDatosPEP", 
	  "Fecha": "2021-02-11", 
	  "Hora": "16:36:46", 
	  "Requerimiento": "1", 
	  "Numero": "80313", 
	  "Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 

### Versión V2R2 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
esPEP | String | Es persona políticamente expuesta? (S/N). 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de persona. 

### Versión V2R3 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
esPEP | String | Es persona políticamente expuesta? (S/N). 
sdtDatosPEP	| sBTDatosPEP | Datos de la PEP. 

Los campos del tipo de dato estructurado sBTDatosPEP son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
entidad | String | Entidad. 
cargoRelacion | String | Cargo que ocupa. 
observacion | String | Observación. 
fechaInicio | Date | Fecha de inicio. 
fechaSalida | Date | Fecha de salida. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de persona. 
50001 | Fecha Inicio cargo PEP es de ingreso obligatorio. 
50002 | Entidad es de ingreso obligatorio. 
50003 | Cargo y Relación es de ingreso obligatorio. 
50004 | Fecha Salida cargo PEP debe de ser mayor a Fecha Inicio cargo PEP. 
50005 | Fecha Inicio cargo PEP debe de ser anterior a la Fecha de Hoy. 

 
