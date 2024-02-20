# Obtener Detalle Reducido 

Método para obtener los datos básicos de un préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerDetalleReducido | RBTPG073 | Global 

> Ejemplo de invocación al método Obtener Detalle Reducido: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetalleReducido> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:OperacionUId>142</bts:OperacionUId> 
      </bts:BTPrestamos.ObtenerDetalleReducido> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleReducido=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "OperacionUId": 142 
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
      <BTPrestamos.ObtenerDetalleReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6453f934f94A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPrestamo> 
            <sucursal>Sucursal Beta</sucursal> 
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso> 
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT> 
            <cantidadCuotas>37</cantidadCuotas> 
            <capitalOriginal>180000.00</capitalOriginal> 
            <estado>Normal</estado> 
            <operacionUId>142</operacionUId> 
            <tasaVigente>10.000000</tasaVigente> 
            <plazo>1096</plazo> 
            <saldoCapital>-174180.15</saldoCapital> 
            <tipoTasa>Lineal Anual</tipoTasa> 
            <producto> 
               <papel/> 
               <moneda/> 
               <productoUId>0</productoUId> 
               <nombre>Amort. - Capital F./Empr.- T/F</nombre> 
            </producto> 
            <idOperacionFmt>326-0</idOperacionFmt> 
            <fechaValor>2018-05-18</fechaValor> 
            <fechaVencimiento>2021-05-18</fechaVencimiento> 
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas> 
         </sdtPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>766</Numero> 
            <Servicio>BTPrestamos.ObtenerDetalleReducido</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento/> 
            <Fecha>2017-12-12</Fecha> 
            <Hora>10:55:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetalleReducidoResponse> 
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
    "sdtPrestamo": { 
        "sucursal": "Sucursal Beta", 
        "idOperacionBT": "0010000100115000000000000000002700000000000326001", 
        "cantidadCuotas": "37", 
        "capitalOriginal": "180000.00", 
        "estado": "Normal", 
        "operacionUId": "142", 
        "tasaVigente": "10.000000", 
        "plazo": "1096", 
        "saldoCapital": "-174180.15", 
        "tipoTasa": "Lineal Anual", 
        "producto": { 
            "papel": "", 
            "moneda": "", 
            "productoUId": "0", 
            "nombre": "Amort. - Capital F./Empr.- T/F" 
        }, 
        "fechaValor": "2018-05-18", 
        "fechaVencimiento": "2021-05-18", 
        "cantidadCuotasImpagas": "36", 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "767", 
        "Servicio": "BTPrestamos.ObtenerDetalleReducido", 
        "Estado": "OK", 
        "Requerimiento": "", 
        "Fecha": "2017-12-12", 
        "Hora": "11:15:09", 
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

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPrestamo | sBTPrestamo | Datos del préstamo 

Los campos del tipo de dato estructurado sBTPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación simulada. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador texto de operación. 
producto | sBTProducto | Producto. 
simboloMoneda | String | Símbolo monetario. 
sucursal | String | Sucursal del préstamo. 
fechaValor | Date | Fecha de alta del préstamo. 
fechaVencimiento | Date | Fecha de vencimiento del préstamo. 
plazo | Int | Plazo del préstamo. 
cantidadCuotas | Int | Cantidad de cuotas del préstamo. 
cantidadCuotasImpagas | Int | Cantidad de cuotas impagas. 
capitalOriginal | Double | Capital original del préstamo. 
saldoCapital | Double | Saldo de capital. 
tipoTasa | String | Tipo de tasa. 
tasaVigente | Double | Tasa vigente. 
estado | String | Estado del préstamo. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre de producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la operación para el identificador: [Número de Identificador]. 

 
