# Agregar Víctima Hecho Violento 

Método para agregar la información de una persona víctima de un hecho violento 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.AgregarVictimaHechoViolento | RBTPCO04 | Colombia 

> Ejemplo de invocación al método Agregar Víctima Hecho Violento: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarVictimaHechoViolento> 
         <bts:Btinreq> 
            <bts:Token>042638a184CD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>42</bts:personaUId> 
         <bts:esVictima>S</bts:esVictima> 
         <bts:sdtVictimaHechoViolento> 
            <bts:entidadId>3</bts:entidadId> 
            <bts:municipio></bts:municipio> 
            <bts:departamento></bts:departamento> 
            <bts:inspeccionPolicia>Golpes</bts:inspeccionPolicia> 
            <bts:sitio>Casa</bts:sitio> 
            <bts:municipioId>421</bts:municipioId> 
            <bts:tipoId>3</bts:tipoId> 
            <bts:vereda>Av Italia</bts:vereda> 
            <bts:entidad></bts:entidad> 
            <bts:tipo></bts:tipo> 
            <bts:fechaCertificacion>2020-08-20</bts:fechaCertificacion> 
            <bts:fechaVencimiento>2021-08-20</bts:fechaVencimiento> 
            <bts:corregimiento>No tiene</bts:corregimiento> 
            <bts:departamentoId>8</bts:departamentoId> 
            <bts:fechaHecho>2020-06-20</bts:fechaHecho> 
         </bts:sdtVictimaHechoViolento> 
      </bts:BTPersonas.AgregarVictimaHechoViolento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarVictimaHechoViolento \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"personaUId": "42", 
	"esVictima": "S", 
	"sdtVictimaHechoViolento": { 
	  "entidadId": "3", 
	  "inspeccionPolicia": "Golpes", 
	  "sitio": "Casa", 
	  "municipioId": "421", 
	  "tipoId": "3", 
	  "vereda": "Av Italia", 
	  "fechaCertificacion": "2020-08-20", 
	  "fechaVencimiento": "2021-08-20", 
	  "corregimiento": "No tiene", 
	  "departamentoId": "8", 
	  "fechaHecho": "2020-06-20" 
	}, 
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
      <BTPersonas.AgregarVictimaHechoViolentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>042638a184CD285A89A23FBE</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2073</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.AgregarVictimaHechoViolento</Servicio> 
            <Fecha>2020-03-10</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>07:51:55</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.AgregarVictimaHechoViolentoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "Btoutreq": { 
      "Numero": "2073", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.AgregarVictimaHechoViolento", 
      "Fecha": "2020-03-10", 
      "Requerimiento": "1", 
      "Hora": "07:51:55", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
esVictima | String | Es víctima de hecho violento (S/N). 
sdtVictimaHechoViolento | sBTPCOVictimaHechoViolento | Datos de persona víctima de hecho violento (Se ingresa solo si el campo esVictima = S). 

Los campos del tipo de dato estructurado sBTPCOVictimaHechoViolento son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
entidadId | Long | Identificador de entidad. 
entidad | String | Nombre de entidad. 
fechaHecho | Date | Fecha en la que ocurrió el hecho. 
fechaCertificacion | Date | Fecha en la que recibió la certificación. 
fechaVencimiento | Date | Fecha de vencimiento de la certificación. 
departamentoId | Short | Identificador de departamento. 
departamento | String | Nombre del departamento donde ocurrió el hecho. 
municipioId | Short | Identificador de municipio. 
municipio | String | Nombre del municipio donde ocurrió el hecho. 
corregimiento | String | Corregimiento. 
inspeccionPolicia | String | Inspección de policía. 
vereda | String | Vereda. 
sitio | String | Sitio. 
tipoId | Short | Identificador de tipo de hecho (1 = Leve / 2 = Medio / 3 = Grave) . 
tipo | String | Tipo de hecho. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de persona. 
40001 | Debe ingresar entidad. 
40002 | La entidad ingresada no es válida. 
40003 | Debe ingresar fecha del hecho. 
40004 | La fecha del hecho no puede ser posterior a la fecha de apertura. 
40005 | Debe ingresar fecha de certificación. 
40006 | La fecha de certificación no puede ser anterior a la fecha del hecho. 
40007 | Debe ingresar fecha de vencimiento. 
40008 | La fecha de vencimiento no puede ser anterior a la fecha del hecho. 
40009 | La fecha de vencimiento no puede ser anterior a la fecha de certificación. 
40010 | Debe ingresar departamento. 
40011 | El departamento ingresado no es válido. 
40012 | Debe ingresar municipio. 
40013 | El municipio ingresado no es válido. 
40014 | Debe ingresar corregimiento. 
40015 | Debe ingresar inspección de policía. 
40016 | Debe ingresar vereda. 
40017 | Debe ingresar sitio. 
40018 | Debe ingresar tipo de hecho. 
40019 | El tipo de hecho ingresado no es válido. 
40020 | Ya existe registro. 

 
