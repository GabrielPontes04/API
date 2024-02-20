# Obtener Opción General Por Modulo 

Método para obtener los datos de una opción general de un determinado módulo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTParametrosBase.ObtenerOpcionGeneralPorModulo | RBTPG443 | Institucional 

> Ejemplo de invocación al método Obtener Opción General Por Modulo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerOpcionGeneralPorModulo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>47D750A861C4243EDE981344</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:modulo>21</bts:modulo> 
         <bts:codigo>9</bts:codigo> 
      </bts:BTParametrosBase.ObtenerOpcionGeneralPorModulo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerOpcionGeneralPorModulo \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Device": "GP", 
      "Requerimiento": "1", 
      "Token": "200f0b8b654A8B5C60A82434" 
    }, 
   "modulo": 21, 
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
      <BTParametrosBase.ObtenerOpcionGeneralPorModuloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>47D750A861C4243EDE981344</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtOpcionGeneralModulo> 
            <identificador>9</identificador> 
            <descripcion>Ajustar fecha fin de mes PCC3</descripcion> 
            <valor>S</valor> 
         </sdtOpcionGeneralModulo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTParametrosBase.ObtenerOpcionGeneralPorModulo</Servicio> 
            <Fecha>2022-11-17</Fecha> 
            <Hora>11:24:03</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>458</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerOpcionGeneralPorModuloResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
' 
{ 
    "Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "47D750A861C4243EDE981344" 
	}, 
	"sdtOpcionGeneralModulo": { 
	  "descripcion": "Ajustar fecha fin de mes PCC3", 
	  "identificador": "9", 
	  "valor": "S" 
	}, 
	"Btoutreq": { 
	  "Numero": "109140", 
	  "Estado": "OK", 
	  "Servicio": "BTParametrosBase.ObtenerOpcionGeneralPorModulo", 
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
modulo | Int | Identificador de módulo Bantotal. 
codigo | Int | Código de la opción general de procesos. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtOpcionGeneralModulo | sBTOpcionGeneral | Datos de la opción general de procesos. 

Los campos del tipo de dato estructurado sBTOpcionGeneral son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción de la opción general de procesos. 
identificador | Int | Código de la opción general de procesos. 
valor | String | Valor de la opción general de procesos (S/N) 

### Errores 

Código | Descripción 
--------- | ----------- 
30002 | No se recibió el módulo. 
30003 | No se recibió identificador de opción general. 
40001 | El módulo ingresado no es correcto. 
40002 | No se encontró registro para la opción general ingresada. 

 
