# Obtener Detalle de Oferta 

Método para obtener el detalle de una oferta de préstamo simulada. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerDetalleOferta | RBTPG125 | Global 

> Ejemplo de invocación al método Obtener Detalle de Oferta: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetalleOferta> 
         <bts:Btinreq> 
            <bts:Device>AC</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token> 
         </bts:Btinreq> 
         <bts:simulacionUId>47</bts:simulacionUId> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:cantidadCuotas>12</bts:cantidadCuotas> 
         <bts:actividad>1111</bts:actividad> 
      </bts:BTPrestamos.ObtenerDetalleOferta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetalleOferta=' \ 
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
	"simulacionUId": 47, 
    "clienteUId": "1", 
	"cantidadCuotas": "12", 
	"actividad": 1111 
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
      <BTPrestamos.ObtenerDetalleOfertaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>52005b89a6F955E77534D3E0</Token> 
         </Btinreq> 
         <sdtOferta> 
            <otrosConceptos></otrosConceptos> 
            <fechaValor>2019-11-25</fechaValor> 
            <capital>1000.00</capital> 
            <cronograma> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-05-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-06-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-07-06</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-08-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-09-07</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-10-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-11-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2020-12-07</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2021-01-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2021-02-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.67</cuota> 
                  <fechaPago>2021-03-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.00</impuestos> 
                  <intereses>0.00</intereses> 
                  <concepto/> 
                  <tipoCuota/> 
                  <cuota>268.60</cuota> 
                  <fechaPago>2021-04-05</fechaPago> 
                  <seguros>0.00</seguros> 
               </sBTCuotaSimulacion> 
            </cronograma> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>279.90</intereses> 
            <tasaNominalAnual>23.000000</tasaNominalAnual> 
            <totalPrestamo>3223.97</totalPrestamo> 
            <valorCuota>268.67</valorCuota> 
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual> 
            <operacionUId>194</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2020-05-05</fechaPrimerPago> 
            <idOperacionBT>0010100000101000000000000000004200000000000418001</idOperacionBT> 
            <fechaVencimiento>2021-04-05</fechaVencimiento> 
            <producto> 
               <moneda>$</moneda> 
               <papel>$</papel> 
               <productoUId>43</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <plazo>497</plazo> 
         </sdtOferta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>697</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerDetalleOferta</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-04-24</Fecha> 
            <Hora>12:42:27</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetalleOfertaResponse> 
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
	"sdtOferta": { 
		"otrosConceptos" : {}, 
		"fechaValor": "2019-11-25", 
		"capital": "1000.00", 
		"cronograma": { 
		  "sBTCuotaSimulacion": [ 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-05-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-06-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-07-06", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-08-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-09-07", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-10-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-11-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-12-07", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2021-01-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2021-02-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2021-03-05", 
			  "seguros": "0.00" 
			}, 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.60", 
			  "fechaPago": "2021-04-05", 
			  "seguros": "0.00" 
			} 
		  ] 
		}, 
		"tasaEfectiva": "0.000000", 
		"intereses": "279.90", 
		"tasaNominalAnual": "23.000000", 
		"totalPrestamo": "3223.97", 
		"valorCuota": "268.67", 
		"tasaEfectivaAnual": "25.590075", 
		"operacionUId": "194", 
		"tasa": "23.000000", 
		"fechaPrimerPago": "2020-05-05", 
		"idOperacionBT": "0010100000101000000000000000004200000000000418001", 
		"fechaVencimiento": "2021-04-05", 
		"producto": { 
		  "moneda": "$", 
		  "papel": "$", 
		  "productoUId": "43", 
		  "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
		}, 
		"plazo": "497" 
	} 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.ObtenerDetalleOferta", 
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
simulacionUId | Long | Identificador único de la simulación. 
clienteUId | Long | Identificador único del cliente. 
cantidadCuotas | Int | Cantidad de cuotas. 
actividad | Long | Destino del crédito. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtOferta | sBTSimulacionPrestamoOferta | Detalle de la oferta de préstamo. 

Los campos del tipo de dato estructurado sBTSimulacionPrestamoOferta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
otrosConceptos | sBTConcepto | Otros conceptos de la simulación. 
fechaValor | Date | Fecha valor. 
capital | Double | Capital total. 
cronograma | sBTCuotaSimulacion | Cronograma del préstamo. 
tasaEfectiva | Double | Tasa efectiva. 
intereses | Double | Intereses totales. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total del préstamo. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
valorCuota | Double | Valor cuota. 
operacionUId | Long | Identificador único de la operación. 
tasa | Double | Tasa del préstamo. 
fechaPrimerPago | Date | Fecha primer pago. 
fechaVencimiento | Date | Fecha vencimiento. 
idOperacionBT | String | Identificador String bantotal (concatenación de todos los conceptos claves de la operación). 
plazo | Int | Plazo del préstamo. 
producto | sBTProducto | Descripción del producto. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago. 
tipoCuota | String | Tipo de la cuota (Capital/Interés). 
concepto | String | Concepto. 
capital | Double | Monto de capital en la cuota. 
interes | Double | Monto de intereses en la cuota. 
seguros | Double | Monto de seguros en la cuota. 
impuestos | Double | Monto de impuestos en la cuota. 
otrosConceptos | Double | Importe correspondiente a otros conceptos. 
cuota | Double | Importe total de la cuota. 

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
30001 | No se recibió el identificador de cliente. 
30002 | No se recibió el identificador de simulación. 
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador]. 
30004 | La simulación no corresponde al cliente: [Número de Cliente]. 
30005 | La cantidad de cuotas indicada no forma parte de las ofertas. 
30012 | La simulación no existe. 
40238 | El Código de Actividad indicado es incorrecto. 

 
