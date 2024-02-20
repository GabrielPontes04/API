# Pagar Cuota Terceros 

Método para realizar el pago de cuota de un préstamo con una cuenta de cobro de terceros. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.PagarCuotaTerceros | RBTPG831 | Global 

### Configuración Backend 

1) Definir la transacción de pago, teniendo en cuenta que: 

	* El préstamo se almacena en el preformato 1 

	* La cuenta vista de cobro se almacena en el preformato 2 

	* Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

	Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro 


> Ejemplo de invocación al método Pagar Cuota Terceros: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.PagarCuotaTerceros> 
         <bts:Btinreq> 
            <bts:Device>bms</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Token>b6275b301e4A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:operacionUId>39</bts:operacionUId> 
         <bts:clienteUId>9</bts:clienteUId> 
         <bts:importe>1000</bts:importe> 
         <bts:operacionCobroUId>800</bts:operacionCobroUId> 
         <bts:referencia>Una cuenta de terceros</bts:referencia> 
      </bts:BTPrestamos.PagarCuotaTerceros> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?PagarCuotaTerceros' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -d '{ 
	"Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "operacionUId": "40", 
    "clienteUId": "9", 
    "importe": "950", 
    "operacionCobroUId": "865", 
    "referencia": "Paga cuota terceros" 
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
      <BTPrestamos.PagarCuotaTercerosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>bms</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b6275b301e4A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUId>58</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1090</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.PagarCuotaTerceros</Servicio> 
            <Fecha>2020-10-30</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:46:32</Hora> 
         </Btoutreq> 
      </BTPrestamos.PagarCuotaTercerosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "movimientoUId": 61, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1093, 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.PagarCuotaTerceros", 
        "Fecha": "2020-10-30", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Hora": "14:29:28" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación simulada. 
clienteUId | Long | Identificador único de cliente. 
importe | Double | Importe a pagar. 
operacionCobroUId| Long | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. 
referencia | String | Referencia. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientoUId | Long | Identificador único de movimiento (asiento). 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación de préstamo. 
30003 | Debe ingresar importe. 
30004 | No se recuperó la operación para el Identificador: [Número de Identificador]. 
30006 | No se recibió el identificador de cliente. 
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador]. 
30008 | El préstamo no pertenece al cliente. 
30100 | Error en la Contabilización. 

 
