# Actualizar Integrante de Grupo 

Método para actualizar un integrante de un grupo de crédito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.ActualizarIntegranteGrupo | RBTPG434 | Global 

> Ejemplo de invocación al método Actualizar Integrante de Grupo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ActualizarIntegranteGrupo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1414147105CD285A89A23FBE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:grupoId>3</bts:grupoId> 
         <bts:sdtIntegranteGrupo> 
            <bts:clienteUId>157</bts:clienteUId> 
            <bts:cuenta></bts:cuenta> 
            <bts:tipoIntegranteId>2</bts:tipoIntegranteId> 
            <bts:tipoIntegrante></bts:tipoIntegrante> 
            <bts:fechaAlta>2020-04-20</bts:fechaAlta> 
            <bts:fechaBaja></bts:fechaBaja> 
            <bts:vigente>S</bts:vigente> 
            <bts:identificacionAlternativa></bts:identificacionAlternativa> 
         </bts:sdtIntegranteGrupo> 
      </bts:BTMicrofinanzas.ActualizarIntegranteGrupo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ActualizarIntegranteGrupo=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtIntegranteGrupo": { 
		"clienteUId": "157", 
		"tipoIntegranteId": "2", 
		"tipoIntegrante": "?", 
		"fechaAlta": "2020-04-20", 
		"vigente": "S" 
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
      <BTMicrofinanzas.ActualizarIntegranteGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1414147105CD285A89A23FBE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ActualizarIntegranteGrupo</Servicio> 
            <Fecha>2020-04-20</Fecha> 
            <Hora>16:59:02</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>5004</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ActualizarIntegranteGrupoResponse> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ActualizarIntegranteGrupo", 
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
sdtIntegranteGrupo | sBTIntegranteGrupo | Datos del integrante. 

Los campos del tipo de dato estructurado sBTIntegranteGrupo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único del cliente. 
cuenta | String | Nombre de la cuenta. 
tipoIntegranteId | Short | Tipo de integrante a ser actualizado. 
tipoIntegrante | String | Descripcion del tipo de integrante. 
fechaAlta | Date | Fecha de alta del integrante. 
fechaBaja | Date | Fecha de baja del integrante. 
identificacionAlternativa | String | Identificación alternativa del integrante. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de grupo. 
30002 | No se recibió el identificador de cliente. 
30014 | No existe registro con el identificador indicado. 
40005 | Debe ingresar un tipo de integrante válido para el grupo. 
40006 | Excedió la cantidad de integrantes Coordinador permitidos para el tipo de grupo. 

 
