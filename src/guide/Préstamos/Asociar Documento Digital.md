# Asociar Documento Digital 

Método para asociar documento digital a un préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.AsociarDocumentoDigital | RBTPG172 | Global 

### Configuración Backend 

1) Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

> Ejemplo de invocación al método Asociar Documento Digital: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.AsociarDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>5744be79064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:operacionUId>121</bts:operacionUId> 
         <bts:tipoDocumentoId>31</bts:tipoDocumentoId> 
         <bts:nombre>ejemplo</bts:nombre> 
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado> 
         <bts:fechaEmision>2010-10-10</bts:fechaEmision> 
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento> 
      </bts:BTPrestamos.AsociarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?AsociarDocumentoDigital' \ 
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
	"operacionUId":"121", 
    "tipoDocumentoId":"31", 
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
      <BTPrestamos.AsociarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>5744be79064A8B5C60A82434</Token> 
         </Btinreq> 
         <documentoId>118</documentoId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>852</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.AsociarDocumentoDigital</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-13</Fecha> 
            <Hora>12:44:03</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.AsociarDocumentoDigitalResponse> 
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
    "documentoId": 115, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 818, 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.AsociarDocumentoDigital", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-12", 
        "Hora": "17:42:23", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación. 
tipoDocumentoId | Long | Identificador del tipo de documento. 
nombre | String | Nombre del documento. 
archivoCodificado | String | Archivo a asociar codificado. 
fechaEmision | Date | Fecha de emisión del documento (en caso que corresponda). 
fechaVencimiento | Date | Fecha de emisión del documento (en caso que corresponda). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
documentoId | Long | Identificador del documento asociado. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de tipo de documento digital. 
30002 | No se recibió nombre. 
30003 | No se recibió el identificador de la operación. 
30041 | Debe ingresar la fecha de emisión del documento. 
30042 | Debe ingresar la fecha de vencimiento del documento. 
30044 | La operación seleccionada no corresponde a un producto de Préstamos. 
31030 | Ocurrio un error al recibir el archivo, puede que el mismo este corrupto. 
31013 | Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío. 
31024 | Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora. 

 
