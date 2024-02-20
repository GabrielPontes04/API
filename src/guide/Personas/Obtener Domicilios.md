# Obtener Domicilios 

Método para obtener un listado de los domicilios de una persona.  

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerDomicilios | RBTPG197 | Global 

> Ejemplo de invocación al método Obtener Domicilios: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDomicilios> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>772a871c734A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>101</bts:personaUId> 
      </bts:BTPersonas.ObtenerDomicilios> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDomicilios=' \ 
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
    "personaUId": "101" 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <SOAP-ENV:Body> 
      <BTPersonas.ObtenerDomiciliosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>772a871c734A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDomicilios> 
            <sBTDomicilio1> 
               <paisDomicilioId>845</paisDomicilioId> 
               <paisDomicilio>URUGUAY</paisDomicilio> 
               <departamentoId>4</departamentoId> 
               <departamento>Colonia</departamento> 
               <localidadId>1357</localidadId> 
               <localidad>Riachuelo</localidad> 
               <barrioId>0</barrioId> 
               <barrio/> 
               <calle>1</calle> 
               <numeroPuerta>167</numeroPuerta> 
               <apartamento/> 
               <codigoPostal/> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <tipoDeDomicilio>Residencia</tipoDeDomicilio> 
            </sBTDomicilio1> 
         </sdtDomicilios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2991</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerDomicilios</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-08</Fecha> 
            <Hora>16:05:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerDomiciliosResponse> 
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
    "sdtDomicilios": { 
        "sBTDomicilio1": [ 
            { 
                "localidad": "Riachuelo", 
                "paisDomicilio": "URUGUAY", 
                "barrioId": "0", 
                "departamento": "Colonia", 
                "numeroPuerta": "167", 
                "barrio": "", 
                "localidadId": "1357", 
                "tipoDeDomicilioId": "1", 
                "codigoPostal": "", 
                "calle": "1", 
                "apartamento": "", 
                "tipoDeDomicilio": "Residencia", 
                "departamentoId": "4", 
                "paisDomicilioId": "845" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "2993", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerDomicilios", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-08", 
        "Hora": "16:07:57", 
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
sdtDomicilios | sBTDomicilio1 | Listado de domicilios. 

Los campos del tipo de dato estructurado sBTDomicilio1 son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
paisDomicilioId | Short | Identificador del país. 
paisDomicilio | String | Nombre del pais. 
departamentoId | Int | Identificador del departamento. 
departamento | String | Nombre del departamento. 
localidadId | Int | Identificador de la localidad. 
localidad | String | Nombre de la localidad. 
barrioId | Int | Identificador del barrio. 
barrio | String | Nombre del barrio. 
calle | String | Calle del domicilio. 
numeroPuerta | String | Número de puerta. 
apartamento | String | Número de apartamento. 
codigoPostal | String | Código postal. 
tipoDeDomicilioId | Short | Identificador del tipo de domicilio. 
tipoDeDomicilio | String | Nombre del tipo de domicilio. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la persona. 
30002 | El identificador de la persona no es correcto. 
30011 | No se encontraron domicilios para la persona. 

 
