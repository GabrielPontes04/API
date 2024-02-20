# Obtener Detalle Grupo 

Método para obtener el detalle de un grupo de crédito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.ObtenerDetalleGrupo | RBTPG431 | Global 

> Ejemplo de invocación al método Obtener Detalle Grupo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerDetalleGrupo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1821984229CD285A89A23FBE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:grupoId>1</bts:grupoId> 
      </bts:BTMicrofinanzas.ObtenerDetalleGrupo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerDetalleGrupo=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "grupoId": 1 
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
      <BTMicrofinanzas.ObtenerDetalleGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1821984229CD285A89A23FBE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtDetalleGrupo> 
            <tipoId>1</tipoId> 
            <tipo>Grupo Solidario</tipo> 
            <nombre>Grupo 1</nombre> 
            <nombreExtendido>Grupo 1</nombreExtendido> 
            <asesorId>0</asesorId> 
            <asesor/> 
            <fechaAlta>2018-05-22</fechaAlta> 
            <fechaDesde>2018-05-22</fechaDesde> 
            <fechaHasta>2025-05-22</fechaHasta> 
            <usuarioAlta>ASESOR</usuarioAlta> 
            <vigente>S</vigente> 
            <bloqueado>9</bloqueado> 
            <nroSecuencia>0</nroSecuencia> 
            <agenciaId>1</agenciaId> 
            <agencia>OFICINAS CENTRALES</agencia> 
         </sdtDetalleGrupo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerDetalleGrupo</Servicio> 
            <Fecha>2020-04-21</Fecha> 
            <Hora>09:41:28</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>5024</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerDetalleGrupoResponse> 
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
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtDetalleGrupo": { 
		"tipoId": "1", 
		"tipo": "Grupo Solidario", 
		"nombre": "Grupo 1", 
		"nombreExtendido": "Grupo 1", 
		"asesorId": "0", 
		"asesor": "", 
		"fechaAlta": "2018-05-22", 
		"fechaDesde": "2018-05-22", 
		"fechaHasta": "2025-05-22", 
		"usuarioAlta": "ASESOR", 
		"vigente": "S", 
		"bloqueado": "9", 
		"nroSecuencia": "0", 
		"agenciaId": "1", 
		"agencia": "OFICINAS CENTRALES" 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ObtenerDetalleGrupo", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "16:35:22", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
grupoId | Int | Identificador de grupo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDetalleGrupo | sBTDetalleGrupo | Datos del grupo. 

Los campos del tipo de dato estructurado sBTDetalleGrupo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
tipoId | Short | Identificador del tipo de grupo. 
tipo | String | Tipo de grupo. 
nombre | String | Nombre del grupo. 
nombreExtendido | String | Nombre extendido del grupo. 
asesorId | Int | Identificador del asesor del grupo. 
asesor | String | Asesor del grupo. 
fechaAlta | Date | Fecha de alta del grupo. 
fechaDesde | Date | Fecha comienzo vigencia. 
fechaHasta | Date | Fecha fin vigencia. 
usuarioAlta | String | Usuario de alta del grupo. 
vigente | String | ¿Es vigente? (S/N). 
bloqueado | String | ¿Está bloqueado? (S/N). 
nroSecuencia | Int | Número de secuencia. 
agenciaId | Int | Identificador de agencia. 
agencia | String | Agencia. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de grupo. 

 
