# Obtener Variables Regla 

Método para obtener las variables de una determinada regla de negocio. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTReglasNegocio.ObtenerVariablesRegla | RBTPGR54 | Global 

> Ejemplo de invocación al servicio de Obtener Variables Regla: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTReglasNegocio.ObtenerVariablesRegla> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:reglaId>1</bts:reglaId> 
      </bts:BTReglasNegocio.ObtenerVariablesRegla> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ObtenerVariablesRegla' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
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
      <BTReglasNegocio.ObtenerVariablesReglaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>86b12d9cbaCD285A89A23FBE</Token> 
         </Btinreq> 
         <Variableregla> 
            <SdtsBTVariableRegla> 
               <tipoDato>E-Entero</tipoDato> 
               <descripcion>Moneda</descripcion> 
               <variableId>1</variableId> 
               <nombre>MONEDA</nombre> 
            </SdtsBTVariableRegla> 
            <SdtsBTVariableRegla> 
               <tipoDato>N-Numerico</tipoDato> 
               <descripcion>Importe</descripcion> 
               <variableId>2</variableId> 
               <nombre>IMPORTE</nombre> 
            </SdtsBTVariableRegla> 
            <SdtsBTVariableRegla> 
               <tipoDato>N-Numerico</tipoDato> 
               <descripcion>Tipo de Cambio</descripcion> 
               <variableId>3</variableId> 
               <nombre>TCCOMPRA</nombre> 
            </SdtsBTVariableRegla> 
            <SdtsBTVariableRegla> 
               <tipoDato>N-Numerico</tipoDato> 
               <descripcion>Tipo de Cambio Vta</descripcion> 
               <variableId>4</variableId> 
               <nombre>TCVTA</nombre> 
            </SdtsBTVariableRegla> 
         </Variableregla> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>44445</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTReglasNegocio.ObtenerVariablesRegla</Servicio> 
            <Fecha>2022-06-02</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:05:38</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTReglasNegocio.ObtenerVariablesReglaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtVariablesRegla": { 
        "SdtsBTVariableRegla": [ 
        { 
            "tipoDato": "E-Entero", 
            "descripcion": "Moneda", 
            "variableId": "1", 
            "nombre": "MONEDA" 
        }, 
        { 
            "tipoDato": "N-Numerico", 
            "descripcion": "Importe", 
            "variableId": "2", 
            "nombre": "IMPORTE" 
        }, 
        { 
            "tipoDato": "N-Numerico", 
            "descripcion": "Tipo de Cambio", 
            "variableId": "3", 
            "nombre": "TCCOMPRA" 
        }, 
        { 
            "tipoDato": "N-Numerico", 
            "descripcion": "Tipo de Cambio Vta", 
            "variableId": "4", 
            "nombre": "TCVTA" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "44445", 
        "Estado": "OK", 
        "Servicio": "BTReglasNegocio.ObtenerVariablesRegla", 
        "Fecha": "2022-06-02", 
        "Requerimiento": "1", 
        "Hora": "10:05:38", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
reglaId | Long | Código de regla de negocio. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtVariablesRegla | sBTVariableRegla | Listado de variables. 

Los campos del tipo de dato estructurado sBTVariableRegla son los siguientes: 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
variableId | Short | Código de variable. 
nombre | String | Descripción de variable. 
descripcion | String | Descripción de variable. 
tipoDato | String | Tipo de dato. 


### Errores 

Código | Descripción 
--------- | ----------- 
1011050 | No se recibio ID de Regla.  

 
