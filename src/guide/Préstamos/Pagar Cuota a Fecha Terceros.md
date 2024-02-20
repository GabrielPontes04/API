# Pagar Cuota a Fecha Terceros 

Método para realizar el pago de cuota de un préstamo a terceros, a una fecha valor. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.PagarCuotaAFechaTerceros | RBTPG832 | Global 

### Configuración Backend 

1) Definir la transacción de pago, teniendo en cuenta que: 

	* El préstamo se almacena en el preformato 1. 

	* La cuenta vista de cobro se almacena en el preformato 2. 

	* Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal. 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

	Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. 

> Ejemplo de invocación al método Pagar Cuota a Fecha Terceros: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.PagarCuotaAFechaTerceros> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>191631443CD285A89A23FBEE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>37675</bts:operacionUId> 
         <bts:clienteUId>1600</bts:clienteUId> 
         <bts:operacionCobroUId>59</bts:operacionCobroUId> 
         <bts:referencia>Prueba</bts:referencia> 
         <bts:importe>1000</bts:importe> 
         <bts:fecha>2019-07-26</bts:fecha> 
      </bts:BTPrestamos.PagarCuotaAFechaTerceros> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?PagarCuotaAFechaTerceros=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 342, 
    "clienteUId": 161, 
    "operacionCobroUId": 281, 
    "referencia": "Prueba", 
    "importe": 1000, 
    "fecha": "2019-07-26" 
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
      <BTPrestamos.PagarCuotaAFechaTercerosResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>191631443CD285A89A23FBEE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <movimientoUId>1807</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrestamos.PagarCuotaAFechaTerceros</Servicio> 
            <Fecha>2019-07-26</Fecha> 
            <Hora>12:04:55</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>120425</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrestamos.PagarCuotaAFechaTercerosResponse> 
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
    "movimientoUId": "1807", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "120425", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.PagarCuotaAFechaTerceros", 
        "Requerimiento": "", 
        "Fecha": "2019-07-26", 
        "Hora": "12:04:55", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación simulada. 
clienteUId | Long | Identificador único de cliente. 
importe | Double | Importe a pagar. 
operacionCobroUId | Long | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. 
referencia | String | Referencia. 
fecha | Date | Fecha Valor del pago. 
controlaExistenciaOperacionCobro | String | Indica si se controla la existencia de la operación de cobro [Hidden: Valores 'S'/'N']. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientoUId | Long | Identificador único de movimiento [Asiento]. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación de préstamo. 
30002 | No se recibió el identificador de operación de cobro. 
30003 | Debe ingresar importe. 
30004 | No se recuperó la operación para el Identificador: [Número de Identificador]. 
30005 | No se recuperó la operación para el Identificador: [Número de Identificador]. 
30006 | No se recibió el identificador de cliente. 
30007 | No se recuperó la operación para el Identificador de Cliente: [Número de Identificador]. 
30008 | El préstamo no pertenece al cliente. 
30010 | No se recibió una fecha para la operación. 
30100 | Error en la contabilización. 
40001 | La Cuenta indicada es incorrecta. 

 
