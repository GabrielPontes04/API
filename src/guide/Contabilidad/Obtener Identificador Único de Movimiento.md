# Obtener Identificador Único de Movimiento 

Método para obtener el identificador único de un movimiento contable. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTContabilidad.ObtenerIdentificadorUnicoMovimiento | RBTPG835 | Global 

> Ejemplo de invocación al método Obtener Identificador Único de Movimiento: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerIdentificadorUnicoMovimiento> 
         <bts:Btinreq> 
            <bts:Device>bms</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:empresaId>1</bts:empresaId> 
         <bts:sucursalId>1</bts:sucursalId> 
         <bts:moduloId>18</bts:moduloId> 
         <bts:transaccionId>402</bts:transaccionId> 
         <bts:relacion>1</bts:relacion> 
         <bts:fechaContabilizacion>2013-01-02</bts:fechaContabilizacion> 
      </bts:BTContabilidad.ObtenerIdentificadorUnicoMovimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIdentificadorUnicoMovimiento' \ 
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
    "sucursalId": "1", 
    "moduloId": "18", 
    "transaccionId": "402", 
    "relacion": "1", 
    "fechaContabilizacion": "2013-01-02" 
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
      <BTContabilidad.ObtenerIdentificadorUnicoMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>bms</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f99a68ce154A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUId>1</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1100</Numero> 
            <Servicio>BTContabilidad.ObtenerIdentificadorUnicoMovimiento</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-10-30</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>19:20:12</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.ObtenerIdentificadorUnicoMovimientoResponse> 
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
    "movimientoUId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1105, 
        "Servicio": "BTContabilidad.ObtenerIdentificadorUnicoMovimiento", 
        "Estado": "OK", 
        "Fecha": "2020-11-02", 
        "Requerimiento": "0", 
        "Hora": "18:08:09", 
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
sucursalId | Int | Identificador de sucursal. 
moduloId | Int | Módulo Bantotal. 
transaccionId | Int | Identificador de transacción Bantotal.  
relacion | Int | Relación. 
fechaContabilizacion | Date | Fecha de contabilización. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientoUId | Long | Identificador único de movimiento (asiento). 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió empresa. 
30002 | No se recibió sucursal. 
30003 | No se recibió módulo. 
30004 | No se recibió transacción. 
30005 | No se recibió relación. 
30006 | No se recibió fecha de contabilización. 
30007 | Movimiento no existe. 

 
