# Obtener Identificador Unico 

Método para obtener el identificador único de una tarjeta de débito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ObtenerIdentificadorUnico | RBTPG800 | Global 

> Ejemplo de invocación al método Obtener Identificador Unico: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerIdentificadorUnico> 
         <bts:Btinreq> 
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>bms</bts:Device> 
         </bts:Btinreq> 
         <bts:nroTarjeta>4517720800000029</bts:nroTarjeta> 
      </bts:BTTarjetasDeDebito.ObtenerIdentificadorUnico> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerIdentificadorUnico' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -d '{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "f99a68ce154A8B5C60A82434" 
    }, 
    "nroTarjeta": "4517720800000029" 
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
      <BTTarjetasDeDebito.ObtenerIdentificadorUnicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>bms</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f99a68ce154A8B5C60A82434</Token> 
         </Btinreq> 
         <tarjetaUId>17</tarjetaUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1121</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.ObtenerIdentificadorUnico</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2020-11-06</Fecha> 
            <Hora>12:19:59</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerIdentificadorUnicoResponse> 
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
        "Token": "f99a68ce154A8B5C60A82434" 
    }, 
    "tarjetaUId": 17, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1122, 
        "Estado": "OK", 
        "Servicio": "BTTarjetasDeDebito.ObtenerIdentificadorUnico", 
        "Requerimiento": "0", 
        "Fecha": "2020-11-06", 
        "Hora": "12:23:58", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
nroTarjeta | String | Número de tarjeta. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió la tarjeta de débito. 
30002 | No se recuperó el identificador para la tarjeta de débito: [Número de Tarjeta]. 

 
