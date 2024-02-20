# Obtener Calendario de Sucursal 

Método para obtener el calendario de una sucursal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerCalendarioDeSucursal | RBTPG283 | Global 

> Ejemplo de invocación al método Obtener Calendario de Sucursal: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerCalendarioDeSucursal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MI</bts:Usuario> 
            <bts:Device>MC</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>200f0b88B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sucursalId>1000</bts:sucursalId> 
      </bts:BTConfiguracionBantotal.ObtenerCalendarioDeSucursal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X GET \ 
   'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerCalendarioDeSucursal' \ 
   -H 'cache-control: no-cache' \ 
   -H 'content-type: application/json' \ 
   -d '{ 
   "Btinreq": { 
        "Device": "MC", 
        "Usuario": "MI", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "200f0b88B5C60A82434" 
    }, 
	"sucursalId":1000 
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
      <BTConfiguracionBantotal.ObtenerCalendarioDeSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>200f0b88B5C60A82434</Token> 
         </Btinreq> 
         <descripcionSucursal>Sucursal Ciudad de la Costa</descripcionSucursal> 
         <sdtCalendario> 
            <descripcion>Calendario 1</descripcion> 
            <identificador>1</identificador> 
         </sdtCalendario> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>109092</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerCalendarioDeSucursal</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-11-24</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>09:20:38</Hora> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerCalendarioDeSucursalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "MC", 
        "Usuario": "MI", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "200f0b88B5C60A82434" 
    }, 
	"descripcionSucursal":"Sucursal Ciudad de la Costa", 
    "sdtCalendario": { 
        "descripcion":"Calendario 1", 
        "identificador":1 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 109092, 
        "Servicio": "BTConfiguracionBantotal.ObtenerCalendarioDeSucursal", 
        "Estado": "OK", 
        "Fecha": "2020-11-24", 
        "Requerimiento": "0", 
        "Hora": "14:13:38", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sucursalId | Int | Identificador de sucursal. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcionSucursal | String | Descripción de la sucursal. 
sdtCalendario | sBTCalendario | Calendario de la sucursal. 

El tipo de dato estructurado sBTCalendario tiene los siguientes campos: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Short | Código del calendario. 
descripcion | String | Descripcion del calendario. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de sucursal.         
40001 | No existe sucursal con el identificador ingresado. 

 
