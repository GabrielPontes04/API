# Obtener Operaciones Cliente 

Método para obtener las operaciones elegibles a cancelar para una solicitud de créditos. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.ObtenerOperacionesCliente | RBTPG361 | Global 

> Ejemplo de invocación al servicio de Obtener Operaciones Cliente: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerOperacionesCliente> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>16c1cc9b534A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:solicitudUId>11887</bts:solicitudUId> 
         <bts:clienteUId>862</bts:clienteUId> 
      </bts:BTMicrofinanzas.ObtenerOperacionesCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas?ObtenerOperacionesCliente' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"solicitudUId": "11887", 
	"clienteUId": "862" 
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
      <BTMicrofinanzas.ObtenerOperacionesClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>16c1cc9b534A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtOperaciones> 
            <sBTOperacionWF> 
               <fechaUltimoPago>2016-03-01</fechaUltimoPago> 
               <diasMora>1674</diasMora> 
               <saldo>30340.61</saldo> 
               <fechaVencimiento>2016-01-02</fechaVencimiento> 
               <montoCancelacion>511820.42</montoCancelacion> 
               <operacionUId>1724</operacionUId> 
               <fechaValor>2020-03-13</fechaValor> 
            </sBTOperacionWF> 
            <sBTOperacionWF> 
               <fechaUltimoPago>2017-11-14</fechaUltimoPago> 
               <diasMora>0</diasMora> 
               <saldo>15000.00</saldo> 
               <fechaVencimiento>2016-01-02</fechaVencimiento> 
               <montoCancelacion>0.00</montoCancelacion> 
               <operacionUId>1727</operacionUId> 
               <fechaValor>2020-03-13</fechaValor> 
            </sBTOperacionWF> 
         </sdtOperaciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>111397</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTMicrofinanzas.ObtenerOperacionesCliente</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2021-10-15</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>13:14:15</Hora> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerOperacionesClienteResponse> 
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
      "Token": "16c1cc9b534A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "sdtOperaciones": { 
      "sBTOperacionWF": [ 
      { 
         "fechaUltimoPago": "2016-03-01", 
         "diasMora": "1674", 
         "saldo": "30340.61", 
         "fechaVencimiento": "2016-01-02", 
         "montoCancelacion": "511820.42", 
         "operacionUId": "1724", 
         "fechaValor": "2020-03-13" 
      }, 
      { 
         "fechaUltimoPago": "2017-11-14", 
         "diasMora": "0", 
         "saldo": "15000.00", 
         "fechaVencimiento": "2016-01-02", 
         "montoCancelacion": "0.00", 
         "operacionUId": "1727", 
         "fechaValor": "2020-03-13" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Numero": "111397", 
      "Estado": "OK", 
      "Servicio": "BTMicrofinanzas.ObtenerOperacionesCliente", 
      "Requerimiento": "1", 
      "Fecha": "2021-10-15", 
      "Canal": "BTDIGITAL", 
      "Hora": "13:14:15" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
solicitudUId | Long | Identificador de instancia Workflow. 
clienteUId | Long | Identificador único del cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtOperaciones | sBTOperacionWF | Listado de operaciones. 

Los campos del tipo de dato estructurado sBTOperacionWF son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
fechaValor | Date | Fecha valor de la operación. 
fechaVencimiento | Date | Fecha de vencimiento de la operación. 
fechaUltimoPago | Date | Fecha de último pago de la operación. 
saldo | Double | Saldo de la operación. 
diasMora | Int | Días de mora de la operación. 
montoCancelacion | Double | Monto de cancelación de la operación. 

### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió el identificador de solicitud. 
30002 | No se recibió el identificador de cliente. 
30003 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador]. 
40001 | La solicitud ingresada no existe. 
40002 | El cliente ingresado no corresponde con la solicitud. 
40003 | No se encontraron operaciones seleccionables para cancelar. 

 
