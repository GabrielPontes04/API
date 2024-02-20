# Visualizar Situacion Archivos 

Método para obtener la situación/resumen de los archivos subidos por el cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCASHManagement.VisualizarSituacionArchivos | RBTPGC10 | Global 

> Ejemplo de invocación al método Visualizar Situacion Archivos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.VisualizarSituacionArchivos> 
          <bts:Btinreq> 
            <bts:Device>001</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:contratoF></bts:contratoF> 
         <bts:servicioF></bts:servicioF> 
         <bts:estadoF></bts:estadoF> 
         <bts:fechaDesdeF>2018-01-01</bts:fechaDesdeF> 
         <bts:fechaHastaF></bts:fechaHastaF> 
      </bts:BTCASHManagement.VisualizarSituacionArchivos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarSituacionArchivos=' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: 8ae78366-8aaf-484e-9e0c-d6438a3b88c5,993b6845-9245-4afc-9048-660c34300f13' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": "1", 
    "contratoF": {"item":[]}, 
    "servicioF": "", 
    "estadoF": "", 
    "fechaDesdeF": "2018-01-01", 
    "fechaHastaF": "" 
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
      <BTCASHManagement.VisualizarSituacionArchivosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>001</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1e39d33c824A8B5C60A82434</Token> 
         </Btinreq> 
         <listaArchivos> 
            <sBTSituacionArchivo> 
               <moneda>0</moneda> 
               <nomArchivo>Archivo1</nomArchivo> 
               <estado>N</estado> 
               <referencia>Ref123</referencia> 
               <contratoId>1</contratoId> 
               <cantidadLineas>2</cantidadLineas> 
               <servicio>1</servicio> 
               <importe>2.40</importe> 
               <fechaPago>2018-01-03</fechaPago> 
               <archivoId>107</archivoId> 
            </sBTSituacionArchivo> 
            <sBTSituacionArchivo> 
               <moneda>0</moneda> 
               <nomArchivo>Archivo1</nomArchivo> 
               <estado>N</estado> 
               <referencia>Ref123</referencia> 
               <contratoId>1</contratoId> 
               <cantidadLineas>2</cantidadLineas> 
               <servicio>1</servicio> 
               <importe>2.40</importe> 
               <fechaPago>2018-01-03</fechaPago> 
               <archivoId>108</archivoId> 
            </sBTSituacionArchivo> 
            <sBTSituacionArchivo> 
               <moneda>0</moneda> 
               <nomArchivo>Archivo1</nomArchivo> 
               <estado>N</estado> 
               <referencia>Ref123</referencia> 
               <contratoId>1</contratoId> 
               <cantidadLineas>2</cantidadLineas> 
               <servicio>1</servicio> 
               <importe>2.40</importe> 
               <fechaPago>2018-01-03</fechaPago> 
               <archivoId>109</archivoId> 
            </sBTSituacionArchivo> 
            <sBTSituacionArchivo> 
               <moneda>0</moneda> 
               <nomArchivo>Archivo1</nomArchivo> 
               <estado>N</estado> 
               <referencia>Ref123</referencia> 
               <contratoId>1</contratoId> 
               <cantidadLineas>2</cantidadLineas> 
               <servicio>1</servicio> 
               <importe>2.40</importe> 
               <fechaPago>2018-01-03</fechaPago> 
               <archivoId>110</archivoId> 
            </sBTSituacionArchivo> 
         </listaArchivos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>7177</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCASHManagement.VisualizarSituacionArchivos</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-04-24</Fecha> 
            <Hora>15:48:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.VisualizarSituacionArchivosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "listaArchivos": { 
        "sBTSituacionArchivo": [ 
            { 
                "moneda": 0, 
                "nomArchivo": "Archivo1", 
                "estado": "N", 
                "referencia": "Ref123", 
                "contratoId": 1, 
                "cantidadLineas": 2, 
                "servicio": 1, 
                "importe": 2.4, 
                "fechaPago": "2018-01-03", 
                "archivoId": 107 
            }, 
            { 
                "moneda": 0, 
                "nomArchivo": "Archivo1", 
                "estado": "N", 
                "referencia": "Ref123", 
                "contratoId": 1, 
                "cantidadLineas": 2, 
                "servicio": 1, 
                "importe": 2.4, 
                "fechaPago": "2018-01-03", 
                "archivoId": 108 
            }, 
            { 
                "moneda": 0, 
                "nomArchivo": "Archivo1", 
                "estado": "N", 
                "referencia": "Ref123", 
                "contratoId": 1, 
                "cantidadLineas": 2, 
                "servicio": 1, 
                "importe": 2.4, 
                "fechaPago": "2018-01-03", 
                "archivoId": 109 
            }, 
            { 
                "moneda": 0, 
                "nomArchivo": "Archivo1", 
                "estado": "N", 
                "referencia": "Ref123", 
                "contratoId": 1, 
                "cantidadLineas": 2, 
                "servicio": 1, 
                "importe": 2.4, 
                "fechaPago": "2018-01-03", 
                "archivoId": 110 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 7185, 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.VisualizarSituacionArchivos", 
        "Requerimiento": "1", 
        "Fecha": "2019-04-24", 
        "Hora": "17:02:11", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
contratoF | Int | Lista de identificadores de contratos CASH del cliente. 
servicioF | Short | Servicio CASH. 
estadoF | String | Estado del archivo. 
fechaDesdeF | Date | Fecha de pago o cobro, desde. 
fechaHastaF | Date | Fecha de pago o cobro, hasta. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
listaArchivos | sBTSituacionArchivo | Lista de archivos solicitado. 

Los campos del tipo de dato estructurado sBTSituacionArchivo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
archivoId | Long | Identificador de archivo. 
contratoId | Long | Identificador del contrato CASH. 
servicio | Short | Servicio CASH. 
fechaPago | Date | Fecha de pago o cobro. 
estado | String | Estado del archivo. 
cantidadLineas | Int | Cantidad de líneas del archivo. 
moneda | Short | Moneda. 
importe | Double | Importe total. 
referencia | String | Referencia del pago o cobro. 
nomArchivo | String | Nombre del archivo. 

### Errores 

Código | Descripción 
--------- | ----------- 
1030705 | Cuenta cliente sin contrato vinculado. 
1030708 | Estado de archivo desconocido. 
1030709 | Se requiere identificacion de cuenta cliente. 
1030712 | Se requiere cuenta para recuperar la informacion. 
1030714 | El contrato consultado no corresponde al servicio recibido. 

 
