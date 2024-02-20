# Registrar Asiento Fecha Valor 

Método para registrar en el sistema un asiento a una fecha valor dada. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTContabilidad.RegistrarAsientoFechaValor | RBTPG532 | Global 

> Ejemplo de invocación al método Registrar Asiento Fecha Valor: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.RegistrarAsientoFechaValor> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1244265502F955E77534D3E0</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:sdtDatosAsiento> 
            <bts:operacionUId1>10140</bts:operacionUId1> 
            <bts:operacionUId2>10141</bts:operacionUId2> 
            <bts:operacionUId3></bts:operacionUId3> 
            <bts:operacionUId4></bts:operacionUId4> 
            <bts:operacionUId5></bts:operacionUId5> 
            <bts:importe1>1000</bts:importe1> 
            <bts:importe2>5220</bts:importe2> 
            <bts:importe3></bts:importe3> 
            <bts:importe4></bts:importe4> 
            <bts:importe5></bts:importe5> 
            <bts:importe6></bts:importe6> 
            <bts:importe7></bts:importe7> 
            <bts:importe8></bts:importe8> 
            <bts:concepto></bts:concepto> 
         </bts:sdtDatosAsiento> 
         <bts:fecha>2022-11-24</bts:fecha> 
      </bts:BTContabilidad.RegistrarAsientoFechaValor> 
   </soapenv:Body> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?RegistrarAsientoFechaValor=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
  	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "2081397563CD285A89A23FBE" 
	}, 
	"sdtDatosAsiento": { 
		"operacionUId1": "10140", 
		"operacionUId2": "10141", 
		"operacionUId3": "", 
		"operacionUId4": "", 
		"operacionUId5": "", 
		"importe1": "1000", 
		"importe2": "5220", 
		"importe3": "", 
		"importe4": "", 
		"importe5": "", 
		"importe6": "", 
		"importe7": "", 
		"importe8": "", 
		"concepto": "" 
	},    
	"fecha": "2022-11-24", 
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
      <BTContabilidad.RegistrarAsientoFechaValorResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
		 <movimientoUId>141</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>864</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTContabilidad.RegistrarAsientoFechaValor</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-18</Fecha> 
            <Hora>17:07:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.RegistrarAsientoFechaValorResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
	"movimientoUId": "142", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "868", 
        "Estado": "OK", 
        "Servicio": "BTContabilidad.RegistrarAsientoFechaValor", 
        "Requerimiento": "", 
        "Fecha": "2017-12-18", 
        "Hora": "17:15:28", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosAsiento | sBTDatosAsiento | Datos del movimiento 
fecha | Date | Fecha valor del asiento. 

Los campos del tipo de dato estructurado sBTDatosAsiento  son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId1 | Long | Identificador único de operación 1 
operacionUId2 | Long | Identificador único de operación 2 
operacionUId3 | Long | Identificador único de operación 3 
operacionUId4 | Long | Identificador único de operación 4 
operacionUId5 | Long | Identificador único de operación 5 
importe1 | Double | Importe 1 del movimiento 
importe2 | Double | Importe 2 del movimiento 
importe3 | Double | Importe 3 del movimiento 
importe4 | Double | Importe 4 del movimiento 
importe5 | Double | Importe 5 del movimiento 
importe6 | Double | Importe 6 del movimiento 
importe7 | Double | Importe 7 del movimiento 
importe8 | Double | Importe 8 del movimiento 
concepto | String | Concepto del movimiento 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientoUId | Long | Identificador único de movimiento. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar al menos una operación. 
30002 | Debe ingresar la fecha. 
30004 | No se recuperó la operación origen para el Identificador: [Número de Identificador]. 
30100 | Error en la contabilización. 

ECHO está desactivado.
