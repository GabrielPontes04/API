# Obtener Procesos Mensuales 

Método para obtener un listado de los procesos mensuales de la cadena de cierre. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCadenaCierre.ObtenerProcesosMensuales | RBTPG502 | Global 

> Ejemplo de invocación al método Obtener Procesos Mensuales: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCadenaCierre.ObtenerProcesosMensuales> 
        <bts:Btinreq> 
            <bts:Device>mc</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6964034201CD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
      </bts:BTCadenaCierre.ObtenerProcesosMensuales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ProcesosMensuales' \ 
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
      <BTCadenaCierre.ObtenerProcesosMensualesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>mc</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6964034201CD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtProcesosBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>2900</identificador> 
               <nombre>PCC00094</nombre> 
               <descripcion>Cobro de Comision Inact. CC/CA</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>4100</identificador> 
               <nombre>PFS90005</nombre> 
               <descripcion>Anual - Ajuste Inconsistencias</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>4700</identificador> 
               <nombre>PBCGM01A</nombre> 
               <descripcion>Generación de promedios mensu</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>4800</identificador> 
               <nombre>PBCGM01B</nombre> 
               <descripcion>Genera Promedios - FSH011</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>4900</identificador> 
               <nombre>PBCGM01C</nombre> 
               <descripcion>Genera Demostrativo - FSH011</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>10700</identificador> 
               <nombre>PCC00034</nombre> 
               <descripcion>Promedio</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>95000</identificador> 
               <nombre>PFS90002</nombre> 
               <descripcion>Cierre de Cuentas de Resultad</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>95005</identificador> 
               <nombre>PFS90003</nombre> 
               <descripcion>Afecta Patrimonio</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>95010</identificador> 
               <nombre>PFATI000</nombre> 
               <descripcion>Depura FAT03 y FAT05 FATCA</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>95015</identificador> 
               <nombre>PFATI002</nombre> 
               <descripcion>Captura de indicios FATCA</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>95020</identificador> 
               <nombre>PFATS001</nombre> 
               <descripcion>Depura Saldos FATCA</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>95025</identificador> 
               <nombre>PFATS002</nombre> 
               <descripcion>Genera Saldos FATCA</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>96016</identificador> 
               <nombre>PBRGENM</nombre> 
               <descripcion>Alertas Mensual</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>No reprocesar nunca</esReprocesable> 
            </SdtsBTProcesoBatch> 
         </sdtProcesosBatch> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>42086</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCadenaCierre.ObtenerProcesosMensuales</Servicio> 
            <Fecha>2022-06-01</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>13:09:29</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCadenaCierre.ObtenerProcesosMensualesResponse> 
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
          "identificador": "2900", 
          "nombre": "PCC00094", 
          "descripcion": "Cobro de Comision Inact. CC/CA", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "4100", 
          "nombre": "PFS90005", 
          "descripcion": "Anual - Ajuste Inconsistencias", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "4700", 
          "nombre": "PBCGM01A", 
          "descripcion": "Generación de promedios mensu", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "4800", 
          "nombre": "PBCGM01B", 
          "descripcion": "Genera Promedios - FSH011", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "4900", 
          "nombre": "PBCGM01C", 
          "descripcion": "Genera Demostrativo - FSH011", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "10700", 
          "nombre": "PCC00034", 
          "descripcion": "Promedio", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "95000", 
          "nombre": "PFS90002", 
          "descripcion": "Cierre de Cuentas de Resultad", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "95005", 
          "nombre": "PFS90003", 
          "descripcion": "Afecta Patrimonio", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "95010", 
          "nombre": "PFATI000", 
          "descripcion": "Depura FAT03 y FAT05 FATCA", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "95015", 
          "nombre": "PFATI002", 
          "descripcion": "Captura de indicios FATCA", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "95020", 
          "nombre": "PFATS001", 
          "descripcion": "Depura Saldos FATCA", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "95025", 
          "nombre": "PFATS002", 
          "descripcion": "Genera Saldos FATCA", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "96016", 
          "nombre": "PBRGENM", 
          "descripcion": "Alertas Mensual", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        } 
      ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "42086", 
      "Estado": "OK", 
      "Servicio": "BTCadenaCierre.ObtenerProcesosMensuales", 
      "Fecha": "2022-06-01", 
      "Requerimiento": "1", 
      "Hora": "13:09:29", 
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


 
