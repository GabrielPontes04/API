# Obtener Documentos Adicionales 

Método para obtener un listado de los documentos adicionales de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerDocumentosAdicionales | RBTPG130 | Global 

> Ejemplo de invocación al método Obtener Documentos Adicionales: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDocumentosAdicionales> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>2e3c830e3a4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
      </bts:BTPersonas.ObtenerDocumentosAdicionales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDocumentosAdicionales=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaUId": 21     
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
      <BTPersonas.ObtenerDocumentosAdicionalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>2e3c830e3a4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDocumentosAdicionales> 
            <sBTDocumentoAdicional> 
               <paisDocumento>63</paisDocumento> 
               <paisDocumentoDsc>ARGENTINA</paisDocumentoDsc> 
               <tipoDocumento>3</tipoDocumento> 
               <tipoDocumentoDsc>Pasaporte</tipoDocumentoDsc> 
               <nroDocumento>B8789452</nroDocumento> 
               <fechaEmision>0000-00-00</fechaEmision> 
               <fechaVencimiento>2025-01-01</fechaVencimiento> 
            </sBTDocumentoAdicional> 
         </sdtDocumentosAdicionales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>72</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerDocumentosAdicionales</Servicio> 
            <Requerimiento/> 
            <Fecha>2018-05-04</Fecha> 
            <Hora>13:43:22</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerDocumentosAdicionalesResponse> 
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
   "sdtDocumentosAdicionales": { 
      "sBTDocumentoAdicional": [ { 
         "fechaEmision": "0000-00-00", 
                "tipoDocumento": "3", 
                "fechaVencimiento": "2025-01-01", 
                "tipoDocumentoDsc": "Pasaporte", 
                "paisDocumentoDsc": "ARGENTINA", 
                "nroDocumento": "B8789452", 
                "paisDocumento": "63" 
      } ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "74", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerDocumentosAdicionales", 
      "Fecha": "2018-05-04", 
      "Requerimiento": "", 
      "Hora": "15:42:08", 
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
sdtDocumentosAdicionales | sBTDocumentoAdicional | Listado de documentos adicionales. 

Los campos del tipo de dato estructurado sBTDocumentoAdicional son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
paisDocumento | Short | Identificador de país del documento. 
paisDocumentoDsc | String | Nombre del país del documento. 
tipoDocumento | Short | Identificador de tipo de documento. 
tipoDocumentoDsc | String | Nombre del tipo de documento. 
nroDocumento | String | Número de documento. 
fechaEmision | Date | Fecha de emisión del documento. 
fechaVencimiento | Date | Fecha de vencimiento del documento. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de persona 

 
