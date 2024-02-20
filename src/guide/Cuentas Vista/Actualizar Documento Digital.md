# Actualizar Documento Digital 

Método para actualizar un documento digital de la operación recibida. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ActualizarDocumentoDigital | RBTPG176 | Global 

### Configuración Backend 

1) Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

> Ejemplo de invocación al método Actualizar Documento Digital: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ActualizarDocumentoDigital> 
         <bts:Btinreq> 
		  <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>4724b65a9d4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>21</bts:operacionUId> 
         <bts:documentoId>86</bts:documentoId> 
         <bts:nombre>Prueba actualizar</bts:nombre> 
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado> 
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento> 
         <bts:fechaEmision>2010-10-10</bts:fechaEmision> 
      </bts:BTCuentasVista.ActualizarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ActualizarDocumentoDigital=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"operacionUId":"21", 
    "documentoId":"86", 
    "nombre":"Prueba actualizar", 
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
      <BTCuentasVista.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b98a5858014A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>3105</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ActualizarDocumentoDigital</Servicio> 
            <Fecha>2018-11-21</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:00:50</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.ActualizarDocumentoDigitalResponse> 
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
        "Numero": "3103", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ActualizarDocumentoDigital", 
        "Fecha": "2018-11-21", 
        "Requerimiento": "1", 
        "Hora": "12:00:07", 
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
documentoId | Long | Identificador del documento digital. 
nombre | String | Nombre del documento. 
archivoCodificado | String | Archivo a asociar codificado en Base 64. 
fechaEmision | Date | Fecha de emisión del documento (en caso que corresponda). 
fechaVencimiento | Date | Fecha de emisión del documento (en caso que corresponda). 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de instancia de documento digital. 
30002 | No se recibió nombre. 
30003 | No se recibió el identificador de la operación. 
30021 | No se recupero el identificador para la operación recibida. 
30051 | Debe ingresar la fecha de emisión del documento. 
30052 | Debe ingresar la fecha de vencimiento del documento. 
30054 | El documento ingresado no pertenece a la operación. 
30130 | Ocurrio un error al recibir el archivo, puede que el mismo este corrupto. 
31023 | Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío. 
31024 | Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora. 

 
