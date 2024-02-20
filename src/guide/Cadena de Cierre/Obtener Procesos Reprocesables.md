# Obtener Procesos Reprocesables 

Método para obtener un listado de los procesos reprocesables de la cadena de cierre. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCadenaCierre.ObtenerProcesosReprocesables | RBTPG506 | Global 

> Ejemplo de invocación al método Obtener Procesos Reprocesables: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCadenaCierre.ObtenerProcesosReprocesables> 
         <bts:Btinreq> 
            <bts:Device>mc</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6964034201CD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
      </bts:BTCadenaCierre.ObtenerProcesosReprocesables> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerProcesosReprocesables' \ 
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
      <BTCadenaCierre.ObtenerProcesosReprocesablesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>mc</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6964034201CD285A89A23FBE</Token> 
         </Btinreq> 
         <SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>69</identificador> 
               <nombre>PCLE252</nombre> 
               <descripcion>Generación de C. Gerencia</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>90</identificador> 
               <nombre>PCF0040</nombre> 
               <descripcion>Devengado de Comisiones Adel.</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
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
               <identificador>1720</identificador> 
               <nombre>PNU00002</nombre> 
               <descripcion>Devengamiento a Plazo</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>1725</identificador> 
               <nombre>PNU00011</nombre> 
               <descripcion>Ajuste cotización de Unidades</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>2030</identificador> 
               <nombre>PTDD0041</nombre> 
               <descripcion>Cancelación Automática TD</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>2200</identificador> 
               <nombre>PCC00001</nombre> 
               <descripcion>Cálculo de Estadísticas CC-CA</descripcion> 
               <periodicidad>MENSUAL</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>2550</identificador> 
               <nombre>PCC00117</nombre> 
               <descripcion>Coberturas CC CA Sistema Exper</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>6600</identificador> 
               <nombre>RFS00099</nombre> 
               <descripcion>Listado de Excepciones</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>7900</identificador> 
               <nombre>PP017</nombre> 
               <descripcion>Depurador</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>NO</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
            <SdtsBTProcesoBatch> 
               <identificador>8400</identificador> 
               <nombre>PMBC015</nombre> 
               <descripcion>Habilitación Tesoreros</descripcion> 
               <periodicidad>DIARIA</periodicidad> 
               <parametrosExtendidos>SI</parametrosExtendidos> 
               <esReprocesable>Reprocesar siempre</esReprocesable> 
            </SdtsBTProcesoBatch> 
         </SdtsBTProcesoBatch> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>42133</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCadenaCierre.ObtenerProcesosReprocesables</Servicio> 
            <Fecha>2022-06-01</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>13:14:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCadenaCierre.ObtenerProcesosReprocesablesResponse> 
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
    "SdtsBTProcesoBatch": { 
      "SdtsBTProcesoBatch": [ 
        { 
          "identificador": "69", 
          "nombre": "PCLE252", 
          "descripcion": "Generación de C. Gerencia", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "90", 
          "nombre": "PCF0040", 
          "descripcion": "Devengado de Comisiones Adel.", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
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
          "identificador": "1720", 
          "nombre": "PNU00002", 
          "descripcion": "Devengamiento a Plazo", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "1725", 
          "nombre": "PNU00011", 
          "descripcion": "Ajuste cotización de Unidades", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "2030", 
          "nombre": "PTDD0041", 
          "descripcion": "Cancelación Automática TD", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "2200", 
          "nombre": "PCC00001", 
          "descripcion": "Cálculo de Estadísticas CC-CA", 
          "periodicidad": "MENSUAL", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "2550", 
          "nombre": "PCC00117", 
          "descripcion": "Coberturas CC CA Sistema Exper", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "6600", 
          "nombre": "RFS00099", 
          "descripcion": "Listado de Excepciones", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "7900", 
          "nombre": "PP017", 
          "descripcion": "Depurador", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "NO", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "8400", 
          "nombre": "PMBC015", 
          "descripcion": "Habilitación Tesoreros", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        } 
      ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "42133", 
      "Estado": "OK", 
      "Servicio": "BTCadenaCierre.ObtenerProcesosReprocesables", 
      "Fecha": "2022-06-01", 
      "Requerimiento": "1", 
      "Hora": "13:14:51", 
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


ECHO está desactivado.
