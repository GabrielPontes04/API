# Obtener Pagos de Cuota 

Método para obtener el detalle de pagos de una cuota de préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerPagosCuota | RBTPG095 | Global 

> Ejemplo de invocación al método Obtener Pagos de Cuota: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerPagosCuota> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>361</bts:operacionUId> 
         <bts:numeroCuota>1</bts:numeroCuota> 
      </bts:BTPrestamos.ObtenerPagosCuota> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPagosCuota=' \ 
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
    "numeroCuota": 1 
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
      <BTPrestamos.ObtenerPagosCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPagoDeCuota> 
            <fechaUltimoPago>2018-11-05</fechaUltimoPago> 
            <detalle> 
               <sBTDetallePagoCuota> 
                  <fechaPago>2018-11-05</fechaPago> 
                  <capital>0.00</capital> 
                  <intereses>1287.08</intereses> 
                  <comisiones>0.00</comisiones> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <detalleConceptos></detalleConceptos> 
                  <total>1287.08</total> 
               </sBTDetallePagoCuota> 
            </detalle> 
            <importePago>1287.08</importePago> 
         </sdtPagoDeCuota> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>905</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerPagosCuota</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>13:05:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerPagosCuotaResponse> 
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
    "sdtPagoDeCuota": { 
        "fechaUltimoPago": "2018-11-05", 
        "detalle": { 
            "sBTDetallePagoCuota": [ 
                { 
                    "otrosConceptos": "0.00", 
                    "capital": "0.00", 
                    "impuestos": "0.00", 
                    "intereses": "1287.08", 
                    "total": "1287.08", 
                    "fechaPago": "2018-11-05", 
                    "detalleConceptos": { 
                        "sBTConcepto": [] 
                    }, 
                    "seguros": "0.00", 
                    "comisiones": "0.00" 
                } 
            ] 
        }, 
        "importePago": "1287.08" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "906", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerPagosCuota", 
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
numeroCuota | Int | Número de cuota. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPagoDeCuota | sBTPagoDeCuota | Identificador único de movimiento [Asiento]. 

Los campos del tipo de dato estructurado sBTPagoDeCuota son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaUltimoPago | Date | Fecha de último pago de la cuota. 
importePago | Double | Importe pagado. 
detalle | sBTDetallePagoCuota | Listado de pagos de una cuota. 

Los campos del tipo de dato estructurado sBTDetallePagoCuota son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago prevista. 
capital | Double | Capital de la cuota. 
intereses | Double | Intereses de la cuota. 
comisiones | Double | Comisiones de la cuota. 
seguros | Double | Seguros de la cuota. 
impuestos | Double | Impuestos de la cuota. 
otrosConceptos | Double | Importe otros conceptos. 
detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales. 
total | Double | Total de la cuota. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la operación para el Identificador: [Número de Identificador]. 
40001 | La cuota indicada no es válida. 

 
