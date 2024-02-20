# Cancelar 

Método para realizar la cancelación de un préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.Cancelar | RBTPG076 | Global 

### Configuración Backend 

1) Definir la transacción de Pago, teniendo en cuenta que: 

	* El préstamo se almacena en el preformato 1. 

	* La cuenta vista de cobro se almacena en el preformato 2. 

	* Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal. 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3)	Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. 

> Ejemplo de invocación al método Cancelar: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.Cancelar> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>dc7d30c0044A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>321</bts:operacionUId> 
         <bts:clienteUId>161</bts:clienteUId> 
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro> 
         <bts:referencia>Cancelar</bts:referencia> 
      </bts:BTPrestamos.Cancelar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Cancelar=' \ 
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
    "operacionUId_cobro": 281, 
    "referencia": "Cancelar" 
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
      <BTPrestamos.CancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>dc7d30c0044A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUId>121</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>758</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.Cancelar</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-05</Fecha> 
            <Hora>13:32:15</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.CancelarResponse> 
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
    "movimientoUId": "122", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "759", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.Cancelar", 
        "Requerimiento": "", 
        "Fecha": "2017-12-05", 
        "Hora": "13:39:04", 
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
operacionUId_cobro | Long | Identificador único de operación de la cuenta vista donde se cobrará el préstamo. 
referencia | String | Referencia. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientoUId | Long | Identificador único del movimiento [Asiento]. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación de préstamo. 
30002 | No se recibió el identificador de operación de cobro. 
30004 | No se recuperó la operacion para el Identificador: [Número de Identificador]. 
30005 | No se recuperó la operación para el Identificador: [Número de Identificador]- 
30006 | No se recibió el identificador de cliente. 
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador]. 
30008 | El préstamo no pertenece al cliente. 
30009 | La operación de cobro no pertenece al cliente. 
40001 | La Cuenta indicada es incorrecta.                              

 
