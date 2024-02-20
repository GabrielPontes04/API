# Obtener Documentos Digitales 

Método para obtener una lista de los documentos digitales asociados a una operación de ahorro programado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTAhorroProgramado.ObtenerDocumentosDigitales | RBTPG482 | Global 

### Configuración Backend 

1) Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

> Ejemplo de invocación al método Obtener Documentos Digitales: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ObtenerDocumentosDigitales> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>65386256C895CD01D7DC796E</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:operacionUId>1018</bts:operacionUId> 
      </bts:BTAhorroProgramado.ObtenerDocumentosDigitales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerDocumentosDigitales' \ 
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
	"operacionUId": "1018", 
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
      <BTAhorroProgramado.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>65386256C895CD01D7DC796E</Token> 
         </Btinreq> 
         <sdtDocumentoDigital> 
            <sBTDocumentoDigital> 
               <Titulo>PRUEBA</Titulo> 
               <FechaActualizacion>2015-01-01</FechaActualizacion> 
               <FechaVencimiento/> 
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital> 
               <DocumentoId>265</DocumentoId> 
            </sBTDocumentoDigital> 
         </sdtDocumentoDigital> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>12028</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ObtenerDocumentosDigitales</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-23</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:50:30</Hora> 
         </Btoutreq> 
      </BTAhorroProgramado.ObtenerDocumentosDigitalesResponse> 
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
    "sdtDocumentoDigital": { 
        "sBTDocumentoDigital": { 
            "Titulo": "PRUEBA GABO", 
            "FechaActualizacion": "2015-01-01", 
            "FechaVencimiento": "", 
            "TipoDocumentoDigital": "Plan de Pagos", 
            "DocumentoId": "265" 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 823, 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerDocumentosDigitales", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-12", 
        "Hora": "17:47:27", 
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
codigoSistema | Short | [Hidden: Valor fijo '3' para este método]. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDocumentosDigitales | sBTDocumentoDigital | Listado de documentos digitales. 

Los campos del tipo de dato estructurado sBTDocumentoDigital son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
titulo | String | Titulo del documento digital. 
FechaActualizacion | Date | Fecha de actualizacion del documento digital. 
FechaVencimiento | Date | Fecha de vencimiento del documento digital. 
TipoDocumentoDigital | String | Tipo del documento digital. 
documentoId | Long | Identificador del documento digital. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la operación. 
30021 | No se recupero la operación para el identificador recibido. 

 
