# Simular Préstamo Plazo Fijo 

Método para simular el alta de un préstamo plazo fijo para un crédito individual. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.SimularPlazoFijo | RBTPG424 | Global 

> Ejemplo de invocación al método Simular Préstamo Plazo Fijo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.SimularPlazoFijo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1571835133CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:sBTSimulacionPlazoFijo> 
            <bts:solicitudUId>10972</bts:solicitudUId> 
            <bts:clienteUId>2</bts:clienteUId> 
            <bts:productoUId>29</bts:productoUId> 
            <bts:fechaVencimiento/> 
            <bts:plazo>365</bts:plazo> 
            <bts:monto>35000</bts:monto> 
            <bts:pizarra/> 
            <bts:tasa/> 
            <bts:destinoCredito>28</bts:destinoCredito> 
            <bts:datosAdicionales/> 
         </bts:sBTSimulacionPlazoFijo> 
      </bts:BTMicrofinanzas.SimularPlazoFijo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularPlazoFijo \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
        "sBTSimulacionPlazoFijo": { 
          "solicitudUId": "10972", 
          "clienteUId": "2", 
          "productoUId": "29", 
          "plazo": "365", 
          "monto": "35000", 
          "destinoCredito": "28" 
        } 
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
      <BTMicrofinanzas.SimularPlazoFijoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1571835133CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtSimulacion> 
            <operacionUId>18</operacionUId> 
            <producto> 
               <productoUId>29</productoUId> 
               <nombre>PRÉSTAMOS SECTORIALES (PASIVO), Plazo Fijo</nombre> 
               <moneda/> 
               <papel>$</papel> 
            </producto> 
            <capital>35000.00</capital> 
            <valorCuota>40323.00</valorCuota> 
            <intereses>5323.00</intereses> 
            <tasa>15.000000</tasa> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <tasaEfectivaAnual>14.985122</tasaEfectivaAnual> 
            <tasaNominalAnual>15.000000</tasaNominalAnual> 
            <totalPrestamo>40323.00</totalPrestamo> 
            <fechaValor>2020-10-20</fechaValor> 
            <fechaVencimiento>2021-10-20</fechaVencimiento> 
            <fechaPrimerPago>2021-10-20</fechaPrimerPago> 
            <plazo>365</plazo> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2021-10-20</fechaPago> 
                  <importe>40323.00</importe> 
                  <redondeo>0.00</redondeo> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.SimularPlazoFijo</Servicio> 
            <Fecha>2019-10-18</Fecha> 
            <Hora>15:43:17</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>1317</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.SimularPlazoFijoResponse> 
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
        "sdtSimulacion": { 
          "operacionUId": "18", 
          "producto": { 
            "productoUId": "29", 
            "nombre": "PRÉSTAMOS SECTORIALES (PASIVO), Plazo Fijo", 
            "papel": "$" 
          }, 
          "capital": "35000.00", 
          "valorCuota": "40323.00", 
          "intereses": "5323.00", 
          "tasa": "15.000000", 
          "tasaEfectiva": "0.000000", 
          "tasaEfectivaAnual": "14.985122", 
          "tasaNominalAnual": "15.000000", 
          "totalPrestamo": "40323.00", 
          "fechaValor": "2020-10-20", 
          "fechaVencimiento": "2021-10-20", 
          "fechaPrimerPago": "2021-10-20", 
          "plazo": "365", 
          "cronograma": { 
            "sBTCuotaPrestamoAlta": { 
              "fechaPago": "2021-10-20", 
              "importe": "40323.00", 
              "redondeo": "0.00" 
            } 
          } 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.SimularPlazoFijo", 
          "Fecha": "2019-10-18", 
          "Hora": "15:43:17", 
          "Requerimiento": "95", 
          "Numero": "1317", 
          "Estado": "OK" 
        } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTSimulacionPlazoFijo | sBTSimulacionPlazoFijo | Datos de la simulación. 

Los campos del tipo de dato estructurado sBTSimulacionPlazoFijo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
solicitudUId | Long | Identificador de instancia Workflow. 
clienteUId* | Long | Identificador único de cliente. 
productoUId* | Long | Identificador único de producto. 
fechaVencimiento | Date | Fecha de Vencimiento (Obligatorio si no se carga plazo). 
plazo | Int | Plazo (Obligatorio si no se carga Fecha de Vencimiento). 
monto* | Double | Capital solicitado. 
pizarra | Short | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
destinoCredito | Long | Código de destino del crédito. 
datosAdicionales | sBTConcepto | Importe otros conceptos. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSimulacion | sBTSimulacionPrestamo | Datos del préstamo simulado. 

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
producto | sBTProducto | Datos del producto. 
capital | Double | Capital del préstamo. 
valorCuota | Double | Valor cuota. 
intereses | Double | Intereses. 
tasa | Double | Tasa. 
tasaEfectiva | Double | Tasa efectiva. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total a pagar. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
fechaPrimerPago | Date | Fecha de primer pago. 
plazo | Int | Plazo. 
otrosConceptos | sBTConcepto | Importe otros conceptos. 
cronograma | sBTCuotaSimulacion | Cronograma del préstamo. 

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

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la solicitud. 
30002 | No se recibió el identificador de cliente. 
30003 | No se recibió el identificador de producto. 
30004 | El producto indicado no es válido. 
30005 | No se recuperó la cuenta para el Identificador. 
30006 | El monto solicitado no puede ser 0. 
30007 | Debe ingresar plazo o fecha de vencimiento. 

 
