# Obtener Referencias 

Método para obtener los datos de las referencias de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerReferencias | RBTPG301 | Global 

> Ejemplo de invocación al método Obtener Referencias: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerReferencias> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>0d402C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>51</bts:personaUId> 
      </bts:BTPersonas.ObtenerReferencias> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerReferencias' \ 
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
	"personaUId":"51" 
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
      <BTPersonas.ObtenerReferenciasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d402C60A82434</Token> 
         </Btinreq> 
         <sdtReferencias> 
            <sBTReferencia> 
               <vinculoId>3</vinculoId> 
               <domicilio3/> 
               <domicilio2/> 
               <domicilio1>18 de Julio 1234</domicilio1> 
               <tipoId>P</tipoId> 
               <correlativo>1</correlativo> 
               <tipo>Personal</tipo> 
               <telefono>1234 5678</telefono> 
               <nombre>Rodolfo Rías</nombre> 
               <vinculo>Director</vinculo> 
            </sBTReferencia> 
         </sdtReferencias> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8484</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerReferencias</Servicio> 
            <Fecha>2019-05-08</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>17:29:11</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerReferenciasResponse> 
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
	"sdtReferencias": { 
		"sBTReferencia": { 
			"vinculoId": "3", 
			"domicilio3": "", 
			"domicilio2": "", 
			"domicilio1": "18 de Julio 1234", 
			"tipoId": "P", 
			"correlativo": "1", 
			"tipo": "Personal", 
			"telefono": "1234 5678", 
			"nombre": "Rodolfo Rías", 
			"vinculo": "Director" 
		} 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerReferencias", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
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

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtReferencias | sBTReferencia | Listado de referencias. 

Los campos del tipo de dato estructurado sBTReferencia son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
correlativo	| Short | Correlativo. 
vinculoId | Short | Identificador de vínculo. 
vinculo | String | Vínculo. 
domicilio1 | String | Domicilio 1. 
domicilio2 | String | Domicilio 2. 
domicilio3 | String | Domicilio 3. 
tipoId | String | Identificador de tipo de referencia. 
tipo | String | Descripción del tipo de referencia 
telefono	| String | Número de teléfono. 
nombre | String | Nombre completo de la referencia. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Identificador de persona requerido. 
30002 | No existe persona con el identificador ingresado. 
40001 | No existe Referencias para la persona en consulta. 

 
