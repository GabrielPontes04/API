# Obtener Procesos Críticos 

Método para obtener un listado de los procesos críticos de la cadena de cierre. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCadenaCierre.ObtenerProcesosCriticos | RBTPG508 | Global 

> Ejemplo de invocación al método Obtener Procesos Críticos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCadenaCierre.ObtenerProcesosCriticos> 
         <bts:Btinreq> 
            <bts:Device>mc</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6964034201CD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
      </bts:BTCadenaCierre.ObtenerProcesosCriticos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerProcesosCriticos' \ 
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
      <BTCadenaCierre.ObtenerProcesosCriticosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>mc</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6964034201CD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtProcesosBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1500</identificador> 
               <nombre>PPP92005</nombre> 
               <descripcion>Cobrador de prestamos</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1551</identificador> 
               <nombre>PDETCADA</nombre> 
               <descripcion>Detiene cadena error tipo A</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>80001</identificador> 
               <nombre>PDETCADA</nombre> 
               <descripcion>Detiene cadena con Tipo A</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>80300</identificador> 
               <nombre>PEPECA</nombre> 
               <descripcion>CAIDA</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
         </sdtProcesosBatch> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>42139</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCadenaCierre.ObtenerProcesosCriticos</Servicio> 
            <Fecha>2022-06-01</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>13:22:08</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCadenaCierre.ObtenerProcesosCriticosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
      "Device": "mc", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "6964034201CD285A89A23FBE" 
    }, 
    "sdtProcesosBatch": { 
      "SdtsBTProcesoBatch": [ 
        { 
          "identificador": "1500", 
          "nombre": "PPP92005", 
          "descripcion": "Cobrador de prestamos", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "1551", 
          "nombre": "PDETCADA", 
          "descripcion": "Detiene cadena error tipo A", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "80001", 
          "nombre": "PDETCADA", 
          "descripcion": "Detiene cadena con Tipo A", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "80300", 
          "nombre": "PEPECA", 
          "descripcion": "CAIDA", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        } 
      ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "42139", 
      "Estado": "OK", 
      "Servicio": "BTCadenaCierre.ObtenerProcesosCriticos", 
      "Fecha": "2022-06-01", 
      "Requerimiento": "1", 
      "Hora": "13:22:08", 
      "Canal": "BTDIGITAL" 
    } 
  }, 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProcesosBatch | sBTProcesoBatch | Colección de procesos de cadena de cierre. 


Los campos del tipo de dato estructurado sBTProcesoBatch son los siguientes: 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Int | Identificador de proceso batch. 
nombre | String | Nombre del proceso. 
descripcion | String | Descripción. 
periodicidad | String | Periodicidad. 
parametrosExtendidos | String | ¿Utiliza parámetros extendidos? (SI / NO) 
esReprocesable | String | Descripción para reprocesamiento. 


### Errores 

No aplica. 

 
