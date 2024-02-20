# Simular Préstamo Amortizable 

Método para simular la solicitud de un préstamo amortizable. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.SimularAmortizable | RBTPG422 | Global 

> Ejemplo de invocación al método Simular Préstamo Amortizable: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.SimularAmortizable> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>987391075CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:sBTSimulacionAmortizable> 
            <bts:solicitudUId>10896</bts:solicitudUId> 
            <bts:clienteUId>7</bts:clienteUId> 
            <bts:productoUId>23</bts:productoUId> 
            <bts:fechaPrimerPago>2020-12-21</bts:fechaPrimerPago> 
            <bts:cantidadCuotas>3</bts:cantidadCuotas> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:monto>30000</bts:monto> 
            <bts:pizarra>0</bts:pizarra> 
            <bts:tasa>0</bts:tasa> 
            <bts:destinoCredito>33</bts:destinoCredito> 
            <bts:datosAdicionales/> 
         </bts:sBTSimulacionAmortizable> 
      </bts:BTMicrofinanzas.SimularAmortizable> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularAmortizable \ 
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
      "sBTSimulacionAmortizable": { 
          "solicitudUId": "10896", 
          "clienteUId": "7", 
          "productoUId": "23", 
          "fechaPrimerPago": "2020-12-21", 
          "cantidadCuotas": "3", 
          "periodoCuotas": "30", 
          "monto": "30000", 
          "pizarra": "0", 
          "tasa": "0", 
          "destinoCredito": "33" 
        } 
      } 
    } 
  } 
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
      <BTMicrofinanzas.SimularAmortizableResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1571835133CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtSimulacion> 
            <operacionUId>15</operacionUId> 
            <producto> 
               <productoUId>23</productoUId> 
               <nombre>HIPOTECARIOS VIVIENDA, VIVIENDA HIPOTECARIO</nombre> 
               <moneda>Q</moneda> 
               <papel>$</papel> 
            </producto> 
            <capital>30000.00</capital> 
            <valorCuota>10783.16</valorCuota> 
            <intereses>2349.48</intereses> 
            <tasa>30.000000</tasa> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <tasaEfectivaAnual>34.488882</tasaEfectivaAnual> 
            <tasaNominalAnual>30.000000</tasaNominalAnual> 
            <totalPrestamo>32349.48</totalPrestamo> 
            <fechaValor>2020-10-20</fechaValor> 
            <fechaVencimiento>2021-02-20</fechaVencimiento> 
            <fechaPrimerPago>2020-12-21</fechaPrimerPago> 
            <plazo>123</plazo> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2020-12-21</fechaPago> 
                  <importe>10783.16</importe> 
                  <redondeo>0.00</redondeo> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2021-01-21</fechaPago> 
                  <importe>10783.16</importe> 
                  <redondeo>0.00</redondeo> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2021-02-20</fechaPago> 
                  <importe>10783.16</importe> 
                  <redondeo>0.00</redondeo> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.SimularAmortizable</Servicio> 
            <Fecha>2019-10-18</Fecha> 
            <Hora>15:48:00</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>1319</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.SimularAmortizableResponse> 
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
          "operacionUId": "15", 
          "producto": { 
            "productoUId": "23", 
            "nombre": "HIPOTECARIOS VIVIENDA, VIVIENDA HIPOTECARIO", 
            "moneda": "Q", 
            "papel": "$" 
          }, 
          "capital": "30000.00", 
          "valorCuota": "10783.16", 
          "intereses": "2349.48", 
          "tasa": "30.000000", 
          "tasaEfectiva": "0.000000", 
          "tasaEfectivaAnual": "34.488882", 
          "tasaNominalAnual": "30.000000", 
          "totalPrestamo": "32349.48", 
          "fechaValor": "2020-10-20", 
          "fechaVencimiento": "2021-02-20", 
          "fechaPrimerPago": "2020-12-21", 
          "plazo": "123", 
          "cronograma": { 
            "sBTCuotaPrestamoAlta": [ 
              { 
                "fechaPago": "2020-12-21", 
                "importe": "10783.16", 
                "redondeo": "0.00" 
              }, 
              { 
                "fechaPago": "2021-01-21", 
                "importe": "10783.16", 
                "redondeo": "0.00" 
              }, 
              { 
                "fechaPago": "2021-02-20", 
                "importe": "10783.16", 
                "redondeo": "0.00" 
              } 
            ] 
          } 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.SimularAmortizable", 
          "Fecha": "2019-10-18", 
          "Hora": "15:48:00", 
          "Requerimiento": "95", 
          "Numero": "1319", 
          "Estado": "OK" 
        } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTSimulacionAmortizable | sBTSimulacionAmortizable | Datos de la simulación. 

Los campos del tipo de dato estructurado sBTSimulacionAmortizable son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
solicitudUId | Long | Identificador de instancia Workflow. 
clienteUId* | Long | Identificador único de cliente. 
productoUId* | Long | Identificador único de producto. 
fechaPrimerPago | Date | Fecha de primer pago. 
cantidadCuotas* | Int | Cantidad de cuotas. 
periodoCuotas | Int | Período entre vencimiento de cada cuota. 
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
30004 | No se recuperó la cuenta para el Identificador 

 
