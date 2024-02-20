#  Obtener Tipos de Cuenta 

Método para obtener los tipos de cuenta de tarjetas de débito ingresados en el sistema. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ObtenerTiposDeCuenta | RBTPG379 | Global 

> Ejemplo de invocación al servicio Obtener Tipos de Cuenta: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerTiposDeCuenta> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1080548031CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
      </bts:BTTarjetasDeDebito.ObtenerTiposDeCuenta> 
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
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
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
      <BTTarjetasDeDebito.ObtenerTiposDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1080548031CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <sdtTiposDeCuenta> 
            <SdtsBTTipoDeCuenta> 
               <descripcion>Preferencial</descripcion> 
               <codigo>1</codigo> 
            </SdtsBTTipoDeCuenta> 
            <SdtsBTTipoDeCuenta> 
               <descripcion>Normal</descripcion> 
               <codigo>5</codigo> 
            </SdtsBTTipoDeCuenta> 
         </sdtTiposDeCuenta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerTiposDeCuenta</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>14:27:12</Hora> 
            <Requerimiento/> 
            <Numero>8451</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerTiposDeCuentaResponse> 
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
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
    }, 
    "sdtTiposDeCuenta": { 
        "SdtsBTTipoDeCuenta": [ 
            { 
                "descripcion": "Preferencial", 
                "codigo": 1 
            }, 
            { 
                "descripcion": "Normal", 
                "codigo": 5 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTTarjetasDeDebito.ObtenerTiposDeCuenta", 
        "Fecha": "2021-10-29", 
        "Hora": "13:37:58", 
        "Requerimiento": "", 
        "Numero": 8449, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtTiposDeCuenta | sBTTipoDeCuenta | Listado de tipos de cuenta.  

Los campos del tipo de dato estructurado sBTTipoDeCuenta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripcion del tipo de cuenta. 
codigo | Int | Código del tipo de cuenta. 

### Errores 

No aplica. 

ECHO está desactivado.
