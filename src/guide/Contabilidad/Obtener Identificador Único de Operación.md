# Obtener Identificador Único de Operación 

Método para obtener el identificador único de una operación. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTContabilidad.ObtenerIdentificadorUnicoOperacion | RBTPG836 | Global 

### Configuración Backend 

1) Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

> Ejemplo de invocación al método Obtener Identificador Único de Operación: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerIdentificadorUnicoOperacion> 
         <bts:Btinreq> 
            <bts:Device>bms</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:empresaId>1</bts:empresaId> 
         <bts:moduloId>20</bts:moduloId> 
         <bts:sucursalId>100</bts:sucursalId> 
         <bts:monedaId>80</bts:monedaId> 
         <bts:papelId>0</bts:papelId> 
         <bts:cuentaBT>43</bts:cuentaBT> 
         <bts:operacionBT>0</bts:operacionBT> 
         <bts:subOperacionBT>8</bts:subOperacionBT> 
         <bts:tipoOperacionBT>48</bts:tipoOperacionBT> 
      </bts:BTContabilidad.ObtenerIdentificadorUnicoOperacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIdentificadorUnicoOperacion' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "empresaId": "1", 
    "moduloId": "20", 
    "sucursalId": "100", 
    "monedaId": "80", 
    "papelId": "0", 
    "cuentaBT": "43", 
    "operacionBT": "0", 
    "subOperacionBT": "8", 
    "tipoOperacionBT": "48" 
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
      <BTContabilidad.ObtenerIdentificadorUnicoOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>bms</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f99a68ce154A8B5C60A82434</Token> 
         </Btinreq> 
         <operacionUId>1</operacionUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1102</Numero> 
            <Servicio>BTContabilidad.ObtenerIdentificadorUnicoOperacion</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-10-30</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>20:27:14</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.ObtenerIdentificadorUnicoOperacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "operacionUId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1110, 
        "Servicio": "BTContabilidad.ObtenerIdentificadorUnicoOperacion", 
        "Estado": "OK", 
        "Fecha": "2020-11-03", 
        "Requerimiento": "0", 
        "Hora": "10:12:26", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresaId | Short | Identificador de empresa. 
moduloId | Int | Módulo Bantotal. 
sucursalId | Int | Identificador de sucursal. 
monedaId | Short | Identificador de moneda. 
papelId | Int | Identificador de papel. 
cuentaBT | Int | Cuenta Bantotal. 
operacionBT | Int | Operación Bantotal. 
subOperacionBT| Int | Sub Operación Bantotal. 
tipoOperacionBT | Short | Tipo de operación Bantotal. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió empresaId. 
30002 | No se recibió módulo. 
30003 | No se recibió sucursal. 
30004 | Moneda no existe. 
30005 | Papel no existe. 
30006 | No se recibió cuenta de cliente. 
30007 | No se recibió operación. 
30008 | No se recibió sub operación. 
30009 | No se recibió tipo de operación. 
30010 | Operación no existe. 

 
