# Obtener Integrantes de Operación 

Método para obtener los integrantes de una operación Bantotal, dado su identificador único. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTContabilidad.ObtenerIntegrantesOperacion | RBTPG139 | Global 

> Ejemplo de invocación al método Obtener Integrantes de Operación: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerIntegrantesOperacion> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>a5cd5311ae4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>21</bts:operacionUId> 
      </bts:BTContabilidad.ObtenerIntegrantesOperacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIntegrantesOperacion=' \ 
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
	"operacionUId": "21", 
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
      <BTContabilidad.ObtenerIntegrantesOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>034028176e4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtIntegrantes> 
            <sBTIntegrante> 
               <numeroDocumento>19126689</numeroDocumento> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <titularidad> 
                  <descripcion>Titular</descripcion> 
                  <identificador>1</identificador> 
               </titularidad> 
               <representativo>S</representativo> 
               <personaUId>141</personaUId> 
               <nombre>VAZQUEZZ SZENTANDRASI ALEJANDR</nombre> 
               <paisDocumento>URUGUAY</paisDocumento> 
            </sBTIntegrante> 
         </sdtIntegrantes> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>599</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTContabilidad.ObtenerIntegrantesOperacion</Servicio> 
            <Fecha>2019-09-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:13:06</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.ObtenerIntegrantesOperacionResponse> 
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
    "sdtIntegrantes": { 
        "sBTIntegrante": [ 
            { 
				"numeroDocumento": "19126689", 
				"tipoDocumento": "Cédula Identidad", 
                "titularidad": { 
                    "descripcion": "Titular", 
                    "identificador": "1" 
                }, 
                "representativo": "S", 
                "personaUId": "141", 
                "nombre": "vVAZQUEZ SZENTANDRASI aALEJAND" 
				"paisDocumento": "URUGUAY" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "85", 
        "Estado": "OK", 
        "Servicio": "BTContabilidad.ObtenerIntegrantesOperacion", 
        "Requerimiento": "2", 
        "Fecha": "2018-05-04", 
        "Hora": "16:11:00", 
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

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtIntegrantes | sBTIntegrante | Datos de integrantes de la operación. 

Los campos del tipo de dato estructurado sBTIntegrante son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
paisDocumento | String | Nombre del país del documento. 
tipoDocumento | String | Nombre del tipo de documento. 
numeroDocumento | String | Número de documento. 
nombre | Long | Nombre de la persona. 
titularidad | sBTTipoIntegrante | Tipo de integrante. 
representativo | String | Indica si es titular representativo (S/N). 

Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Int | Identificador del tipo de integrante. 
descripcion | String | Descripcion del tipo de integrante. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la cuenta para el identificador de operación: ? 

 
