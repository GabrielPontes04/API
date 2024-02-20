# Validar en Listas Negras 

Método para validar si una persona peretenece a alguna lista negra. En caso de que si, muestra en cual. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ValidarEnListasNegras | RBTPG019 | Global 

> Ejemplo de invocación al método Validar en Listas Negras: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
  <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ValidarEnListasNegras> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>8ab636f8624A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:paisDocumentoId>80</bts:paisDocumentoId> 
         <bts:tipoDocumentoId>1</bts:tipoDocumentoId> 
         <bts:numeroDocumento>23330162449</bts:numeroDocumento> 
         <bts:primerNombre>SERVICES</bts:primerNombre> 
         <bts:segundoNombre>TEST</bts:segundoNombre> 
         <bts:primerApellido>SUPER</bts:primerApellido> 
         <bts:segundoApellido>VIELLE</bts:segundoApellido> 
         <bts:nombreEmpresa></bts:nombreEmpresa> 
      </bts:BTPersonas.ValidarEnListasNegras> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ValidarEnListasNegras=' \ 
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
    "paisDocumentoId": "80", 
    "tipoDocumentoId": "1", 
    "numeroDocumento": "23330162449", 
    "primerNombre": "SERVICES", 
    "segundoNombre": "TEST", 
    "primerApellido": "SUPER", 
    "segundoApellido": "VIELLE", 
    "nombreEmpresa": "" 
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
      <BTPersonas.ValidarEnListasNegrasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>8ab636f8624A8B5C60A82434</Token> 
         </Btinreq> 
         <ExisteEnLista>S</ExisteEnLista> 
         <sdtListasInhabilitados> 
            <sBTListaInhabilitados> 
               <descripcion>La persona se encuentra en la lista de Inhabilitados: LAVADO DE DINERO.</descripcion> 
               <codigo>0</codigo> 
               <bloqueante>S</bloqueante> 
            </sBTListaInhabilitados> 
         </sdtListasInhabilitados> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>158</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ValidarEnListasNegras</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-10-29</Fecha> 
            <Hora>13:56:35</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ValidarEnListasNegrasResponse> 
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
    "ExisteEnLista": "S", 
    "sdtListasInhabilitados": { 
        "sBTListaInhabilitados": [ { 
            "descripcion": "La persona se encuentra en la lista de Inhabilitados: LAVADO DE DINERO.", 
            "codigo": 0, 
            "bloqueante": "S" 
        } ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 163, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ValidarEnListasNegras", 
        "Requerimiento": "1", 
        "Fecha": "2018-10-29", 
        "Hora": "15:02:08", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
paisDocumentoId | Short | Identificador de país. 
tipoDocumentoId | Short | Identificador de tipo de documento. 
numeroDocumento | String | Numero de documento. 
primerNombre | String | Primer nombre. 
segundoNombre | String | Segundo nombre. 
primerApellido | String | Primer apellido. 
segundoApellido | String | Segundo apellido. 
nombreEmpresa | String | Nombre de empresa. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
existeEnLista | String | ¿Existe en lista? (S/N). 
sdtListasInhabilitados | sBTListaInhabilitados | Listado de listas negras. 

Los campos del tipo de dato estructurado sBTListaInhabilitados son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Short | Identificador de lista negra. 
descripcion | String | Descripción de lista negra. 
bloqueante | String | ¿Es bloqueante? (S/N). 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se ingresó código de país. 
30002 | No se ingresó código de tipo de documento. 
30003 | No se ingresó número de documento. 
30004 | No se ingresó primer nombre. 
30005 | No se ingresó primer apellido. 

 
