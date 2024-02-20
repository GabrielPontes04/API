# Agregar Referencia 

Método para agregar una referencia a una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.AgregarReferencia | RBTPG302 | Global 

> Ejemplo de invocación al método Agregar Referencia: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarReferencia> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>0d4A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
         <bts:sdtReferencia> 
            <bts:vinculoId>3</bts:vinculoId> 
            <bts:domicilio3></bts:domicilio3> 
            <bts:domicilio2></bts:domicilio2> 
            <bts:domicilio1>18 de Julio 1234</bts:domicilio1> 
            <bts:tipoId>P</bts:tipoId> 
            <bts:correlativo>1</bts:correlativo> 
            <bts:tipo></bts:tipo> 
            <bts:telefono>1234 5678</bts:telefono> 
            <bts:nombre>Rodolfo Rias</bts:nombre> 
            <bts:vinculo></bts:vinculo> 
         </bts:sdtReferencia> 
      </bts:BTPersonas.AgregarReferencia> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarReferencia' \ 
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
	"personaUId":"21", 
	"sdtReferencia": { 
		"vinculoId": "3", 
		"domicilio3": "", 
		"domicilio2": "", 
		"domicilio1": "18 de Julio 1234", 
		"tipoId": "P", 
		"correlativo": "1", 
		"tipo": "", 
		"telefono": "1234 5678", 
		"nombre": "Rodolfo Rías", 
		"vinculo": "" 
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
      <BTPersonas.AgregarReferenciaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d402ef5c90A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8487</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.AgregarReferencia</Servicio> 
            <Fecha>2019-05-08</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>17:47:52</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.AgregarReferenciaResponse> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.AgregarReferencia", 
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
sdtReferencia | sBTReferencia | Datos de referencia de la persona. 

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

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Identificador de Persona Requerido. 
30002 | No existe persona con el identificador ingresado. 
40001 | Correlativo no puede ser vacio. 
40002 | Correlativo ya existe. 
40003 | Tipo Codigo no puede ser vacio. 
40004 | Tipo Codigo Incorrecto. 
40005 | Vinculo Codigo no puede ser vacio. 
40006 | Vinculo Codigo Incorrecto. 
40007 | Nombre no puede ser vacio. 
40008 | Domicilio1 no puede ser vacio 
40009 | Telefono no puede ser vacio. 

 
