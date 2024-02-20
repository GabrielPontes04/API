# Obtener Prestamos por Rango Mora (Disponible únicamente para V3R1) 

Método para obtener los préstamos que esten dentro del rango de mora ingresado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerPrestamosPorRangoMora | RBTPG471 | Global 

> Ejemplo de invocación al método Obtener Prestamos Por Rango Mora: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerPrestamosPorRangoMora> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>d51ae0498699865B3A2E76CF</bts:Token> 
         </bts:Btinreq> 
         <bts:diasMoraDesde>23</bts:diasMoraDesde> 
         <bts:diasMoraHasta>100</bts:diasMoraHasta> 
      </bts:BTPrestamos.ObtenerPrestamosPorRangoMora> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosPorRangoMora=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \ 
  -d '{ 
	"Btinreq": { 
    "Requerimiento": 0, 
    "Canal": "BTDIGITAL", 
    "Device": "GZ", 
    "Usuario": "Instalador", 
    "Token": "d51ae0498699865B3A2E76CF" 
  }, 
  "diasMoraDesde": 23, 
  "diasMoraHasta": 100 
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
        <BTPrestamos.ObtenerPrestamosPorRangoMoraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ad33e17b1199865B3A2E76CF</Token> 
         </Btinreq> 
         <sdtDatosPrestamos> 
            <sBTDatosPrestamo> 
               <plazo>113</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>521.12</deudaTotalVencida> 
               <periodicidad>15</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2023-02-15</fechaVencimiento> 
               <producto> 
                  <papel>$</papel> 
                  <moneda>S/</moneda> 
                  <productoUId>1</productoUId> 
                  <nombre>PRÉSTAMO-Financiero 9</nombre> 
               </producto> 
               <clienteUId>253</clienteUId> 
               <fechaProximoVencimiento>2023-01-31</fechaProximoVencimiento> 
               <tasaVigente>83.230000</tasaVigente> 
               <fechaPrimerCuotaImpaga>2022-10-25</fechaPrimerCuotaImpaga> 
               <valorCuota>75.77</valorCuota> 
               <saldoCapital>500.00</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>6</cantidadCuotasVencidas> 
               <capitalOriginal>500.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>672.70</deudaCancelacionTotal> 
               <diasMora>95</diasMora> 
               <operacionUId>5819</operacionUId> 
               <cantidadCuotasImpagas>8</cantidadCuotasImpagas> 
               <deudaTotalAFecha>596.89</deudaTotalAFecha> 
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso> 
               <fechaUltimoPago/> 
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>40.000000</tasaMoraVigente> 
               <sucursal>MIRAFLORES</sucursal> 
               <fechaValor>2022-10-25</fechaValor> 
               <cantidadCuotas>8</cantidadCuotas> 
            </sBTDatosPrestamo> 
            <sBTDatosPrestamo> 
               <plazo>112</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>770.80</deudaTotalVencida> 
               <periodicidad>15</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2023-02-15</fechaVencimiento> 
               <producto> 
                  <papel>$</papel> 
                  <moneda>S/</moneda> 
                  <productoUId>1</productoUId> 
                  <nombre>PRÉSTAMO-Financiero 9</nombre> 
               </producto> 
               <clienteUId>310</clienteUId> 
               <fechaProximoVencimiento>2023-01-31</fechaProximoVencimiento> 
               <tasaVigente>83.230000</tasaVigente> 
               <fechaPrimerCuotaImpaga>2022-10-26</fechaPrimerCuotaImpaga> 
               <valorCuota>117.50</valorCuota> 
               <saldoCapital>800.00</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>6</cantidadCuotasVencidas> 
               <capitalOriginal>800.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>1006.52</deudaCancelacionTotal> 
               <diasMora>94</diasMora> 
               <operacionUId>9197</operacionUId> 
               <cantidadCuotasImpagas>8</cantidadCuotasImpagas> 
               <deudaTotalAFecha>888.30</deudaTotalAFecha> 
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso> 
               <fechaUltimoPago/> 
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>40.000000</tasaMoraVigente> 
               <sucursal>MIRAFLORES</sucursal> 
               <fechaValor>2022-10-26</fechaValor> 
               <cantidadCuotas>8</cantidadCuotas> 
            </sBTDatosPrestamo> 
         </sdtDatosPrestamos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>227484</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerPrestamosPorRangoMora</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-05-09</Fecha> 
            <Hora>12:58:32</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerPrestamosPorRangoMoraResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
    "Requerimiento": 0, 
    "Canal": "BTDIGITAL", 
    "Device": "GZ", 
    "Usuario": "Instalador", 
    "Token": "d51ae0498699865B3A2E76CF" 
	}, 
    "sdtDatosPrestamos": { 
    "sBTDatosPrestamo": [ 
      { 
        "plazo": 113, 
        "eventosPosteriores": "N", 
        "deudaTotalVencida": 521.12, 
        "periodicidad": 15, 
        "simboloMoneda": "$", 
        "fechaVencimiento": "2023-02-15", 
        "producto": { 
          "papel": "$", 
          "moneda": "S/", 
          "productoUId": 1, 
          "nombre": "PRÉSTAMO-Financiero 9" 
        }, 
        "clienteUId": 253, 
        "fechaProximoVencimiento": "2023-01-31", 
        "tasaVigente": 83.23, 
        "fechaPrimerCuotaImpaga": "2022-10-25", 
        "valorCuota": 75.77, 
        "saldoCapital": 500, 
        "otrosConceptos": "", 
        "cantidadCuotasVencidas": 6, 
        "capitalOriginal": 500, 
        "tir": 0, 
        "deudaCancelacionTotal": 672.7, 
        "diasMora": 95, 
        "operacionUId": 5819, 
        "cantidadCuotasImpagas": 8, 
        "deudaTotalAFecha": 596.89, 
        "cuotasPagasConRetraso": 0, 
        "fechaUltimoPago": "", 
        "tipoAmortizacion": "Francés con Seg.e Impu.", 
        "datosAdicionales": "", 
        "estado": "Normal", 
        "tasaMoraVigente": 40, 
        "sucursal": "MIRAFLORES", 
        "fechaValor": "2022-10-25", 
        "cantidadCuotas": 8 
      }, 
      { 
        "plazo": 112, 
        "eventosPosteriores": "N", 
        "deudaTotalVencida": 770.8, 
        "periodicidad": 15, 
        "simboloMoneda": "$", 
        "fechaVencimiento": "2023-02-15", 
        "producto": { 
          "papel": "$", 
          "moneda": "S/", 
          "productoUId": 1, 
          "nombre": "PRÉSTAMO-Financiero 9" 
        }, 
        "clienteUId": 310, 
        "fechaProximoVencimiento": "2023-01-31", 
        "tasaVigente": 83.23, 
        "fechaPrimerCuotaImpaga": "2022-10-26", 
        "valorCuota": 117.5, 
        "saldoCapital": 800, 
        "otrosConceptos": "", 
        "cantidadCuotasVencidas": 6, 
        "capitalOriginal": 800, 
        "tir": 0, 
        "deudaCancelacionTotal": 1006.52, 
        "diasMora": 94, 
        "operacionUId": 9197, 
        "cantidadCuotasImpagas": 8, 
        "deudaTotalAFecha": 888.3, 
        "cuotasPagasConRetraso": 0, 
        "fechaUltimoPago": "", 
        "tipoAmortizacion": "Francés con Seg.e Impu.", 
        "datosAdicionales": "", 
        "estado": "Normal", 
        "tasaMoraVigente": 40, 
        "sucursal": "MIRAFLORES", 
        "fechaValor": "2022-10-26", 
        "cantidadCuotas": 8 
      } 
    ] 
  }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerPrestamosPorRangoMora", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "12:27:52", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
