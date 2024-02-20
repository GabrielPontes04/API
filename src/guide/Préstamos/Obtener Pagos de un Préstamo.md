# Obtener Pagos de un Préstamo 

Método para obtener el detalle de pagos de una cuota de préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerPagos | RBTPG096 | Global 

> Ejemplo de invocación al método Obtener Pagos de un Préstamo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerPagos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>361</bts:operacionUId> 
         <bts:fechaHasta>2020-03-05</bts:fechaHasta> 
		 <bts:fechaDesde>2019-03-05</bts:fechaDesde> 
      </bts:BTPrestamos.ObtenerPagos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPagos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 663f7ea1-30e7-309b-9c23-7792294641cc' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 361, 
	 "fechaHasta": "2020-03-05", 
	 "fechaDesde": "2019-03-05" 
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
      <BTPrestamos.ObtenerPagosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPagos> 
            <sBTPagoPrestamo> 
               <hora/> 
               <fecha>2018-05-15</fecha> 
               <operacionUIdCobro>0</operacionUIdCobro> 
               <importe>25000.00</importe> 
               <movimientoUId>0</movimientoUId> 
            </sBTPagoPrestamo> 
			<sBTPagoPrestamo> 
               <hora/> 
               <fecha>2018-06-15</fecha> 
               <operacionUIdCobro>0</operacionUIdCobro> 
               <importe>22199.00</importe> 
               <movimientoUId>0</movimientoUId> 
            </sBTPagoPrestamo> 
			<sBTPagoPrestamo> 
               <hora/> 
               <fecha>2018-07-15</fecha> 
               <operacionUIdCobro>0</operacionUIdCobro> 
               <importe>34520.00</importe> 
               <movimientoUId>0</movimientoUId> 
            </sBTPagoPrestamo> 
			<sBTPagoPrestamo> 
               <hora/> 
               <fecha>2018-08-15</fecha> 
               <operacionUIdCobro>0</operacionUIdCobro> 
               <importe>45680.00</importe> 
               <movimientoUId>0</movimientoUId> 
            </sBTPagoPrestamo> 
         </sdtPagos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>905</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerPagos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>13:05:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerPagosResponse> 
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
    "sdtPagos": { 
          "sBTPagoPrestamo": [ 
            { 
              "fecha": "2018-05-15", 
              "operacionUIdCobro": "0", 
              "importe": "25000.00", 
              "movimientoUId": "0" 
            }, 
            { 
              "fecha": "2018-06-15", 
              "operacionUIdCobro": "0", 
              "importe": "22199.00", 
              "movimientoUId": "0" 
            }, 
            { 
              "fecha": "2018-07-15", 
              "operacionUIdCobro": "0", 
              "importe": "34520.00", 
              "movimientoUId": "0" 
            }, 
            { 
              "fecha": "2018-08-15", 
              "operacionUIdCobro": "0", 
              "importe": "45680.00", 
              "movimientoUId": "0" 
            } 
          ] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "906", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerPagos", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "13:56:38", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación del préstamo. 
fechaHasta | Date | Fecha hasta la cual buscar pagos. 
fechaDesde | Date | Fecha desde la cual buscar pagos. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPagos | sBTPagoPrestamo | Listado de pagos del préstamo. 

Los campos del tipo de dato estructurado sBTPagoPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fecha | Date | Fecha de pago. 
importe | Double | Importe pagado. 
operacionUIdCobro | Long | Identificador único de la operación de cobro. 
movimientoUId | Long | Identificador único del movimiento. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30011 | No se recupero la operación para el identificador recibido. 

 
