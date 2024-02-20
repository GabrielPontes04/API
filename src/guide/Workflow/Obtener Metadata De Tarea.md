# Obtener Metadata De Tarea 

Método para obtener la metadata de una determinada tarea de Workflow. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTWorkflow.ObtenerMetadataDeTarea | RBTPG463 | Institucional 

> Ejemplo de invocación al método Obtener Metadata De Tarea: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTWorkflow.ObtenerMetadataDeTarea> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>151D0C3440510F1D04029085</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
         <bts:procesoId>1</bts:procesoId> 
         <bts:tareaId>11</bts:tareaId> 
      </bts:BTWorkflow.ObtenerMetadataDeTarea> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerMetadataDeTarea \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Usuario": "INSTALADOR", 
        "Device": "GP", 
        "Requerimiento": "1", 
        "Token": "200f0b8b654A8B5C60A82434" 
    }, 
    "procesoId": "1", 
    "tareaId": "11" 
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
      <BTWorkflow.ObtenerMetadataDeTareaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Token>151D0C3440510F1D04029085</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtMetadatas> 
            <sBTMetadataWF> 
               <valor>S</valor> 
               <nombre>CONSULTA</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>EVAPOLIAPR</valor> 
               <nombre>ETQEVAPOLI</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>602</valor> 
               <nombre>EXPRESION</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>6</valor> 
               <nombre>MODELOPOLITICAS</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>RNG_98</valor> 
               <nombre>TEMA</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>3</valor> 
               <nombre>TEMAPOLITICAS</nombre> 
            </sBTMetadataWF> 
         </sdtMetadatas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Fecha>2022-11-29</Fecha> 
            <Servicio>BTWorkflow.ObtenerMetadataDeTarea</Servicio> 
            <Hora>13:34:13</Hora> 
            <Numero>225661</Numero> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTWorkflow.ObtenerMetadataDeTareaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "47D750A861C4243EDE981344" 
    }, 
    "sdtMetadatas": { 
        "sBTMetadataWF": [ 
        { 
            "valor": "S", 
            "nombre": "CONSULTA" 
        }, 
        { 
            "valor": "EVAPOLIAPR", 
            "nombre": "ETQEVAPOLI" 
        }, 
        { 
            "valor": "602", 
            "nombre": "EXPRESION" 
        }, 
        { 
            "valor": "6", 
            "nombre": "MODELOPOLITICAS" 
        }, 
        { 
            "valor": "RNG_98", 
            "nombre": "TEMA" 
        }, 
        { 
            "valor": "3", 
            "nombre": "TEMAPOLITICAS" 
        } 
        ] 
    }, 
    "Erroresnegocio": "", 
    "Btoutreq": { 
        "Estado": "OK", 
        "Canal": "BTDIGITAL", 
        "Fecha": "2022-11-29", 
        "Servicio": "BTWorkflow.ObtenerMetadataDeTarea", 
        "Hora": "13:34:13", 
        "Numero": "225661", 
        "Requerimiento": "1" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
procesoId | Int | Identificador de proceso Workflow. 
tareaId | Int | Identificador de tarea Workflow. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtMetadatas | sBTMetadataWF | Listado de datos de metadata Workflow. 

Los campos del tipo de dato estructurado sBTMetadataWF son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
nombre | String | Nombre del campo. 
valor | String | Valor del campo. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de proceso. 
30002 | No se recibió el identificador de tarea. 
40001 | El proceso ingresado no existe. 
40002 | La tarea ingresada no existe para el proceso. 
40003 | No existe metadata para la tarea ingresada. 

 
