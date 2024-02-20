# Obtener 

Método para obtener los datos de un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.Obtener | RBTPG089 | Global 

> Ejemplo de invocación al método Obtener: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.Obtener> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>181</bts:clienteUId> 
      </bts:BTClientes.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Obtener=' \ 
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
    "clienteUId": 181 
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
      <BTClientes.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0306ebbd9c4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPersona> 
            <apartamento>13B</apartamento> 
            <paisDocumentoId>845</paisDocumentoId> 
            <sectorId>3</sectorId> 
            <tipoDocumentoId>1</tipoDocumentoId> 
            <ingresos>1500.00</ingresos> 
            <nacionalidad>URUGUAY</nacionalidad> 
            <ocupacionId>1</ocupacionId> 
            <sexo>M</sexo> 
            <barrio/> 
            <estadoCivil/> 
            <nroDocumento>27573084</nroDocumento> 
            <localidad>Montevideo</localidad> 
            <clasificacionInternaId>1</clasificacionInternaId> 
            <segundoNombre/> 
            <telefonoCelular/> 
            <departamentoId>10</departamentoId> 
            <actividadLaboral>01112 Trigo</actividadLaboral> 
            <nacionalidadId>845</nacionalidadId> 
            <localidadId>10</localidadId> 
            <clasificacionInterna>IFE - Actividades bursátiles</clasificacionInterna> 
            <paisDomicilioId>845</paisDomicilioId> 
            <sector>Público Nacional</sector> 
            <telefonoFijo>26004288</telefonoFijo> 
            <codigoPostal/> 
            <primerNombre>ALEJANDRO</primerNombre> 
            <fechaNacimiento>1976-02-26</fechaNacimiento> 
            <actividadLaboralId>1112</actividadLaboralId> 
            <primerApellido>VAZQUEZ</primerApellido> 
            <estadoCivilId>Soltero/a</estadoCivilId> 
            <segundoApellido>SZENTANDRASI</segundoApellido> 
            <paisDocumento>URUGUAY</paisDocumento> 
            <fechaInicioActividad>0000-00-00</fechaInicioActividad> 
            <ocupacion>Empleado</ocupacion> 
            <paisDomicilio>URUGUAY</paisDomicilio> 
            <departamento>Montevideo</departamento> 
            <fechaVencimiento>0000-00-00</fechaVencimiento> 
            <correoElectronico>AV@GMAIL.COM</correoElectronico> 
            <numeroPuerta>7216</numeroPuerta> 
            <calle>BAZZURRO</calle> 
            <barrioId>0</barrioId> 
            <tipoDocumento>Cédula Identidad</tipoDocumento> 
			<bts:ejecutivoId>1</bts:ejecutivoId> 
			<bts:ejecutivo>Juan Perez</bts:ejecutivo> 
			<bts:piso>123</bts:piso>			 
         </sdtPersona> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>775</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.Obtener</Servicio> 
            <Fecha>2017-12-14</Fecha> 
            <Requerimiento/> 
            <Hora>18:57:42</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerResponse> 
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
        "apartamento": "13B", 
        "paisDocumentoId": "845", 
        "sectorId": "3", 
        "tipoDocumentoId": "1", 
        "ingresos": "1500.00", 
        "nacionalidad": "URUGUAY", 
        "ocupacionId": "1", 
        "sexo": "M", 
        "barrio": "", 
        "estadoCivil": "", 
        "nroDocumento": "27573084", 
        "localidad": "Montevideo", 
        "clasificacionInternaId": "1", 
        "segundoNombre": "", 
        "telefonoCelular": "", 
        "departamentoId": "10", 
        "actividadLaboral": "01112 Trigo", 
        "nacionalidadId": "845", 
        "localidadId": "10", 
        "clasificacionInterna": "IFE - Actividades bursátiles", 
        "paisDomicilioId": "845", 
        "sector": "Público Nacional", 
        "telefonoFijo": "26004288", 
        "codigoPostal": "", 
        "primerNombre": "ALEJANDRO", 
        "fechaNacimiento": "1976-02-26", 
        "actividadLaboralId": "1112", 
        "primerApellido": "vVAZQUEZ", 
        "estadoCivilId": "Soltero/a", 
        "segundoApellido": "SZENTANDRASI", 
        "paisDocumento": "URUGUAY", 
        "fechaInicioActividad": "0000-00-00", 
        "ocupacion": "Empleado", 
        "paisDomicilio": "URUGUAY", 
        "departamento": "Montevideo", 
        "fechaVencimiento": "0000-00-00", 
        "correoElectronico": "AV@GMAIL.COM", 
        "numeroPuerta": "7216", 
        "calle": "BAZZURRO", 
        "barrioId": "0", 
        "tipoDocumento": "Cédula Identidad", 
		"ejecutivoId": 1, 
		"ejecutivo": "Juan Perez", 
		"piso": "123" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "778", 
        "Estado": "OK", 
        "Servicio": "BTClientes.Obtener", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "11:08:57", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPersona | sBTPersona1 | Datos del cliente. 

Los campos del tipo de dato estructurado sBTPersona1 son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
paisDocumentoId | Short | Identificador de país del documento. 
paisDocumento | String | Nombre de país . 
tipoDocumentoId | Short | Identificador de tipo de documento. 
tipoDocumento | String | Nombre de tipo de documento. 
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
nacionalidadId | Short | Identificador de país. 
nacionalidad | String | Nombre de país. 
ocupacionId | Int | Identificador de ocupación. 
ocupacion | String | Descripción de ocupación. 
actividadLaboralId | Int | Identificador de actividad. 
actividadLaboral | String | Descripción de actividad. 
fechaInicioActividad | Date | Fecha inicio actividad. 
ingresos | Double | Ingresos. 
sectorId | Short | Identificador de sector. 
sector | String | Descripción de sector. 
clasificacionInternaId | Short | Identificador de clasificacion interna. 
clasificacionInterna | String | Descripción de clasificacion interna. 
paisDomicilioId | Short | Identificador de país de domicilio. 
paisDomicilioId | String | Nombre de país. 
departamentoId | Int | Identificador de departamento. 
departamento | String | Nombre de departamento. 
localidadId | Int | Identificador de localidad. 
localidad | String | Nombre de localidad. 
barrioId | Int | Identificador de barrio. 
barrio | String | Nombre de localidad. 
calle | String | Calle. 
numeroPuerta | String | Número de puerta. 
apartamento | String | Apartamento. 
codigoPostal | String | Código postal. 
telefonoFijo | String | Teléfono fijo. 
telefonoCelular | String | Teléfono celular. 
correoElectronico | String | Correo electrónico. 
ejecutivoId | Int | Identificador del ejecutivo. 
ejecutivo | String | Nombre del ejecutivo. 
piso | String | Piso del domicilio. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el identificador. 

 
