# Obtener Prestamos a Vencer (Disponible únicamente para V3R1) 

Método para obtener los préstamos que estan por vencer dentro de determinados días. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerPrestamosAVencer | RBTPG472 | Global 

> Ejemplo de invocación al método Obtener Prestamos Por Rango Mora: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerPrestamosAVencer> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>ad33e17b1199865B3A2E76CF</bts:Token> 
         </bts:Btinreq> 
         <bts:diasVtoCuota>2</bts:diasVtoCuota> 
      </bts:BTPrestamos.ObtenerPrestamosAVencer> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosAVencer=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \ 
  -d '{ 
	"Btinreq": { 
    "Requerimiento": 0, 
    "Canal": "BTDIGITAL", 
    "Device": "GZ", 
    "Usuario": "Instalador", 
    "Token": "ad33e17b1199865B3A2E76CF" 
  }, 
  "diasVtoCuota": 2 
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
        <BTPrestamos.ObtenerPrestamosAVencerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ad33e17b1199865B3A2E76CF</Token> 
         </Btinreq> 
         <sdtDatosPrestamos> 
            <sBTDatosPrestamo> 
               <plazo>124</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>0.00</deudaTotalVencida> 
               <periodicidad>15</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2023-05-31</fechaVencimiento> 
               <producto> 
                  <papel>$</papel> 
                  <moneda>S/</moneda> 
                  <productoUId>1</productoUId> 
                  <nombre>PRÉSTAMO-Financiero 9</nombre> 
               </producto> 
               <clienteUId>407</clienteUId> 
               <fechaProximoVencimiento>2023-03-31</fechaProximoVencimiento> 
               <tasaVigente>83.230000</tasaVigente> 
               <fechaPrimerCuotaImpaga>2023-03-31</fechaPrimerCuotaImpaga> 
               <valorCuota>106.10</valorCuota> 
               <saldoCapital>458.21</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas> 
               <capitalOriginal>800.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>530.57</deudaCancelacionTotal> 
               <diasMora>0</diasMora> 
               <operacionUId>10752</operacionUId> 
               <cantidadCuotasImpagas>5</cantidadCuotasImpagas> 
               <deudaTotalAFecha>106.10</deudaTotalAFecha> 
               <cuotasPagasConRetraso>3</cuotasPagasConRetraso> 
               <fechaUltimoPago>2023-03-29</fechaUltimoPago> 
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>40.000000</tasaMoraVigente> 
               <sucursal>MIRAFLORES</sucursal> 
               <fechaValor>2023-01-27</fechaValor> 
               <cantidadCuotas>9</cantidadCuotas> 
            </sBTDatosPrestamo> 
         </sdtDatosPrestamos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>227484</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerPrestamosAVencer</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-05-09</Fecha> 
            <Hora>12:58:32</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerPrestamosAVencerResponse> 
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
    "sBTDatosPrestamo": { 
      "plazo": 124, 
      "eventosPosteriores": "N", 
      "deudaTotalVencida": 0, 
      "periodicidad": 15, 
      "simboloMoneda": "$", 
      "fechaVencimiento": "2023-05-31", 
      "producto": { 
        "papel": "$", 
        "moneda": "S/", 
        "productoUId": 1, 
        "nombre": "PRÉSTAMO-Financiero 9" 
      }, 
      "clienteUId": 407, 
      "fechaProximoVencimiento": "2023-03-31", 
      "tasaVigente": 83.23, 
      "fechaPrimerCuotaImpaga": "2023-03-31", 
      "valorCuota": 106.1, 
      "saldoCapital": 458.21, 
      "otrosConceptos": "", 
      "cantidadCuotasVencidas": 0, 
      "capitalOriginal": 800, 
      "tir": 0, 
      "deudaCancelacionTotal": 530.57, 
      "diasMora": 0, 
      "operacionUId": 10752, 
      "cantidadCuotasImpagas": 5, 
      "deudaTotalAFecha": 106.1, 
      "cuotasPagasConRetraso": 3, 
      "fechaUltimoPago": "2023-03-29", 
      "tipoAmortizacion": "Francés con Seg.e Impu.", 
      "datosAdicionales": "", 
      "estado": "Normal", 
      "tasaMoraVigente": 40, 
      "sucursal": "MIRAFLORES", 
      "fechaValor": "2023-01-27", 
      "cantidadCuotas": 9 
    } 
  }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerPrestamosAVencer", 
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
diasVtoCuota | Int | Días que faltan para el vencimiento de los prestamos. 
actualiza  | String | Habilita la actualización en la tabla SNG912 con los datos del prestamo [Hidden: Valor fijo 'S']. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosPrestamos | sBTDatosPrestamo | Listado de los prestamos que estan por vencer en determinados días. 

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
30003 | No existe registro para el producto indicado. 

 