diasMoraDesde | Int | Días de mora desde. 
diasMoraHasta | Int | Días de mora hasta. 
actualiza  | String | Habilita la actualización en la tabla SNG912 con los datos del prestamo [Hidden: Valor fijo 'S']. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosPrestamos | sBTDatosPrestamo | Listado de los prestamos que estan dentro del rango de dias de mora. 

Los campos del tipo de dato estructurado sBTDatosPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
plazo | Int | Plazo. 
eventosPosteriores | String | Hay eventos posteriores (S/N). 
deudaTotalVencida | Double | Monto de la deuda vencida a la fecha. 
periodicidad | Int |  Período entre cuotas. 
simboloMoneda | Sting | Símbolo monetario. 
fechaVencimiento | Date | Fecha de vencimiento del préstamo. 
clienteUId | Int | Identificador único del cliente. 
producto | sBTProducto | Descripción del producto. 
fechaProximoVencimiento | Date | Fecha de vencimiento de la próxima cuota. 
tasaVigente | Double | Tasa vigente. 
fechaPrimerCuotaImpaga | Date | Fecha de la primera cuota impaga. 
valorCuota | Double | Valor de la cuota. 
saldoCapital | Double | Saldo de capital. 
otrosConceptos | sBTConceptos | Otros conceptos del prestamo. 
cantidadCuotasVencidas | Int | Cantidad de cuotas vencidas. 
capitalOriginal | Double | Capital original del préstamo. 
tir | Double | Tir. 
deudaCancelacionTotal | Double | Monto de cancelación total. 
diasMora | Int | Días de mora del préstamo. 
operacionUId | Long | Identificador único de la operación. 
cantidadCuotasImpagas | Int | Cantidad de cuotas impagas. 
cuotasPagasConRetraso | Int | Cantidad de cuotas pagas con retraso. 
deudaTotalAFecha | Double | Monto a pagar para estar al día. 
fechaUltimoPago | Date | Fecha de último pago de cuota. 
tipoAmortizacion | String | Tipo de amortización. 
datosAdicionales | sbTDatoAdicional | Listado de datos adicionales. 
estado | String | Estado. 
tasaMoraVigente | Double | Tasa de mora vigente. 
sucursal | String | Sucursal del préstamo. 
fechaValor | Date | Fecha de alta del préstamo. 
cantidadCuotas | Int | Cantidad de cuotas del préstamo. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de la moneda. 
papel | String | Símbolo del papel. 

Los campos del tipo de dato estructurado sBTConceptos son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
detalle | String | Detalle de dato adicional. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | DiasMoraHasta no puede ser menor a DiasMoraDesde. 
30003 | No existe registro para el producto indicado. 

 
