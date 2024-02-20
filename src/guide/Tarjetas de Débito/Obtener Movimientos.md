# Obtener Movimientos 

Método para obtener los movimientos de una tarjeta de débito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ObtenerMovimientos | RBTPG026 | Global 

> Ejemplo de invocación al método Obtener Movimientos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerMovimientos> 
         <bts:Btinreq> 
            <bts:Device>AC</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token> 
         </bts:Btinreq> 
         <bts:tarjetaUId>2000002067</bts:tarjetaUId> 
         <bts:fechaDesde>2000-01-01</bts:fechaDesde> 
         <bts:fechaHasta>2020-01-01</bts:fechaHasta> 
      </bts:BTTarjetasDeDebito.ObtenerMovimientos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerMovimientos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "324915377F955E77534D3E02" 
	}, 
   "tarjetaUId": "2000002067", 
   "fechaDesde": "2000-01-01", 
   "fechaHasta": "2020-01-01" 
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
      <BTTarjetasDeDebito.ObtenerMovimientosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>52005b89a6F955E77534D3E0</Token> 
         </Btinreq> 
         <sdtEstadoDeCuenta> 
            <movimientos> 
               <sBTMovimientoDebito> 
                  <moneda>PESOS</moneda> 
                  <hora>11:32:16</hora> 
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento> 
                  <referencia/> 
                  <red>LINK</red> 
                  <concepto/> 
                  <importe>100.00</importe> 
                  <debitoOCredito>D</debitoOCredito> 
                  <banco/> 
                  <fecha>2017-06-20</fecha> 
               </sBTMovimientoDebito> 
               <sBTMovimientoDebito> 
                  <moneda>PESOS</moneda> 
                  <hora>11:32:17</hora> 
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento> 
                  <referencia/> 
                  <red>LINK</red> 
                  <concepto/> 
                  <importe>100.00</importe> 
                  <debitoOCredito>D</debitoOCredito> 
                  <banco/> 
                  <fecha>2017-06-20</fecha> 
               </sBTMovimientoDebito> 
               <sBTMovimientoDebito> 
                  <moneda>PESOS</moneda> 
                  <hora>11:32:18</hora> 
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento> 
                  <referencia/> 
                  <red>LINK</red> 
                  <concepto/> 
                  <importe>100.00</importe> 
                  <debitoOCredito>D</debitoOCredito> 
                  <banco/> 
                  <fecha>2017-06-20</fecha> 
               </sBTMovimientoDebito>               <sBTMovimientoDebito> 
                  <moneda>PESOS</moneda> 
                  <hora>11:32:19</hora> 
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento> 
                  <referencia/> 
                  <red>LINK</red> 
                  <concepto/> 
                  <importe>100.00</importe> 
                  <debitoOCredito>D</debitoOCredito> 
                  <banco/> 
                  <fecha>2017-06-20</fecha> 
               </sBTMovimientoDebito> 
			   <sBTMovimientoDebito> 
                  <moneda>PESOS</moneda> 
                  <hora>11:32:56</hora> 
                  <codigoMovimiento>EXTRACCIÓN LOCAL</codigoMovimiento> 
                  <referencia/> 
                  <red>REDBROU</red> 
                  <concepto/> 
                  <importe>100.00</importe> 
                  <debitoOCredito>D</debitoOCredito> 
                  <banco/> 
                  <fecha>2017-06-20</fecha> 
               </sBTMovimientoDebito> 
               <sBTMovimientoDebito> 
                  <moneda>PESOS</moneda> 
                  <hora>11:32:57</hora> 
                  <codigoMovimiento>COMPRAS POS EXTERIOR</codigoMovimiento> 
                  <referencia/> 
                  <red>CIRRUS</red> 
                  <concepto/> 
                  <importe>120.00</importe> 
                  <debitoOCredito>D</debitoOCredito> 
                  <banco/> 
                  <fecha>2017-06-20</fecha> 
               </sBTMovimientoDebito> 
            </movimientos> 
         </sdtEstadoDeCuenta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>673</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.ObtenerMovimientos</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-04-23</Fecha> 
            <Hora>14:06:18</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerMovimientosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "", 
      "Usuario": "BANTOTAL", 
      "Token": "324915377F955E77534D3E02", 
      "Device": "AC" 
   }, 
	"sdtEstadoDeCuenta": { 
		"movimientos": { 
		  "sBTMovimientoDebito": [ 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:16", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:17", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:18", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:19", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:56", 
			  "codigoMovimiento": "EXTRACCIÓN LOCAL", 
			  "referencia": "", 
			  "red": "REDBROU", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:57", 
			  "codigoMovimiento": "COMPRAS POS EXTERIOR", 
			  "referencia": "", 
			  "red": "CIRRUS", 
			  "concepto": "", 
			  "importe": "120.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			} 
		  ] 
		} 
	}, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.ObtenerMovimientos", 
      "Fecha": "2019-11-19", 
      "Hora": "13:05:22", 
      "Requerimiento": "", 
      "Numero": 6924, 
      "Estado": "OK" 
   } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de la tarjeta. 
fechaDesde | Date | Fecha desde la cual se emite el estado de cuenta. 
fechaHasta | Date | Fecha hasta la cual se emite el estado de cuenta. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtEstadoDeCuenta | sBTEstadoCuentaDebito | Datos del estado de cuenta de la tarjeta de débito. 

Los campos del tipo de dato estructurado sBTEstadoCuentaDebito son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientos | sBTMovimientoDebito | Listado de movimientos 

Los campos del tipo de dato estructurado sBTEstadoCuentaDebito son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fecha | Date | Fecha del movimiento. 
hora | String | Hora de movimiento. 
red | String | Red por donde se realizó el movimiento. 
banco | String | Nombre del banco. 
codigoMovimiento | String | Código de movimiento. 
concepto | String | Concepto del movimiento. 
referencia | String | Referencia. 
debitoOCredito | String | Débito o crédito (D/C). 
moneda | String | Moneda del movimiento. 
importe | Double | Importe. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de tarjeta. 

 
