# Actualizar Documento Digital 

Método para actualizar el documento digital de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ActualizarDocumentoDigital | RBTPG170 | Global 

> Ejemplo de invocación al método Actualizar Documento Digital: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>5744be79064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
         <bts:documentoId>112</bts:documentoId> 
         <bts:nombre>ejemplo</bts:nombre> 
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado> 
         <bts:fechaEmision>2010-10-10</bts:fechaEmision> 
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento> 
      </bts:BTPersonas.ActualizarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarDocumentoDigital' \ 
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
   "documentoId":"112", 
   "nombre":"ejemplo", 
   "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=", 
   "fechaEmision":"2010-10-10", 
   "fechaVencimiento": "2020-10-10" 
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
      <BTPersonas.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>5744be79064A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>828</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ActualizarDocumentoDigital</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-12</Fecha> 
            <Hora>18:06:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarDocumentoDigitalResponse> 
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
      "Numero": 830, 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ActualizarDocumentoDigital", 
      "Requerimiento": "1", 
      "Fecha": "2018-11-12", 
      "Hora": "18:07:13", 
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
documentoId | Long | Identificador de instancia de documento. 
nombre | String | Nombre del documento. 
archivoCodificado | String | Archivo a asociar codificado. 
fechaEmision | Date | Fecha de emisión del documento (en caso que corresponda). 
fechaVencimiento | Date | Fecha de emisión del documento (en caso que corresponda). 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de instancia de documento digital. 
30002 | No se recibió nombre. 
30004 | No se recibió el identificador de persona 
30013 | No existe registro para el identificador indicado. 
30021 | Debe ingresar la fecha de emisión del documento. 
30022 | Debe ingresar la fecha de vencimiento del documento. 
30130 | Ocurrio un error al recibir el archivo, puede que el mismo este corrupto. 
31013 | Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío. 
31014 | Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora. 

 
