# Simular Libre Amortización 

Método para simular el alta de un préstamo libre amortizacion para un crédito individual. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.SimularLibreAmortizacion | RBTPG423 | Global 

> Ejemplo de invocación al método Simular Libre Amortizacion: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.SimularLibreAmortizacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1001009404CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:sBTSimulacionLibreAmortizacion> 
            <bts:solicitudUId>11077</bts:solicitudUId> 
            <bts:clienteUId>3</bts:clienteUId> 
            <bts:productoUId>21</bts:productoUId> 
            <bts:cantidadCuotas>2</bts:cantidadCuotas> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:monto>10000</bts:monto> 
            <bts:pizarra></bts:pizarra> 
            <bts:tasa></bts:tasa> 
            <bts:destinoCredito>2</bts:destinoCredito> 
            <bts:cuotasCapital> 
            	<bts:sBTCuotaPrestamoAlta> 
                    <bts:fechaPago>2021-12-30</bts:fechaPago> 
                    <bts:importe>2000</bts:importe> 
                </bts:sBTCuotaPrestamoAlta> 
                <bts:sBTCuotaPrestamoAlta> 
                    <bts:fechaPago>2022-01-30</bts:fechaPago> 
                    <bts:importe>8000</bts:importe> 
                </bts:sBTCuotaPrestamoAlta> 
            </bts:cuotasCapital> 
            <bts:cuotasInteres/> 
         </bts:sBTSimulacionLibreAmortizacion> 
      </bts:BTMicrofinanzas.SimularLibreAmortizacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularLibreAmortizacion \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
-d '{   
    ":Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "95", 
        "Usuario": "INSTALADOR", 
        "Token": "1001009404CD285A89A23FBE", 
        "Device": "GP" 
        }, 
        "sBTSimulacionLibreAmortizacion": { 
        "solicitudUId": "11077", 
        "clienteUId": "3", 
        "productoUId": "21", 
        "cantidadCuotas": "2", 
        "periodoCuotas": "30", 
        "monto": "10000", 
        "destinoCredito": "2", 
        "cuotasCapital": { 
            "sBTCuotaPrestamoAlta": [ 
            { 
                "fechaPago": "2021-12-30", 
                "importe": "2000" 
            }, 
            { 
                "fechaPago": "2022-01-30", 
                "importe": "8000" 
            } 
            ] 
        } 
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
      <BTMicrofinanzas.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1001009404CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtSimulacion> 
            <operacionUId>21</operacionUId> 
            <producto> 
               <productoUId>21</productoUId> 
               <nombre>PRESTAMOS, CADENA DE VALOR CAFE DIF.</nombre> 
               <moneda>Q</moneda> 
               <papel>$</papel> 
            </producto> 
            <fechaValor>2021-11-30</fechaValor> 
            <fechaPrimerPago>2021-12-30</fechaPrimerPago> 
            <fechaVencimiento>2022-01-30</fechaVencimiento> 
            <capital>10000.00</capital> 
            <intereses>548.00</intereses> 
            <impuestos>0.00</impuestos> 
            <comisiones>385.00</comisiones> 
            <totalPrestamo>10000.00</totalPrestamo> 
            <plazo>0</plazo> 
            <tasa>36.000000</tasa> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <tasaEfectivaAnual>42.576089</tasaEfectivaAnual> 
            <tasaNominalAnual>36.000000</tasaNominalAnual> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2021-12-30</fechaPago> 
                  <tipoCuota>I</tipoCuota> 
                  <concepto/> 
                  <capital>300.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>300.00</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2021-12-30</fechaPago> 
                  <tipoCuota>K</tipoCuota> 
                  <concepto/> 
                  <capital>2000.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>2000.00</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2022-01-30</fechaPago> 
                  <tipoCuota>I</tipoCuota> 
                  <concepto/> 
                  <capital>248.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>248.00</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2022-01-30</fechaPago> 
                  <tipoCuota>K</tipoCuota> 
                  <concepto/> 
                  <capital>8000.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>8000.00</cuota> 
               </sBTCuotaSimulacion> 
            </cronograma> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.SimularLibreAmortizacion</Servicio> 
            <Fecha>2019-11-01</Fecha> 
            <Hora>11:36:49</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>1398</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.SimularLibreAmortizacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "95", 
      "Usuario": "INSTALADOR", 
      "Token": "1001009404CD285A89A23FBE", 
      "Device": "GP" 
      }, 
      "sdtSimulacion": { 
         "operacionUId": "21", 
         "producto": { 
            "productoUId": "21", 
            "nombre": "PRESTAMOS, CADENA DE VALOR CAFE DIF.", 
            "moneda": "Q", 
            "papel": "$" 
         }, 
         "fechaValor": "2021-11-30", 
         "fechaPrimerPago": "2021-12-30", 
         "fechaVencimiento": "2022-01-30", 
         "capital": "10000.00", 
         "intereses": "548.00", 
         "impuestos": "0.00", 
         "comisiones": "385.00", 
         "totalPrestamo": "10000.00", 
         "plazo": "0", 
         "tasa": "36.000000", 
         "tasaEfectiva": "0.000000", 
         "tasaEfectivaAnual": "42.576089", 
         "tasaNominalAnual": "36.000000", 
         "cronograma": { 
            "sBTCuotaSimulacion": [ 
               { 
               "fechaPago": "2021-12-30", 
               "tipoCuota": "I", 
               "capital": "300.00", 
               "intereses": "0.00", 
               "seguros": "0.00", 
               "impuestos": "0.00", 
               "otrosConceptos": "0.00", 
               "cuota": "300.00" 
               }, 
               { 
               "fechaPago": "2021-12-30", 
               "tipoCuota": "K", 
               "capital": "2000.00", 
               "intereses": "0.00", 
               "seguros": "0.00", 
               "impuestos": "0.00", 
               "otrosConceptos": "0.00", 
               "cuota": "2000.00" 
               }, 
               { 
               "fechaPago": "2022-01-30", 
               "tipoCuota": "I", 
               "capital": "248.00", 
               "intereses": "0.00", 
               "seguros": "0.00", 
               "impuestos": "0.00", 
               "otrosConceptos": "0.00", 
               "cuota": "248.00" 
               }, 
               { 
               "fechaPago": "2022-01-30", 
               "tipoCuota": "K", 
               "capital": "8000.00", 
               "intereses": "0.00", 
               "seguros": "0.00", 
               "impuestos": "0.00", 
               "otrosConceptos": "0.00", 
               "cuota": "8000.00" 
               } 
            ] 
         } 
      }, 
      "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.SimularLibreAmortizacion", 
      "Fecha": "2019-11-01", 
      "Hora": "11:36:49", 
      "Requerimiento": "95", 
      "Numero": "1398", 
      "Estado": "OK" 
      } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTSimulacionLibreAmortizacion | sBTSimulacionLibreAmortizacion | Datos de la simulación. 
