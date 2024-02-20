# Obtener Tipos de Vivienda 

Método para obtener un listado de los tipos de vivienda. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerTiposDeVivienda | RBTPG374 | Global 

> Ejemplo de invocación al servicio de Obtener Tipos de Vivienda: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerTiposDeVivienda> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1394857355CD285A89A23FBE</bts:Token> 
            <bts:Device>AV</bts:Device> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerTiposDeVivienda> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
         "Canal": "BTDIGITAL", 
         "Requerimiento": "1", 
         "Usuario": "INSTALADOR", 
         "Token": "963643292CD285A89A23FBEE", 
         "Device": "AV" 
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
      <BTConfiguracionBantotal.ObtenerTiposDeViviendaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1394857355CD285A89A23FBE</Token> 
            <Device>AV</Device> 
         </Btinreq> 
         <sdtViviendas> 
            <tipoDeVivienda> 
               <codigo>1</codigo> 
               <descripcion>Propietario</descripcion> 
            </tipoDeVivienda> 
            <tipoDeVivienda> 
               <codigo>2</codigo> 
               <descripcion>Inquilino</descripcion> 
            </tipoDeVivienda> 
            <tipoDeVivienda> 
               <codigo>3</codigo> 
               <descripcion>BHU</descripcion> 
            </tipoDeVivienda> 
            <tipoDeVivienda> 
               <codigo>4</codigo> 
               <descripcion>Usufructo</descripcion> 
            </tipoDeVivienda> 
            <tipoDeVivienda> 
               <codigo>5</codigo> 
               <descripcion>Familiar</descripcion> 
            </tipoDeVivienda> 
            <tipoDeVivienda> 
               <codigo>6</codigo> 
               <descripcion>Otros</descripcion> 
            </tipoDeVivienda> 
         </sdtViviendas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTConfiguracionBantotal.ObtenerTiposDeVivienda</Servicio> 
            <Fecha>2021-11-15</Fecha> 
            <Hora>12:47:10</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8696</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerTiposDeViviendaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1", 
        "Usuario": "INSTALADOR", 
        "Token": "963643292CD285A89A23FBEE", 
        "Device": "AV" 
    }, 
    "sdtViviendas": { 
        "tipoDeVivienda": [ 
            { 
                "codigo": "1", 
                "descripcion": "Propietario" 
            }, 
            { 
                "codigo": "2", 
                "descripcion": "Inquilino" 
            }, 
            { 
                "codigo": "3", 
                "descripcion": "BHU" 
            }, 
            { 
                "codigo": "4", 
                "descripcion": "Usufructo" 
            }, 
            { 
                "codigo": "5", 
                "descripcion": "Familiar" 
            }, 
            { 
                "codigo": "6", 
                "descripcion": "Otros" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTConfiguracionBantotal.ObtenerTiposDeVivienda", 
        "Fecha": "2021-11-15", 
        "Hora": "11:21:59", 
        "Requerimiento": "1", 
        "Numero": 8693, 
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
sdtViviendas | sBTTipoDeVivienda | Listado de viviendas. 

Los campos del tipo de dato estructurado sBTTipoDeVivienda son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Short | Código de vivienda. 
descripcion | String | Descripcion de vivienda.  

### Errores 

No aplica. 

ECHO está desactivado.
