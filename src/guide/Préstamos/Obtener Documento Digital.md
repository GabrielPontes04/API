# Obtener Documento Digital 

Método para obtener los datos de un documento digital de un préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerDocumentoDigital | RBTPG191 | Global 

### Configuración Backend 

1) Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

> Ejemplo de invocación al método Obtener Documento Digital: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0868626a064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>10.12.10.159</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>121</bts:operacionUId> 
         <bts:documentoId>35</bts:documentoId> 
      </bts:BTPrestamos.ObtenerDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDocumentoDigital' \ 
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
	"operacionUId": "121", 
	"documentoId": "35", 
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
      <BTPrestamos.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0868626a064A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDocumentosDigitales> 
            <sBTVersionDocumentoDigital> 
               <FechaEmision>2016-08-09</FechaEmision> 
               <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo> 
               <FechaVencimiento>0000-00-00</FechaVencimiento> 
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital> 
               <Version>1</Version> 
               <Nombre>CarpetaDigital.txt</Nombre> 
               <documentoId>35</documentoId> 
            </sBTVersionDocumentoDigital> 
         </sdtDocumentosDigitales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>888</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerDocumentoDigital</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-13</Fecha> 
            <Hora>13:16:43</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDocumentoDigitalResponse> 
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
    "sdtDocumentosDigitales": { 
        "sBTVersionDocumentoDigital": [ 
            { 
                "FechaEmision": "2016-08-09", 
                "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=", 
                "FechaVencimiento": "0000-00-00", 
                "TipoDocumentoDigital": "Plan de Pagos", 
                "Version": 1, 
                "Nombre": "CarpetaDigital.txt", 
                "documentoId": 35 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 890, 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerDocumentoDigital", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-13", 
        "Hora": "13:17:56", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
documentoId | Long | Identificador del documento. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDocumentosDigitales | sBTVersionDocumentoDigital | Datos de version de documento digital. 

Los campos del tipo de dato estructurado sBTVersionDocumentoDigital son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
DocumentoId | Long | Titulo del documento digital. 
FechaEmision | Date | Fecha de emisión del documento digital. 
Archivo | String | Documento digital codificado en base 64. 
FechaVencimiento | Date | Fecha de vencimiento del documento digital. 
TipoDocumentoDigital | String | tipo del documento digital. 
Nombre | String | Nombre del documento digital. 
Version | Int | Número de versión del documento digital. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la operación. 
30002 | No se recibió el identificador de documento. 
30024 | No se recupero la operación para el identificador recibido. 
30031 | El documento digital no existe. 
30032 | Ocurrio un error al obtener la ultima versión del documento. 

 
