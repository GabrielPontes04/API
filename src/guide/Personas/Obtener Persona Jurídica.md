# Obtener Persona Jurídica 

Método para obtener la información de una persona jurídica. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerPersonaJuridica | RBTPG384 | Global 

> Ejemplo de invocación al método Obtener Persona Jurídica: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerPersonaJuridica> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>3578f1ef27CD285A89A23FBE</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>303</bts:personaUId> 
      </bts:BTPersonas.ObtenerPersonaJuridica> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerPersonaJuridica' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "1839023315CD285A89A23FBE" 
	}, 
   "personaUId": "303" 
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
      <BTPersonas.ObtenerPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Usuario>INSTALADOR</Usuario> 
            <Device>GP</Device> 
            <Token>3578f1ef27CD285A89A23FBE</Token> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <personaJuridica> 
            <nroDocumento>214567892142</nroDocumento> 
            <numeroPuerta>0</numeroPuerta> 
            <nombreReducido>BANCO MODELO</nombreReducido> 
            <paisDomicilio>URUGUAY</paisDomicilio> 
            <razonSocial>BANCO MODELO</razonSocial> 
            <departamento>Montevideo</departamento> 
            <nroRegistro>78940</nroRegistro> 
            <naturalezaJuridica>Sociedad Anónima</naturalezaJuridica> 
            <barrio>Centro</barrio> 
            <apartamento></apartamento> 
            <tipoDocumentoId>2</tipoDocumentoId> 
            <tipoActividadId>1</tipoActividadId> 
            <piso></piso> 
            <paisId>845</paisId> 
            <fechaConstitucion>2007-08-22</fechaConstitucion> 
            <actividad></actividad> 
            <paisDomicilioId>845</paisDomicilioId> 
            <pais>URUGUAY</pais> 
            <codigoPostal></codigoPostal> 
            <tipoActividad>Actividad Principal</tipoActividad> 
            <barrioId>330</barrioId> 
            <localidadId>10</localidadId> 
            <localidad>Montevideo</localidad> 
            <correoElectronico>1</correoElectronico> 
            <actividadId>0</actividadId> 
            <calle></calle> 
            <naturalezaJuridicaId>1</naturalezaJuridicaId> 
            <tipoDocumento>RUT</tipoDocumento> 
            <departamentoId>10</departamentoId> 
            <bts:telefonoFijo>3213342222</bts:telefonoFijo> 
            <bts:piso>123</bts:piso> 
         </personaJuridica> 
         <sdtIntegrantesJuridicos> 
            <SdtsBTIntegranteJuridico> 
               <nroDocumento>27928980</nroDocumento> 
               <vinculoId>1</vinculoId> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <participacion>100.00</participacion> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <personaUId>141</personaUId> 
               <paisId>845</paisId> 
               <nombre>PRANKA VISENTIN ERIKA VERONICA</nombre> 
               <vinculo>Presidente</vinculo> 
            </SdtsBTIntegranteJuridico> 
         </sdtIntegrantesJuridicos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Servicio>BTPersonas.ObtenerPersonaJuridica</Servicio> 
            <Hora>14:57:38</Hora> 
            <Numero>16624</Numero> 
            <Fecha>2022-06-23</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Estado>BTS_PLAT_ERROR</Estado> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTPersonas.ObtenerPersonaJuridicaResponse> 
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
   "personaJuridica": { 
        "nroDocumento": "214567892142", 
        "numeroPuerta": "0", 
        "nombreReducido": "BANCO MODELO", 
        "paisDomicilio": "URUGUAY", 
        "razonSocial": "BANCO MODELO", 
        "departamento": "Montevideo", 
        "nroRegistro": "78940", 
        "naturalezaJuridica": "Sociedad Anónima", 
        "barrio": "Centro", 
        "apartamento": , 
        "tipoDocumentoId": "2", 
        "tipoActividadId": "1", 
        "piso": , 
        "paisId": "845", 
        "fechaConstitucion": "2007-08-22", 
        "actividad": , 
        "paisDomicilioId": "845", 
        "pais": "URUGUAY", 
        "codigoPostal": , 
        "tipoActividad": "Actividad Principal", 
        "barrioId": "330", 
        "localidadId": "10", 
        "localidad": "Montevideo", 
        "correoElectronico": "1", 
        "actividadId": "0", 
        "calle": , 
        "naturalezaJuridicaId": "1", 
        "tipoDocumento": "RUT", 
        "departamentoId": "10", 
        "telefonoFijo": "3213342222", 
        "piso": "123" 
    }, 
    "sdtIntegrantesJuridicos": { 
        "SdtsBTIntegranteJuridico": { 
            "nroDocumento": "27928980", 
            "vinculoId": "1", 
            "pais": "URUGUAY", 
            "tipoDocumentoId": "1", 
            "participacion": "100.00", 
            "tipoDocumento": "Cédula Identidad", 
            "personaUId": "141", 
            "paisId": "845", 
            "nombre": "PRANKA VISENTIN ERIKA VERONICA", 
            "vinculo": "Presidente" 
        } 
    }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "80", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerPersonasJuridicas", 
      "Fecha": "2018-05-04", 
      "Requerimiento": "1", 
      "Hora": "15:54:29", 
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
personaJuridica | sBTPersonaJuridica1 | Datos de persona jurídica. 
sdtIntegrantesJuridicos | sBTIntegranteJuridico | Listado de integrantes jurídicos. 

Los campos del tipo de dato estructurado sBTPersonaJuridica1 son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
paisId | Short | Identificador del país. 
pais | String | Nombre del país. 
tipoDocumentoId | Short | Identificador del tipo de documento. 
tipoDocumento | String | Nombre del tipo de documento. 
nroDocumento | String | Número de documento. 
razonSocial | String | Razón social. 
nombreReducido | String | Nombre reducido. 
fechaConstitucion | Date | Fecha de constitución. 
tipoActividadId | Long | Identificador de tipo de actividad. 
tipoActividad | String | Nombre de tipo de actividad. 
actividadId | Long | Identificador de actividad. 
actividad | String | Nombre de actividad. 
naturalezaJuridicaId | Short | Identificador de naturaleza jurídica. 
naturalezaJuridica | String | Nombre de naturaleza jurídica. 
nroRegistro | Long | Número de registro. 
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
piso | String | Piso.   
correoElectronico | String | Correo electrónico.   
telefonoFijo | String | Número de teléfono fijo. 

Los campos del tipo de dato estructurado sBTIntegranteJuridico son los siguientes: 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
paisId | Short | Identificador del país. 
pais | String | Nombre del país. 
tipoDocumentoId | Short | Identificador del tipo de documento. 
tipoDocumento | String | Nombre del tipo de documento. 
nroDocumento | String | Número de documento. 
nombre | String | Nombre de la persona. 
vinculoId | Short | Identificador de vínculo. 
vinculo | String | Descripción del vínculo. 
participacion | Double | Porcentaje de participación del integrante. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de persona. 
40001 | La persona jurídica no existe. 

 
