# Obtener Período de Acreditación 

Método para obtener el período de acreditación de una operación. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ObtenerPeriodoDeAcreditacion | RBTPG366 | Global 

> Ejemplo de invocación al servicio de Obtener Período de Acreditacion: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerPeriodoDeAcreditacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1136448858CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10211</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerPeriodoDeAcreditacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "432782790CD285A89A23FBEE", 
        "Device": "" 
    }, 
    "operacionUId": 10211 
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
      <BTCuentasVista.ObtenerPeriodoDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1136448858CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <sdtperiodoAcreditacion> 
            <descripcion>Diario</descripcion> 
            <valor>1</valor> 
         </sdtperiodoAcreditacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasVista.ObtenerPeriodoDeAcreditacion</Servicio> 
            <Fecha>2021-11-01</Fecha> 
            <Hora>12:27:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8476</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerPeriodoDeAcreditacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "432782790CD285A89A23FBEE", 
        "Device": "" 
    }, 
    "sdtperiodoAcreditacion": { 
        "descripcion": "Diario", 
        "valor": 1 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTCuentasVista.ObtenerPeriodoDeAcreditacion", 
        "Fecha": "2021-11-01", 
        "Hora": "12:40:20", 
        "Requerimiento": "", 
        "Numero": 8478, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador de Subcuenta con acreditación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPeriodoAcreditacion | sBTPeriodoDeAcreditacion | Datos de la acreditación de la subcuenta. 

Los campos del tipo de dato estructurado sBTPeriodoDeAcreditacion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripcion del periodo. 
valor | Int | Valor del periodo. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de Operacion. 
30003 | No se recuperó la Operacion para el Identificador: [Número de identificador]. 

 
