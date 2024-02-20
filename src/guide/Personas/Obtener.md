# Obtener 

Método para obtener los datos de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.Obtener | RBTPG085 | Global 

> Ejemplo de invocación al método Obtener: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.Obtener> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>c</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq>     
         <bts:personaUId>21</bts:personaUId> 
      </bts:BTPersonas.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?Obtener' \ 
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
	"personaUId": "21", 
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
      <BTPersonas.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>c</Token> 
         </Btinreq> 
         <sdtPersona> 
            <nroDocumento>27511184</nroDocumento> 
            <numeroPuerta/> 
            <estadoCivil>Soltero/a</estadoCivil> 
            <paisDomicilio/> 
            <fechaInicioActividad>0000-00-00</fechaInicioActividad> 
            <segundoNombre/> 
            <fechaVencimiento>0000-00-00</fechaVencimiento> 
            <departamento/> 
            <segundoApellido>SZENTANDRASI</segundoApellido> 
            <fechaNacimiento>1976-02-26</fechaNacimiento> 
            <barrio/> 
            <ingresos>1800.00</ingresos> 
            <apartamento/> 
            <telefonoCelular/> 
            <tipoDocumentoId>1</tipoDocumentoId> 
            <sexo>M</sexo> 
            <primerNombre>aALEJANDRO</primerNombre> 
            <paisDocumentoId>845</paisDocumentoId> 
            <telefonoFijo/> 
            <paisDomicilioId>0</paisDomicilioId> 
            <primerApellido>vVAZQUEZ</primerApellido> 
            <ocupacion>Empleado</ocupacion> 
            <codigoPostal/> 
            <paisDocumento>URUGUAY</paisDocumento> 
            <ocupacionId>1</ocupacionId> 
            <barrioId>0</barrioId> 
            <nacionalidad>URUGUAY</nacionalidad> 
            <localidad/> 
            <localidadId>0</localidadId> 
            <calle/> 
            <correoElectronico>AV@GMAIL.COM</correoElectronico> 
            <tipoDocumento>Cédula Identidad</tipoDocumento> 
            <nacionalidadId>845</nacionalidadId> 
            <estadoCivilId>1</estadoCivilId> 
            <departamentoId>0</departamentoId> 
         </sdtPersona> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>4708</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.Obtener</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-01-17</Fecha> 
            <Hora>14:53:15</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerResponse> 
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
   "sdtPersona": { 
      "nroDocumento": "27511184", 
      "numeroPuerta": "", 
      "estadoCivil": "Soltero/a", 
      "paisDomicilio": "", 
      "fechaInicioActividad": "0000-00-00", 
      "segundoNombre": "", 
      "fechaVencimiento": "0000-00-00", 
      "departamento": "", 
      "segundoApellido": "SZENTANDRASI", 
      "fechaNacimiento": "1976-02-26", 
      "barrio": "", 
      "ingresos": 1800, 
      "apartamento": "", 
      "telefonoCelular": "", 
      "tipoDocumentoId": 1, 
      "sexo": "M", 
      "primerNombre": "aALEJANDRO", 
      "paisDocumentoId": 845, 
      "telefonoFijo": "", 
      "paisDomicilioId": 0, 
      "primerApellido": "vVAZQUEZ", 
      "ocupacion": "Empleado", 
      "codigoPostal": "", 
      "paisDocumento": "URUGUAY", 
      "ocupacionId": 1, 
      "barrioId": 0, 
      "nacionalidad": "URUGUAY", 
      "localidad": "", 
      "localidadId": 0, 
      "calle": "", 
      "correoElectronico": "AV@GMAIL.COM", 
      "tipoDocumento": "Cédula Identidad", 
      "nacionalidadId": 845, 
      "estadoCivilId": "1", 
      "departamentoId": 0 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 4709, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.Obtener", 
        "Requerimiento": "1", 
        "Fecha": "2019-01-17", 
        "Hora": "14:58:53", 
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
sdtPersona | sBTDatosPersona | Datos de la persona. 

Los campos del tipo de dato estructurado sBTDatosPersona son los siguientes: 

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
estadoCivilId | String | Descripción de estado civil. 
nacionalidadId | Short | Identificador del país de nacimiento. 
nacionalidad | String | Nombre del país de nacimiento. 
ocupacionId | Int | Identificador de ocupación. 
ocupacion | String | Descripción de ocupación. 
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

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de persona. 
30002 | El identificador no corresponde a una persona física 
30013 | No existe registro para el identificador único. 

 
