# Actualizar Grupo 

Método para actualizar la información de un grupo de crédito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.ActualizarGrupo | RBTPG430 | Global 

> Ejemplo de invocación al método Actualizar Grupo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ActualizarGrupo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1821984229CD285A89A23FBE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <grupoId>36</grupoId> 
         <bts:sdtDetalleGrupo> 
            <tipoId>1</tipoId> 
            <tipo></tipo> 
            <nombre>Solidarios</nombre> 
            <nombreExtendido>Solidarios S.A.</nombreExtendido> 
            <asesorId>1</asesorId> 
            <asesor/> 
            <fechaAlta></fechaAlta> 
            <fechaDesde>2025-05-02</fechaDesde> 
            <fechaHasta>2030-04-20</fechaHasta> 
            <usuarioAlta></usuarioAlta> 
            <vigente></vigente> 
            <bloqueado></bloqueado> 
            <nroSecuencia>0</nroSecuencia> 
            <agenciaId></agenciaId> 
            <agencia></agencia> 
         </bts:sdtDetalleGrupo> 
      </bts:BTMicrofinanzas.ActualizarGrupo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ActualizarGrupo=' \ 
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
    "grupoId": "36", 
    "sdtDetalleGrupo": { 
		"tipoId": "1", 
		"tipo": "", 
		"nombre": "Solidario", 
		"nombreExtendido": "Solidarios S.A.", 
		"asesorId": "1", 
		"asesor": "", 
		"fechaAlta": "", 
		"fechaDesde": "2025-05-02", 
		"fechaHasta": "2030-04-20", 
		"usuarioAlta": "", 
		"vigente": "", 
		"bloqueado": "", 
		"nroSecuencia": "0", 
		"agenciaId": "", 
		"agencia": "" 
	} 
} 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTMicrofinanzas.ActualizarGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1821984229CD285A89A23FBE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ActualizarGrupo</Servicio> 
            <Fecha>2020-04-21</Fecha> 
            <Hora>11:18:56</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>5039</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ActualizarGrupoResponse> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ActualizarGrupo", 
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

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
40002 | El tipo de grupo no existe. 
40003 | Debe ingresar nombre de grupo. 
40013 | El grupo ingresado no existe. 
40005 | Fecha de Vigencia Desde debe ser mayor o igual a Fecha de Creación. 
40006 | Debe ingresar Fecha de Vigencia Hasta. 
40007 | Fecha de Vigencia Hasta debe ser mayor a Fecha Vigencia Desde. 

 