generaCuotaInteres | Character | [Hidden: Valores 'S'/'N' Indica si se generan cuotas de intereses]. 

Los campos del tipo de dato estructurado sBTSimulacionLibreAmortizacion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
solicitudUId | Long | Identificador de instancia Workflow.  
clienteUId* | Long | Identificador único de cliente. 
productoUId* | Long | Identificador único de producto. 
cantidadCuotas | Long | Cantidad de cuotas del préstamo. 
periodoCuotas | Long | Período entre vencimiento de cada cuota. 
monto | Double | Capital solicitado. 
pizarra | Short | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
destinoCredito | Long | Código de actividad. 
cuotasCapital | sBTCuotaPrestamoAlta | Cuotas de capital. 
cuotasInteres | sBTCuotaPrestamoAlta | Cuotas de intereses. 

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago de la cuota. 
importe | Double | Importe de la cuota. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSimulacion | sBTSimulacionPrestamoLA | Datos del préstamo simulado. 

Los campos del tipo de dato estructurado sBTSimulacionPrestamoLA son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
producto | sBTProducto | Datos del producto. 
capital | Double | Capital del préstamo. 
intereses | Double | Intereses. 
tasa | Double | Tasa. 
tasaEfectiva | Double | Tasa efectiva. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total a pagar. 
fechaPrimerPago | Date | Fecha de primer pago. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
impuestos | Double | Impuestos. 
comisiones | Double | Comisiones. 
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
30001 | No se recibió el identificador de solicitud. 
30002 | No se recibió el identificador de cliente. 
30003 | No se recibió el identificadorde producto. 
30004 | No se recuperó la cuenta pra el identificador. 
30005 | Debe ingresar el monto del préstamo. 
30006 | No se recibió la lista de cuotas de capital. 
30007 | NO se recibió la lista de cuotas de interes. 

 
