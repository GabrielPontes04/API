# Crear Solicitud Ampliación 

Método para crear una solicitud de ampliación de crédito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.CrearSolicitudAmpliacion | RBTPG410 | Global 

> Ejemplo de invocación al método Crear Solicitud Ampliación: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.CrearSolicitudAmpliacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>419385365CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:usuarioIngreso>INSTALADOR</bts:usuarioIngreso> 
         <bts:fechaIngreso></bts:fechaIngreso> 
         <bts:usuarioAsignacion>INSTALADOR</bts:usuarioAsignacion> 
         <bts:datosSolicitud> 
            <bts:clienteUId>4</bts:clienteUId> 
            <bts:asesorId>1</bts:asesorId> 
            <bts:sucursalId>1</bts:sucursalId> 
            <bts:origenCaptacion>5</bts:origenCaptacion> 
         </bts:datosSolicitud> 
      </bts:BTMicrofinanzas.CrearSolicitudAmpliacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CrearSolicitudAmpliacion \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "usuarioIngreso": "INSTALADOR", 
    "usuarioAsignacion": "INSTALADOR", 
    "datosSolicitud": { 
        "clienteUId": "4", 
        "asesorId": "1", 
        "sucursalId": "1", 
        "origenCaptacion": "5" 
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
      <BTMicrofinanzas.CrearSolicitudAmpliacionResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>419385365CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <solicitudUId>10847</solicitudUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.CrearSolicitudAmpliacion</Servicio> 
            <Fecha>2019-09-10</Fecha> 
            <Hora>14:31:41</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>121</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.CrearSolicitudAmpliacionResponse> 
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
      "solicitudUId": "10847", 
      "Btoutreq": { 
         "Canal": "BTDIGITAL", 
         "Servicio": "BTMicrofinanzas.CrearSolicitudAmpliacion", 
         "Fecha": "2019-09-10", 
         "Hora": "14:31:41", 
         "Requerimiento": "95", 
         "Numero": "121", 
         "Estado": "OK" 
      } 
}'   
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
procesoId | Short | [Hidden: Identificador de proceso Workflow]. 
tareaId | Short | [Hidden: Identificador de tarea Workflow]. 
tipoSolicitud | Byte | [Hidden: Identificador de tipo de solicitud "Ampliación"]. 
usuarioIngreso | String | Usuario que ingresa la solicitud. En caso de no especificarse, se asigna el usuario conectado. 
fechaIngreso | Date | Fecha en la que se ingresa la solicitud. En caso de no especificarse, se asigna fecha apertura. 
usuarioAsignacion | String | Usuario al que queda asignada la tarea de solicitud. En caso de no especificarse, se asigna al Asesor de créditos. 
datosSolicitud | sBTSolicitudIndividual | Datos de la solicitud. 

El tipo de dato estructurado sBTSolicitudIndividual tiene los siguientes campos: 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente que solicita el préstamo. 
asesorId | Int | Identificador del Asesor de la solicitud. En caso de no especificarse, se asigna el Asesor del cliente. 
sucursalId | Int | Sucursal de la solicitud. En caso de no especificarse, se asigna la sucursal del cliente. 
origenCaptacion | Int | Identificador de origen captación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
solicitudUId | Long | Identificador de instancia Workflow. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identifcador de proceso. 
30002 | No se recibió el identifcador de tarea. 
30003 | No se recibió el identifcador del cliente. 
30004 | No se recuperó la cuenta para el Identificador de cliente. 
30011 | No existe FSD008 para la cuenta [Número de cuenta]. 
30012 | No se obtuvo el titular representativo de la cuenta [Número de cuenta]. 
30013 | No se pudo determinar la sucursal de la solicitud. 
30014 | No se pudo determinar el asesor de la solicitud. 
30015 | El código de campaña no existe. 
30016 | El código de origen de captación no existe. 
30020 en adelante | Controles de regla de negocio. 

 
