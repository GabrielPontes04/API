# Crear Reducido 

Método para dar de alta de manera reducida a una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.CrearReducido | RBTPG534 | Global 

> Ejemplo de invocación al método Crear Reducido: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.CrearReducido> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>4C814AD45391BD0C360941C7</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtPersona> 
            <bts:paisDocumentoId>845</bts:paisDocumentoId> 
            <bts:apartamento></bts:apartamento> 
            <bts:sectorId></bts:sectorId> 
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId> 
            <bts:ingresos></bts:ingresos> 
            <bts:nacionalidad></bts:nacionalidad> 
            <bts:ocupacionId>1</bts:ocupacionId> 
            <bts:sexo>M</bts:sexo> 
            <bts:barrio></bts:barrio> 
            <bts:estadoCivil></bts:estadoCivil> 
            <bts:direccion></bts:direccion> 
            <bts:nroDocumento>52116335</bts:nroDocumento> 
            <bts:localidad></bts:localidad> 
            <bts:clasificacionInternaId></bts:clasificacionInternaId> 
            <bts:segundoNombre></bts:segundoNombre> 
            <bts:telefonoCelular></bts:telefonoCelular> 
            <bts:departamentoId></bts:departamentoId> 
            <bts:actividadLaboral></bts:actividadLaboral> 
            <bts:nacionalidadId></bts:nacionalidadId> 
            <bts:localidadId></bts:localidadId> 
            <bts:clasificacionInterna></bts:clasificacionInterna> 
            <bts:paisDomicilioId></bts:paisDomicilioId> 
            <bts:sector></bts:sector> 
            <bts:telefonoFijo></bts:telefonoFijo> 
            <bts:referencia></bts:referencia> 
            <bts:codigoPostal></bts:codigoPostal> 
            <bts:primerNombre>Gonzalo</bts:primerNombre> 
            <bts:fechaNacimiento>1980-10-20</bts:fechaNacimiento> 
            <bts:actividadLaboralId></bts:actividadLaboralId> 
            <bts:primerApellido>Zanelli</bts:primerApellido> 
            <bts:estadoCivilId>1</bts:estadoCivilId> 
            <bts:segundoApellido></bts:segundoApellido> 
            <bts:paisDocumento></bts:paisDocumento> 
            <bts:fechaInicioActividad></bts:fechaInicioActividad> 
            <bts:ocupacion></bts:ocupacion> 
            <bts:paisDomicilio></bts:paisDomicilio> 
            <bts:departamento></bts:departamento> 
            <bts:fechaVencimiento></bts:fechaVencimiento> 
            <bts:correoElectronico>mail@mail.com</bts:correoElectronico> 
            <bts:numeroPuerta></bts:numeroPuerta> 
            <bts:calle></bts:calle> 
            <bts:barrioId></bts:barrioId> 
            <bts:tipoDocumento></bts:tipoDocumento> 
         </bts:sdtPersona> 
      </bts:BTPersonas.CrearReducido> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?CrearReducido=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaUId":"2", 
   "sdtPersona": { 
        "paisDocumentoId": 845, 
        "apartamento": "", 
        "sectorId": "", 
        "tipoDocumentoId": 1, 
        "ingresos": "", 
        "nacionalidad": "", 
        "ocupacionId": 1, 
        "sexo": "M", 
        "barrio": "", 
        "estadoCivil": "", 
        "direccion": "", 
        "nroDocumento": 52116335, 
        "localidad": "", 
        "clasificacionInternaId": "", 
        "segundoNombre": "", 
        "telefonoCelular": "", 
        "departamentoId": "", 
        "actividadLaboral": "", 
        "nacionalidadId": "", 
        "localidadId": "", 
        "clasificacionInterna": "", 
        "paisDomicilioId": "", 
        "sector": "", 
        "telefonoFijo": "", 
        "referencia": "", 
        "codigoPostal": "", 
        "primerNombre": "Gonzalo", 
        "fechaNacimiento": "1980-10-20", 
        "actividadLaboralId": "", 
        "primerApellido": "Zanelli", 
        "estadoCivilId": 1, 
        "segundoApellido": "", 
        "paisDocumento": "", 
        "fechaInicioActividad": "", 
        "ocupacion": "", 
        "paisDomicilio": "", 
        "departamento": "", 
        "fechaVencimiento": "", 
        "correoElectronico": "mail@mail.com", 
        "numeroPuerta": "", 
        "calle": "", 
        "barrioId": "", 
        "tipoDocumento": "" 
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
      <BTPersonas.CrearReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>4C814AD45391BD0C360941C7</Token> 
         </Btinreq> 
         <personaUId>8841</personaUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>228443</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.CrearReducido</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-10-27</Fecha> 
            <Hora>11:12:09</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.CrearReducidoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaUId": 8841, 
   "Erroresnegocio": { 
       "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
       "Numero": "835", 
       "Estado": "OK", 
       "Servicio": "BTPersonas.CrearReducidoResponse", 
       "Fecha": "2017-12-18", 
       "Requerimiento": "", 
       "Hora": "01:48:53", 
       "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPersona | sBTPersona1 | Datos de la persona. 

Los campos del tipo de dato estructurado sBTPersona1 son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
paisDocumentoId | Short | Identificador del país del documento. 
paisDocumento | String | Nombre del país del documento. 
tipoDocumentoId | Short | Identificador del tipo de documento. 
tipoDocumento | String | Nombre del tipo de documento. 
nroDocumento | String | Número de documento. 
fechaVencimiento | Date | Fecha de vencimiento de documento. 
primerApellido | String | Primer apellido. 
segundoApellido | String | Segundo apellido. 
primerNombre | String | Primer nombre. 
segundoNombre | String | Segundo nombre. 
sexo | String | Sexo (M/F). 
fechaNacimiento | Date | Fecha de nacimiento. 
estadoCivilId | String | Identificador de estado civil. 
estadoCivil | String | Descripción de estado civil. 
nacionalidadId | Short | Identificador del país de nacimiento. 
nacionalidad | String | Nombre del país de nacimiento. 
ocupacionId | Int | Identificador de ocupación. 
ocupacion | String | Descripción de ocupación. 
actividadLaboralId | Int | Identificador de actividad laboral. 
actividadLaboral | String | Identificador de actividad laboral. 
fechaInicioActividad | Date | Fecha inicio actividad. 
ingresos | Double | Ingresos. 
paisDomicilioId | Short | Identificador del país de domicilio. 
paisDomicilio | String | Nombre del país de domicilio. 
departamentoId | Int | Identificador de departamento. 
departamento | String | Nombre de departamento. 
localidadId | Int | Identificador de localidad. 
localidad | String | Nombre de localidad. 
barrioId | Int | Identificador de barrio. 
barrio | String | Nombre de barrio. 
calle | String | Calle. 
numeroPuerta | String | Número de puerta. 
apartamento | String | Apartamento. 
codigoPostal | String | Código postal. 
telefonoFijo | String | Teléfono fijo. 
telefonoCelular | String | Teléfono celular. 
correoElectronico | String | Correo electronico. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar País del Documento. 
30002 | Debe ingresar Tipo de Documento. 
30003 | Debe ingresar Nro de Documento. 
30004 | Debe ingresar apellido paterno. 
30005 | Debe ingresar primer nombre. 
30006 | Debe ingresar fecha de nacimiento. 
30007 | Debe ingresar sexo. 
30008 | Debe ingresar estado civil. 
30009 | Debe ingresar ocupación. 

 
