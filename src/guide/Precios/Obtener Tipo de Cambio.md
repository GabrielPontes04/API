# Obtener Tipo de Cambio 

Método que toma un monto en una determinada moneda origen y lo convierte a una moneda destino, devolviendo los tipos de cambio de ambas monedas. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrecios.ObtenerTipoCambio | RBTPG145 | Global 

> Ejemplo de invocación al método Obtener Tipo de Cambio: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ObtenerTipoCambio> 
         <bts:Btinreq>             
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>130620181211370000433575</bts:Token> 
            <bts:Device>ES</bts:Device> 
         </bts:Btinreq> 
         <bts:monedaOrigen>2</bts:monedaOrigen> 
         <bts:monedaDestino>98</bts:monedaDestino> 
         <bts:montoOrigen>1000</bts:montoOrigen> 
         <bts:tipoCotizacion>C</bts:tipoCotizacion> 
      </bts:BTPrecios.ObtenerTipoCambio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerTipoCambio=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: c27aec65-f66f-b138-f9d3-15a243b6d5e4' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "monedaOrigen": 2, 
   "monedaDestino": 98, 
   "montoOrigen": 1000, 
   "tipoCotizacion": "C" 
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
      <BTPrecios.ObtenerTipoCambioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>130620181211370000433575</Token> 
            <Device>ES</Device> 
         </Btinreq> 
         <precioOrigen>30.00</precioOrigen> 
         <precioDestino>28.00</precioDestino> 
         <montoDestino>1072.00</montoDestino> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrecios.ObtenerTipoCambio</Servicio> 
            <Fecha>2018-06-13</Fecha> 
            <Hora>12:19:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6670</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrecios.ObtenerTipoCambioResponse> 
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
   "precioOrigen": 30.00, 
   "precioDestino": 28.00, 
   "montoDestino": 1072.00, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "6670", 
      "Estado": "OK", 
      "Servicio": "BTPrecios.ObtenerTipoCambio", 
      "Fecha": "2018-06-13", 
      "Requerimiento": "1", 
      "Hora": "12:19:47", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
monedaOrigen | Short | Identificador de moneda origen. 
monedaDestino | Short | Identificador de moneda destino. 
montoOrigen | Double | Monto a convertir. 
tipoCotizacion | String | Tipo de cotización ('C': Compra, 'V': Venta). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
precioOrigen | Double | Tipo de cambio de la moneda origen respecto a moneda nacional. 
precioDestino | Double | Tipo de cambio de la moneda destino respecto a moneda nacional. 
montoDestino | Double | Monto origen convertido a moneda destino. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Moneda Origen y Moneda Destino no pueden ser la mismas. 
40001 | Error en la conversion de moneda: [Error generado por rutina RRG0006X]. 

ECHO está desactivado.
