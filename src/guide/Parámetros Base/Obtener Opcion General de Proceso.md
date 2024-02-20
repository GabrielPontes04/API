# Obtener Opcion General de Proceso 

Método para obtener los datos de una determinada opción general de procesos. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTParametrosBase.ObtenerOpcionGeneralDeProceso | RBTPG286 | Institucional 

> Ejemplo de invocación al método Obtener Opcion General de Proceso: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerOpcionGeneralDeProceso> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MI</bts:Usuario> 
            <bts:Device>MC</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>200f0b8b654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:codigo>2850</bts:codigo> 
      </bts:BTParametrosBase.ObtenerOpcionGeneralDeProceso> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerCorrelativoGuia \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "MI", 
      "Device": "MC", 
      "Requerimiento": "1", 
      "Token": "200f0b8b654A8B5C60A82434" 
    }, 
    "codigo": "2850" 
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
      <BTParametrosBase.ObtenerOpcionGeneralDeProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>MI</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>200f0b8b654A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtOpcionGeneralDeProceso> 
            <descripcion>Debug's</descripcion> 
            <identificador>2850</identificador> 
            <valor>S</valor> 
         </sdtOpcionGeneralDeProceso> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>109140</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTParametrosBase.ObtenerOpcionGeneralDeProceso</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-11-24</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>13:29:43</Hora> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerOpcionGeneralDeProcesoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
' 
{ 
    "Btinreq": { 
	  "Device": "MC", 
	  "Usuario": "MI", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "200f0b8b654A8B5C60A82434" 
	}, 
	"sdtOpcionGeneralDeProceso": { 
	  "descripcion": "Debug's", 
	  "identificador": "2850", 
	  "valor": "S" 
	}, 
	"Btoutreq": { 
	  "Numero": "109140", 
	  "Estado": "OK", 
	  "Servicio": "BTParametrosBase.ObtenerOpcionGeneralDeProceso", 
	  "Requerimiento": "1", 
	  "Fecha": "2020-11-24", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "13:29:43" 
	} 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresaId | Short | Código de empresa [Hidden]. 
codigo | Int | Código de la opción general de procesos. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtOpcionGeneralDeProceso | sBTOpcionGeneral | Datos de la opción general de procesos. 

Los campos del tipo de dato estructurado sBTOpcionGeneral son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción de la opción general de procesos. 
identificador | Int | Código de la opción general de procesos. 
valor | String | Valor de la opción general de procesos (S/N) 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de opción general. 
40001 | No existe la opción general con el identificador ingresado. 

 
