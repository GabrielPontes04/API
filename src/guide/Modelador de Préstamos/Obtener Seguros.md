#  Obtener Seguros 

Método para obtener los seguros disponibles de un producto de préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTModeladorPrestamos.ObtenerSeguros | RBTPG351 | Global 

> Ejemplo de invocación al servicio de Obtener Seguros: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTModeladorPrestamos.ObtenerSeguros> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>194002532CD285A89A23FBEE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:productoUId>105</bts:productoUId> 
      </bts:BTModeladorPrestamos.ObtenerSeguros> 
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
        "Token": "1511184612CD285A89A23FBE", 
        "Device": "" 
    }, 
    "productoUId": "105" 
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
      <BTModeladorPrestamos.ObtenerSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>194002532CD285A89A23FBEE</Token> 
            <Device/> 
         </Btinreq> 
         <sdtSeguros> 
            <SdtsBTSeguroPrestamo> 
               <codigo>100</codigo> 
               <descripcion>ALICO - Vida %s/cap. inicial</descripcion> 
               <tipo>VIDA</tipo> 
               <modificable>S</modificable> 
               <importeFijo>100.00</importeFijo> 
               <porcentaje>0.1000</porcentaje> 
            </SdtsBTSeguroPrestamo> 
         </sdtSeguros> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTModeladorPrestamos.ObtenerSeguros</Servicio> 
            <Fecha>2021-11-03</Fecha> 
            <Hora>18:12:34</Hora> 
            <Requerimiento/> 
            <Numero>8633</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTModeladorPrestamos.ObtenerSegurosResponse> 
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
        "Token": "1511184612CD285A89A23FBE", 
        "Device": "" 
    }, 
    "sdtSeguros": { 
        "SdtsBTSeguroPrestamo": [ 
            { 
                "codigo": 100, 
                "descripcion": "ALICO - Vida %s/cap. inicial", 
                "tipo": "VIDA", 
                "modificable": "S", 
                "importeFijo": 100.00, 
                "porcentaje": 0.1000 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTModeladorPrestamos.ObtenerSeguros", 
        "Fecha": "2021-11-03", 
        "Hora": "17:44:10", 
        "Requerimiento": "", 
        "Numero": 8619, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador de producto. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSeguros | sBTSeguroPrestamo | Listado de seguros. 

Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Int | Codigo del seguro. 
descripcion | String | Descripcion del seguro. 
tipo | String | Tipo del seguro. 
modificable | String | Indica si es modificable. 
importeFijo | Decimal | Importe fijo del seguro. 
porcentaje | Decimal | Porcentaje del seguro. 

### Errores 

Código | Descripción 
--------- | -----------  
30002 | Existe registro con la cuenta indicada. 
30003 | No existe registro para el identificador único. 
30004 | No existe registro para el producto indicado. 

ECHO está desactivado.
