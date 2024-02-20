# Obtener Detalle de Movimiento 

Método para obtener el detalle de un movimiento contable. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTContabilidad.ObtenerDetalleMovimiento | RBTPG228 | Global 

> Ejemplo de invocación al método Obtener Detalle de Movimiento: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerDetalleMovimiento> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>IN</bts:Usuario> 
            <bts:Token>12420485CD285A89A23FBE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:movimientoUId>8</bts:movimientoUId> 
      </bts:BTContabilidad.ObtenerDetalleMovimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerDetalleMovimiento' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "IN", 
		"Token": "12420485CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "movimientoUId": "8" 
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
      <BTContabilidad.ObtenerDetalleMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>IN</Usuario> 
            <Token>12420485CD285A89A23FBE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <sdtDetalleAsiento> 
            <sucursalId>1</sucursalId> 
            <descripcion>CAJA, Traspaso entre Cuentas</descripcion> 
            <usuarioIngreso>BANTOTAL</usuarioIngreso> 
            <usuarioConfirmacion>BANTOTAL</usuarioConfirmacion> 
            <fechaContabilizacion>2018-10-15</fechaContabilizacion>  
            <hora>13:08:23</hora> 
            <fechaValor>2018-10-15</fechaValor> 
			<anulado>N</anulado> 
			<movimientoUIdOriginal>8</movimientoUIdOriginal> 
			<movimientoUIdAnulacion>0</movimientoUIdAnulacion> 
            <ordinales> 
               <sBTOrdinal> 
                  <operacionUId>10189</operacionUId> 
                  <idOperacionBT>0010000100021000000000000000002700003000000000000</idOperacionBT> 
                  <debitoCredito>D</debitoCredito>  
                  <importe>10000.00</importe> 
                  <producto> 
                     <productoUId>0</productoUId> 
                     <nombre>CAJAS DE AHORRO, GENÉRICA</nombre> 
                     <moneda>$</moneda> 
                     <papel>$</papel> 
                  </producto> 
               </sBTOrdinal> 
               <sBTOrdinal> 
                  <operacionUId>10191</operacionUId> 
                  <idOperacionBT>0010000100020222200000000000002700002000000000000</idOperacionBT> 
                  <debitoCredito>C</debitoCredito> 
                  <importe>25.00</importe> 
                  <producto> 
                     <productoUId>0</productoUId> 
                     <nombre>CUENTA CORRIENTE, GENÉRICA</nombre> 
                     <moneda>USD</moneda> 
                     <papel>$</papel> 
                  </producto> 
               </sBTOrdinal> 
               <sBTOrdinal> 
                  <operacionUId>10192</operacionUId> 
                  <idOperacionBT>0010000100496222200000000000000000000000000000000</idOperacionBT> 
                  <debitoCredito>D</debitoCredito> 
                  <importe>25.00</importe> 
                  <producto> 
                     <productoUId>0</productoUId> 
                     <nombre>POSICION MONEDA EXTRANJERA, POSICION MONEDA EXTRANJERA</nombre> 
                     <moneda>USD</moneda> 
                     <papel>$</papel> 
                  </producto> 
               </sBTOrdinal> 
               <sBTOrdinal> 
                  <operacionUId>10193</operacionUId> 
                  <idOperacionBT>0010000100497000000000000000000000000000000000000</idOperacionBT> 
                  <debitoCredito>C</debitoCredito> 
                  <importe>10000.00</importe> 
                  <producto> 
                     <productoUId>0</productoUId> 
                     <nombre>VALUACION MONEDA EXTRANJERA, VALUACION MONEDA EXTRANJERA</nombre> 
                     <moneda>$</moneda> 
                     <papel>$</papel> 
                  </producto> 
               </sBTOrdinal> 
            </ordinales> 
         </sdtDetalleAsiento> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTContabilidad.ObtenerDetalleMovimiento</Servicio> 
            <Fecha>2020-10-29</Fecha> 
            <Hora>16:13:11</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7704</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTContabilidad.ObtenerDetalleMovimientoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "IN", 
      "Token": "12420485CD285A89A23FBE", 
      "Device": "MC" 
    }, 
    "sdtDetalleAsiento": { 
      "sucursalId": "1", 
      "descripcion": "CAJA, Traspaso entre Cuentas", 
      "usuarioIngreso": "BANTOTAL", 
      "usuarioConfirmacion": "BANTOTAL", 
      "fechaContabilizacion": "2018-10-15", 
      "hora": "13:08:23", 
      "fechaValor": "2018-10-15", 
	  "anulado": "N", 
      "movimientoUIdOriginal": "8", 
      "movimientoUIdAnulacion": "0", 
      "ordinales": { 
        "sBTOrdinal": [ 
          { 
            "operacionUId": "10189", 
            "idOperacionBT": "0010000100021000000000000000002700003000000000000", 
            "debitoCredito": "D", 
            "importe": "10000.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "CAJAS DE AHORRO, GENÉRICA", 
              "moneda": "$", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10191", 
            "idOperacionBT": "0010000100020222200000000000002700002000000000000", 
            "debitoCredito": "C", 
            "importe": "25.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "CUENTA CORRIENTE, GENÉRICA", 
              "moneda": "USD", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10192", 
            "idOperacionBT": "0010000100496222200000000000000000000000000000000", 
            "debitoCredito": "D", 
            "importe": "25.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "POSICION MONEDA EXTRANJERA, POSICION MONEDA EXTRANJERA", 
              "moneda": "USD", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10193", 
            "idOperacionBT": "0010000100497000000000000000000000000000000000000", 
            "debitoCredito": "C", 
            "importe": "10000.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "VALUACION MONEDA EXTRANJERA, VALUACION MONEDA EXTRANJERA", 
              "moneda": "$", 
              "papel": "$" 
            } 
          } 
        ] 
      } 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTContabilidad.ObtenerDetalleMovimiento", 
      "Fecha": "2020-10-29", 
      "Hora": "16:13:11", 
      "Requerimiento": "1", 
      "Numero": "7704", 
      "Estado": "OK" 
    } 
  } 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientoUId | Long | Identificador único de movimiento. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDetalleAsiento | sBTDetalleAsiento | Datos del movimiento. 

Los campos del tipo de dato estructurado sBTDetalleAsiento son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
sucursalId | Int | Identificador de sucursal. 
descripcion | String | Descripción del movimiento. 
usuarioIngreso | String | Usuario de ingreso del movimiento. 
usuarioConfirmacion | String | Usuario de confirmación del movimiento. 
fechaContabilizacion | Date | Fecha de contabilización. 
hora | String | Hora de contabilización. 
fechaValor | Date | Fecha valor. 
anulado | String | ¿Anulado? (S/N) 
movimientoUIdOriginal  | Long | Identificador único de movimiento original. 
movimientoUIdAnulacion | Long | Identificador único de movimiento de anulacion. 
ordinales | sBTOrdinal | Listado de ordinales del movimiento. 

Los campos del tipo de dato estructurado sBTOrdinal son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del Producto. 
debitoCredito | String | ¿Es débito o crédito? (Crédito: 'C', Débito: 'D'). 
importe | Double | Importe. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de movimiento. 
30103 | No existe registro para el identificador único. 
40001 | No existe el asiento. 

 
