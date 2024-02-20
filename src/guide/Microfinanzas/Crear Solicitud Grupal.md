# Crear Solicitud Grupal 

Método para iniciar una solicitud de crédito grupal.  

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.CrearSolicitudGrupal | RBTPG438 | Global 

> Ejemplo de invocación al método Crear Solicitud Grupal: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.CrearSolicitudGrupal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>669747179CD285A89A23FBEE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:usuarioIngreso>INSTALADOR</bts:usuarioIngreso> 
         <bts:fechaIngreso/> 
         <bts:usuarioAsignacion>INSTALADOR</bts:usuarioAsignacion> 
         <bts:sdtDatosSolicitud> 
            <bts:grupoId>34</bts:grupoId> 
            <bts:asesorId>92</bts:asesorId> 
            <bts:sucursalId/> 
            <bts:origenCaptacion>6</bts:origenCaptacion> 
         </bts:sdtDatosSolicitud> 
      </bts:BTMicrofinanzas.CrearSolicitudGrupal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CrearSolicitudGrupal \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "669747179CD285A89A23FBEE" 
	}, 
    "usuarioIngreso": "INSTALADOR", 
    "usuarioAsignacion": "INSTALADOR", 
    "datosSolicitud": { 
        "grupoId": "34", 
        "asesorId": "92", 
        "sucursalId": "1", 
        "origenCaptacion": "6" 
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
      <BTMicrofinanzas.CrearSolicitudGrupalResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>669747179CD285A89A23FBEE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <solicitudUId>10847</solicitudUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.CrearSolicitudGrupal</Servicio> 
            <Fecha>2020-09-10</Fecha> 
            <Hora>14:31:41</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>121</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.CrearSolicitudGrupalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "669747179CD285A89A23FBEE" 
	}, 
    "solicitudUId": "10847", 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTMicrofinanzas.CrearSolicitudGrupal", 
        "Fecha": "2020-09-10", 
        "Hora": "14:31:41", 
        "Requerimiento": "1", 
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
usuarioIngreso | String | Usuario que ingresa la solicitud. En caso de no especificarse, se asigna el usuario conectado. 
fechaIngreso | Date | Fecha en la que se ingresa la solicitud. En caso de no especificarse, se asigna fecha apertura. 
usuarioAsignacion | String | Usuario al que queda asignada la tarea de solicitud. En caso de no especificarse, se asigna al Asesor de créditos. 
sdtDatosSolicitud | sBTSolicitudGrupal | Datos de entrada de la solicitud. 

El tipo de dato estructurado sBTSolicitudGrupal tiene los siguientes campos: 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
grupoId | Int | Identificador de grupo que solicita el préstamo. 
asesorId | Int | Identificador del Asesor de la solicitud. En caso de no especificarse, se asigna el Asesor del cliente. 
sucursalId | Short | Sucursal de la solicitud. En caso de no especificarse, se asigna la sucursal del cliente. 
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
30003 | No se recibió el identificador de grupo. 
30011 | El Grupo seleccionado no está vigente. 
30012 | El Tipo de Grupo no existe. 
30013 | No se pudo determinar el coordinador del grupo. 
30014 | No se encontro registro en la FSD008 para la cuenta [Número de cuenta]. 
30015 | No se obtuvo el titular representativo de la cuenta [Número de cuenta]. 
30016 | No se pudo determinar la sucursal de la solicitud. 
30017 | No se pudo determinar el asesor de la solicitud. 
30018 | El código de campaña no existe. 
30019 | El código de origen de captación no existe. 

 
