# Obtener Estado de Cuenta 

Método para obtener el estado de cuenta de un producto cuenta corriente en Bantotal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.ObtenerEstadoDeCuenta | RBTPG004 | Global 

> Ejemplo de invocación al método Obtener Estado de Cuenta: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerEstadoDeCuenta> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>9</bts:operacionUId> 
      </bts:BTCuentasCorrientes.ObtenerEstadoDeCuenta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerEstadoDeCuenta=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: d377be9a-1521-dfea-bdb6-2a2771ba0303' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 9 
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
      <BTCuentasCorrientes.ObtenerEstadoDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEstadoDeCuenta> 
            <saldoPartida>208750.00</saldoPartida> 
            <fechaHasta>2018-10-09</fechaHasta> 
            <productoUId>9</productoUId> 
            <movimientos> 
               <sBTMovimiento> 
                  <movimientoUId>161</movimientoUId> 
                  <fecha>2018-10-09</fecha> 
                  <hora>16:45:54</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>143750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>162</movimientoUId> 
                  <fecha>2018-09-10</fecha> 
                  <hora>12:10:37</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>148750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>163</movimientoUId> 
                  <fecha>2018-09-10</fecha> 
                  <hora>16:33:58</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>153750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>164</movimientoUId> 
                  <fecha>2018-09-10</fecha> 
                  <hora>15:08:30</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>10000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>158750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>165</movimientoUId> 
                  <fecha>2018-09-10</fecha> 
                  <hora>12:24:35</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>168750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>166</movimientoUId> 
                  <fecha>2018-09-10</fecha> 
                  <hora>09:40:43</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>173750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>167</movimientoUId> 
                  <fecha>2018-08-10</fecha> 
                  <hora>12:58:22</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>10000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>178750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>168</movimientoUId> 
                  <fecha>2018-08-10</fecha> 
                  <hora>12:19:38</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>188750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>169</movimientoUId> 
                  <fecha>2018-08-09</fecha> 
                  <hora>12:08:39</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>10000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>193750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>170</movimientoUId> 
                  <fecha>2018-08-09</fecha> 
                  <hora>16:32:00</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>203750.00</saldo> 
               </sBTMovimiento> 
            </movimientos> 
            <fechaDesde>2018-07-11</fechaDesde> 
         </sdtEstadoDeCuenta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>927</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerEstadoDeCuenta</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:32:38</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerEstadoDeCuentaResponse> 
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
    "sdtEstadoDeCuenta": { 
        "saldoPartida": "208750.00", 
        "fechaHasta": "2018-10-09", 
        "productoUId": "9", 
        "movimientos": { 
            "sBTMovimiento": [ 
                { 
                    "moneda": "", 
                    "hora": "16:45:54", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "161", 
                    "debitoCredito": "D", 
                    "saldo": "143750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-10-09" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "12:10:37", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "162", 
                    "debitoCredito": "D", 
                    "saldo": "148750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-09-10" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "16:33:58", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "163", 
                    "debitoCredito": "D", 
                    "saldo": "153750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-09-10" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "15:08:30", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "164", 
                    "debitoCredito": "D", 
                    "saldo": "158750.00", 
                    "importe": "10000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-09-10" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "12:24:35", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "165", 
                    "debitoCredito": "D", 
                    "saldo": "168750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-09-10" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "09:40:43", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "166", 
                    "debitoCredito": "D", 
                    "saldo": "173750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-09-10" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "12:58:22", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "167", 
                    "debitoCredito": "D", 
                    "saldo": "178750.00", 
                    "importe": "10000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-08-10" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "12:19:38", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "168", 
                    "debitoCredito": "D", 
                    "saldo": "188750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-08-10" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "12:08:39", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "169", 
                    "debitoCredito": "D", 
                    "saldo": "193750.00", 
                    "importe": "10000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-08-09" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "16:32:00", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "170", 
                    "debitoCredito": "D", 
                    "saldo": "203750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-08-09" 
                } 
            ] 
        }, 
        "fechaDesde": "2018-07-11" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "928", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerEstadoDeCuenta", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "17:33:12", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
cantidadDias | Int | Cantidad de dias para atras (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor). 
cantidadMovimientos | Int | Cantidad de movimientos (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtEstadoDeCuenta | sBTEstadoCuentaCV | Datos de estado de cuenta. 

Los campos del tipo de dato estructurado sBTEstadoCuentaCV son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
fechaDesde | Date | Fecha desde la cual se emite el estado de cuenta. 
fechaHasta | Date | Fecha hasta la cual se emite el estado de cuenta. 
saldoPartida | Double | Saldo inicial. 
movimientos | sBTMovimiento | Datos de movimiento. 

Los campos del tipo de dato estructurado sBTMovimiento son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientoUId | Long | Identificador único de movimiento. 
fecha | Date | Fecha de movimiento. 
hora | String | Hora de movimiento. 
concepto | String | Concepto de movimiento. 
referencia | String | Referencia. 
numeroCheque | Int | Número de cheque. 
debitoCredito | String | Débito o Crédito (D/C). 
moneda | String | Símbolo de moneda. 
importe | Double | Importe de movimiento. 
tipoCambio | Double | Tipo de cambio de moneda. 
arbitraje | Double | Arbitraje de moneda. 
saldo | Double | Saldo de Cuenta Vista. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de operación. 
30002 | No se recuperó la operación para el identificador: [Número de identificador]. 
30003 | La operación ingresada no corresponde a una cuenta corriente. 
30004 | No se recibió la cantidad de días. 
30005 | No se recibió la cantidad de movimientos. 

 
